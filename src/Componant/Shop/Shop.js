import React, { useEffect, useState } from 'react';
import Car from '../Car/Car';
import Cart from '../Cart/Cart';
import './Shop.css'

const Shop = () => {
    const [cars, setCars] = useState([])
    const [cart, setcart] = useState([])
    useEffect(() => {
        fetch('Fackdata/Products.json')
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])
    function handelAddToCart(car) {
        const newCart = [...cart, car];
        setcart(newCart)

    }

    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    cars.map(car => <Car car={car} handelAddToCart={handelAddToCart} ></Car>)
                }

            </div>
            <div className='cart-container'>
                <Cart cart={cart} ></Cart>
            </div>

        </div>
    );
};

export default Shop;