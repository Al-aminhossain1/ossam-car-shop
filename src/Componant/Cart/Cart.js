import React from 'react';

const Cart = ({ cart }) => {
    console.log(cart)
    return (
        <div>
            <h1>Order summary</h1>
            {
                cart.map(product => <h3>name:{product.name}</h3>)
            }
        </div>
    );
};

export default Cart;