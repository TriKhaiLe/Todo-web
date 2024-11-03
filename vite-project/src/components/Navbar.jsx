import { useState } from 'react';
import { FaHome, FaList } from 'react-icons/fa';

export default function Navbar({ setView }) {
  return (
    <div className="w-[28.57%] h-screen bg-gray-800 text-white flex flex-col items-center py-4">
      <button
        onClick={() => setView('home')}
        className="text-cyan-400 mb-6 flex flex-col items-center"
      >
        <FaHome className="mb-2" size={24} />
        Home
      </button>
      <button
        onClick={() => setView('viewTodo')}
        className="text-cyan-400 flex flex-col items-center"
      >
        <FaList className="mb-2" size={24} />
        View Todo
      </button>
    </div>
  );
}
