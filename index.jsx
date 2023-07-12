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
import HostVans from './pages/Host/HostVans/HostVans.jsx';
import HostVanDetail from './pages/Host/HostVans/HostVansDetail.jsx';
import HostVanDetailPricing from './pages/Host/HostVanDetailPricing/HostVanDetailPricing.jsx';
import HostVanDetailPhotos from './pages/Host/HostVanDetailPhotos/HostVanDetailPhotos.jsx';
import Details from './pages/Host/HostVans/Details.jsx';
import NotFound from './pages/NotFound.jsx';

function App() {
  return (
    <BrowserRouter >
      
      <Routes>
        <Route path='/' element={<Layout/>}>
          
        <Route index  element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path='vans' element= {<Vans/>}></Route>
          <Route path='vans/:id' element ={<VanDetail/>}></Route>

          <Route path='host' element={<HostLayout/>}>
            <Route index element={<Dashboard/>}></Route>
            <Route path='income' element={<Income/>}></Route>
            <Route path='reviews' element={<Reviews/>}></Route>
            <Route path='vans' element={<HostVans/>}></Route>
            <Route path='vans/:id' element={<HostVanDetail/>}>
              <Route index element={<Details/>}></Route>
              <Route path='pricing' element={<HostVanDetailPricing/>}></Route>
              <Route path='photos' element={<HostVanDetailPhotos/>}></Route>
            </Route>
            
          </Route>
          <Route path='*' element={<NotFound/>}></Route>
        </Route>
      </Routes>

    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />

);

// Виписати всі хуки()