import React from 'react';
import Navigation from "../../components/organismos/Navigation";
import BarChart from "../../components/organismos/BarChart";
import KpiCard from "../../components/organismos/KpiCard";
import ScatterChart from "../../components/organismos/mui"; // Ajusta la ruta según tu estructura
import { UsersIcon } from "@heroicons/react/24/outline";
import NavigationLink from "./NavigationLink";

// Datos de ejemplo para el gráfico de dispersión
const data = [
  { id: 1, x1: 10, y1: 20, y2: 15 },
  { id: 2, x1: 20, y1: 25, y2: 18 },
  { id: 3, x1: 30, y1: 18, y2: 10 },
  // Agrega más datos según sea necesario
];

const App = () => {
  return (
    <main className="w-full h-screen flex flex-row relative">
      <Navigation />
      <section className="flex flex-col px-6 pb-6 pt-3 ml-20 w-full gap-4">
        <div className='gap-2 h-full space-y-4 p-4 rounded-xl'>

          <div className="flex items-center justify-between rounded-xl border border-[#4e4d4d] bg-[#15111d] p-3">
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 border border-[#4e4d4d] rounded-xl px-5 pb-10 bg-[#15111d]">
            {/* Contenedor de la cuadrícula */}
            <div className="md:col-span-1 mt-20 h-48">
              {/* Primer columna de la cuadrícula */}
              <div>
                {/* Espacio entre los componentes */}
                <ScatterChart 
                  width={600}
                  height={300}
                  data={data}
                />
              </div>
            </div>

            <div className="md:col-span-1 pt-16 pb-6 px-2">
              {/* Segunda columna de la cuadrícula */}
              <div className="w-full h-90">
                {/* Reducir el tamaño de BarChart */}
                <BarChart />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default App;
