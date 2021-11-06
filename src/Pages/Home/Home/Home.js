import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppoinmentBannr from '../AppoinmentBanner/AppoinmentBannr';
import Banner from '../Banner/Banner';
import Comunication from '../Comunication/Comunication';
import Services from '../Services/Services';
import bg from '../../../images/bg.png';
import Feature from '../Feature/Feature';
import Footer from '../Footer/Footer';

const Home = () => {
    const bannerBg = {
        backgroundImage:`url(${bg})`,
        bacgroundColor:'rgba(23,0,0,0.1)'
        
    }
    return (
        <div>
            <section style={bannerBg}>
                <Navigation/>
                <Banner/>
            </section>
            <Comunication/>
            <Services/>
            <Feature/>
            <AppoinmentBannr/>
            <Footer/>
        </div>
    );
};

export default Home;