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
      {showModal && <AddTodoModal setShowModal={setShowModal} setTodos={setTodos} />}
      
      <table className="w-full max-w-4xl text-left border">
        <thead>
          <tr>
            <th className="border px-4 py-2 w-3/4">Title</th>
            <th className="border px-4 py-2 text-center">Completed</th>
            <th className="border px-4 py-2">Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map(todo => (
            <tr key={todo.id}>
              <td className="border px-4 py-2">{todo.todo}</td>
              <td className="border px-4 py-2 text-center">
                <input type="checkbox" checked={todo.completed} onChange={() => toggleComplete(todo.id)} />
              </td>
              <td className="border px-4 py-2 text-center">
                <TrashIcon 
                  style={{ width: '20px', height: '20px' }}
                  className="text-red-500 cursor-pointer inline-flex"
                  onClick={() => handleDelete(todo.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button 
        onClick={() => setShowModal(true)} 
        className="bg-blue-500 text-white px-4 py-2 fixed bottom-4 right-4"
      >
        Add More Todo
      </button>
    </div>
  );
}
