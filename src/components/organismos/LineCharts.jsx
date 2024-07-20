import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const BoxplotChart = () => {
  const [series, setSeries] = useState([]);
  const [options, setOptions] = useState({
    chart: {
      type: 'boxPlot',
      height: 350
    },
    title: {
      text: 'BoxPlot Chart',
      align: 'left'
    },
    xaxis: {
      categories: []
    },
    plotOptions: {
      boxPlot: {
        colors: {
          upper: '#5C4742',
          lower: '#A5978B'
        }
      }
    }
  });

  const fetchData = async () => {
    try {
      const response = await fetch(process.env.API + 'api/graphics/boxplot', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': sessionStorage.getItem('token')
        }
      });
      const result = await response.json();
    
      if (result.success) {
        const labels = result.data.labels;
        const datasets = result.data.datasets;

        const dataSeries = datasets.map(dataset => {
          const boxPlotData = calculateBoxPlotData(dataset.data);
          return {
            x: dataset.label,
            y: boxPlotData
          };
        });

        setSeries([{
          name: 'BoxPlot',
          data: dataSeries
        }]);

        setOptions(prevOptions => ({
          ...prevOptions,
          xaxis: {
            categories: labels
          }
        }));
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const calculateBoxPlotData = (data) => {
    if (!Array.isArray(data) || data.length === 0) {
      return [0, 0, 0, 0, 0];
    }
    
    data.sort((a, b) => a - b);
    const min = Math.min(...data);
    const max = Math.max(...data);
    const q1 = percentile(data, 25);
    const median = percentile(data, 50);
    const q3 = percentile(data, 75);
    return [min, q1, median, q3, max];
  };

  const percentile = (arr, p) => {
    const index = (p / 100) * (arr.length - 1);
    const lower = Math.floor(index);
    const upper = Math.ceil(index);
    const weight = index % 1;
    return arr[lower] * (1 - weight) + arr[upper] * weight;
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(() => fetchData(), 300000); // Actualizar cada 5 minutos
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="chart">
      <ReactApexChart  options={options} series={series} type="boxPlot" height={350} />
    </div>
  );
};

export default BoxplotChart;
