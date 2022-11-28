import React from 'react';

const Spinner = () => {
    return (
        <div className='flex flex-col justify-center items-center my-52'>
            <p className='text-3xl text-center'>Loading...</p>
            <div className="flex items-center justify-center space-x-2">
                <div className="w-4 h-4 rounded-full animate-pulse bg-green-600"></div>
                <div className="w-4 h-4 rounded-full animate-pulse bg-green-600"></div>
                <div className="w-4 h-4 rounded-full animate-pulse bg-green-600"></div>
            </div>
        </div>
    );
};

export default Spinner;