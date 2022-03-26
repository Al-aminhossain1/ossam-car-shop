import React, { useEffect, useState } from 'react';
import Car from '../Car/Car';
import Cart from '../Cart/Cart';
import './Shop.css'

const Shop = () => {
    const [cars, setCars] = useState([])
    const [cart, setCart] = useState([])


    useEffect(() => {
        fetch('Products.json')
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])
    function handelAddToCart(car) {

        const newCart = [...cart, car];
        if (newCart.length < 5) {
            setCart(newCart)
        }


    }
    function handelRemoveToCart() {
        const nowCart = [];
        setCart(nowCart)
    }
    function handelChoseToCart() {
        const choseCart = [...cart];
        const randomCart = Math.floor(Math.random() * choseCart.length);
        const yourCart = choseCart[randomCart];
        const choseForMe = [yourCart]
        setCart(choseForMe);



    }

    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    cars.map(car => <Car
                        key={car.id}
                        car={car}
                        handelAddToCart={handelAddToCart}
                    ></Car>)
                }

            </div>
            <div className='cart-container'>
                <h1>Order summary</h1>
                {
                    cart.map(product => <Cart
                        key={product.id}
                        cart={product}
                        handelChoseToCart={handelChoseToCart}
                    ></Cart>)
                }

                <button className='remove-btn' onClick={handelChoseToCart}>chose 01 for me</button>
                <button className='remove-btn' onClick={handelRemoveToCart}>Remove item</button>

            </div>


        </div>
    );
};

export default Shop;