import { useEffect, useState } from "react";
import products from "./../util/products.json";
import "./ProductDetail.css";
function ProductDetail({ productId }) {

    const product = products.find((p) => p.id === Number(productId));

    const [selectedColor, setSelectedColor] = useState("");

    useEffect(() => {
        console.log("Ran Use Effect");
        if(product && product.colors.length > 0){
            setSelectedColor(product.colors[0].name);
        }
    }, [])

    function handleColorPicker(color){
        console.log(color);
        setSelectedColor(color);
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
                            src={product.image} 
                            alt={product.info} />

                        <p className="product-info">{selectedColor}</p>
                    </div>

                    <div className="product-right-section">
                        <h1 style={{ marginBottom: "10px" }}>{product.title}</h1>
                        <h2>₹{product.price.toLocaleString('en-IN')}</h2>

                        { product.colors && 
                        <>
                            <p style={{ display: "block" }}>Selected Color: <strong>{selectedColor}</strong></p>

                            <div className="color-selector-section">
                                
                                { product.colors.map((color, idx) =>  ( 
                                    <div 
                                        key={idx} 
                                        style={{ backgroundColor: color.color }}
                                        className={`product-color-selector ${selectedColor == color.name ? `active` : ""}`}
                                        onClick={() => handleColorPicker(color.name)}
                                    ></div> ) ) 
                                }
                            </div>
                        </>                        
                            
                        }

                        <button className="product-page-btn">Add to Cart</button>
                        <button className="product-page-btn">Buy Now</button>
                    </div>

                </section>
                
            }
        </>
        
    )
}
export default ProductDetail;