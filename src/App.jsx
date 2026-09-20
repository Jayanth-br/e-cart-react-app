import { StrictMode } from "react"
import './index.css'
import Home from './pages/Home.jsx'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Product from './pages/Product.jsx'
import NavBar from './components/NavBar.jsx'
import { CartProvider } from "./components/CartContext.jsx"
import Cart from "./components/Cart.jsx"
import Account from "./pages/Account.jsx"
import { WishlistProvider } from "./components/WishlistContext.jsx"
import Wishlist from "./pages/Wishlist.jsx"

function App() {
    return (
          <StrictMode>

            <CartProvider>

                <WishlistProvider>
                <BrowserRouter>
                <NavBar />
                    <Routes>
                        <Route path='/' element={<Navigate to="/home" replace/>}/>
                        <Route path='/home' element={<Home />}/>
                        <Route path='/product/:productId' element={<Product />}/>
                        <Route path='/cart' element={<Cart />}/>
                        <Route path="/account" element={<Account />}/>
                        <Route path="/wishlist" element={<Wishlist />} />
                    </Routes>
                </BrowserRouter>
                </WishlistProvider>
            </CartProvider>
   
        </StrictMode>
    )
}
export default App