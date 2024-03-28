import React from 'react'
import CategoryComponent from '../common/CategoryComponent.tsx'
import CartItem, { CartItemProps } from './CartItem.tsx'
import CartTotal from './CartTotal.tsx';

interface CartContentProps {
    cartItems: CartItemProps[];
}

const CartContent: React.FC<CartContentProps> = ({ cartItems }) => {
    const firstItemPrice = cartItems.length > 0 ? cartItems[0].price : 0;
    const [totalPrice, setTotalPrice] = React.useState(0);

    const updateTotalPrice = (newTotalPrice: number) => {
        setTotalPrice(newTotalPrice);
    };

    return (
        <div className="content">
            <CategoryComponent 
                categoryName="Корзина"
                containerClassName="cart-container"
            >
                {cartItems.map((item, index) => (
                    <CartItem
                        key={index}
                        name={item.name}
                        price={item.price}
                        quantity={item.quantity}
                        imageUrl={item.imageUrl}
                        updateTotalPrice={updateTotalPrice}
                    />
                ))}
                <CartTotal price={totalPrice ? totalPrice : firstItemPrice}></CartTotal>
            </CategoryComponent>
            
        </div>
    )
}

export default CartContent
