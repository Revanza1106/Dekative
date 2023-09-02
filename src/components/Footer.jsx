import React from 'react';
import {

  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'  id='contact'>
      <div>
        <h1 className='w-full text-3xl font-bold text-black'>DE<span className='text-purple-700'>K</span>ATIVE<span className='text-purple-700'>.</span></h1>
        <p className='py-4 text-purple-700'>Growing together with us.</p>
        <div className='flex justify-between md:w-[75%] my-6'>
            <FaFacebookSquare className='text-purple-700' size={30} />
           <a href="https://www.instagram.com/dekative.team/">
           <FaInstagram className='text-pink-600'  size={30} />
            </a> 
            <FaTwitterSquare className='text-blue-400' size={30} />
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
    <div>
        <h6 className='font-medium text-black'>Solutions</h6>
        <ul className='text-gray-600'>
            <li className='py-2 text-sm '>Analytics</li>
            <li className='py-2 text-sm'>Marketing</li>
            <li className='py-2 text-sm'>Commerce</li>
            <li className='py-2 text-sm'>Insights</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-purple-700'>Support</h6>
        <ul className='text-gray-600'>
            <li className='py-2 text-sm'>Pricing</li>
            <li className='py-2 text-sm'>Documentation</li>
            <li className='py-2 text-sm'>Guides</li>
            <li className='py-2 text-sm'>API Status</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-black'>Company</h6>
        <ul className='text-gray-600'>
            <li className='py-2 text-sm'>About</li>
            <li className='py-2 text-sm'>Blog</li>
            <li className='py-2 text-sm'>Jobs</li>
            <li className='py-2 text-sm'>Press</li>
            <li className='py-2 text-sm'>Careers</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-purple-700'>Legal</h6>
        <ul className='text-gray-600'>
            <li className='py-2 text-sm'>Claim</li>
            <li className='py-2 text-sm'>Policy</li>
            <li className='py-2 text-sm'>Terms</li>
        </ul>
    </div>
      </div>
    </div>
  );
};

export default Footer;
