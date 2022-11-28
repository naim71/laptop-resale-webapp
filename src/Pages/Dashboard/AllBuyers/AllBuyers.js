import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllBuyers = () => {
    const {data: users = [], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async() =>{
            const res = await fetch('http://localhost:5000/users?role=Buyer');
            const data = await res.json();
            return data;
        }
    });
    return (
        <div>
        <p className='text-xl mb-4 text-center font-bold'>🛒 All Buyers</p>
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
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
                    </tr>)
                    }
                    
                </tbody>
              

            </table>
        </div>
    </div>
    );
};

export default AllBuyers;