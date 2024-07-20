import React, { useEffect, useState } from 'react';
import Navigation from "../../components/organismos/Navigation"
import NavigationLink from "./NavigationLink"


import {
  UsersIcon,
} from "@heroicons/react/24/outline"
import LineChartExample from '../../components/organismos/CardStats';
import io from 'socket.io-client';
import axios from 'axios';

const socket = io(process.env.SOCKET_URL,{
  transports: ['websocket', 'polling', 'flashsocket']
  
});
function valueFormatter(number) {
  return number.toFixed(2);
}
const App = () => {
  const [data,setData]=useState([])
  useEffect(()=>{
    const storedToken = sessionStorage.getItem('token');
    if (storedToken) {
      getData(storedToken);
    } else {
      console.error('Token not found');
    }
    socket.on('connect', () => {
      console.log('Connected to socket server');
    });
    socket.on("meditions",(message)=>{
      const result=JSON.parse(message)
      const {median, mode, mean, std}=result.data["modulo de sensor de corriente Acs712"]
      handleupdate(median,mode,mean,std)


    })
    return () => {
      socket.off('connect');
      socket.off("meditions")
   
    };
     
  },[])
  const getData=async(token)=>{
    try{
      const res = await axios.get(`${process.env.API}api/statistics/metricts`, {
        headers: {
          Authorization: token,
        },
      });
      console.log(res.data)
     const {median, mode, mean, std}=res.data.data["modulo de sensor de corriente Acs712"]
     handleupdate(median,mode,mean,std)

    



    }catch(e){
      console.log(e.message);
    }

  }
  const handleupdate=(median, mode, mean, std)=>{
    let datainfo=[
      {name:"mediana",stat:valueFormatter(median)},
      {name:"moda",stat:valueFormatter(mode)},
      {name:"media",stat:valueFormatter(mean)},
      {name:"Desviacion estandar",stat:valueFormatter(std)}


    ]
    setData(datainfo)

   
  }
  return (
    <main className="w-full h-screen flex flex-row relative">
      <Navigation />
      <section className="flex flex-col p-6 ml-20 w-full gap-4">
        {/* Barra superior fija */}
        <div className="flex items-center justify-between rounded-xl border border-[#4e4d4d] bg-[#15111d] p-3">
          <h1 className=" text-4xl ml-4 text-neutral-200  bg-clip-text text-transparent bg-white">
            Graficas
          </h1>
          <NavigationLink to="/" name="users">
            <UsersIcon className="stroke-inherit stroke-[0.75] min-w-8 w-8" />
          </NavigationLink>
        </div>

        {/* Nuevo div padre con dos divs hijos */}
        <div className="flex w-full h-full  border  border-[#4e4d4d] rounded-xl px-5 pb-8 mb-3  bg-[#15111d]">
          {/* Div izquierdo para texto */}
          <div className="w-2/6 p-4 flex flex-col ml-10 mt-6 bg-[#49da55]"> {/* Div izquierdo contenedor completo*/}
            <div className='p-2 bg-[#29562c]'> {/* contenedor individual */}
              <h2 className="text-xl font-semibold">Metricas</h2>
              <p>Sobre el funcionamiento de la corriente</p>
            </div>
            <div className='p-2 bg-[#117219]'>
              <h2 className="text-xl font-semibold">Mediana</h2>
              <p>{data.length>0?data[0].stat:"cargando...."}</p> 
            </div>
            <div className='p-2 bg-[#106517]'>
              <h2 className="text-xl font-semibold">Moda</h2>
              <p>{data.length>0?data[1].stat:"cargando...."}</p>
            </div>
            <div className='p-2 bg-[#0e6015]'>
              <h2 className="text-xl font-semibold">media</h2>
              <p>{data.length>0?data[2].stat:"cargando...."}</p>
            </div>
            <div className='p-2 bg-[#0e6315]'>
              <h2 className="text-xl font-semibold">Desviacion Estandar</h2>
              <p>{data.length>0?data[3].stat:"cargando...."}</p>
            </div>
         

          </div>
          {/* Div derecho para CardStats */}
          <div className="w-4/6 p-4  flex justify-center items-center">
            <div className="w-4/5 ">
              <LineChartExample className="h-full p-4 " />
            </div>
          </div>
        </div>


      </section>
    </main>
  )
}

export default App;
