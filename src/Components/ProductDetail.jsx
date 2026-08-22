import { useEffect, useState } from "react";
import products from "./../util/products.json";
import "./ProductDetail.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
function ProductDetail({ productId }) {

    const product = products.find((p) => p.id === Number(productId));

    const [selectedColor, setSelectedColor] = useState("");
    const [currentImage, setCurrentImage] = useState(product.image);

    useEffect(() => {
        console.log("Ran Use Effect");
        if(product && product.colors && product.colors.length > 0){
            setSelectedColor(product.colors[0].name);
        }
    }, [product])

    function handleColorPicker(color){
        setSelectedColor(color.name);
        setCurrentImage(color.image);
    }

    return (

        <>
            {!product && <h1>Product Not Found</h1> }

            { product && 
                <section className="product-detail-section">

                    <div className="product-left-section">
                        <img 
                            className="product-image"
                            height="500px"
                            src={currentImage} 
                            alt={product.info} />

                        <p className="product-info">{selectedColor}</p>
                    </div>

                    <div className="product-right-section">
                        <h1>{product.title}</h1>
                        <h2>₹{product.price.toLocaleString('en-IN')}</h2>

                        { product.colors && 
                        <>
                            <p style={{ display: "block" }}>Selected Color: <strong>{selectedColor}</strong></p>

                            <div className="color-selector-section">
                                
                                { product.colors.map((color, idx) =>  ( 
                                    <div 
                                        key={idx} 
                                        style={{ backgroundColor: color.color, outline: `2px solid ${color.color}` }}
                                        className={`product-color-selector ${selectedColor == color.name ? `active` : ""}`}
                                        onClick={() => handleColorPicker(color)}
                                    ></div> ) ) 
                                }
                            </div>
                        </>
                        }

                        <div>
                            <h3 style={{ marginBottom: "5px" }}>Ratings</h3>
                            <p 
                                className="product-rating" style={{ padding: "0px" }}>
                                <FontAwesomeIcon icon={faStar} 
                                style={{color: "#255fa6"}} 
                            />
                            {product.rating}  ({product.reviews})</p>

                            <h3 style={{marginBottom: "5px"}}>Specs</h3>
                            <p className="product-specification">
                                {product.info}
                            </p>
                        </div>

                        

                        <button className="product-page-btn">Add to Cart</button>
                        <button className="product-page-btn">Buy Now</button>
                    </div>

                </section>
                
            }
        </>
        
    )
}
export default ProductDetail;