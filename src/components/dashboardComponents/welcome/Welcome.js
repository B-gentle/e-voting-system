import React from 'react';
import './welcome.css';
import FirstLayer from './FirstLayer';
import SecondLayer from './SecondLayer';

const Welcome = () => {
  return (
    <div className='welcome'>
        <FirstLayer/>
        <SecondLayer/>
    </div>
  )
}

export default Welcome