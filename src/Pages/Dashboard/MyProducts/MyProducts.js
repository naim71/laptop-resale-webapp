import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../AuthContext/AuthProvider';

const MyProducts = () => {
    const { user } = useContext(AuthContext);
    const url = `http://localhost:5000/products/${user.displayName}`;
    
    const { data: myProducts = [], refetch } = useQuery({
        queryKey: ['myProducts', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })


    const handleAdvertise = (id) => {
        fetch(`http://localhost:5000/product/${id}`,{
            method: 'PUT'
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                toast.success('Product Advertised!');
                refetch();
            }
        })
        
    }


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
                                    {product.status === 'available' && product.advertised !== 'true' &&
                                    
                                    <button onClick={()=> handleAdvertise(product._id)} className="btn bg-blue-600 border-none text-white btn-xs normal-case">Advertise</button>
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