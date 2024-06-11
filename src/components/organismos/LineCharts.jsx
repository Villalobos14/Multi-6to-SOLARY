import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'left',
        },
    },
};

const LineChart = () => {
    const [sensores, setSensores] = useState({
        temperature: 0,
        bpm: 0,
        aceleration: 0
    });

    useEffect(() => {
        const intervalId = setInterval(() => {
            const newHour = new Date().toLocaleTimeString();
            setSensores({
                temperature: getRandomInt(20, 30),
                bpm: getRandomInt(60, 100),
                aceleration: getRandomInt(0, 10)
            });
            setHours(prevTime => {
                const updatedTime = [...prevTime, newHour];
                if (updatedTime.length > 7) {
                    return updatedTime.slice(1);
                }
                return updatedTime;
            });
            setBpm(prevBpm => [...prevBpm, sensores.bpm]);
            setAceleration(prevAceleration => [...prevAceleration, sensores.aceleration]);
            setTemperature(prevTemperature => [...prevTemperature, sensores.temperature]);
        }, 3000);

        return () => clearInterval(intervalId);
    }, []);

    const [time, setHours] = useState([]);
    const [bpm, setBpm] = useState([]);
    const [aceleration, setAceleration] = useState([]);
    const [temperature, setTemperature] = useState([]);

    const data = {
        labels: time,
        datasets: [
            {
                label: 'Aceleración',
                data: aceleration,
                borderColor: '#fff',
                backgroundColor: 'rgb(36 48 38)',
            },
            {
                label: 'BPM',
                data: bpm,
                borderColor: '#fff',
                backgroundColor: '#527566',
            },
            {
                label: 'Temperatura',
                data: temperature,
                borderColor: '#fff',
                backgroundColor: '#034f2f',
            }
        ]
    };

    return <Line options={options} data={data} />;
}

// Función auxiliar para obtener números enteros aleatorios dentro de un rango dado
const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

export default LineChart;
