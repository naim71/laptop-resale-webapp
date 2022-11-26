import React from 'react';

const Modal = ({ book, user }) => {
    console.log(user);
    const { name, price } = book;

    return (
        <>
            {user?.uid ?

                <>
                    <input type="checkbox" id="product-modal" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box relative">
                            <label htmlFor="product-modal" className="btn btn-sm btn-primary btn-circle absolute right-2 top-2">✕</label>
                            <h3 className="text-lg font-bold">Product: {name}</h3>

                            <form action="" className='mt-5'>
                                <input type="text" placeholder="username" className="input input-bordered input-warning w-full input-sm mt-3" />
                                <input type="email" placeholder="email address" className="input input-bordered input-warning w-full input-sm mt-3" />
                                <input value={name} disabled type="text" placeholder="product name" className="input input-bordered input-warning w-full input-sm mt-3" />
                                <input value={price} disabled type="number" placeholder="120" className="input input-bordered input-warning w-full input-sm mt-3" />
                                <input type="number" placeholder="phone number" className="input input-bordered input-warning w-full input-sm mt-3" />
                                <input type="text" placeholder="meeting location" className="input input-bordered input-warning w-full input-sm mt-3" />
                                <input type="submit" className=" w-full input-sm mt-5 btn-primary rounded-md" value="Submit" />
                            </form>
                        </div>
                    </div></>
                    :
                    <>
                    <input type="checkbox" id="product-modal" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box relative">
                            <label htmlFor="product-modal" className="btn btn-sm btn-primary btn-circle absolute right-2 top-2">✕</label>

                            </div>
                    </div>
                    </>

        }
        </>
    );
};

export default Modal;