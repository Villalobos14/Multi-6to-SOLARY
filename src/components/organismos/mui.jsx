import React, { useState, useEffect } from 'react';
import { ScatterChart } from '@mui/x-charts/ScatterChart';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { io } from 'socket.io-client';
import axios from 'axios';

const colorBanco = '#f2f2f2'; // Color blanco
const theme = createTheme({
  palette: {
    text: {
      primary: colorBanco,
    },
  },
});

const socket = io(process.env.SOCKET_URL, {
  transports: ['websocket', 'polling', 'flashsocket']
});

const ScatterChartExample = () => {
  const [chartData, setChartData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async (token) => {
      try {
        const response = await axios.get(`${process.env.API}api/graphics/scatterplot?typeSensorId=4&typeSensorIdtwo=2`, {
          headers: {
            Authorization: token
          }
        });
        console.log('Fetched Data:', response.data.data);
        setChartData(response.data.data);
      } catch (err) {
        console.error('Error fetching data', err);
        setError('Error fetching data');
      }
    };

    const storedToken = sessionStorage.getItem('token');
    if (storedToken) {
      fetchData(storedToken);
    } else {
      console.error('Token not found');
      setError('Token not found');
    }

    socket.on('scatter-plot', (newData) => {
      newData = JSON.parse(newData);
      let result = newData.data;
      setChartData((prevData) => [...prevData, ...result]);
    });

    socket.on("connect", () => {
      console.log("connected");
    });

    return () => {
      socket.off('scatter-plot');
      socket.off("connect");
    };
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <ThemeProvider theme={theme}>
      <ScatterChart
        width={600}
        height={300}
        series={[
          {
            label: 'Dispersion respecto voltaje',
            data: chartData.map((point, index) => ({ x: point.x, y: point.y, id: `data-${index}` })),
          },
          // Añadir más series según sea necesario
        ]}
        grid={{ vertical: true, horizontal: true }}
      />
    </ThemeProvider>
  );
};

export default ScatterChartExample;
