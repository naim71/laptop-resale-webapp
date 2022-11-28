import React, { useContext, useRef } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../AuthContext/AuthProvider';

const AddProduct = () => {
    const { user } = useContext(AuthContext);
    const date = new Date();
    const showTime = date.getHours() + ':' + date.getMinutes() + ":" + date.getSeconds();
    const categoryRef = useRef();
    const conditionRef = useRef();
    const navigate = useNavigate();

    const handleAddProduct = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const details = form.details.value;
        const price = form.price.value;
        const originalPrice = form.originalPrice.value;
        const phone = form.number.value;
        const usage = form.usage.value;
        const location = form.location.value;
        const image = form.image.value;
        const categoryId = categoryRef.current.value;
        const condition = conditionRef.current.value

        const product = {
            name,
            details,
            price,
            originalPrice,
            phone,
            usage,
            location,
            image,
            categoryId,
            condition,
            time: showTime,
            seller: user.displayName,
            report: 'false',
            status: 'available'
        }
        console.log(product);

        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                form.reset();
                if(data.acknowledged){
                    toast.success('Product Added Successfully!')
                    navigate('/dashboard/myproducts')
                }
            }
            )

    }


    return (
        <div className='bg-base-100 p-10 rounded-md'>
            <p className='font-bold text-xl mb-5'>Add a Product:</p>
            <form onSubmit={handleAddProduct} className="space-y-6 ng-untouched ng-pristine ng-valid ng-submitted max-w-2xl mx-auto">
                <div className="space-y-1 text-sm">
                    <label htmlFor="name" className="block text-gray-600">Product Name</label>
                    <input type="text" name="name" id="name" placeholder="Your name" className="w-full px-4 py-3 rounded-md border border-primary bg-gray-50 text-gray-800 focus:border-green-600" required />
                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="details" className="block text-gray-600">Description</label>
                    <input type="text" name="details" id="details" placeholder="Describe your product" className="w-full px-4 py-3 rounded-md border border-primary bg-gray-50 text-gray-800 focus:border-green-600" required />
                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="price" className="block text-gray-600">Price</label>
                    <input type="number" name="price" id="price" placeholder="120" className="w-full px-4 py-3 rounded-md border border-primary bg-gray-50 text-gray-800 focus:border-green-600" required />
                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="originalPrice" className="block text-gray-600">Original Price</label>
                    <input type="number" name="originalPrice" id="originalPrice" placeholder="520" className="w-full px-4 py-3 rounded-md border border-primary bg-gray-50 text-gray-800 focus:border-green-600" required />
                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="number" className="block text-gray-600">Phone number</label>
                    <input type="number" name="number" id="number" placeholder="01612345678" className="w-full px-4 py-3 rounded-md border border-primary bg-gray-50 text-gray-800 focus:border-green-600" required />
                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="usage" className="block text-gray-600">Years of Purchase</label>
                    <input type="number" name="usage" id="usage" placeholder="2" className="w-full px-4 py-3 rounded-md border border-primary bg-gray-50 text-gray-800 focus:border-green-600" required />
                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="location" className="block text-gray-600">Location</label>
                    <input type="text" name="location" id="location" placeholder="Dhaka, Bangladesh" className="w-full px-4 py-3 rounded-md border border-primary bg-gray-50 text-gray-800 focus:border-green-600" required />
                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="image" className="block text-gray-600">Image Link</label>
                    <input type="link" name="image" id="image" placeholder="https://ibb.co/YWxc8Sc" className="w-full px-4 py-3 rounded-md border border-primary bg-gray-50 text-gray-800 focus:border-green-600" required />
                </div>
                <div className="space-y-1 text-sm flex justify-evenly items-center space-x-4">
                    <label className="label">
                        <span className="label-text">Product Condition:</span>
                    </label>
                    <select ref={conditionRef} className="select select-bordered" required>
                        <option>Excellent</option>
                        <option>Good</option>
                        <option>Fair</option>
                    </select>
                    <label className="label">
                        <span className="label-text">Product Category:</span>
                    </label>
                    <select ref={categoryRef} className="select select-bordered" required>
                        <option>01</option>
                        <option>02</option>
                        <option>03</option>
                    </select>
                    <div className='text-slate-400'>
                        <ul>
                            <p>Product Category Name:</p>
                            <li>01. Business Series</li>
                            <li>02. Gaming Series</li>
                            <li>03. Performance Series</li>
                        </ul>
                    </div>
                </div>


                <p className='text-red-400 text-sm text-center'>{ }</p>
                <button type='submit' value='Submit' className="block w-full p-3 text-center rounded-sm text-black btn btn-primary normal-case">Submit</button>
            </form>

        </div>
    );
};

export default AddProduct;