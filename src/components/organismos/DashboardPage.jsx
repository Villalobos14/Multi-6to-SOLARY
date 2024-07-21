// src/App.jsx
import React, { useEffect, useState } from 'react';
import Navigation from "../../components/organismos/Navigation";
import BarChart from "../../components/organismos/BarChart";
import KpiCard from "../../components/organismos/KpiCard";
import ScatterChart from "../../components/organismos/mui";
import UserModal from "../../components/organismos/UserModal"; 
import { Badge } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { io } from 'socket.io-client';
const socket = io(process.env.SOCKET_URL,{
  transports: ['websocket', 'polling', 'flashsocket']
  
});



const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [data,setData]=useState(0)

  const handleUserIconClick = () => {
    setData(0)
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  useEffect(()=>{
    socket.on('connect', () => {
      
     
    });
    socket.on("anomalies",(message)=>{
      setData(x=>x+1)
      message=JSON.parse(message)
      console.log(message)
      
    })
    return () => {
      socket.off('connect');
      socket.off("anomalies")
      
   
    };

  },[])

  return (
    <main className="w-full h-full flex flex-row relative display-block">
      <Navigation />
      <section className="flex flex-col px-6 pb-6 pt-3 ml-20 w-full gap-4">
        <div className='gap-2 h-full space-y-4 p-4 rounded-xl'>
          <div className="flex items-center justify-between rounded-xl border border-[#4e4d4d] bg-[#15111d] p-3">
            <h1 className="text-4xl ml-4 text-neutral-200 bg-clip-text text-transparent bg-white">
              Estadística
            </h1>
            <button onClick={handleUserIconClick} className="text-white pr-3">
              <Badge color="secondary" badgeContent={data}>
                <NotificationsIcon />
              </Badge>
            </button>
          </div>
          <div>
            <KpiCard />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 border border-[#4e4d4d] rounded-xl px-5 pb-10 bg-[#15111d]">
            <div className="md:col-span-1 mt-20 h-48">
              <div className='w-'>
                <div className='ml-10 '>

                <ScatterChart width={400} height={400} data={data}  />
                </div>
                <div className='bg-gray-800 p-8 rounded-lg'>
                <div className='ml-48  font-semibold'>
                  <p>
                    Valores de los ejes
                  </p>
                </div>
                <div>

                  <p className='ml-20'>
                    X - Valores de x cosa ------    Y - Valores de y cosa
                  </p>
                    
                  </div>
                  </div>
              </div>
            </div>
            <div className="md:col-span-1 pt-16 pb-6 px-2">
              <div className="w-full h-90">
                <BarChart />
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
