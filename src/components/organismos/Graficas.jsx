import React from 'react';
import Navigation from "../../components/organismos/Navigation"
import CardStats from "../../components/organismos/CardStats"
import NavigationLink from "./NavigationLink"


import {
  UsersIcon,
} from "@heroicons/react/24/outline"
import BoxPlotExample from '../../components/organismos/CardStats';
import LineGraphic from '../../components/organismos/CardStats';
import LineChartExample from '../../components/organismos/CardStats';
import io from 'socket.io-client';

const socket = io(process.env.SOCKET_URL,{
  transports: ['websocket', 'polling', 'flashsocket']
  
});
function valueFormatter(number) {
  return number.toFixed(2);
}
const App = () => {
  const [data,setData]=useState([])
  useEffect(()=>{
    const storedToken = sessionStorage.getItem('token');
    if (storedToken) {
      getData(storedToken);
    } else {
      console.error('Token not found');
    }
    socket.on('connect', () => {
      console.log('Connected to socket server');
    });
    socket.on("meditions",(message)=>{
      const result=JSON.parse(message)
      const {median, mode, mean, std}=result.data["sensor de voltaje Ac Zmpt101b"]
      handleupdate(median,mode,mean,std)


    })
    return () => {
      socket.off('connect');
      socket.off("meditions")
   
    };
     
  },[])
  const getData=async(token)=>{
    try{
      const res = await axios.get(`${process.env.API}api/statistics/metricts`, {
        headers: {
          Authorization: token,
        },
      });
      
     const {median, mode, mean, std}=res.data.data["sensor de voltaje Ac Zmpt101b"]
     handleupdate(median,mode,mean,std)

    



    }catch(e){
      console.log(e.message);
    }

  }
  const handleupdate=(median, mode, mean, std)=>{
    let datainfo=[
      {name:"mediana",stat:valueFormatter(median)},
      {name:"moda",stat:valueFormatter(mode)},
      {name:"media",stat:valueFormatter(mean)},
      // {name:"Desviacion estandar",stat:valueFormatter(std)}


    ]
    setData(datainfo)

   
  }
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
              <LineChartExample className="h-full p-4 " />
            </div>
          </div>
        </div>


      </section>
    </main>
  )
}

export default App;
