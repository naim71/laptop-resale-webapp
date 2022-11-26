import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../AuthContext/AuthProvider';
import Modal from './Modal/Modal';
import ProductCard from './ProductCard';

const Products = () => {
    const {user} = useContext(AuthContext);
    const products = useLoaderData();
    const [book, setBook] = useState(null);
    return (
        <div className='grid md:grid-cols-3 sm:grid-cols-1 gap-10 md:gap-5'>
            {
                products.map(product => <ProductCard
                    key={product._id}
                    product={product}
                    setBook={setBook}
                ></ProductCard>)
            }
            {
                book &&

                <Modal
                    book={book}
                    user={user}
                ></Modal>
            }
        </div>
    );
};

export default Products;