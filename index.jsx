import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter, Routes, Route, Link, createBrowserRouter, createRoutesFromElements, RouterProvider, redirect, useNavigate } from 'react-router-dom';
import About from './pages/About/About.jsx';
import Home from './pages/Home/Home.jsx';


import "./server.js";
import Vans, { loader as  vansPageLoader} from './pages/Vans/Vans.jsx';
import VanDetail, {loader as vansDetailLoader} from './pages/VanDetail/VanDetail.jsx';
import Layout from './components/Layout/Layout.jsx';
import Dashboard, {loader as dashboardLoader} from './pages/Host/Dashboard.jsx';
import Income from './pages/Host/Income.jsx';
import Reviews from './pages/Host/Reviews.jsx';
import HostLayout from './components/HostLayout/HostLayout.jsx';
import HostVans, {loader as hostVansPageLoader} from './pages/Host/HostVans/HostVans.jsx';
import HostVanDetail, {loader as hostVansDetailPageLoader} from './pages/Host/HostVans/HostVansDetail.jsx';
import HostVanDetailPricing from './pages/Host/HostVanDetailPricing/HostVanDetailPricing.jsx';
import HostVanDetailPhotos from './pages/Host/HostVanDetailPhotos/HostVanDetailPhotos.jsx';
import Details from './pages/Host/HostVans/Details.jsx';
import NotFound from './pages/NotFound.jsx';
import Error from './components/Error.jsx';
import Login, {loginLoader, action as actionLogin} from './pages/Login.jsx';
import { requireAuth } from './utils.js';

localStorage.removeItem("loggedin")


function App() {


  const router = createBrowserRouter(createRoutesFromElements(
        <Route path='/' element={<Layout/>}>
          
        <Route index  element={<Home />} />
          <Route 
            path="about" 
            element={<About />} />
          <Route
            path="/login" 
            element={<Login/>} 
            loader={loginLoader} 
            action={actionLogin}></Route>
          <Route 
            path='vans' 
            element= {<Vans/>} 
            loader={vansPageLoader} 
            errorElement={<Error/>}></Route>
          <Route 
            path='vans/:id' 
            element ={<VanDetail/>} 
            loader= {vansDetailLoader} 
            errorElement={<Error/>}></Route>

          <Route path='host' element={<HostLayout/>}>
            <Route 
              index 
              element={<Dashboard/>}
              loader={dashboardLoader}
            ></Route>
            <Route 
              path='income' 
              element={<Income/>}
              loader={async ({request}) => await requireAuth(request)}
            ></Route>
            <Route 
              path='reviews'
              element={<Reviews/>}
              loader={async ({request}) => await requireAuth(request)}></Route>
            <Route 
              path='vans' 
              element={<HostVans/>}
              loader={hostVansPageLoader} 
              errorElement={<Error/>}></Route>
            <Route path='vans/:id' element={<HostVanDetail/>}
              errorElement={<Error/>}
              loader={hostVansDetailPageLoader}>
              <Route 
                index 
                element={<Details/>}
                loader={async ({request}) => await requireAuth(request)}></Route>
              <Route 
                path='pricing' 
                element={<HostVanDetailPricing/>}
                loader={async ({request}) => await requireAuth(request)}></Route>
              <Route 
                path='photos' 
                element={<HostVanDetailPhotos/>}
                loader={async ({request}) => await requireAuth(request)}></Route>
            </Route>
            
          </Route>
          <Route path='*' element={<NotFound/>}></Route>
        </Route>
  ))
  return (
    <RouterProvider router ={router}/>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />

);

