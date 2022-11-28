import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <section className="bg-primary relative z-10 py-[120px] text-black">
                <div className="container mx-auto">
                    <div className="-mx-4 flex">
                        <div className="w-full px-4">
                            <div className="mx-auto max-w-[400px] text-center">
                                <img src="https://i.ibb.co/QfKFxm7/20824297-6338750-removebg-preview.png" alt="" />
                                <h4 className="mb-3 text-[22px] font-semibold leading-tight ">
                                    Oops! That page can’t be found
                                </h4>
                                <p className="mb-8 text-lg ">
                                    The page you are looking for it maybe deleted
                                </p>
                                <Link
                                    to='/'    
                                    className="hover:text-primary inline-block rounded-lg border border-black px-8 py-3 text-center text-base font-semibold  transition hover:bg-black"
                                >
                                    Go To Home
                                </Link>
                            </div>  
                        </div>
                    </div>
                </div>
                
            </section>


        </div>
    );
};

export default Error;