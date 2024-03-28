import React from 'react'

interface CategoryProps {
    categoryName: string;
    children?: React.ReactNode;
    containerClassName?: string;
}

const CategoryComponent: React.FC<CategoryProps> = ({ categoryName, children, containerClassName }) => {
    return (
        <div className='category'>
            <h2 className="category-name">{categoryName}</h2>
            <div className={containerClassName ? containerClassName : 'card-container'}>
                {children}
            </div>
        </div>
    );
};

export default CategoryComponent
