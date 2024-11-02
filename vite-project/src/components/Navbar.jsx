import { useState } from 'react';

export default function Navbar({ setView }) {
  return (
    <div className="w-1/4 h-screen bg-gray-800 text-white flex flex-col items-center py-4">
      <button onClick={() => setView('home')} className="text-cyan-400 mb-6">Home</button>
      <button onClick={() => setView('viewTodo')} className="text-cyan-400">View Todo</button>
    </div>
  );
}
