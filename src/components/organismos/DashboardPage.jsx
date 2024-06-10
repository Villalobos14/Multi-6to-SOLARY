import React from 'react';
import { FaHome, FaChartBar, FaCog } from 'react-icons/fa';

function Dashboard() {
  return (
    <div className="flex h-screen bg-black">
      {/* Sidebar */}
      <div className="w-64 my-4 mx-4 text-white flex flex-col bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg border border-white border-opacity-20 rounded-xl">
        <div className="p-6 mt-8">
          <h1 className="text-2xl font-semibold ">Dashboard</h1>
        </div>
        <nav className="flex flex-col p-6 space-y-4 flex-grow">
          <a href="#" className="flex items-center p-2 hover:bg-neutral-700 rounded">
            <FaHome className="mr-3" /> Home
          </a>
          <a href="#" className="flex items-center p-2 hover:bg-neutral-700 rounded ">
            <FaChartBar className="mr-3 " /> Estadistica
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
      
      <div className="flex-1 p-6  mx-6 my-4 bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg border border-white border-opacity-20 rounded-xl">
      <nav className="p-4 my-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">STATS</div>
        <div className="space-x-4">
          <a href="#" className="text-white hover:text-gray-300">Option</a>
          <a href="#" className="text-white hover:text-gray-300">Option</a>
          <a href="#" className="text-white hover:text-gray-300">Option</a>
        </div>
      </div>
    </nav>
        
        <div className="flex grid-cols-3 gap-6 mb-6 py-6 justify-between">
          <div className="bg-opacity-5 backdrop-filter backdrop-blur-lg border border-white border-opacity-20 p-6 rounded-3xl shadow-md h-[150px] w-[300px]"></div>
          <div className="bg-opacity-5 backdrop-filter backdrop-blur-lg border border-white border-opacity-20 p-6 rounded-3xl shadow-md h-[150px] w-[300px]"></div>
          <div className="bg-opacity-5 backdrop-filter backdrop-blur-lg border border-white border-opacity-20 p-6 rounded-3xl shadow-md h-[150px] w-[300px]"></div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-opacity-5 backdrop-filter backdrop-blur-lg border border-white border-opacity-20 p-6 rounded-3xl shadow-md h-[195px]"></div>
          <div className="bg-opacity-5 backdrop-filter backdrop-blur-lg border border-white border-opacity-20 p-6 rounded-3xl shadow-md">
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
