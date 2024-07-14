import { ScatterChart } from '@tremor/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const socket = io(process.env.SOCKET_URL, {
  transports: ['websocket', 'polling', 'flashsocket']
});

function ScatterChartUsageExample() {
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
    <div className="bg-transparent text-gray-100 sm:mx-auto sm:max-w-2xl">
      <h3 className="mr-1 font-semibold text-gray-100">Variacion de la corriente con respecto a luminosidad</h3>
      <p className="text-gray-100">As of 2015. Source: Our World in Data</p>
      <ScatterChart
        className="mt-6 h-80"
        yAxisWidth={50}
        data={chartData.map((d) => ({
          x: d.x,
          y: d.y,
          frequency: d.frequency,
        }))}
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
    </div>
  );
}

export default ScatterChartUsageExample;
