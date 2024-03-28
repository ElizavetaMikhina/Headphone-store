import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    const [language, setLanguage] = useState(localStorage.getItem('language') || 'ru');

    const handleLanguageChange = (lang: string) => {
        setLanguage(lang);
        localStorage.setItem('language', lang);
    };

    useEffect(() => {
        const storedLanguage = localStorage.getItem('language');
        if (storedLanguage) {
            setLanguage(storedLanguage);
        }
    }, []);

    return (
        <footer className='footer'>
            <div className="footer__logo">
                <Link to='/catalog'>
                    <h1>QPICK</h1>
                </Link>
            </div>
            <div className="footer__routes">
                <ul className='footer__routes_pages'>
                    <li><a href="#">Избранное</a></li>
                    <li>
                        <Link to='/cart'>Корзина</Link>
                    </li>
                    <li><a href="#">Контакты</a></li>
                </ul>
            </div>
            <div className="footer__setting">
                <p>Условия сервиса</p>
                <ul className='footer__language-selector'>
                    <li><img src="/img/icon/globe.svg" alt="Выбрать язык" /></li>
                    <li>
                        <button 
                            className={language === 'ru' ? 'active' : ''}
                            onClick={() => handleLanguageChange('ru')}
                        >
                            Рус
                        </button>
                    </li>
                    <li>
                        <button 
                            className={language === 'en' ? 'active' : ''}
                            onClick={() => handleLanguageChange('en')}
                        >
                            Eng
                        </button>
                    </li>
                </ul>
            </div>
            <div className="footer__contscts">
                <ul className='footer__contscts-items'>
                    <li>
                        <a href="https://vk.com/"><img src="/img/icon/VK.svg" alt="VK" /></a>
                    </li>
                    <li>
                        <a href="tg://resolve?domain=telegram"><img src="/img/icon/Telegram.svg" alt="Telegram" /></a>
                    </li>
                    <li>
                        <a href="whatsapp://send?phone=1234567890"><img src="/img/icon/Whatsapp.svg" alt="Whatsapp" /></a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer