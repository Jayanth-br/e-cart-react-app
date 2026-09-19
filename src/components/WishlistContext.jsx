import { createContext, useContext, useState } from "react";

const WishlistContext = createContext();

export function WishlistProvider({ children }) {
    const [wishlist, setWishlist] = useState([]);

    function productIsWishlisted(product, selectedColor = null) {
        return wishlist.some(
            (item) => item.id === product.id && item.selectedColor === selectedColor
        );
    }

    function addToWishlist(product, selectedColor = null) {
        const exists = productIsWishlisted(product, selectedColor);

        if (!exists) {
            setWishlist((prevWishList) => [
                ...prevWishList, 
                { ...product, selectedColor } // Store flattened product properties
            ]);
        } else {
            removeFromWishlist(product, selectedColor);
        }
    }

    function removeFromWishlist(product, selectedColor = null) {
        setWishlist((prevWishlist) =>
            prevWishlist.filter(
                (item) => !(item.id === product.id && item.selectedColor === selectedColor)
            )
        );
    }

    const totalWishlistItems = wishlist.length;

    return (
        <WishlistContext.Provider 
            value={{ 
                wishlist, 
                addToWishlist, 
                removeFromWishlist, 
                productIsWishlisted, 
                totalWishlistItems 
            }}
        >
            {children}
        </WishlistContext.Provider>
    );
}

export function useWishlist() {
    const context = useContext(WishlistContext);
    if (!context) {
        throw new Error("useWishlist must be used inside WishlistProvider");
    }
    return context;
}