import React from 'react';
import { useLoaderData} from 'react-router-dom';

const Payment = () => {
    const booking = useLoaderData();
    
    return (
        <div>
            <h3 className="text-3xl">Payment for {}</h3>
            <p className="text-xl">Please pay <strong>${booking.price}</strong> for {booking.name}</p>
            
        </div>
    );
};

export default Payment;