import { useState, useEffect } from 'react';
import AddTodoModal from '../components/AddTodoModal.jsx';
import { TrashIcon } from '@heroicons/react/24/solid';

export default function ViewTodo() {
  const [todos, setTodos] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch('https://dummyjson.com/todos')
      .then(response => response.json())
      .then(data => setTodos(data.todos));
  }, []);

  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  };

  return (
    <div className="p-8 flex flex-col items-center">
      <button onClick={() => setShowModal(true)} className="bg-blue-500 text-white px-4 py-2 mb-4">Add More Todo</button>
      {showModal && <AddTodoModal setShowModal={setShowModal} setTodos={setTodos} />}
      <table className="w-full text-left border">
        <thead>
          <tr>
            <th className="border px-4 py-2">Title</th>
            <th className="border px-4 py-2">Completed</th>
            <th className="border px-4 py-2">Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map(todo => (
            <tr key={todo.id}>
              <td className="border px-4 py-2">{todo.todo}</td>
              <td className="border px-4 py-2">
                <input type="checkbox" checked={todo.completed} onChange={() => toggleComplete(todo.id)} />
              </td>
              <td className="border px-4 py-2">
                <TrashIcon className="w-5 h-5 text-red-500 cursor-pointer" onClick={() => handleDelete(todo.id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
