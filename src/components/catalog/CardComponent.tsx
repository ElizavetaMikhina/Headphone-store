import React from 'react'
import { useCounter } from '../../contexts/CounterContext.tsx';

interface CardProps {
    img: string;
    title: string;
    price: number;
    rate: number;
    stock?: number;
}

const CardComponent: React.FC<CardProps> = ({ img, title, price, rate, stock }) => {
    const { increaseCounter } = useCounter();

    const handleBuyButtonClick = () => {
        increaseCounter();
    };

    return (
        <div className="card">
            <div className="card__img-conteiner">
                <img src={img} alt={title} />
            </div>
            <div className="card__content">
                <h3>{title}</h3>
                <div className="card__content__price-conteiner">
                    <p className='price'>{stock ? stock : price} ₽</p>
                    <p className={stock ? 'price--old crossed-out' : 'price--old'}>{stock ? price : ''} ₽</p>
                </div>
                <div className="rating">
                    <img src='/img/icon/star.svg' alt="Рейтинг" className="rating-icon" />
                    <p className='rate'>{rate}</p>
                </div>
                <button 
                    className='buy-botton' 
                    onClick={handleBuyButtonClick}
                >Купить</button>
            </div>
        </div>
    );
}

export default CardComponent