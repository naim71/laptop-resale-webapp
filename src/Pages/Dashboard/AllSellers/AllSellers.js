import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllSellers = () => {
    const {data: users = [], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async() =>{
            const res = await fetch('http://localhost:5000/users?role=Seller');
            const data = await res.json();
            return data;
        }
    });

    const handleVerify = (id, name) =>{
        fetch(`http://localhost:5000/users/${id}`,{
            method: 'PUT'
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                toast.success('Seller Verified!😃');
                refetch();
            }
        })

        fetch(`http://localhost:5000/products/${name}`,{
            method: 'PUT'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            })

    }


    return (
        <div>
            <p className='text-xl mb-4 text-center font-bold'>💰 All Sellers</p>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map((user,i)=><tr key={i}>
                            <th>{i+1}</th>
                            <td>
                              {user.name}
                            </td>
                            <td>
                                {user.email}
                            </td>
                            <td>{user.role}</td>
                            <th>
                                <button className="btn bg-red-600 border-none text-white btn-xs normal-case">Delete</button>
                            </th>
                            <th>
                            { user?.status !== 'verified' && <button onClick={()=>handleVerify(user._id, user.name)} className="btn bg-blue-500 border-none text-white btn-xs normal-case">Verify Seller</button>}
                            </th>
                        </tr>)
                        }
                        
                    </tbody>
                  

                </table>
            </div>
        </div>
    );
};

export default AllSellers;<p>Sellers</p>