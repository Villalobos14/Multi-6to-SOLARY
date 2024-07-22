import React, { useEffect, useState } from 'react';
import Navigation from "../../components/organismos/Navigation";
import LineChartExample from '../../components/organismos/CardStats';
import io from 'socket.io-client';
import axios from 'axios';
import { Badge } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import UserModal from "../../components/organismos/UserModal";
import FunctionsIcon from '@mui/icons-material/Functions';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import AssessmentIcon from '@mui/icons-material/Assessment';

const socket = io(process.env.SOCKET_URL, {
  transports: ['websocket', 'polling', 'flashsocket']
});

function valueFormatter(number) {
  return number.toFixed(2);
}

const App = () => {
  const [data, setData] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [notificationCount, setNotificationCount] = useState(0);

  const handleUserIconClick = () => {
    setNotificationCount(0);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    const storedToken = sessionStorage.getItem('token');
    if (storedToken) {
      getData(storedToken);
    } else {
      console.error('Token not found');
    }

    socket.on('connect', () => {
      console.log('Connected to socket server');
    });

    socket.on("meditions", (message) => {
      const result = JSON.parse(message);
      const { median, mode, mean, std } = result.data["modulo de sensor de corriente Acs712"];
      handleupdate(median, mode, mean, std);
    });

    socket.on("anomalies", (message) => {
      setNotificationCount(prev => prev + 1);
      console.log(JSON.parse(message));
    });

    return () => {
      socket.off('connect');
      socket.off("meditions");
      socket.off("anomalies");
    };
  }, []);

  const getData = async (token) => {
    try {
      const res = await axios.get(`${process.env.API}api/statistics/metricts`, {
        headers: {
          Authorization: token,
        },
      });
      const { median, mode, mean, std } = res.data.data["modulo de sensor de corriente Acs712"];
      handleupdate(median, mode, mean, std);
    } catch (e) {
      console.log(e.message);
    }
  };

  const handleupdate = (median, mode, mean, std) => {
    let datainfo = [
      { name: "Mediana", stat: valueFormatter(median), icon: <FunctionsIcon /> },
      { name: "Moda", stat: valueFormatter(mode), icon: <FunctionsIcon /> },
      { name: "Media", stat: valueFormatter(mean), icon: <EqualizerIcon /> },
      { name: "Desviación Estándar", stat: valueFormatter(std), icon: <AssessmentIcon /> }
    ];
    setData(datainfo);
  };

  return (
    <main className="w-full h-screen flex flex-row relative">
      <Navigation />
      <section className="flex flex-col p-6 ml-20 w-full gap-4">
        {/* Barra superior fija */}
        <div className="flex items-center justify-between rounded-xl border border-[#4e4d4d] bg-[#15111d] p-3">
          <h1 className="text-4xl ml-12 text-neutral-200 bg-clip-text text-transparent bg-white">
            GENERAL
          </h1>
          <div className="flex items-center">
            <button onClick={handleUserIconClick} className="text-white pr-3">
              <Badge color="secondary" badgeContent={notificationCount}>
                <NotificationsIcon />
              </Badge>
            </button>
          </div>
        </div>

        {/* Nuevo div padre con dos divs hijos */}
        <div className="flex w-full h-full border border-[#4e4d4d] rounded-xl px-1 py-2 mb-3 bg-[#15111d]">
          {/* Div izquierdo para texto */}
          <div className="w-2/6 p-4 flex flex-col ml-10 mt-5  mb-4   border  rounded-lg">
            <div className='p-7 bg-[#292431] mb-4 rounded flex items-center justify-between'>
              <div className=''>
                <h2 className="text-2xl font-bold text-white mb-2">Métricas</h2>
                <p className="text-gray-400">Análisis de las métricas de corriente para una visión clara del rendimiento.</p>
              </div>
              <FunctionsIcon className="text-white ml-4" />
            </div>
            <div className='p-4 bg-[#34303a] mb-4 rounded flex items-center justify-between'>
              <div>
                <h3 className="text-xl font-semibold text-white">Mediana</h3>
                <p className="text-gray-400">{data.length > 0 ? data[0].stat : "cargando...."}</p>
              </div>
              <FunctionsIcon className="text-white ml-4" />
            </div>
            <div className='p-4 bg-[#3f3b44] mb-4 rounded flex items-center justify-between'>
              <div>
                <h3 className="text-xl font-semibold text-white">Moda</h3>
                <p className="text-gray-400">{data.length > 0 ? data[1].stat : "cargando...."}</p>
              </div>
              <FunctionsIcon className="text-white ml-4" />
            </div>
            <div className='p-4 bg-[#4a464d] mb-4 rounded flex items-center justify-between'>
              <div>
                <h3 className="text-xl font-semibold text-white">Media</h3>
                <p className="text-gray-400">{data.length > 0 ? data[2].stat : "cargando...."}</p>
              </div>
              <EqualizerIcon className="text-white ml-4" />
            </div>
            <div className='p-4 bg-[#555055] rounded flex items-center justify-between'>
              <div>
                <h3 className="text-xl font-semibold text-white">Desviación Estándar</h3>
                <p className="text-gray-400">{data.length > 0 ? data[3].stat : "cargando...."}</p>
              </div>
              <AssessmentIcon className="text-white ml-4" />
            </div>
          </div>

          {/* Div derecho para CardStats */}
          <div className="w-4/6 p-4 flex flex-col justify-center items-center gap-4 mt-2">
            <div className="w-4/5">
              <LineChartExample className="h-full p-4" />
            </div>
            <div className="w-4/5 h-full px-5 flex flex-col justify-center items-center py-4 border rounded-lg bg-[#1f1b24]">
              <p className="text-white text-lg font-semibold text-center mb-2">
                Nomenclatura <br />
                EJE X - FECHA / EJE Y - MEDIA
              </p>
              <p className="text-gray-400 text-sm text-center">
                Esta gráfica muestra la media mensual por sensor, proporcionando una visión detallada de las tendencias a lo largo del tiempo.
              </p>
            </div>


          </div>
        </div>
      </section>
      <UserModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </main>
  );
}

export default App;
