import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function ProductCard({title, products}) {
    return (
        <>
            { title && 
                <h2 className="product-list-title">{title}</h2>
            }
            <ul className="product-list">
                {products.map((product) => (
                    <li className="product" key={product.id}>
                        <img src={product.image} alt={product.title} height={220} className="product-img"/>
                        <h3 className="product-title">{product.title}</h3>
                        <p className="product-info">{product.info}</p>
                        <p className="product-rating">
                            <FontAwesomeIcon icon={faStar} style={{color: "#255fa6",}} />
                            {product.rating}  ({product.reviews})</p>
                        <p className="product-price">
                            ₹{product.price.toLocaleString('en-IN')}</p>
                        <button className="add-to-cart-btn">Add to Cart</button>
                    </li>
                ))}
            </ul>
        </>
    )
}
export default ProductCard