import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthContext/AuthProvider';
import Spinner from '../../components/Spinner/Spinner';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import ExtraSection from './ExtraSection';
import NewSection from './NewSection/NewSection';

const Home = () => {
    const {loading} = useContext(AuthContext); 
    const [advertiseItems, setAdvertiseItems] = useState([]);
    useEffect(() => {
        fetch('https://used-product-resale-server-self.vercel.app/products')
            .then(res => res.json())
            .then(data => setAdvertiseItems(data))
    })

    if(loading){
        return <Spinner></Spinner>
    }

    return (
        <div>
            <Banner></Banner>
            <div className='bg-gradient-to-t from-[#f00b51] to-[#7266ff] p-5 my-10 rounded-2xl shadow-2xl'>
            <p className='text-center text-4xl font-bold text-primary mt-2'>Advertised Product</p>
                <div className='grid md:grid-cols-3 gap-2 justify-items-centermx-10 my-10 '>

                    {
                        advertiseItems.map(item => <NewSection
                            key={item._id}
                            item={item}
                        >
                        </NewSection>)
                    }
                </div>


            </div>
            {/* //<NewSection></NewSection> */}
            <Categories></Categories>
            <ExtraSection></ExtraSection>
        </div>
    );
};

export default Home;