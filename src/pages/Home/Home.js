import React from 'react';
import Banner from '../Banner/Banner';

import Customers from '../Customers/Customers';
import ExoticPlaces from '../ExoticPlaces/ExoticPlaces';
import Offers from '../Offers/Offers';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
           
            <Banner></Banner>
            <Services></Services>
            <Offers></Offers>
            <ExoticPlaces></ExoticPlaces>
            <Customers></Customers>
           
        </div>
    );
};

export default Home;