import React, { useState } from 'react'

export interface CartItemProps {
    img: string;
    title: string;
    price: number;
    quantity: number;
    stock?: number;
    updateTotalPrice: (newTotalPrice: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({ img, title, price, quantity, stock, updateTotalPrice }) => {
    const [itemQuantity, setItemQuantity] = useState(quantity);

    const decreaseQuantity = () => {
        if (itemQuantity > 0) {
            setItemQuantity(itemQuantity - 1);
            updateTotalPrice(price * (itemQuantity - 1));
        }
    };

    const increaseQuantity = () => {
        setItemQuantity(itemQuantity + 1);
        updateTotalPrice(price * (itemQuantity + 1));
    };

    return (
        <div className="cart-item">
            <div className="cart-item__image-container">
                <img className="cart-item__image" src={img} alt={title} />
                <div className="cart-item__quantity-container">
                    <button className='cart-item__quantity-minus' onClick={decreaseQuantity}>
                        <img src="/img/icon/minus.svg" alt="убрать" />
                    </button>
                    <p>{itemQuantity ? itemQuantity : quantity}</p>
                    <button className='cart-item__quantity-plus' onClick={increaseQuantity}>
                        <img src="/img/icon/plus.svg" alt="добавить" />
                    </button>
                </div>
            </div>
            <div className="cart-item__details">
                <h3 className="cart-item__name">{title}</h3>
                <p className="cart-item__price">{stock ? stock : price} ₽</p>
            </div>
            <div className="cart-item__delete-container">
                <button>
                    <img src="/img/icon/delete-from-cart.svg" alt="Удалить из корзины" />
                </button>
                <p className="cart-item__price total">{itemQuantity? price * itemQuantity : price * quantity} ₽</p>
            </div>
        </div>
    );
};

export default CartItem
