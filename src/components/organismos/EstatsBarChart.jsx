import { BarChart, Divider, Switch } from '@tremor/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import io from 'socket.io-client';



// Formateador de valores para mostrar en el gráfico
function valueFormatter(number) {
  return number.toFixed(2);
}

export default function Example(props) {
  const [showComparison, setShowComparison] = useState(false);
  const [data, setData] = useState([]);
  const [nameSensor, setNameSensor] = useState('');

  useEffect(() => {
    const storedToken = sessionStorage.getItem('token');
    if (storedToken) {
      getDatos(storedToken);
    } else {
      console.error('Token not found');
    }
    const intervalId = setInterval(async()=>getDatos(sessionStorage.getItem('token')),  300000);
    return ()=>clearInterval(intervalId)




   
  }, []);

  const getDatos = async (token) => {
    try {
      const res = await axios.get(`${process.env.API}api/graphics/histogram?typeSensorId=3`, {
        headers: {
          Authorization: token,
        },
      });

      const { data, label, nameSensor } = res.data;
      console.log("data aqui",data)
      
      const formattedData = label.map((label, index) => ({
        date: label.toFixed(2),
        value: data[index],
      }));

      setData(formattedData);
      setNameSensor(nameSensor);

    } catch (e) {
      console.error('API call failed:', e.response ? e.response.data : e.message);
    }
  };

 

  return (
    <div className="bg-transparent text-gray-100 sm:mx-auto sm:max-w-2xl">
      <h3 className="mr-1 font-semibold text-gray-100">Voltaje</h3>
      <p className="text-gray-100">Data estadistica overview for the selected sensor.</p>
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
      <Divider />
      <div className="mb-2 flex items-center space-x-3">
        <Switch id="comparison" onChange={() => setShowComparison(!showComparison)} />
        <label htmlFor="comparison" className="text-white">
          Show comparison
        </label>
      </div>
    </div>
  );
}
