// src/components/organismos/BarChart.jsx
import { BarChart, Divider, Switch } from '@tremor/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { CircularProgress, Box } from '@mui/material';

// Formateador de valores para mostrar en el gráfico
function valueFormatter(number) {
  return number.toFixed(2);
}

export default function Example(props) {
  const [showComparison, setShowComparison] = useState(false);
  const [data, setData] = useState([]);
  const [nameSensor, setNameSensor] = useState('VOLTAJE');
  const [loading, setLoading] = useState(true); // Estado de carga

  useEffect(() => {
    const storedToken = sessionStorage.getItem('token');
    if (storedToken) {
      getDatos(storedToken);
    } else {
      console.error('Token not found');
      setLoading(false); // Cambia el estado incluso si el token no se encuentra
    }

    const intervalId = setInterval(async () => {
      if (storedToken) {
        getDatos(storedToken);
      }
    }, 300000); // 5 minutos en milisegundos

    return () => clearInterval(intervalId);
  }, []);

  const getDatos = async (token) => {
    try {
      setLoading(true); // Activa el estado de carga antes de la solicitud
      const res = await axios.get(`${process.env.API}api/graphics/histogram?typeSensorId=3`, {
        headers: {
          Authorization: token,
        },
      });

      const { data, label, nameSensor } = res.data;
      console.log("data aqui", data);
      
      const formattedData = label.map((label, index) => ({
        date: label.toFixed(2),
        value: data[index],
      }));

      setData(formattedData);
      setNameSensor(nameSensor);
    } catch (e) {
      console.error('API call failed:', e.response ? e.response.data : e.message);
    } finally {
      setLoading(false); // Desactiva el estado de carga después de la solicitud
    }
  };

  return (
    <div className="bg-transparent text-gray-100 sm:mx-auto sm:max-w-2xl">
      <h3 className="mr-1 font-semibold text-gray-100">{nameSensor}</h3>
      <p className="text-gray-100">DATOS GENERALES SOBRE EL SENSOR</p>
      {loading ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height={300}
          width={600}
        >
          <CircularProgress size={36} sx={{ color: 'green' }} />
        </Box>
      ) : (
        <>
          <BarChart
            data={data}
            index="date"
            categories={['value']}
            colors={['green']}
            valueFormatter={valueFormatter}
            yAxisWidth={45}
            className="mt-6 hidden h-60 sm:block"
          />
          <BarChart
            data={data}
            index="date"
            categories={['value']}
            colors={['blue']}
            valueFormatter={valueFormatter}
            showYAxis={false}
            className="mt-4 h-56 sm:hidden"
          />
        </>
      )}
      <Divider />
      <div className=" flex items-center space-x-3">
        <h1>medidas</h1>
        
      </div>
    </div>
  );
}
