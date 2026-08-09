import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Components/pages/Home.jsx'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Product from './Components/pages/Product.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to="/home" replace/>}/>
        <Route path='/home' element={<Home />}/>

        <Route path='/product/:productId' element={<Product />}/>
      </Routes>
    </BrowserRouter>
    
  </StrictMode>
)