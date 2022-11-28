import React, { useEffect, useState } from 'react';
import Spinner from '../../components/Spinner/Spinner';

const ExtraSection = () => {
    const [section, setSection] = useState([]);

    useEffect(() => {
        fetch('https://used-product-resale-server-self.vercel.app/sections')
            .then(res => res.json())
            .then(data => setSection(data))
    })
    return (
        <div className='grid md:grid-cols-4  rounded-md bg-[#FDCC4A] md:h-[280px] my-20'>
            {
                section ?
                    <>
                        {
                            section.map((section, i) => <div key={i}
                                section={section} className='flex flex-col items-center justify-center '>
                                <img src={section.icon} alt="" />
                                <p className='text-md font-bold'>{section.title}</p>
                                <p className='text-md font-light'>{section.details}</p>
                            </div>)

                        }

                    </>
                    :
                    <><Spinner></Spinner></>
                    
        }
        </div>
    );
};

export default ExtraSection;