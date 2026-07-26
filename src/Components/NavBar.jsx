import ekartImg from "../assets/ekart.png";
import "./NavBar.css";
function NavBar() {
    return (
        <nav className="nav-bar">
            <div className="nav-left-section">
                <img 
                    src={ekartImg} 
                    width="40" height="40" 
                    className="nav-bar-logo-img"
                    alt="e-kart logo"
                ></img>
                <h1 className="nav-bar-logo-name">e-kart</h1>
            </div>
            

        </nav>
    )
}
export default NavBar;