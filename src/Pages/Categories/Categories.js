import React, { useEffect, useState } from 'react';
import Spinner from '../../components/Spinner/Spinner';
import CategoryCard from './CategoryCard';

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://used-product-resale-server-self.vercel.app/categoriesList')
            .then(res => res.json())
            .then(data => setCategories(data))
    })


    return (
        <div className='mt-16 mb-10'>
            <p className='text-2xl font-bold text-center'>Select Categories</p>
            {
                categories ?
                    <div className='grid md:grid-cols-3 justify-items-center my-20'>
                        {
                            categories.map(category => <CategoryCard
                                key={category._id}
                                category={category}
                            ></CategoryCard>)
                        }
                    </div>
                    :
                    <><Spinner></Spinner></>
            }
        </div>
    );
};

export default Categories;