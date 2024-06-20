import React from 'react';
import { FaHome, FaChartBar, FaCog, FaChartLine } from 'react-icons/fa';
import Navigation from "../../components/organismos/Navigation"
import LineCharts from '../../components/organismos/LineCharts'
import CardStats from "../../components/organismos/CardStats"
import BarChart from "../../components/organismos/BarChart"
import KpiCard from "../../components/organismos/KpiCard"
import NavigationLink from "./NavigationLink"
import Login from "../../components/organismos/FormLogin"

import {
  UsersIcon,
} from "@heroicons/react/24/outline"

const App = () => {
  return (
    <main className="w-full h-screen flex flex-row relative">
      <Navigation />
      <section className="flex flex-col p-6 ml-20 w-full gap-5">
        <div className="flex items-center justify-between rounded-lg ">
          <h1 className="text-4xl  font-light   text-neutral-200 tracking-widest bg-clip-text text-transparent bg-white">
            estadistica
          </h1>
          <NavigationLink to="/dashboard" name="users">
            <UsersIcon className="stroke-inherit stroke-[0.75] min-w-8 w-8" />
          </NavigationLink>
        </div>
        <div>
          <KpiCard />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 border border-[#1f2937] rounded-xl px-5 pt-6 bg-[#091524] "> {/* Contenedor de la cuadrícula */}
          <div className="md:col-span-1"> {/* Primer columna de la cuadrícula */}
            <div className="mb-5"> {/* Espacio entre los componentes */}
              <LineCharts/>
            </div>
          </div>
          <div className="md:col-span-1 pt-10 px-2"> {/* Segunda columna de la cuadrícula */}
            <div className="w-full h-90"> {/* Reducir el tamaño de BarChart */}
             <LineCharts/>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App;
