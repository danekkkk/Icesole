const products = [
    {
        id: 1,
        name: "T-shirt 1",
        price: "400zł",
        description: "T-shirt description 1"
    },
    {
        id: 2,
        name: "T-shirt 2",
        price: "100zł",
        description: "T-shirt description 2"
    },
    {
        id: 3,
        name: "T-shirt 3",
        price: "300zł",
        description: "T-shirt description 3"
    },
    {
        id: 4,
        name: "T-shirt 4",
        price: "200zł",
        description: "T-shirt description 4"
    },
]

export function Bestsellers() {
    return (
        <section>
            <h3>Popularne w tym miesiącu</h3>
            <ul>
                {products.map(product => {
                    return <Product product={product} />
                })}
            </ul>
        </section>
    );
}