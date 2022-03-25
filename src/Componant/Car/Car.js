import React from 'react';
import './Car.css'
const Car = ({ car, handelAddToCart }) => {
    const { name, price, img } = car;

    return (
        <div className='car-container'>
            <img src={img} alt="" />
            <h3>Name:{name}</h3>
            <p>Price:{price}</p>

            <button onClick={() => handelAddToCart(car)} className='add-card'>Add to Cart</button>
        </div>

    );
};

export default Car;