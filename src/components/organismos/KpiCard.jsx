'use client';
import { Card } from '@tremor/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { Skeleton } from '@mui/material';
import { Bolt, Speed, ShowChart } from '@mui/icons-material'; // Importación de íconos

const socket = io(process.env.SOCKET_URL, {
  transports: ['websocket', 'polling', 'flashsocket']
});

function valueFormatter(number) {
  return number.toFixed(2);
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function getTextColor(name) {
  switch (name) {
    case "mediana del Voltaje":
      return "text-[#9B51E0]"; // morado
    case "media del Voltaje":
      return "text-[#56CCF2]"; // azul claro
    case "Desviacion estandar del Voltaje":
      return "text-[#F2994A]"; // naranja
    default:
      return "text-tremor-content dark:text-dark-tremor-content";
  }
}

function getIcon(name) {
  switch (name) {
    case "mediana del Voltaje":
      return <Bolt className="text-[#9B51E0] w-12 h-12" />; 
    case "media del Voltaje":
      return <Speed className="text-[#56CCF2] w-12 h-12" />; 
    case "Desviacion estandar del Voltaje":
      return <ShowChart className="text-[#F2994A] w-12 h-12" />; 
    default:
      return null;
  }
}

export default function Example() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedToken = sessionStorage.getItem('token');
    if (storedToken) {
      getData(storedToken);
    } else {
      console.error('Token not found');
      setLoading(false);
    }

    socket.on('connect', () => {
      console.log('Connected to socket server');
    });

    socket.on("meditions", (message) => {
      const result = JSON.parse(message);
      const { median, mode, mean, std } = result.data["sensor de voltaje Ac Zmpt101b"];
      handleupdate(median, mode, mean, std);
    });

    return () => {
      socket.off('connect');
      socket.off("meditions");
    };
  }, []);

  const getData = async (token) => {
    try {
      const res = await axios.get(`${process.env.API}api/statistics/metricts`, {
        headers: {
          Authorization: token,
        },
      });

      const { median, mode, mean, std } = res.data.data["sensor de voltaje Ac Zmpt101b"];
      handleupdate(median, mode, mean, std);
    } catch (e) {
      console.log(e.message);
    }
  };

  const handleupdate = (median, mean, std) => {
    let datainfo = [
      { name: "mediana del Voltaje", stat: valueFormatter(median) },
      { name: "media del Voltaje", stat: valueFormatter(mean) },
      { name: "Desviacion estandar del Voltaje", stat: valueFormatter(std) }
    ];
    setData(datainfo);
    setLoading(false);
  };

  return (
    <div className="dark">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
        {loading ? (
          Array.from({ length: 3 }).map((_, index) => (
            <Card key={index} className="p-4">
              <Skeleton variant="text" width="80%" height={30} />
              <Skeleton variant="text" width="60%" height={40} style={{ marginTop: 16 }} />
            </Card>
          ))
        ) : (
          data.map((item) => (
            <Card key={item.name} className="p-4 ">
              <div className="flex items-center justify-between">
                <p className={classNames("text-tremor-default font-medium", getTextColor(item.name))}>
                  {item.name}
                </p>
                {getIcon(item.name)}
              </div>
              <p className="text-tremor-metric font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
                {item.stat}
              </p>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
