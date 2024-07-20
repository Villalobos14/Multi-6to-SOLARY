import React, { useEffect, useState } from 'react';
import Navigation from "../../components/organismos/Navigation";
import NavigationLink from "./NavigationLink";
import { Card } from '@tremor/react';
import {
  UsersIcon,
} from "@heroicons/react/24/outline";
import { io } from 'socket.io-client';
import axios from 'axios';
import { Badge } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import UserModal from "../../components/organismos/UserModal"; 

const socket = io(process.env.SOCKET_URL, {
  transports: ['websocket', 'polling', 'flashsocket']
});

const App = () => {
  const [data, setData] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [notificationCount, setNotificationCount] = useState(0);

  const fetchData = async () => {
    try {
      const responses = await Promise.all([
        axios.get(`${process.env.API}api/probability/sensor_probability?sensorId=3&thread=100`, {
          headers: { 'Content-Type': 'application/json', 'Authorization': sessionStorage.getItem('token') }
        }),
        axios.get(`${process.env.API}api/probability/sensor_probability?sensorId=1&thread=55`, {
          headers: { 'Content-Type': 'application/json', 'Authorization': sessionStorage.getItem('token') }
        }),
        axios.get(`${process.env.API}api/probability/sensor_probability?sensorId=2&thread=1000`, {
          headers: { 'Content-Type': 'application/json', 'Authorization': sessionStorage.getItem('token') }
        }),
        axios.get(`${process.env.API}api/probability/sensor_probability?sensorId=4&thread=11`, {
          headers: { 'Content-Type': 'application/json', 'Authorization': sessionStorage.getItem('token') }
        })
      ]);

      const alldata = [
        { name: "Humedad", data: responses[0].data.data },
        { name: "Temperatura", data: responses[1].data.data },
        { name: "Luz", data: responses[2].data.data },
        { name: "Corriente", data: responses[3].data.data }
      ];
      
      setData(alldata);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleUserIconClick = () => {
    setNotificationCount(0);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    socket.on('connect', () => {
      console.log("connected");
    });
    socket.on("probabilitysensor", (newData) => {
      console.log(newData);
      setNotificationCount(prevCount => prevCount + 1);
    });
    fetchData();
    const interval = setInterval(() => fetchData(), 300000);

    return () => {
      socket.off('connect');
      socket.off("probabilitysensor");
      clearInterval(interval);
    };
  }, []);

  return (
    <main className="w-full h-screen flex flex-row relative">
      <Navigation />
      <section className="flex flex-col p-6 ml-20 w-full gap-4">
        {/* Barra superior fija */}
        <div className="flex items-center justify-between rounded-xl border border-[#4e4d4d] bg-[#15111d] p-3">
          <h1 className="text-4xl ml-4 text-neutral-200 bg-clip-text text-transparent bg-white">
            Reporte
          </h1>
          <button onClick={handleUserIconClick} className="text-white pr-3">
            <Badge color="secondary" badgeContent={notificationCount}>
              <NotificationsIcon />
            </Badge>
          </button>
        </div>
        <div className='flex w-full h-full border border-[#4e4d4d] rounded-xl px-5 mb-3 bg-[#15111d]'>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full p-6">
            {data.map((item) => (
              <Card key={item.name} className="w-full bg-opacity-5 backdrop-blur-lg rounded-xl p-2">
                <img src="panel.png" alt="Random" className="w-full h-32 object-cover rounded-xl mb-4" />
                <div className="flex flex-col items-start justify-between space-y-2">
                  <h2 className="text-xl font-bold text-white">
                    {item.name}
                  </h2>
                  <div className="text-lg font-semibold text-gray-200">
                    <p>Probabilidad de Falla: {item.data.porcentaje}%</p>
                  </div>
                  <div className="text-base font-medium text-gray-300">
                    <p>Media: {item.data.mean}</p>
                    <p>Desviación Estándar: {item.data.std_dev}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <UserModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </main>
  );
};

export default App;
