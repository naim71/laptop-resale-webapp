import React from 'react';

const ProductCard = ({product}) => {
    const {image, name, price, location, originalPrice, time, seller, usage} = product;
    console.log(product);
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                        <div className="badge badge-secondary">USED</div>
                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">{time}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;