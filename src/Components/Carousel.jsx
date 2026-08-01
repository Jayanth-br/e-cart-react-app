import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
// Assuming you have distinct festive images as implied by panel 1 of the reference image
import festiveDeals from "../assets/carousel/festive-deals.png";
import electronicsSale from "../assets/carousel/festive-deals.png";
import summerOffers from "../assets/carousel/festive-deals.png";
import "./Carousel.css";

// 1. Data remains abstract and easy to manage. Using separate images.
const SLIDES = [
  { id: 1, image: festiveDeals, alt: "e-cart Festive explosive deals banner" },
  { id: 2, image: electronicsSale, alt: "e-cart Electronics super sale banner" },
  { id: 3, image: summerOffers, alt: "e-cart Great discounts sale banner" }
];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = SLIDES.length;

  // Refactored generic change handler using Modulo operator
  // Ensures infinite loop and avoids repetitive logic.
  const handleSlideChange = (direction) => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + direction + totalSlides) % totalSlides
    );
  };

  return (
    // role="region" and aria-roledescription="carousel" are good for advanced accessibility
    <section 
      id="carousel-slider" 
      role="region" 
      aria-roledescription="carousel"
      aria-label="Promotional Banners"
    >
      <button 
        className="left-slider carousel-btn" 
        onClick={() => handleSlideChange(-1)} // Move prev
        aria-label="Previous Slide"
      >
        {/* Updated style to generic brand blue based on reference image */}
        <FontAwesomeIcon icon={faAngleLeft} className="nav-icon" />
      </button>

      <div className="carousel">
        {/* Render all slides at once for smoother CSS animations */}
        {SLIDES.map((slide, index) => (
          <div 
            key={slide.id} 
            className={`slide ${index === currentIndex ? "active" : ""}`}
            aria-hidden={index !== currentIndex}
          >
            <img 
              className="carousel-banner-img" 
              src={slide.image} 
              alt={slide.alt} 
            />
          </div>
        ))}
      </div>

      <button 
        className="right-slider carousel-btn" 
        onClick={() => handleSlideChange(1)} // Move next
        aria-label="Next Slide"
      >
        <FontAwesomeIcon icon={faAngleRight} className="nav-icon" />
      </button>

      {/* NEW: Pagination Dots as seen in the reference image */}
      <div className="carousel-pagination" role="group" aria-label="Slide Selection">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            className={`pagination-dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-selected={index === currentIndex}
          ></button>
        ))}
      </div>
    </section>
  );
}

export default Carousel;