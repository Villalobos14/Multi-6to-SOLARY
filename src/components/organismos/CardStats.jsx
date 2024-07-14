import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { LineChart, Card, Title } from '@tremor/react';

const LineChartExample = () => {
  const [lineChartData, setLineChartData] = useState([]);
  const [labels, setLabels] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async (token) => {
      try {
        const response = await axios.get('https://backendsolarys.zapto.org/api/graphics/linachart', {
          headers: {
            Authorization: token
          }
        });
        if (response.data.success) {
          const { labels, ...dataSets } = response.data.data;
          console.log('Labels:', labels);
          console.log('Data Sets:', dataSets);
          setLabels(labels);
          setLineChartData(dataSets);
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

    const intervalId = setInterval(() => {
      if (storedToken) {
        fetchData(storedToken);
      }
    }, 5 * 60 * 1000); // 5 minutes in milliseconds

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  const formatDataForLineChart = (labels, dataSets) => {
    return labels.map((label, index) => {
      const entry = { label };
      Object.keys(dataSets).forEach((key) => {
        entry[key] = dataSets[key][index];
      });
      return entry;
    });
  };

  const formattedData = formatDataForLineChart(labels, lineChartData);

  console.log('Formatted Data for LineChart:', formattedData);

  return (
    <Card className="bg-transparent">
      <Title className="text-lg text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">
        Sensor Data Over Time
      </Title>
      <LineChart
        data={formattedData}
        index="label"
        categories={Object.keys(lineChartData)}
        className="mt-6 h-80"
        colors={['blue']}
        showLegend={true}
        yAxisWidth={50}
      />
    </Card>
  );
};

export default LineChartExample;
