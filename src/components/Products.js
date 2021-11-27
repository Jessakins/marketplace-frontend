import React, { useState, useEffect } from "react"; 

function Products (){
    

    const [products, setProducts] = useState([
        {
            id: 1,
            name: 'Yellowfin Tuna',
            price: '₱380.00/kilo',
            thumb: './img/1.jpg'
        },
        {
            id: 2,
            name: 'Skipjack Tuna',
            price: '₱380.00/kilo',
            thumb: './img/1.jpg'
        },
        {
            id: 3,
            name: 'Yellowfin Tuna',
            price: '₱380.00/kilo',
            thumb: './img/1.jpg'
        },
        {
            id: 4,
            name: 'Skipjack Tuna',
            price: '₱380.00/kilo',
            thumb: './img/1.jpg'
        },
    ]);

    return (
        <>
         <div>{products.map(prod => <div key={prod.name}> {prod.name} </div>)}</div>
        </>)
}

export default Products;
