import React from 'react';
import { FaHome, FaChartBar, FaCog } from 'react-icons/fa';

function Dashboard() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 my-4 mx-4 text-white flex flex-col bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg border border-white border-opacity-20 rounded-xl">
        <div className="p-6">
          <h1 className="text-2xl font-semibold">Dashboard</h1>
        </div>
        <nav className="flex flex-col p-6 space-y-4">
          <a href="#" className="flex items-center p-2 hover:bg-neutral-700 rounded">
            <FaHome className="mr-3" /> Home
          </a>
          <a href="#" className="flex items-center p-2 hover:bg-neutral-700 rounded">
            <FaChartBar className="mr-3" /> Estadistica
          </a>
          <a href="#" className="flex items-center p-2 hover:bg-neutral-700 rounded">
            <FaCog className="mr-3" /> Probabilidad
          </a>
        </nav>
      </div>
      {/* Main content */}
      <div className="flex-1 p-6 mx-6 my-4 bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg border border-white border-opacity-20 rounded-xl">
        <div className="grid grid-cols-3 gap-6 mb-6">
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
