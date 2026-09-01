import { StrictMode } from "react"
import './index.css'
import Home from './Components/pages/Home.jsx'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Product from './Components/pages/Product.jsx'
import NavBar from './Components/NavBar.jsx'
import { CartProvider } from './Components/CartContext.jsx'
import Cart from './Components/Cart.jsx'

function App() {
    return (
          <StrictMode>

            <CartProvider>
                <BrowserRouter>
                <NavBar />
                    <Routes>
                        <Route path='/' element={<Navigate to="/home" replace/>}/>
                        <Route path='/home' element={<Home />}/>
                        <Route path='/product/:productId' element={<Product />}/>
                        <Route path='/cart' element={<Cart />}/>
                    </Routes>
                </BrowserRouter>
            </CartProvider>
   
        </StrictMode>
    )
}
export default App