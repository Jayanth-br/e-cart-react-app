import { useWishlist } from "../components/WishlistContext";
import { useNavigate } from "react-router-dom";
import "./Wishlist.css";

function Wishlist() {
    const { wishlist, removeFromWishlist, totalWishlistItems } = useWishlist();
    const navigate = useNavigate();

    return (
        <section className="wishlist-section">
            <h2 className="wishlist-header">My Wishlist ({totalWishlistItems})</h2>

            {wishlist.length === 0 ? (
                <div className="wishlist-empty">
                    <p>Your wishlist is currently empty.</p>
                    <p className="wishlist-empty-subtitle">
                        Explore our collection and save your favorite items!
                    </p>
                    <button 
                        className="btn-browse-products" 
                        onClick={() => navigate("/")}
                    >
                        Browse Products
                    </button>
                </div>
            ) : (
                <div className="wishlist-product-grid">
                    {wishlist.map((item, i) => (
                        <div key={`${item.id}-${item.selectedColor || i}`} className="wishlist-card">
                            <div className="wishlist-img-wrapper">
                                <img src={item.image} alt={item.title} className="wishlist-img" />
                            </div>
                            
                            <div className="wishlist-details">
                                <h3 className="wishlist-title">{item.title}</h3>
                                {item.selectedColor && (
                                    <span className="wishlist-variant">Color: {item.selectedColor}</span>
                                )}
                                {item.price && (
                                    <p className="wishlist-price">₹{item.price.toLocaleString("en-IN")}</p>
                                )}
                                
                                <div className="wishlist-actions">
                                    <button className="btn-add-cart">Add to Cart</button>
                                    <button 
                                        className="btn-remove-wishlist"
                                        onClick={() => removeFromWishlist(item, item.selectedColor)}
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}

export default Wishlist;