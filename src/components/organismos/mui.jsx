// src/components/organismos/ScatterChart.jsx
import React, { useState, useEffect } from 'react';
import { ScatterChart } from '@mui/x-charts/ScatterChart';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CircularProgress, Box } from '@mui/material';
import axios from 'axios';
import { io } from 'socket.io-client';

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
  const [loading, setLoading] = useState(true); // Estado de carga

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
        setLoading(false); // Datos cargados, cambia el estado
      } catch (err) {
        console.error('Error fetching data', err);
        setError('Error fetching data');
        setLoading(false); // Cambia el estado incluso si ocurre un error
      }
    };

    const storedToken = sessionStorage.getItem('token');
    if (storedToken) {
      fetchData(storedToken);
    } else {
      console.error('Token not found');
      setError('Token not found');
      setLoading(false); // Cambia el estado incluso si el token no se encuentra
    }

    socket.on('scatter-plot', (newData) => {
      newData = JSON.parse(newData);
      let result = newData.data;
      setChartData((prevData) => [...prevData, ...result]);
      setLoading(false); // Actualiza el estado de carga con nuevos datos
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
      {loading ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height={300}
          width={600}
        >
          <CircularProgress />
        </Box>
      ) : (
        <ScatterChart
          width={600}
          height={300}
          series={[
            {
              label: 'Dispersion respecto voltaje',
              data: chartData.map((point, index) => ({ x: point.x, y: point.y, id: `data-${index}` })),
            },
          ]}
          grid={{ vertical: true, horizontal: true }}
        />
      )}
    </ThemeProvider>
  );
};

export default ScatterChartExample;
