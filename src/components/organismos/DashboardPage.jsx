import React from 'react';
import { FaHome, FaChartBar, FaCog } from 'react-icons/fa';
import Navigation from "../../components/organismos/Navigation"
import LineCharts from '../../components/organismos/LineCharts'
import CardStats from "../../components/organismos/CardStats"
import BarChart from "../../components/organismos/BarChart"

const App = () => {
  return (
    <main className="w-full h-screen flex flex-row relative">
      <Navigation />
      <section className="flex flex-col p-10 ml-20 w-full gap-5 ">
        <h1 className="text-4xl text-neutral-200">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 border border-white rounded-xl pl-10 px-10 pt-10 pb-10"> {/* Contenedor de la cuadrícula */}
          <div className="md:col-span-1"> {/* Primer columna de la cuadrícula */}
            <div className="mb-5"> {/* Espacio entre los componentes */}
              <CardStats />
            </div> 
          </div>
          <div className="md:col-span-1 mt-20"> {/* Segunda columna de la cuadrícula */}
            <div className="w-full h-90"> {/* Reducir el tamaño de BarChart */}
              <BarChart />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App;
