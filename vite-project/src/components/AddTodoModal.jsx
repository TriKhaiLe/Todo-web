import { useState } from 'react';

export default function AddTodoModal({ setShowModal, setTodos }) {
  const [todo, setTodo] = useState('');

  const addTodo = () => {
    setTodos(prev => [...prev, { id: Date.now(), todo, completed: false }]);
    setShowModal(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-lg font-bold mb-2">Add New Todo</h2>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          className="border p-2 w-full mb-2"
          placeholder="Enter todo title"
        />
        <button onClick={addTodo} className="bg-blue-500 text-white px-4 py-2">Add Todo</button>
        <button onClick={() => setShowModal(false)} className="bg-red-500 text-white px-4 py-2 ml-2">Cancel</button>
      </div>
    </div>
  );
}
