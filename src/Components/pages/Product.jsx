import { useParams } from "react-router-dom";
import ProductDetail from "../ProductDetail";

function Product(){
    const { productId } = useParams();
    return (
        <>
            <ProductDetail productId={productId}/>
        </>
        
    )
}
export default Product;