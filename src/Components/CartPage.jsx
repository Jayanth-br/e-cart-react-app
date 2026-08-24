import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCart } from "./CartContext";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function CartPage(){

    const { cart, updateQuantity } = useCart();

    return (
        <section className="cart-section">
            { cart.map((item, i) => (
                <div key={i}>
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

                    <div>
                        <button onClick={() => updateQuantity(item.id, item.selectedColor, 1)}>+</button>
                        <p>{item.quantity}</p>
                        <button onClick={() => updateQuantity(item.id, item.selectedColor, -1)}>-</button>
                    </div>

                    <p>₹{(item.price * item.quantity).toLocaleString('en-IN')}</p>
                </div>
            )) }
        </section>
    )
}
export default CartPage;