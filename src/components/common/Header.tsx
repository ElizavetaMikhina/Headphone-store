import React from 'react'
import Icon from '../UI/Icon.tsx';
import { Link } from 'react-router-dom';
import { useCounter } from '../../contexts/CounterContext.tsx';

const Header: React.FC = () => {
    const { counter } = useCounter();

    return (
        <header className="header">
            <Link to='/catalog'>
                <h1>QPICK</h1>
            </Link>
            <nav className="nav">
                <ul>
                    <Icon 
                        src='/img/icon/Heart.svg'
                        alt='избранное' 
                        linkTo='#'
                    />
                    <Icon 
                        src='/img/icon/Basket.svg' 
                        alt='корзина' 
                        linkTo='/cart'
                        counter={counter}
                    />
                </ul>
            </nav>
        </header>
    );
}

export default Header
