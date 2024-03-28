import React from 'react'
import { Link } from 'react-router-dom';

interface IconProps {
    src: string;
    alt: string;
    linkTo: string;
    counter?: number;
}

const Icon: React.FC<IconProps> = ({ src, alt, linkTo, counter = 0 }) => {
    return (
        <div className="icon-conteiner">
            <Link to={linkTo}>
                <img src={src} alt={alt} />
            </Link>
            <div className="counter">{counter}</div>
        </div>
    )
};

export default Icon
