import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <h1 className='w-full text-5xl  font-bold  text-black'>DE<span className='text-purple-700'>K</span>ATIVE<span className='text-purple-700'>.</span></h1>
      <ul className='hidden md:flex text-black font-semibold text-xl'>
        <li> 
          <Link to='hero' className='p-4 hover:text-purple-700 duration-500 '>Home</Link>
          </li>
        <li>
          <Link to='Analytics' smooth={true} duration={500} className='p-4 hover:text-purple-700 duration-500 '>About</Link>
          </li>
        <li><Link to='news' className='p-4 hover:text-purple-700 duration-500 '>Newsletter</Link></li>
        <li><Link to='support' className='p-4 hover:text-purple-700duration-500 '>Support</Link></li>
        <li><Link to='contact' className='p-4 hover:text-purple-700duration-500 '>Contact</Link></li>
  
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose className='text-black' size={40}/> : <AiOutlineMenu className='text-black' size={40} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-gray-100 ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-black m-4'>DE<span className='text-purple-700'>K</span>KATIVE<span className='text-purple-700'>.</span></h1>
        <li> 
          <Link to='hero' className='p-4 hover:text-purple-700 duration-500 text-black'>Home</Link>
          </li>
        <li>
          <Link to='Analytics' smooth={true} duration={500} className='p-4 hover:text-purple-700 duration-500  text-black'>About</Link>
          </li>
        <li><Link to='news' className='p-4 hover:text-purple-700 duration-500  text-black'>Newsletter</Link></li>
        <li><Link to='support' className='p-4 hover:text-purple-700duration-500  text-black'>Support</Link></li>
        <li><Link to='contact' className='p-4 hover:text-purple-700duration-500  text-black'>Contact</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;
