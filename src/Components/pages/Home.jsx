import NavBar from "../NavBar";
import products from "../../util/products.json"
import "./Home.css"
function Home() {
    return (
        <>
            <NavBar />
            <section className="home-page-body-section">

                <ul className="product-list">
                    {products.map((product) => {
                        return <li className="product" key={product.id}>
                            <img src={product.image} alt={product.title} height={220} width={220}/>
                            <h4>{product.title}</h4>
                            <p>₹{product.price.toLocaleString('en-IN')}</p>
                        </li>
                    })}
                </ul>

            </section>
        </>
        
    )
}
export default Home;