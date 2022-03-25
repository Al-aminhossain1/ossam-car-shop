import React from 'react';
import './Car.css'
const Car = ({ car }) => {
    const { name, price, img } = car;
    console.log(img);
    return (
        <div className='card'>
            <div className='car-container'>
                <img src={img} alt="" />
                <h3>Name:{name}</h3>
                <p>Price:{price}</p>

            </div>
            <div className='btn-cart'>
                <button className='add-card'>Add to Cart</button>
            </div>
        </div>
    );
};

export default Car;