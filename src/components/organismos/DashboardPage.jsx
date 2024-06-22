import React from 'react';
import Navigation from "../../components/organismos/Navigation"
import CardStats from "../../components/organismos/CardStats"
import BarChart from "../../components/organismos/BarChart"
import KpiCard from "../../components/organismos/KpiCard"
import NavigationLink from "./NavigationLink"


import {
  UsersIcon,
} from "@heroicons/react/24/outline"

const App = () => {
  return (
    <main className="w-full h-screen flex flex-row relative">
      <Navigation />
      <section className="flex flex-col px-6 pb-6 pt-3 ml-20 w-full gap-4">
        <div className='bg-[#0000] border border-[#000000] gap-2  h-full space-y-4 p-4 rounded-xl '>

        <div className="flex items-center justify-between rounded-xl border border-[#1f2937] bg-[#11161d] p-3">
          <h1 className="text-4xl ml-4 text-neutral-200  bg-clip-text text-transparent bg-white">
            Estadística
          </h1>
          <NavigationLink className="text-white" to="/" name="Users">
            <UsersIcon className="stroke-inherit stroke-[0.75] min-w-8 w-8" />
          </NavigationLink>
        </div>
        <div>
          <KpiCard />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 border border-[#1f2937] rounded-xl px-5 pb-10  bg-[#10151b] "> {/* Contenedor de la cuadrícula */}
          <div className="md:col-span-1 h-48"> {/* Primer columna de la cuadrícula */}
            <div> {/* Espacio entre los componentes */}
              <CardStats className="w-1/2" /> 
            </div>
          </div>
          <div className="md:col-span-1 pt-16 pb-6 px-2"> {/* Segunda columna de la cuadrícula */}
            <div className="w-full h-90"> {/* Reducir el tamaño de BarChart */}
              <BarChart />
            </div>
          </div>
        </div>
        </div>
      </section>
    </main>
  )
}

export default App;
