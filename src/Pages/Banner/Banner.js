import React from 'react';
import image1 from '../../assets/images/laptops.png'
const Banner = () => {
    return (
        <div className="bg-gradient-to-l from-[#FDB028] to-[#FDCC4A] w-full h-[450px] rounded-3xl max-md:flex flex justify-between items-center px-20 shadow-xl mt-10">
            <div className='text-black w-1/2'>
                <h1 className="text-5xl font-bold max-sm:text-md max-sm:mx-auto max-sm:p-5 max-sm:text-center">Find Gaming Laptop at Cheapest Price</h1>
                <p className="py-6 mr-20 max-sm:hidden">Here you will find lots of used gaming laptops at cheapest possible rate. Buy from us and save your money!!</p>
            </div>
            <div className=''>
                <img src={image1} alt="" className='max-sm:hidden'/>
            </div>
        </div>
    );
};

export default Banner;