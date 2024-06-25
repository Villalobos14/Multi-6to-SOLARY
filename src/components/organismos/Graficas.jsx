import React from 'react';
import Navigation from "../../components/organismos/Navigation"
import CardStats from "../../components/organismos/CardStats"
import NavigationLink from "./NavigationLink"


import {
  UsersIcon,
} from "@heroicons/react/24/outline"

const App = () => {
  return (
    <main className="w-full h-screen flex flex-row relative">
      <Navigation />
      <section className="flex flex-col p-6 ml-20 w-full gap-4">
        {/* Barra superior fija */}
        <div className="flex items-center justify-between rounded-xl border border-[#4e4d4d] bg-[#15111d] p-3">
          <h1 className=" text-4xl ml-4 text-neutral-200  bg-clip-text text-transparent bg-white">
            Graficas
          </h1>
          <NavigationLink to="/" name="users">
            <UsersIcon className="stroke-inherit stroke-[0.75] min-w-8 w-8" />
          </NavigationLink>
        </div>

        {/* Nuevo div padre con dos divs hijos */}
        <div className="flex w-full h-full  border p-2 border-[#4e4d4d] rounded-xl px-5 pb-10  bg-[#15111d]">
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
