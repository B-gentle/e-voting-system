import React from 'react';
import './home.css';
import Sidebar from '../Sidebar/Sidebar';
import FirstLayer from './OtherPage/FirstLayer';
import SecondLayer from './OtherPage/SecondLayer';

import Footer from '../footer/Footer';


const Home = () => {

    return (
        <div>
            <div className='home'>
                <div>
                    <Sidebar  />
                </div>
                <div className='otherPage'>
                    <FirstLayer />
                    <SecondLayer />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home