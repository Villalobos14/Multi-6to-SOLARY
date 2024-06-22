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
        {/* Barra superior fija */}
        <div className="flex items-center justify-between rounded-lg">
          <h1 className="text-4xl font-light text-neutral-200 tracking-widest bg-clip-text text-transparent bg-white">
            Graficas
          </h1>
          <NavigationLink to="/" name="users">
            <UsersIcon className="stroke-inherit stroke-[0.75] min-w-8 w-8" />
          </NavigationLink>
        </div>

        {/* Nuevo div padre con dos divs hijos */}
        <div className="flex w-full h-full  border p-2 border-[#1f2937] rounded-xl bg-[#091524]">
          {/* Div izquierdo para texto */}
          <div className="w-2/6 p-4 flex flex-col ml-10 mt-6"> {/* Div izquierdo contenedor completo*/}
            <div className='p-2'> {/* contenedor individual */}
              <h2 className="text-xl font-semibold">Contenido de texto</h2>
              <p>Aquí puedes agregar el texto que desees.</p>
            </div>
            <div className='p-2'>
              <h2 className="text-xl font-semibold">Contenido de texto</h2>
              <p>Aquí puedes agregar el texto que desees.</p>
            </div>
            <div className='p-2'>
              <h2 className="text-xl font-semibold">Contenido de texto</h2>
              <p>Aquí puedes agregar el texto que desees.</p>
            </div>
            <div className='p-2'>
              <h2 className="text-xl font-semibold">Contenido de texto</h2>
              <p>Aquí puedes agregar el texto que desees.</p>
            </div>
            <div className='p-2'>
              <h2 className="text-xl font-semibold">Contenido de texto</h2>
              <p>Aquí puedes agregar el texto que desees.</p>
            </div>
            <div className='p-2'>
              <h2 className="text-xl font-semibold">Contenido de texto</h2>
              <p>Aquí puedes agregar el texto que desees.</p>
            </div>
            <div className='p-2'>
              <h2 className="text-xl font-semibold">Contenido de texto</h2>
              <p>Aquí puedes agregar el texto que desees.</p>
            </div>
            <div className='p-2'>
              <h2 className="text-xl font-semibold">Contenido de texto</h2>
              <p>Aquí puedes agregar el texto que desees.</p>
            </div>

          </div>
          {/* Div derecho para CardStats */}
          <div className="w-4/6 p-4  flex justify-center items-center">
            <div className="w-4/5 ">
              <CardStats className="h-full p-4 " />
            </div>
          </div>
        </div>


      </section>
    </main>
  )
}

export default App;
