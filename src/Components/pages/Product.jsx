import { useParams } from "react-router-dom";
import ProductDetail from "../ProductDetail";
import NavBar from "../NavBar";

function Product(){
    const { productId } = useParams();
    return (
        <>
            <NavBar />
            <ProductDetail productId={productId}/>
        </>
        
    )
}
export default Product;