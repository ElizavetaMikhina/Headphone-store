import React from 'react'
import CardComponent from './CardComponent.tsx';
import CategoryComponent from '../common/CategoryComponent.tsx';
import headphonesData from '../../data/headphonesData.ts';
import wirelessHeadphonesData from '../../data/headphonesData.ts';

const CatalogContent: React.FC = () => {
    return (
        <div className="content">
            <CategoryComponent categoryName="Наушники">
                {headphonesData.map((product, index) => (
                    <CardComponent
                        key={index}
                        img={product.img}
                        title={product.title}
                        price={product.price}
                        rate={product.rate}
                        stock={product.stock}
                    />
                ))}
            </CategoryComponent>
            <CategoryComponent categoryName="Беспроводные наушники">
                {wirelessHeadphonesData.map((product, index) => (
                    <CardComponent
                        key={index}
                        img={product.img}
                        title={product.title}
                        price={product.price}
                        rate={product.rate}
                    />
                ))}
            </CategoryComponent>
        </div>
    );
}

export default CatalogContent
