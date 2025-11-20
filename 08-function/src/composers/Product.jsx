const ProductList = () => {
    const products = ["Laptop", "Phone", "Tablet", "Headphones"];

    return (
        <ul>
            {products.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    )
}

export default ProductList