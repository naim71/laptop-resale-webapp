import React from 'react';

const CategoryCard = ({category}) => {
    const {name, image} = category;
    return (
        <div className="card w-96 bg-gradient-to-t from-[#020526] to-[#010B3E] shadow-xl text-white">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl w-full h-60" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <div className="card-actions mt-4">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
    );
};

export default CategoryCard;