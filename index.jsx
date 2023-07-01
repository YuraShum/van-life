import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import About from './components/About/About.jsx';
import Home from './components/pages/Home/Home.jsx';


import "./server.js";

function App() {
  return (
    <BrowserRouter >
    <header className='container'>
      <nav className='navigation'>
        <Link to='/'>#Vanlife</Link>
        <div className="link-section">
          <Link to='/about'>About</Link>
          <Link to='/vans'>Vans</Link>
        </div>
      </nav>
    </header>
    <Routes>
      <Route
        path="/"
        element={<Home/>}
      />
      <Route
        path="/about"
        element={<About/>}
      />
    </Routes>
    
  </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <App/>

  );