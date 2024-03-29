import React, { useEffect, useState } from 'react'
import CategoryComponent from '../common/CategoryComponent.tsx'
import CartItem, { CartItemProps } from './CartItem.tsx'
import CartTotal from './CartTotal.tsx';
import { useCounter } from '../../contexts/CounterContext.tsx';

interface CartContentProps {
    cartItems: CartItemProps[];
}

const CartContent: React.FC<CartContentProps> = ({ cartItems }) => {
    const { cardItems } = useCounter();
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const newTotalPrice = cardItems.reduce((total, item) => {
            return total + (item.stock ? item.stock : item.price) * item.quantity;
        }, 0);
        setTotalPrice(newTotalPrice);
    }, [cardItems]);

    const updateTotalPrice = (newTotalPrice: number) => {
        setTotalPrice(newTotalPrice);
    };

    return (
        <div className="content">
            <CategoryComponent 
                categoryName="Корзина"
                containerClassName="cart-container"
            >
                <div className="cart-items">
                    {cardItems.map((item, index) => (
                        <CartItem
                            key={index}
                            title={item.title}
                            price={item.stock ? item.stock : item.price}
                            quantity={item.quantity}
                            img={item.img}
                            updateTotalPrice={updateTotalPrice}
                        />
                    ))}
                </div>
                <CartTotal price={totalPrice}></CartTotal>
            </CategoryComponent>
        </div>
    )
}

export default CartContent
