import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({category}) => {
    const {name, image, categoryId} = category;
    return (
        <Link to={`/category/${categoryId}`} className="md:w-96 h-96 bg-[#FFFCFB] rounded-3xl shadow-xl text-white md:transition md:ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 mb-10 mx-auto">
                <figure className="px-10 pt-5">
                    <img src={image} alt="Shoes" className="rounded-xl w-full h-60" />
                </figure>
                <div className="items-center text-center">
                    <h2 className="text-center text-[#45409C] font-bold text-2xl my-4">{name}</h2>
                    {/* <div className="">
                        <button className="btn btn-primary btn-sm normal-case">Buy Now</button>
                    </div> */}
                </div>
            </Link>
    );
};

export default CategoryCard;