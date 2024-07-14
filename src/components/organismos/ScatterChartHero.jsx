import { Card, ScatterChart } from '@tremor/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const socket = io(process.env.SOCKET_URL, {
  transports: ['websocket', 'polling', 'flashsocket']
});


 function ScatterChartUsageExample() {
  const [chartData,setChartData]=useState([
    
  ])
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async (token) => {
      try {
        const response = await axios.get(`${process.env.API}api/graphics/scatterplot?typeSensorId=4&typeSensorIdtwo=2`, {
          headers: {
            Authorization: token
          }
        });
        if (response.data.success) {
          console.log('Fetched Data:', response.data.data);
          setChartData(response.data.data);
        } else {
          console.error('Error in response:', response.data.message);
        }
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

    socket.on('data-update', (newData) => {
      console.log('New Data from Socket:', newData);
      setChartData((prevData) => [...prevData, ...newData]);
    });

    return () => {
      socket.off('data-update');
    };
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }


  return (
    <Card className='bg-transparent'>
      <p className="text-lg text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">Variacion de la corriente con respecto a luminosidad</p>
      <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content leading-6">As of 2015. Source: Our World in Data </p>
      <ScatterChart
        className="-ml-2 mt-6 h-80"
        yAxisWidth={50}
        data={chartData}
        category="Country"
        x="x"
        y="y"
        
        showOpacity={true}
        minYValue={60}
        valueFormatter={{
          x: (value) => `${value}`,
          y: (value) => `${value}`,
          size: (frequency) => `${frequency} occurrences`,
        }}
        enableLegendSlider
        showLegend={false}
      />
    </Card>
  );
}
export default ScatterChartUsageExample