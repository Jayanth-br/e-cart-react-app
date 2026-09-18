import { useParams } from "react-router-dom";
import ProductDetail from "../Components/ProductDetail";

function Product(){
    const { productId } = useParams();
    return (
        <>
            <ProductDetail productId={productId}/>
        </>
        
    )
}
export default Product;