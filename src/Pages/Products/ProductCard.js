import React from 'react';

const ProductCard = ({product}) => {
    const {image, name, price, location, originalPrice, time, seller, usage} = product;
    console.log(product);
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className='w-52 h-52 mx-auto'><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                        <div className="badge badge-secondary">USED</div>
                    </h2>
                    <p> <span className='font-bold'>Location: </span>{location}</p>
                    <p><span className='font-bold'>Price: </span>${price}</p>
                    <p> <span className='font-bold'>Original Price: </span> ${originalPrice}</p>
                    <p><span className='font-bold'>Years of usage: </span>{usage}</p>
                    <div className="card-actions justify-start">
                        <div className="badge badge-outline">Seller: {seller}</div>
                        <div className="badge badge-outline">Posted at {time}</div>
                    </div>
                    <button className='bg-primary mt-4 py-2 rounded-lg hover:bg-gradient-to-t from-[#FDB028] to-[#FDCC4A] font-medium'>Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;