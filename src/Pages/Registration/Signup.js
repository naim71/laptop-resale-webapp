import React, { useContext, useRef, useState } from 'react';
import { AuthContext } from '../../AuthContext/AuthProvider';

const Signup = () => {
    const {createUser, updateUserProfile} = useContext(AuthContext);
    const [error, setError] = useState(null);
    const optionRef = useRef();

    const handleSignup = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        const photoURL = 'www.facebook.com';
        const role = optionRef.current.value;

        if(password.length < 6){
            setError('*Password must be at least 6 characters long')
            return;
        }

        if(password !== confirm){
            setError('*Password did not match')
            return;
        }

        // createUser(email, password)
        // .then(result => {
        //     const user = result.user;
        //     console.log(user);
        //     form.reset();
        //     handleUpdateUserProfile(name,photoURL);
        // })
        // .catch(error => {
        //     console.error(error);
        //     setError(error.message);
        // })

    }
    // const handleUpdateUserProfile = (name, photoURL) =>{
    //     const profile = {
    //         displayName: name,
    //         photoURL: photoURL
    //     }
    //     updateUserProfile(profile)
    //     .then(() => {})
    //     .catch(error => console.error(error))
    // }



    return (
        <div>
            <div className=" md:w-full md:max-w-md p-8 space-y-3 rounded-xl bg-gray-50 text-gray-800 mx-auto my-10 shadow-xl">
                <h1 className="text-2xl font-bold text-center">Sign Up</h1>
                <p className='text-sm text-center'>Create a new account</p>
                <form onSubmit={handleSignup} className="space-y-6 ng-untouched ng-pristine ng-valid ng-submitted">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="name" className="block text-gray-600">Name</label>
                        <input type="text" name="name" id="name" placeholder="Your name" className="w-full px-4 py-3 rounded-md border border-primary bg-gray-50 text-gray-800 focus:border-green-600" required />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="email" className="block text-gray-600">Email</label>
                        <input type="email" name="email" id="email" placeholder="Email" className="w-full px-4 py-3 rounded-md border border-primary bg-gray-50 text-gray-800 focus:border-green-600" required />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block text-gray-600">Password</label>
                        <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border border-primary bg-gray-50 text-gray-800 focus:border-green-600" required />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="confirm" className="block text-gray-600">Confirm Password</label>
                        <input type="password" name="confirm" id="confirm" placeholder="Confirm Password" className="w-full px-4 py-3 rounded-md border border-primary bg-gray-50 text-gray-800 focus:border-green-600" required />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label className="label">
                            <span className="label-text">Select Your Account Type:</span>
                        </label>
                        <select ref={optionRef} className="select select-bordered" required>
                            <option>Seller</option>
                            <option>Buyer</option>
                        </select>
                    </div>

                    <p className='text-red-400 text-sm text-center'>{ }</p>
                    <button type='submit' value='Submit' className="block w-full p-3 text-center rounded-sm text-black btn btn-primary normal-case">Sign Up</button>
                </form>

            </div>
        </div>
    );
};

export default Signup;