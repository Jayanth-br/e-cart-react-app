import products from "./../util/products.json"
function ProductDetail({ productId }) {

    const product = products.find((p) => p.id === Number(productId));

    return (

        <>
            {!product && <h1>Product Not Found</h1> }

            { product && 
                <div>
                    <h2>{product.title}</h2>
                    <p>{product.price}</p>
                </div>
                
            
            }
        </>
        
    )
}
export default ProductDetail;