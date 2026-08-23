import { createContext, useContext, useState } from "react"

const CartContext = createContext();
export function CartProvider({ children }) {

    const[cart, setCart] = useState([]);

    const addToCart = (product, selectedColor = null) => {
        setCart((prevCart) => {
            const existing = prevCart.find(
            (item) => item.id === product.id && item.selectedColor === selectedColor
            );

            // If item exists, create a brand-new object with the updated quantity
            if (existing) {
            return prevCart.map((item) =>
                item.id === product.id && item.selectedColor === selectedColor
                ? { ...item, quantity: item.quantity + 1 }
                : item
            );
            }

            // If new item, add it to array with quantity: 1
            return [...prevCart, { ...product, selectedColor, quantity: 1 }];
        });
    };

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