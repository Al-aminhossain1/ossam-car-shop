import React, { useEffect, useState } from 'react';
import Car from '../Car/Car';
import Cart from '../Cart/Cart';
import './Shop.css'

const Shop = () => {
    const [cars, setCars] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('Fackdata/Products.json')
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])
    function handelAddToCart(car) {

        const newCart = [...cart, car];
        setCart(newCart)

    }
    function handelRemoveToCart() {
        const nowCart = [];
        setCart(nowCart)
    }

    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    cars.map(car => <Car car={car}
                        key={car.id}
                        handelAddToCart={handelAddToCart}
                    ></Car>)
                }

            </div>
            <div className='cart-container'>
                <h1>Order summary</h1>
                {
                    cart.map(product => <Cart cart={product} ></Cart>)
                }

                <button className='remove-btn'>chose 01 for me</button>
                <button className='remove-btn' onClick={handelRemoveToCart}>Remove item</button>
            </div>

        </div>
    );
};

export default Shop;