import { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import ViewTodo from './components/ViewTodo.jsx';
import { FaBars, FaTimes } from 'react-icons/fa';

function App() {
  const [view, setView] = useState('home');
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  const toggleNavbar = () => setIsNavbarVisible(!isNavbarVisible);

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className="w-full bg-gray-800 text-white p-4 flex items-center">
        <button onClick={toggleNavbar} className="text-white mr-4">
          {isNavbarVisible ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </header>

      <div className="flex flex-1">
        {/* Navbar */}
        <Navbar setView={setView} isVisible={isNavbarVisible} />

        {/* Main content */}
        <div className="flex-1 p-8">
          {view === 'home' ? <Home /> : <ViewTodo />}
        </div>
      </div>
    </div>
  );
}

export default App;
