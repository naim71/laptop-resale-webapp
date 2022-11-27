import React from 'react';

const NewSection = () => {
    return (
        <div className='grid grid-cols-3 gap-4 mt-28'>
            <div className='col-span-2 h-[350px] bg-[#E04600] rounded-xl'>

            </div>
            <div className='h-[350px] bg-slate-700 text-[#FDB028] rounded-xl p-16 relative'>
                <p className='text-3xl font-bold pr-40'>50% off This Week Only</p>
                <img src="https://i.ibb.co/TPLhBrb/laptop-guy-707x564-1.png" className='absolute h-[300px] bottom-0 right-2' alt="" />
            </div>
            
        </div>
    );
};

export default NewSection;