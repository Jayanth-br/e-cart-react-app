import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCart } from "../CartContext";
import { faClipboard, faHeart, faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { useWishlist } from "../WishlistContext";

function DashboardTab (){

    const { totalItems } = useCart();
    const { totalWishlistItems } = useWishlist();

    return (
        <section className="dashboard-section">
            <div>
                <h2>Welcome Back $UserName</h2>
                <p>Manage your account & check your orders</p>
            </div>

            <div>
                <div className="orders">
                    <div>
                        <FontAwesomeIcon icon={faClipboard} style={{ fontSize: "20px", color: "#255fa6" }}/>
                    </div>

                    <div>
                        <p>Orders</p>
                        <p>{totalItems}</p>
                    </div>
                </div>

                <div className="wishlist">
                    <div>
                        <FontAwesomeIcon icon={faHeart} style={{ fontSize: "20px", color: "#a62525" }}/>
                    </div>

                    <div>
                        <p>Wishlist</p>
                        <p>{totalWishlistItems}</p>
                    </div>
                </div>

                <div className="completed">
                    <div>
                        <FontAwesomeIcon icon={faCircleCheck} style={{ fontSize: "20px", color: "#32a625" }}/>
                    </div>

                    <div>
                        <p>Completed</p>
                        <p>$0$</p>
                    </div>
                </div>

            </div>
            
        </section>
    )
}
export default DashboardTab;