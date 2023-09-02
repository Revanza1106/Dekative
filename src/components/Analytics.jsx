import React from 'react';
import Laptop from '../assets/Tak berjudul540_20230816064939.png';

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4' id='Analytics'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Laptop} alt='/' />
        <div className='flex flex-col justify-center'>
          <p className='text-purple-700 font-bold text-xl'>Who We Are ?</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Welcome to our vibrant and innovative DE<span className='text-purple-700'>K</span>ATIVE Community</h1>
          <p>
          a dynamic hub where art, graphic design, video production,and programming seamlessly converge to inspire, create, and elevate. We are more than just a community; we are a collective of passionate individuals who celebrate the fusion of creativity and technology.
          </p>
          <button className='text-white bg-purple-700 w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
