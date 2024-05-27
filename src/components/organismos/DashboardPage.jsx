import React, { useState, useEffect } from 'react';
import Todo from './Todo';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState('');

  //localStorage implementacion
  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  //guardar tareas
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  //nueva tarea add
  function handleAddTask() {
    if (taskName.trim() !== '') {
      const newTask = { id: Date.now(), name: taskName };
      setTasks([...tasks, newTask]);
      setTaskName('');
    }
  }

  //delete tarea
  function handleDeleteTask(id) {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  }
//cuerpo del todolist con tailwind
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="w-full max-w-md p-6 bg-gray-800 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-purple-400 text-center">Lista de Tareas</h1>
        <div className="mb-6 flex">
          <input 
            type="text" 
            value={taskName} 
            onChange={(e) => setTaskName(e.target.value)} 
            placeholder="Nueva tarea" 
            className="flex-grow p-3 border border-gray-700 rounded-full bg-gray-900 text-white mr-2"
          />
          <button 
            onClick={handleAddTask} 
            className="bg-purple-500 hover:bg-purple-600 text-white p-3 rounded-full"
          >
            Agregar
          </button>
        </div>
        <div className="h-64 overflow-y-auto">
          <ul className="list-none">
            {tasks.map(task => (
              <Todo key={task.id} task={task} onDelete={handleDeleteTask} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
