import React, { useEffect, useState } from 'react';
import Car from '../Car/Car';
import './Shop.css'

const Shop = () => {
    const [cars, setCars] = useState([])
    useEffect(() => {
        fetch('Fackdata/Products.json')
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])

    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    cars.map(car => <Car car={car} ></Car>)
                }

            </div>
            <div className='cart-container'>
                <h1>Order summary</h1>
            </div>

        </div>
    );
};

export default Shop;