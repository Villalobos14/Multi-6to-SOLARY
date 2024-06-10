import React from 'react';
import { FaHome, FaChartBar, FaCog } from 'react-icons/fa';

function Dashboard() {
  return (
    <div className="flex h-screen bg-gradient-to-tl from-yellow-950 from-5% via-red-950 via-20% to-black to-100%">
      {/* Sidebar */}
      <div className="w-64 my-4 mx-4 text-white flex flex-col bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg border border-white border-opacity-20 rounded-xl">
        <div className="p-6 mt-8">
          <h1 className="text-2xl font-semibold">Dashboard</h1>
        </div>
        <nav className="flex flex-col p-6 space-y-4 flex-grow">
          <a href="#" className="flex items-center p-2 hover:bg-neutral-700 rounded">
            <FaHome className="mr-3" /> Home
          </a>
          <a href="#" className="flex items-center p-2 hover:bg-neutral-700 rounded">
            <FaChartBar className="mr-3" /> Estadistica
          </a>
          <a href="#" className="flex items-center p-2 hover:bg-neutral-700 rounded">
            <FaChartBar className="mr-3" /> Probabilidad
          </a>
        </nav>
        <div className="flex flex-col p-6 mt-auto">
          <a href="#" className="flex items-center p-2 hover:bg-neutral-700 rounded">
            <FaCog className="mr-3" /> Settings
          </a>
        </div>
      </div>
      {/* Main content */}
      
      <div className="flex-1 p-6 mx-6 my-4 bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg border border-white border-opacity-20 rounded-xl">
      <nav className="p-4 my-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">STATS</div>
        <div className="space-x-4">
          <a href="#" className="text-white hover:text-gray-300">Home</a>
          <a href="#" className="text-white hover:text-gray-300">About</a>
          <a href="#" className="text-white hover:text-gray-300">Contact</a>
        </div>
      </div>
    </nav>
        
        <div className="grid grid-cols-3 gap-6 mb-6 py-6">
          <div className="bg-stone-900 p-6 rounded-3xl shadow-md h-[153px] w-[245px]"></div>
          <div className="bg-stone-900 p-6 rounded-3xl shadow-md h-[153px] w-[245px]"></div>
          <div className="bg-stone-900 p-6 rounded-3xl shadow-md h-[153px] w-[245px]"></div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-stone-900 p-6 rounded-3xl shadow-md h-[195px]"></div>
          <div className="bg-stone-900 p-6 rounded-3xl shadow-md">
            <div className="grid grid-cols-2 gap-6 mt-10">
              <div className="bg-stone-900 rounded-3xl shadow-md h-[157px]"></div>
              <div className="bg-stone-900 rounded-3xl shadow-md h-[157px]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
