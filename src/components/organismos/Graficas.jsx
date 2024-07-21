import React, { useEffect, useState } from 'react';
import Navigation from "../../components/organismos/Navigation";
import NavigationLink from "./NavigationLink";
import { UsersIcon } from "@heroicons/react/24/outline";
import LineChartExample from '../../components/organismos/CardStats';
import io from 'socket.io-client';
import axios from 'axios';
import { Badge } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import UserModal from "../../components/organismos/UserModal";

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
      { name: "Mediana", stat: valueFormatter(median) },
      { name: "Moda", stat: valueFormatter(mode) },
      { name: "Media", stat: valueFormatter(mean) },
      { name: "Desviación Estándar", stat: valueFormatter(std) }
    ];
    setData(datainfo);
  };

  return (
    <main className="w-full h-screen flex flex-row relative">
      <Navigation />
      <section className="flex flex-col p-6 ml-20 w-full gap-4">
        {/* Barra superior fija */}
        <div className="flex items-center justify-between rounded-xl border border-[#4e4d4d] bg-[#15111d] p-3">
          <h1 className="text-4xl ml-4 text-neutral-200 bg-clip-text text-transparent bg-white">
            Graficas
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
        <div className="flex w-full h-full border border-[#4e4d4d] rounded-xl px-5 pb-8 mb-3 bg-[#15111d]">
          {/* Div izquierdo para texto */}
          <div className="w-3/6 p-4 flex flex-col ml-10 mt-6 bg-[#1f1b24] border rounded-lg">
            <div className='p-4 bg-[#292431] mb-4 rounded'>
              <h2 className="text-2xl font-bold text-white mb-2">Métricas</h2>
              <p className="text-gray-400">Sobre el funcionamiento de la corriente</p>
            </div>
            <div className='p-4 bg-[#34303a] mb-4 rounded'>
              <h3 className="text-xl font-semibold text-white">Mediana</h3>
              <p className="text-gray-400">{data.length > 0 ? data[0].stat : "cargando...."}</p>
            </div>
            <div className='p-4 bg-[#3f3b44] mb-4 rounded'>
              <h3 className="text-xl font-semibold text-white">Moda</h3>
              <p className="text-gray-400">{data.length > 0 ? data[1].stat : "cargando...."}</p>
            </div>
            <div className='p-4 bg-[#4a464d] mb-4 rounded'>
              <h3 className="text-xl font-semibold text-white">Media</h3>
              <p className="text-gray-400">{data.length > 0 ? data[2].stat : "cargando...."}</p>
            </div>
            <div className='p-4 bg-[#555055] rounded'>
              <h3 className="text-xl font-semibold text-white">Desviación Estándar</h3>
              <p className="text-gray-400">{data.length > 0 ? data[3].stat : "cargando...."}</p>
            </div>
          </div>

          {/* Div derecho para CardStats */}
          <div className="w-4/6 p-4 flex flex-col justify-center items-center gap-4">
            <div className="w-4/5">
              <LineChartExample className="h-full p-4" />
            </div>
            <div className="w-4/5 h-full px-5 flex flex-col py-4 border rounded bg-[#1f1b24]">
              <p className="text-white">Hola</p>
            </div>
          </div>
        </div>
      </section>
      <UserModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </main>
  );
}

export default App;
