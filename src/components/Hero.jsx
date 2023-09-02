import React from 'react';
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='text-black ' id='hero'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-purple-700 font-bold p-2'>
          GROWING WITH US
        </p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
          Grow with Arts.
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            Join With Us for
          </p>
          <Typed
          className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 text-purple-700'
            strings={['Your', 'Better', 'Future']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>Growing together with us and let's be part of us</p>
        <button className='bg-purple-700 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white'>Get Started</button>
      </div>
    </div>
  );
};

export default Hero;
