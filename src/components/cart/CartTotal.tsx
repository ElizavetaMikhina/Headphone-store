import React from 'react'
import PaymentButton from '../UI/PaymentButton.tsx'

interface CartTotalProps {
    price: number;
    stock?: number;
}

const CartTotal: React.FC<CartTotalProps> = ({ price, stock }) => {
    return (
        <div className='cart__total'>
            <div className="cart__total-price-container">
                <p>Итого</p>
                <p className='cart__total-price'>₽ {stock ? stock : price}</p>
            </div>
            <PaymentButton/>
        </div>
    )
}

export default CartTotal
