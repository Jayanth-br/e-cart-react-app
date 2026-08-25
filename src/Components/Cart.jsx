import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCart } from "./CartContext";
import { faMinus, faPlus, faStar } from "@fortawesome/free-solid-svg-icons";
import "./Cart.css";
function Cart(){

    const { cart, updateQuantity } = useCart();

    return (
        <section className="cart-section">

            <div>

                { cart.map((item, i) => (
                    <div key={i} className="cart-product">
                        <img 
                            src={item.image}
                            height="200px"
                        />

                        <div>
                            <h4>{item.title}</h4>
                            <p>{item.info}</p>
                            <p 
                                style={{ padding: "0px" }}>
                                <FontAwesomeIcon icon={faStar} 
                                style={{color: "#255fa6"}} 
                            />
                                {item.rating}  ({item.reviews})
                            </p>
                            
                        </div>

                        <div className="product-qty">
                            <button className="qty-btn" onClick={() => updateQuantity(item.id, item.selectedColor, -1)}>
                                <FontAwesomeIcon icon={faMinus} style={{color: "#000",}} />
                            </button>

                            <p className="product-qty-count">{item.quantity}</p>

                            <button className="qty-btn" onClick={() => updateQuantity(item.id, item.selectedColor, 1)}>
                                <FontAwesomeIcon icon={faPlus} style={{color: "#000",}} />
                            </button>
                        </div>

                        <p>₹{(item.price * item.quantity).toLocaleString('en-IN')}</p>
                    </div>
                )) }

            </div>

            <div>
                
            </div>    
            
        </section>
    )
}
export default Cart;