import React from 'react';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import ExtraSection from './ExtraSection';
import NewSection from './NewSection/NewSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <NewSection></NewSection>
            <Categories></Categories>
            <ExtraSection></ExtraSection>
        </div>
    );
};

export default Home;