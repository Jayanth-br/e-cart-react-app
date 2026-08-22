import { createContext, useContext, useState } from "react"

const CartContext = createContext();
export function CartProvider({ children }) {

    const[cart, setCart] = useState([]);

    function addToCart(product, selectedColor = null) {
        setCart((prevCart) => {
            const existingIds = prevCart.findIndex(
                (item) => item.id == product.id && item.selectedColor == selectedColor
            );

            if(existingIds > -1){
                const updatedCart = [...prevCart];
                updatedCart[existingIds].quantity += 1;
                return updatedCart;
            }
            return [...prevCart, { ...product, quantity: 1, selectedColor }];
        })
    }

    function removeFromCart(productId, selectedColor){
        setCart((prevCart) => 
            prevCart.filter(
                (item) => !(item.id == productId && item.selectedColor == selectedColor)
            )
        )
    }

    function updateQuantity(productId, selectedColor, delta){
        setCart((prevCart) => 
            prevCart.map((item) => {
                if(item.id == productId && item.selectedColor == selectedColor){
                    const newCount = item.quantity + delta;
                    return newCount > 0 ? { ...item, quantity: newCount } : null;
                }
                return item;
            }).filter(Boolean)
        )
    }

    const clearCart = () => setCart([]);

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <CartContext.Provider
            value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, totalItems, totalPrice}}
        >
            {children}
        </CartContext.Provider>
    )
}

// Custom hook
export function useCart(){
    const context = useContext(CartContext);
    if(!context){
        throw new Error("useCart must be used within CartProvider");
    }
    return context;
}