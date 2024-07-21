'use client';
import { Card, Title } from '@tremor/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { Skeleton } from '@mui/material';

const socket = io(process.env.SOCKET_URL, {
  transports: ['websocket', 'polling', 'flashsocket']
});

function valueFormatter(number) {
  return number.toFixed(2);
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // Estado de carga

  useEffect(() => {
    const storedToken = sessionStorage.getItem('token');
    if (storedToken) {
      getData(storedToken);
    } else {
      console.error('Token not found');
      setLoading(false); // Cambia el estado incluso si el token no se encuentra
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

  const handleupdate = (median, mode, mean, std) => {
    let datainfo = [
      { name: "mediana del Voltaje", stat: valueFormatter(median) },
      // { name: "moda", stat: valueFormatter(mode) },
      { name: "media del Voltaje", stat: valueFormatter(mean) },
      { name: "Desviacion estandar del Voltaje", stat: valueFormatter(std) }
    ];
    setData(datainfo);
    setLoading(false); // Datos cargados, cambia el estado
  };

  return (
    <div className="dark">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {loading ? (
          Array.from({ length: 3 }).map((_, index) => (
            <Card key={index} className="p-4">
              <Skeleton variant="text" width="80%" height={30} />
              <Skeleton variant="text" width="60%" height={40} style={{ marginTop: 16 }} />
            </Card>
          ))
        ) : (
          data.map((item) => (
            <Card key={item.name} className="p-4">
              <div className="flex items-center justify-between">
                <p className="text-tremor-default font-medium text-tremor-content dark:text-dark-tremor-content">
                  {item.name}
                </p>
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
