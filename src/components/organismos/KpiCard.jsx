// 'use client';
import { Card } from '@tremor/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io(process.env.SOCKET_URL,{
  transports: ['websocket', 'polling', 'flashsocket']
  
});
function valueFormatter(number) {
  return number.toFixed(2);
}
function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}


export default function Example() {
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
      const {median, mode, mean, std}=result.data["sensor de voltaje Ac Zmpt101b"]
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
      
     const {median, mode, mean, std}=res.data.data["sensor de voltaje Ac Zmpt101b"]
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
      // {name:"Desviacion estandar",stat:valueFormatter(std)}


    ]
    setData(datainfo)

   
  }
  
  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
        {data.map((item) => (
          <Card key={item.name}>
            <div className="flex items-center justify-between ">
              <p className="text-tremor-default font-medium text-tremor-content dark:text-dark-tremor-content  ">
                {item.name}
              </p>
              {/* <span
                className={classNames(
                  item.changeType === 'positive'
                    ? 'bg-amber-100 text-amber-800 ring-emerald-600/10 dark:bg-emerald-400/10 dark:text-amber-500 dark:ring-emerald-400/20'
                    : 'bg-red-100 text-red-800 ring-red-600/10 dark:bg-red-400/10 dark:text-purple-500 dark:ring-purple-400/20',
                  'inline-flex items-center rounded-tremor-small px-2 py-1 text-tremor-label font-medium ring-1 ring-inset',
                )}
              >
                {item.change}
              </span> */}
            </div>
            <p className="text-tremor-metric font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
              {item.stat}
            </p>
          </Card>
        ))}
      </div>
    </>
  );
}