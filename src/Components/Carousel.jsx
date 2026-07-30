import festiveDeals from "../assets/carousel/festive-deals.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "./Carousel.css";

function Carousel() {
    const [count, setCount] = useState(1);

    function leftBtnHandler(){
        if(count <= 1) setCount(3);
        else setCount(count + 1);
    }

    function rightBtnHandler(){
        if(count >= 3) setCount(1);
        else setCount(count + 1);
    }

    return (
        <section id="carousel-slider">

            <button className="left-slider carousel-btn" onClick={leftBtnHandler}>
                <FontAwesomeIcon icon={faAngleLeft} style={{color: "#000000",}} />
            </button>

            {count == 1 && 
                <div className="carousel">
                    <img className="carousel-banner-img" src={festiveDeals} alt="Festive sale banner" />
                </div>
            }
            
            {count == 2 && 
                <div className="carousel">
                    <img className="carousel-banner-img" src={festiveDeals} alt="" />
                </div>
            }

            {count == 3 && 
                <div className="carousel">
                    <img className="carousel-banner-img" src={festiveDeals} alt="" />
                </div>
            }
            
            <button className="right-slider carousel-btn" onClick={rightBtnHandler}>
                <FontAwesomeIcon icon={faAngleRight} style={{color: "#00000",}} />
            </button>

        </section>
    )
}
export default Carousel