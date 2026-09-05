import ekartImg from "../assets/ekart.png";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faMagnifyingGlass, faCircleUser, faHeart } from '@fortawesome/free-solid-svg-icons';
import { useCart } from "./CartContext";
import { useNavigate } from "react-router-dom";
import LocationPicker from "./LocationPicker";

function NavBar() {

    const navigate = useNavigate();
    const { totalItems } = useCart();

    function handleCart(){
        navigate("/cart");
    }

    function onClickLogo(){
        navigate("/home");
    }

    function onClickProfile(){
        navigate("/account");
    }

    return (
        <nav className="nav-bar">
            <div className="nav-left-section" onClick={() => onClickLogo()}>
                <img 
                    src={ekartImg} 
                    width="40" height="40" 
                    className="nav-bar-logo-img"
                alt="e-kart logo"
                />
                <h1 className="nav-bar-logo-name">e-kart</h1>
                
            </div>            

            <div className="nav-bar-middle-section">
                <input 
                    type="text" 
                    id="nav-search-bar" 
                    className="search-bar" 
                    placeholder="Search for Products..."
                />
                <button className="nav-bar-search-btn" title="Search">
                    <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#255fa6", fontSize: "18px"}} />
                </button>
            </div>

            <div className="nav-bar-right-section">

                <LocationPicker />

                <button className="wishlist-btn nav-bar-btn" title="Wishlist">
                    <FontAwesomeIcon icon={faHeart} style={{color: "#ffffff",}} />
                </button>

                <button className="cart-btn nav-bar-btn" title="Cart" onClick={() => handleCart()}>
                    <FontAwesomeIcon icon={faCartShopping} /> 
                    { totalItems > 0 ? (<sup className="cart-items-count">{totalItems}</sup>)   : "" }
                </button>

                <button className="profile-btn nav-bar-btn" title="Account" onClick={() => onClickProfile()}>
                    <FontAwesomeIcon icon={faCircleUser} style={{color: "#ffffff", fontSize:"20px"}} />
                </button>

            </div>
        </nav>
    );
}

export default NavBar;