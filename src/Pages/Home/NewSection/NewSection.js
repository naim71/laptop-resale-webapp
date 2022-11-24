import React from 'react';

const NewSection = () => {
    return (
        <div className='grid grid-cols-3 gap-4'>
            <div className='col-span-2 h-[350px] bg-[#E04600] rounded-xl'>

            </div>
            <div className='h-[350px] bg-slate-700 text-white rounded-xl p-16'>
                <p className='text-3xl font-bold'>50% off This Week Only</p>
            </div>
            
        </div>
    );
};

export default NewSection;