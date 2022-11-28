import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../../components/ConfirmationModal/ConfirmationModal';

const AllSellers = () => {
    const [deletingSeller, setDeletingSeller] = useState(null);

    const closeModal = () => {
        setDeletingSeller(null);
    }


    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://used-product-resale-server-self.vercel.app/users?role=Seller');
            const data = await res.json();
            return data;
        }
    });

    const handleVerify = (id, name) => {
        fetch(`https://used-product-resale-server-self.vercel.app/users/${id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Seller Verified!😃');
                }
            })

        fetch(`https://used-product-resale-server-self.vercel.app/products/${name}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })

    }

    const handleDeleteSeller = user => {
        fetch(`https://used-product-resale-server-self.vercel.app/users/seller/${user.email}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`${user.name} deleted successfully`)
                }
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
                            users.map((user, i) => <tr key={i}>
                                <th>{i + 1}</th>
                                <td>
                                    {user.name}
                                </td>
                                <td>
                                    {user.email}
                                </td>
                                <td>{user.role}</td>
                                <th>
                                    <label onClick={() => setDeletingSeller(user)} htmlFor="confirmation-modal" className="btn btn-sm bg-red-500 text-white">Delete</label>
                                </th>
                                <th>
                                    {user?.status !== 'verified' && <button onClick={() => handleVerify(user._id, user.name)} disabled={user?.status === 'verified'}
                                        className="btn bg-blue-500 border-none text-white btn-xs normal-case">Verify Seller</button>}
                                </th>
                            </tr>)
                        }

                    </tbody>


                </table>
            </div>
            {
                deletingSeller && <ConfirmationModal
                    title={`Are you sure you want to delete?`}
                    message={`Do you want to delete ${deletingSeller.name}? It cannot be undone.`}
                    successAction={handleDeleteSeller}
                    successButtonName="Delete"
                    modalData={deletingSeller}
                    closeModal={closeModal}
                >
                </ConfirmationModal>
            }
        </div>
    );
};

export default AllSellers; <p>Sellers</p>