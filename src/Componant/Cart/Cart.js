

import './Cart.css'
const Cart = ({ cart, }) => {

    const { name, img } = cart;

    return (
        <div>

            <h3><img className='order-img' src={img} alt="" />{name}

            </h3>

        </div>
    );
};

export default Cart;