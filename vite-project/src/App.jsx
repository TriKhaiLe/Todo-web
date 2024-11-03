import { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import ViewTodo from './components/ViewTodo.jsx';

function App() {
  const [view, setView] = useState('home');

  return (
    <div className="flex">
      <Navbar setView={setView} />
      <div className="w-full p-8">
        {view === 'home' ? <Home /> : <ViewTodo />}
      </div>
    </div>
  );
}

export default App;
