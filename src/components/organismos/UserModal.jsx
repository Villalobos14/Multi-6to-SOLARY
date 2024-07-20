import React, { useEffect, useState } from 'react';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionList,
} from '@tremor/react';
import axios from 'axios';



const UserModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  const [data,setData]=useState([])

  useEffect(()=>{
    const storedToken = sessionStorage.getItem('token');
    if (storedToken) {
      getData(storedToken);
    } else {
      console.error('Token not found');
    }
  

    
    
     
  },[])
  const getData=async(token)=>{
    try{
      const res = await axios.get(`${process.env.API}api/anomaly`, {
        headers: {
          Authorization: token,
        },
      });
     
     
     setData(res.data.reverse())
   
    


    }catch(e){
      console.log(e.message);
    }

  }

  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Datos de ejemplo
  // const data = {
  //   total: 53,
  //   data: [
  //     {
  //       sensorData: {
  //         valor: 24.09,
  //         nameSensor: "Hubo un problema con el Sensor",
  //         createdAt: "2024-07-13T08:00:08.962Z",
  //         codeOfProduct: "123derg4ff4r4r",
  //         sensorId: 1
  //       }
  //     },
  //     {
  //       sensorData: {
  //         valor: 24.09,
  //         nameSensor: "Hubo un problema con el Sensor",
  //         createdAt: "2024-07-13T08:00:08.962Z",
  //         codeOfProduct: "123derg4ff4r4r",
  //         sensorId: 1
  //       }
  //     },
  //     {
  //       sensorData: {
  //         valor: 24.09,
  //         nameSensor: "Hubo un problema con el Sensor",
  //         createdAt: "2024-07-13T08:00:08.962Z",
  //         codeOfProduct: "123derg4ff4r4r",
  //         sensorId: 1
  //       }
  //     },
  //     {
  //       sensorData: {
  //         valor: 24.09,
  //         nameSensor: "Hubo un problema con el Sensor",
  //         createdAt: "2024-07-13T08:00:08.962Z",
  //         codeOfProduct: "123derg4ff4r4r",
  //         sensorId: 1
  //       }
  //     },
  //     {
  //       sensorData: {
  //         valor: 24.09,
  //         nameSensor: "Hubo un problema con el Sensor",
  //         createdAt: "2024-07-13T08:00:08.962Z",
  //         codeOfProduct: "123derg4ff4r4r",
  //         sensorId: 1
  //       }
  //     },
  //     {
  //       sensorData: {
  //         valor: 24.09,
  //         nameSensor: "Hubo un problema con el Sensor",
  //         createdAt: "2024-07-13T08:00:08.962Z",
  //         codeOfProduct: "123derg4ff4r4r",
  //         sensorId: 1
  //       }
  //     },
  //     {
  //       sensorData: {
  //         valor: 24.09,
  //         nameSensor: "Hubo un problema con el Sensor",
  //         createdAt: "2024-07-13T08:00:08.962Z",
  //         codeOfProduct: "123derg4ff4r4r",
  //         sensorId: 1
  //       }
  //     },
  //     {
  //       sensorData: {
  //         valor: 24.09,
  //         nameSensor: "Hubo un problema con el Sensor",
  //         createdAt: "2024-07-13T08:00:08.962Z",
  //         codeOfProduct: "123derg4ff4r4r",
  //         sensorId: 1
  //       }
  //     },
  //     {
  //       sensorData: {
  //         valor: 24.09,
  //         nameSensor: "Hubo un problema con el Sensor",
  //         createdAt: "2024-07-13T08:00:08.962Z",
  //         codeOfProduct: "123derg4ff4r4r",
  //         sensorId: 1
  //       }
  //     },
  //     // ... otros datos aquí
  //   ]
  // };
 

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-end items-start z-50"
      onClick={handleBackgroundClick}
    >
      {data ? <div className="bg-transparent rounded-lg p-6 w-auto h-2/4 overflow-y-auto relative mt-14 mr-8 ">
        <div className="max-h-[15rem] overflow-y-auto rounded-lg">
          <AccordionList className="mx-auto max-w-md">
            {data.map((item, index) => (
              <Accordion key={index}>
                <AccordionHeader className="text-sm font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
                  {item.sensorData.nameSensor}
                </AccordionHeader>
                <AccordionBody className="leading-6">
                  <p>Valor: {item.sensorData.valor}</p>
                  <p>Fecha: {new Date(item.sensorData.createdAt).toLocaleString()}</p>
                </AccordionBody>
              </Accordion>
            ))}
          </AccordionList>
        </div>
      </div>:<p>cargando ...</p>}
    </div>
  );
};

export default UserModal;
