import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import './Cart.css'
const Cart = ({ cart, handelChoseToCart }) => {

    const { name, img } = cart;
    const { product, setProduct } = useState({})
    function handelDeleteToSummery() {
        const product = {}

        setProduct(product)

    }
    return (
        <div>

            <h3><img className='order-img' src={img} alt="" />{name}
                <button onClick={handelDeleteToSummery}>
                    <FontAwesomeIcon icon={faDeleteLeft}></FontAwesomeIcon>
                </button>
            </h3>

        </div>
    );
};

export default Cart;