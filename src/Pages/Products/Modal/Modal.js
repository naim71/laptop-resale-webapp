import React from 'react';
import toast from 'react-hot-toast';

const Modal = ({ book, user, setBook }) => {
    const { displayName, email } = user;
    const { name, price, image } = book;

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const username = form.username.value;
        const emailaddress = form.email.value;
        const product_name = form.product_name.value;
        const product_price = form.price.value;
        const number = form.number.value;
        const meeting_place = form.meeting_place.value;

        const booking = {
            username,
            email: emailaddress,
            productName: product_name,
            price: product_price,
            phone: number,
            meetingPlace: meeting_place,
            image,
        }
        console.log(booking);

        //sending data to server
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.acknowledged){
                    setBook(null);
                    toast.success('Successfully Booked!')

                }

            })

    }

    return (
        <>
            {user?.uid ?

                <>
                    <input type="checkbox" id="product-modal" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box relative">
                            <label htmlFor="product-modal" className="btn btn-sm btn-primary btn-circle absolute right-2 top-2">✕</label>
                            <h3 className="text-lg font-bold">Product: {name}</h3>

                            <form onSubmit={handleBooking} action="" className='mt-5'>
                                <input name="username" defaultValue={user?.displayName} disabled type="text" placeholder="username" className="input input-bordered input-warning w-full input-sm mt-3" />
                                <input name="email" defaultValue={user?.email} type="email" disabled placeholder="email address" className="input input-bordered input-warning w-full input-sm mt-3" />
                                <input name="product_name" defaultValue={name} disabled type="text" placeholder="product name" className="input input-bordered input-warning w-full input-sm mt-3" />
                                <input name="price" defaultValue={price} disabled type="number" placeholder="120" className="input input-bordered input-warning w-full input-sm mt-3" />
                                <input name="number" type="number" placeholder="phone number" className="input input-bordered input-warning w-full input-sm mt-3" required />
                                <input name="meeting_place" type="text" placeholder="meeting location" className="input input-bordered input-warning w-full input-sm mt-3" required />
                                <input type="submit" className="btn w-full input-sm mt-5 btn-primary rounded-md" value="Submit" />
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