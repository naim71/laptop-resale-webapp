import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../../components/ConfirmationModal/ConfirmationModal';

const AllBuyers = () => {
    const [deletingBuyer, setDeletingBuyer] = useState(null);

    const closeModal = () => {
        setDeletingBuyer(null);
    }



    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users?role=Buyer');
            const data = await res.json();
            return data;
        }
    });

    
    const handleDeleteBuyer = user => {
        fetch(`http://localhost:5000/user/buyer/${user._id}`, {
            method: 'DELETE', 
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                refetch();
                toast.success(`${user.name} deleted successfully`)
            }
        })
    }



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
                                    <label onClick={() => setDeletingBuyer(user)} htmlFor="confirmation-modal" className="btn btn-sm bg-red-500 text-white">Delete</label>
                                </th>
                            </tr>)
                        }

                    </tbody>


                </table>
            </div>
            {
                deletingBuyer && <ConfirmationModal
                    title={`Are you sure you want to delete?`}
                    message={`Do you want to delete ${deletingBuyer.name}? It cannot be undone.`}
                    successAction={handleDeleteBuyer}
                    successButtonName="Delete"
                    modalData={deletingBuyer}
                    closeModal={closeModal}
                >
                </ConfirmationModal>
            }

        </div>
    );
};

export default AllBuyers;