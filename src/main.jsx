import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Components/pages/Home.jsx'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Product from './Components/pages/Product.jsx'
import NavBar from './Components/NavBar.jsx'
import { CartProvider } from './Components/CartContext.jsx'
import CartPage from './Components/CartPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <CartProvider>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path='/' element={<Navigate to="/home" replace/>}/>
          <Route path='/home' element={<Home />}/>
          <Route path='/product/:productId' element={<Product />}/>
          <Route path='/cart' element={<CartPage />}/>
        </Routes>
      </BrowserRouter>
    </CartProvider>
   
  </StrictMode>
)