import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import About from './pages/About/About.jsx';
import Home from './pages/Home/Home.jsx';


import "./server.js";
import Vans from './pages/Vans/Vans.jsx';
import VanDetail from './pages/VanDetail/VanDetail.jsx';
import Layout from './components/Layout/Layout.jsx';
import Dashboard from './pages/Host/Dashboard.jsx';
import Income from './pages/Host/Income.jsx';
import Reviews from './pages/Host/Reviews.jsx';
import HostLayout from './components/HostLayout/HostLayout.jsx';

function App() {
  return (
    <BrowserRouter >
      
      <Routes>
        <Route element={<Layout/>}>
        <Route path="/"  element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path='/vans' element= {<Vans/>}></Route>
          <Route path='/vans/:id' element ={<VanDetail/>}></Route>

          <Route path='/host' element={<HostLayout/>}>
            <Route path='/host' element={<Dashboard/>}></Route>
            <Route path='/host/income' element={<Income/>}></Route>
            <Route path='/host/reviews' element={<Reviews/>}></Route>
          </Route>
          
        </Route>
      </Routes>

    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />

);