import React, { useEffect, useState } from 'react';
import Navigation from "../../components/organismos/Navigation";
import NavigationLink from "./NavigationLink";
import { Card } from '@tremor/react';
import { Skeleton } from '@mui/material';
import { io } from 'socket.io-client';
import axios from 'axios';
import { Badge } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import UserModal from "../../components/organismos/UserModal";

const socket = io(process.env.SOCKET_URL, {
  transports: ['websocket', 'polling', 'flashsocket']
});

const imageUrls = [
  "circuitos.avif",
  "temperatura.avif",
  "atardecer.avif",
  "rayo.avif",
];

const App = () => {
  const [data, setData] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [notificationCount, setNotificationCount] = useState(0);
  const [loading, setLoading] = useState(true);

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
      console.log(responses[0].data.data);

      const alldata = [
        { name: "Voltaje", data: responses[0].data.data },
        { name: "Temperatura", data: responses[1].data.data },
        { name: "Luz", data: responses[2].data.data },
        { name: "Corriente", data: responses[3].data.data }
      ];
      
      setData(alldata);
      setLoading(false);
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
        <div className="flex items-center justify-between rounded-xl border border-[#4e4d4d] bg-[#15111d] p-3">
          <h1 className="text-4xl ml-8 text-neutral-200 bg-clip-text text-transparent bg-white">
            PROBABILIDADES
          </h1>
          <button onClick={handleUserIconClick} className="text-white pr-3">
            <Badge color="secondary" badgeContent={notificationCount}>
              <NotificationsIcon />
            </Badge>
          </button>
        </div>
        <div className='flex w-full h-full border border-[#4e4d4d] rounded-xl px-5 mb-3 bg-[#15111d]'>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-x-4 gap-y-2 w-full p-4">
            {loading ? (
              Array.from({ length: 4 }).map((_, index) => (
                <Card key={index} className="w-full bg-opacity-5 backdrop-blur-lg rounded-xl ">
                  <Skeleton variant="rectangular" width="100%" height={120} />
                  <div className="p-4">
                    <Skeleton variant="text" width="80%" height={30} />
                    <Skeleton variant="text" width="60%" height={40} style={{ marginTop: 16 }} />
                  </div>
                </Card>
              ))
            ) : (
              data.map((item, index) => (
                <Card key={item.name} className="w-full bg-opacity-5 backdrop-blur-lg rounded-xl px-5 py-2">
                  <img src={imageUrls[index % imageUrls.length]} alt={item.name} className="w-full h-32 object-cover rounded-xl mb-6" />
                  <div className="flex flex-col items-start justify-between space-y-2">
                    <h2 className="text-xl font-bold text-white">
                      {item.name}
                    </h2>
                    <div className="text-lg font-semibold text-gray-200">
                      <p>Probabilidad de Falla: {item.data.porcentaje_out_of_range
                      }%</p>
                    </div>
                    <div className="text-base font-medium text-gray-300">
                      <p>Media: {item.data.mean}</p>
                      <p>Desviación Estándar: {item.data.std_dev}</p>
                    </div>
                  </div>
                </Card>
              ))
            )}
          </div>
        </div>
      </section>
      <UserModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </main>
  );
};

export default App;
