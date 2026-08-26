import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCart } from "./CartContext";
import { faMinus, faPlus, faStar } from "@fortawesome/free-solid-svg-icons";
import "./Cart.css";
function Cart(){

    const { cart, updateQuantity, totalPrice } = useCart();

    return (
        <section className="cart-section">

            { cart.length > 0 && (

                <>

                    <div className="cart-products">

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

                                <h3>₹{(item.price * item.quantity).toLocaleString('en-IN')}</h3>
                            </div>
                        )) }

                    </div>

                    <div className="cart-summary-section">

                        <h2 style={{ marginBottom: "5px" }}>Order Summary</h2>
                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "5px" }}>
                            <p>Subtotal</p>
                            <p>₹{ totalPrice.toLocaleString('en-IN') }</p>
                        </div>

                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "5px" }}>
                            <p>Delivery charges</p>
                            <p>FREE</p>
                        </div>

                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "5px" }}>
                            <p>Platform fees</p>
                            <p>₹15</p>
                        </div>

                        <hr style={{ margin: "10px 0px" }}/>

                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "5px" }}>
                            <h3>Total</h3>
                            <h3>₹{ (totalPrice + 15).toLocaleString("en-IN")}</h3>
                        </div>

                        <button className="checkout-btn">
                            Procceed to Checkout
                        </button>
                        
                    </div>

                </>
            )

            }

            
            
        </section>
    )
}
export default Cart;