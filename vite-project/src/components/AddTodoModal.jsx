import { useState } from 'react';

export default function AddTodoModal({ setShowModal, setTodos }) {
  const [todo, setTodo] = useState('');

  const addTodo = () => {
    setTodos(prev => [...prev, { id: Date.now(), todo, completed: false }]);
    setShowModal(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow w-96">
        <h2 className="text-2xl font-bold text-black mb-1">Add Todo</h2>
        <p className="text-gray-600 mb-4">Todo</p>
        
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          className="border p-3 w-full mb-4 bg-white text-black"
          placeholder="Enter todo title"
        />
        
        <button
          onClick={addTodo}
          className="bg-blue-500 text-white py-3 w-full rounded"
        >
          Add Todo
        </button>
      </div>
    </div>
  );
}
