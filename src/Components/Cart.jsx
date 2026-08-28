import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCart } from "./CartContext";
import { faMinus, faPlus, faStar } from "@fortawesome/free-solid-svg-icons";
import emptyCart from "../assets/empty-cart.png";
import { useNavigate } from "react-router-dom";
function Cart(){

    const { cart, updateQuantity, totalPrice } = useCart();
    const navigate = useNavigate();

    function handleShowNow(){
        navigate("/home");
    }

    return (
        <>
            { cart.length > 0 ? (
                <section className="cart-section">
                    <>
                        <div className="cart-products">

                            { cart.map((item, i) => (
                                <div key={i} className="cart-product">
                                    <img 
                                        src={item.image}
                                        height="200px"
                                        width="180px"
                                        style={{ objectFit: "contain" }}
                                    />

                                    <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "8px", alignItems: "flex-start" }}>
                                        <h3>{item.title}</h3>
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

                                    <h2>₹{(item.price * item.quantity).toLocaleString('en-IN')}</h2>
                                </div>
                            )) }

                        </div>

                        <div className="cart-summary-section">

                            <h2 style={{ marginBottom: "10px" }}>Order Summary</h2>
                            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "14px" }}>
                                <p>Subtotal</p>
                                <p>₹{ totalPrice.toLocaleString('en-IN') }</p>
                            </div>

                            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
                                <p>Delivery charges</p>
                                <p>FREE</p>
                            </div>

                            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
                                <p>Platform fees</p>
                                <p>₹15</p>
                            </div>

                            <hr style={{ margin: "10px 0px" }}/>

                            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
                                <h3>Total</h3>
                                <h3>₹{ (totalPrice + 15).toLocaleString("en-IN")}</h3>
                            </div>

                            <button className="checkout-btn btn">
                                Procceed to Checkout
                            </button>
                            
                        </div>
                    </>
                </section>
                ) : 
                (
                    <section className="cart-empty-section">
                        <img 
                            src={emptyCart} 
                            alt="Empty cart"
                            style={{ textAlign: "center" }} 
                            height="120px"
                            width="120px"/>

                            <h2>Your cart is empty!</h2>

                            <button 
                            className="show-now-btn"
                            onClick={() => handleShowNow()}>
                                Shop now
                            </button>
                    </section>
                )
            }
        </>
    )
}
export default Cart;