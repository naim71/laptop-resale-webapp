import React from 'react';

const CategoryCard = ({category}) => {
    const {name, image} = category;
    return (
        <div className="w-96 h-96 bg-[#FFFCFB] rounded-3xl shadow-xl text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 mb-10">
                <figure className="px-10 pt-5">
                    <img src={image} alt="Shoes" className="rounded-xl w-full h-60" />
                </figure>
                <div className="items-center text-center">
                    <h2 className="text-center text-[#45409C] font-bold text-2xl my-4">{name}</h2>
                    <div className="">
                        <button className="btn btn-primary btn-sm normal-case">Buy Now</button>
                    </div>
                </div>
            </div>
    );
};

export default CategoryCard;