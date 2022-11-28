import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../AuthContext/AuthProvider';

const MyOrders = () => {
    const {user} = useContext(AuthContext);

    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url,{
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })

    return (
        <div>
            <p className='text-xl mb-4 text-center font-bold'>My Orders</p>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Image</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            bookings.map((booking,i)=><tr key={i}>
                            <th>{i+1}</th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="w-20 h-20">
                                            <img src={booking.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {booking.productName}
                            </td>
                            <td>{booking.price}</td>
                            <th>
                                <button className="btn btn-primary btn-xs">Pay Now</button>
                            </th>
                        </tr>)
                        }
                        
                    </tbody>
                  

                </table>
            </div>
        </div>
    );
};

export default MyOrders;