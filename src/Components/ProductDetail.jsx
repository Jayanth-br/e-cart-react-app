import products from "./../util/products.json";
import "./ProductDetail.css";
function ProductDetail({ productId }) {

    const product = products.find((p) => p.id === Number(productId));

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

                        <p className="product-info">{product.info}</p>
                    </div>

                    <div className="product-right-section">
                        <h1 style={{ marginBottom: "10px" }}>{product.title}</h1>
                        <h2>₹{product.price.toLocaleString('en-IN')}</h2>


                        <button className="product-page-btn">Add to Cart</button>
                        <button className="product-page-btn">Buy Now</button>
                    </div>

                </section>
                
            }
        </>
        
    )
}
export default ProductDetail;