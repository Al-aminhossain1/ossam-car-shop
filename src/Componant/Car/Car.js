import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping, } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Car.css'
const Car = ({ car, handelAddToCart }) => {
    const { name, price, img } = car;

    return (
        <div className='car-container'>
            <img src={img} alt="" />

            <h3>Name:{name}</h3>
            <p>Price:{price}</p>


            <button onClick={() => handelAddToCart(car)} className='add-card'><p className='btn-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faBasketShopping} ></FontAwesomeIcon>
            </button>
        </div>

    );
};

export default Car;