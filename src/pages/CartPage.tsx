import React from 'react'
import CartContent from '../components/cart/CartContent.tsx';
import headphonesData from '../data/headphonesData.ts';

const CartPage: React.FC = () => {
    const firstHeadphone = headphonesData[0];

    const cartItem = {
        name: firstHeadphone.title,
        price: firstHeadphone.price,
        quantity: 1,
        imageUrl: firstHeadphone.img
    };

    return (
        <div>
            <CartContent cartItems={[cartItem]} />
        </div>
    );
}

export default CartPage
