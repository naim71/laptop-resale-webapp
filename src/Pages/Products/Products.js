import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './ProductCard';

const Products = () => {
    const products = useLoaderData();
    return (
        <div className='grid md:grid-cols-3 sm:grid-cols-1 gap-10 md:gap-5'>
            {
                products.map(product => <ProductCard
                key={product._id}
                product={product}
                ></ProductCard>)
            }
        </div>
    );
};

export default Products;