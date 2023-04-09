import React from 'react';
import './Cart.css'

const Cart = (props) => {
    // const cart = props.cart; option: 1
    const {cart} =props 
    return (
        <div className='cart'>
             <h3>Order Summary</h3>
                <h4>Selected Items:{cart.length}</h4>
                <p>Total Price:</p>
                <p>Total Shipping</p>
                <p>Tax</p>
                <h4>Grand Total</h4>
        </div>
    );
};

export default Cart;