export function ListProducts({products}){
    
    // Je transforme mes Données en balises
    const productsBalises = products.map( (product,i) => {
        return (
            <div key={i} style={{border:"solid black 1px"}}>
                <p> {product.name} </p>
                <p> {product.price} €</p>
                <p> stock:{product.stock} </p>
                <img src={product.img} alt="" />
            </div>
        )
    } );

    // J'affiche mes balises
    return (
        <div>
            { productsBalises }
        </div>
    )
}