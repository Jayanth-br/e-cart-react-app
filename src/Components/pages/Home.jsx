import NavBar from "../NavBar";
import ProductList from "../ProductList";
import products from "../../util/products.json";
import "./Home.css";
import Carousel from "../Carousel";

function Home() {
    return (
        <>
            <NavBar />
            <Carousel />
            <section className="home-page-body-section">
                <ProductList products={products} title={"Featured Products"}/>
            </section>
        </>
        
    )
}
export default Home;