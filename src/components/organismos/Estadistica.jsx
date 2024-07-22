import React, { useEffect, useState } from 'react';
import Navigation from "../../components/organismos/Navigation";
import BarChart from "../../components/organismos/BarChart";
import KpiCard from "../../components/organismos/KpiCard";
import ScatterChart from "../../components/organismos/mui";
import UserModal from "../../components/organismos/UserModal";
import { Badge } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EstatsBarChart from "../../components/organismos/EstatsBarChart";
import { io } from 'socket.io-client';

const socket = io(process.env.SOCKET_URL, {
  transports: ['websocket', 'polling', 'flashsocket']
});

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [data, setData] = useState(0);

  const handleUserIconClick = () => {
    setData(0);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    socket.on('connect', () => { });

    socket.on("anomalies", (message) => {
      setData(prevData => prevData + 1);
      message = JSON.parse(message);
      console.log(message);
    });

    return () => {
      socket.off('connect');
      socket.off("anomalies");
    };
  }, []);

  return (
    <main className="w-full h-screen flex">
      <Navigation />
      <section className="flex flex-col w-full p-6 ml-20 gap-4">
        <div className="flex items-center justify-between rounded-xl border border-[#4e4d4d] bg-[#15111d] p-3">
          <h1 className="text-4xl ml-4 text-neutral-200 bg-clip-text text-transparent bg-white">
            ESTADISTICAS DE VOLTAJE
          </h1>
          <button onClick={handleUserIconClick} className="text-white pr-3">
            <Badge color="secondary" badgeContent={data}>
              <NotificationsIcon />
            </Badge>
          </button>
        </div>

        <div className="flex flex-1 gap-5 border border-[#4e4d4d] rounded-xl p-5 bg-[#15111d] mb-3">

          <div className="flex flex-col w-1/2 h-full ">
            <div className=" h-full rounded-xl px-5 py-4 bg-[#1e1b2a] flex flex-col items-center">
              <span className="text-white text-3xl font-semibold ">TU PANEL SOLAR</span>
              <img src="panel.png" alt="Panel Solar" className="w-1/2 rounded-xl mb-2 mt-10" />
              <div className="flex flex-col gap-2 w-full">
                <div className='py-4 bg-gray-800  rounded-lg mt-10 px-6'>
                  <h2 className="text-xl font-semibold text-white">Cuidado y Funcionamiento</h2>
                  <p className="text-gray-300">Para asegurar un rendimiento óptimo del panel solar, mantenlo limpio y libre de obstrucciones. Verifica periódicamente las conexiones y el estado general del sistema.</p>
                </div>

              </div>
            </div>
          </div>

          <div className="flex flex-col w-1/2 h-full mt-6">
            <div className="flex-1 rounded-xl">
              <EstatsBarChart />
            </div>
            <div className='bg-gray-800  rounded-lg mb-7 flex flex-col p-6 '>
              <div className=' font-semibold text-white'>
                <p className="text-xl">Ten en cuenta que:</p>
              </div>
              <div className="text-gray-300 ">
                <p className="mt-4">Estos valores te permiten analizar el comportamiento de la luminosidad en relación con el tiempo y la frecuencia de las mediciones.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <UserModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </main>
  );
};

export default App;
