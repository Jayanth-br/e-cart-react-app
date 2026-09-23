import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCart } from "../CartContext";
import { faClipboard, faHeart, faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { useWishlist } from "../WishlistContext";
// import "./DashboardTab.css";

function DashboardTab({ userName = "User" }) {
    const { totalItems } = useCart();
    const { totalWishlistItems } = useWishlist();

    return (
        <section className="dashboard-section">
            <div className="dashboard-welcome">
                <h2>Welcome Back, {userName}</h2>
                <p>Manage your account & check your orders</p>
            </div>

            <div className="dashboard-card-section">
                <div className="dashboard-card orders">
                    <div className="dashboard-card-icon orders-icon">
                        <FontAwesomeIcon icon={faClipboard} />
                    </div>

                    <div className="dashboard-card-info">
                        <p className="card-label">Active Orders</p>
                        <p className="card-value">{totalItems}</p>
                    </div>
                </div>

                <div className="dashboard-card wishlist">
                    <div className="dashboard-card-icon wishlist-icon">
                        <FontAwesomeIcon icon={faHeart} />
                    </div>

                    <div className="dashboard-card-info">
                        <p className="card-label">Wishlist</p>
                        <p className="card-value">{totalWishlistItems}</p>
                    </div>
                </div>

                <div className="dashboard-card completed">
                    <div className="dashboard-card-icon completed-icon">
                        <FontAwesomeIcon icon={faCircleCheck} />
                    </div>

                    <div className="dashboard-card-info">
                        <p className="card-label">Completed</p>
                        <p className="card-value">0</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default DashboardTab;