import { useState } from 'react';
import { FaHome, FaFolder } from 'react-icons/fa';

export default function Navbar({ setView }) {
  return (
    <div className="w-[10%] h-screen bg-gray-800 text-white flex flex-col items-center justify-center py-4">
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
        <FaFolder className="mb-2" size={24} />
        View Todo
      </button>
    </div>
  );
}
