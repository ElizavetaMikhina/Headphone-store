import React from 'react'
import PaymentButton from '../UI/PaymentButton.tsx'

interface CartTotalProps {
    price: number;
}

const CartTotal: React.FC<CartTotalProps> = ({ price }) => {
    return (
        <div className='cart__total'>
            <div className="cart__total-price-container">
                <p>Итого</p>
                <p className='cart__total-price'>₽ {price}</p>
            </div>
            <PaymentButton/>
        </div>
    )
}

export default CartTotal
