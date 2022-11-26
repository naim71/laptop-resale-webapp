import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categoriesList')
            .then(res => res.json())
            .then(data => setCategories(data))
    })


    return (
        <div className='mt-16 mb-10'>
            <p className='text-2xl font-bold text-center'>Select Categories</p>
            <div className='grid grid-cols-3 justify-items-center my-20'>
                {
                    categories.map(category => <CategoryCard
                    key={category._id}
                    category={category}
                    ></CategoryCard>)
                }
            </div>
        </div>
    );
};

export default Categories;