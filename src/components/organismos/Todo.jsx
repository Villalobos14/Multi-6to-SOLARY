import React from 'react';

function Todo({ task, onDelete }) {
  return (
    <li className="mb-2 flex justify-between items-center p-2 bg-gray-700 rounded-full">
      <span>{task.name}</span>
      <button 
        onClick={() => onDelete(task.id)} 
        className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-full ml-4"
      >
        Eliminar
      </button>
    </li>
  );
}

export default Todo;
