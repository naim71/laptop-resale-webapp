import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../AuthContext/AuthProvider';

const MyProducts = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    const url = `http://localhost:5000/products/${user.displayName}`;

    const { data: myProducts = [] } = useQuery({
        queryKey: ['myProducts', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })

    console.log(myProducts);


    return (
        <div>
            <p className='text-xl mb-4 text-center font-bold'>My Products</p>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Status</th>
                            <th>Price</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            myProducts.map((product, i) => <tr key={i}>
                                <th>{i + 1}</th>
                                <td>
                                    {product.name}
                                </td>
                                <td>
                                    {product.status}
                                </td>
                                <td>{product.price}</td>
                                <th>
                                    <button className="btn bg-red-600 border-none text-white btn-xs normal-case">Delete</button>
                                </th>
                                <th>
                                    {product.status === 'available' && 
                                    
                                    <button className="btn bg-blue-600 border-none text-white btn-xs normal-case">Advertise</button>
                                    }
                                    
                                </th>
                            </tr>)
                        }

                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default MyProducts;