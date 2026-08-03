import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import festiveDeals from "../assets/carousel/festive-deals.png";
import banner2 from "../assets/carousel/festive-deals.png";
import banner3 from "../assets/carousel/festive-deals.png";
import "./Carousel.css";

const SLIDES = [
  { id: 0, image: festiveDeals, alt: "Festive Deals" },
  { id: 1, image: banner2, alt: "Electronics Sale" },
  { id: 2, image: banner3, alt: "Essentials Offer" },
];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="carousel-wrapper">
      {/* Navigation Buttons */}
      <button className="carousel-btn left-btn" onClick={prevSlide}>
        <FontAwesomeIcon icon={faAngleLeft} />
      </button>

      {/* Track containing all slides */}
      <div className="carousel-viewport">
        <div
          className="carousel-track"
          style={{
            transform: `translateX(calc(-${currentIndex * 80}% + 10%))`,
          }}
        >
          {SLIDES.map((slide, index) => {
            const isActive = index === currentIndex;
            return (
              <div
                key={slide.id}
                className={`carousel-slide ${isActive ? "active" : ""}`}
              >
                <img src={slide.image} alt={slide.alt} />
              </div>
            );
          })}
        </div>
      </div>

      <button className="carousel-btn right-btn" onClick={nextSlide}>
        <FontAwesomeIcon icon={faAngleRight} />
      </button>
    </div>
  );
}

export default Carousel;