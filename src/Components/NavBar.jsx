import ekartImg from "../assets/ekart.png";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faMagnifyingGlass, faCircleUser, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { useCart } from "./CartContext";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function NavBar() {

    const navigate = useNavigate();
    const { totalItems } = useCart();
    const [location, setLocation] = useState({});

    function handleCart(){
        navigate("/cart");
    }

    useEffect(() => {
        if(!navigator.geolocation){
            console.error("Geolocation is not supported in your browser");
            return;
        }

        const options = {
            enableHighAccuracy: true, // Uses GPS if available
            timeout: 5000,           // Max wait time (5 sec)
            maximumAge: 0
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude, accuracy } = position.coords;
                console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
                console.log(`Accuracy within ${accuracy} meters`);
                setLocation({ latitude: latitude, longitude: longitude, accuracy: accuracy });
            }, (error) => {
                switch(error.code) {
                    case error.PERMISSION_DENIED: 
                        console.error("User denied the request for Geolocation.");
                        break;
                    case error.POSITION_UNAVAILABLE:
                        console.error("Location information unavailiable");
                        break;
                    case error.TIMEOUT:
                        console.error("Timed out to get user location");
                        break;
                }
            }, options)
    }, [])

    return (
        <nav className="nav-bar">
            <div className="nav-left-section">
                <img 
                    src={ekartImg} 
                    width="40" height="40" 
                    className="nav-bar-logo-img"
                    alt="e-kart logo"
                />
                <h1 className="nav-bar-logo-name">e-kart</h1>
                {location.latitude} {location.longitude} {location.accuracy}  <FontAwesomeIcon icon={faLocationDot} style={{color: "#ffffff",}} />
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

                <button className="order-btn nav-bar-btn" title="Orders">
                    Orders
                </button>

                <button className="cart-btn nav-bar-btn" title="Cart" onClick={() => handleCart()}>
                    <FontAwesomeIcon icon={faCartShopping} /> 
                    { totalItems > 0 ? (<span className="cart-items-count">{totalItems}</span>)   : "" }
                </button>

                <button className="profile-btn nav-bar-btn" title="Profile">
                    <FontAwesomeIcon icon={faCircleUser} style={{color: "#ffffff", fontSize:"20px"}} />
                </button>

            </div>
        </nav>
    );
}

export default NavBar;