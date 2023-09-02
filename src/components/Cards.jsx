import React from 'react';




import supportImg from '../assets/png_20230816_214035_0000.png'

const Cards = () => {
  return (
  <div name='support' className='w-full mt-24 ' id='support'>
      <div className='w-full h-[700px] bg-gray-900/90 absolute'>
        <img className='w-full h-full object-cover mix-blend-overlay' src={supportImg} alt="/" />
      </div>
      
      <div className='max-w-[1240px] mx-auto text-white relative'>
          <div className='px-4 py-12'>
              <h2 className='text-3xl pt-8 text-slate-300 uppercase text-center'>Support</h2>
              <h3 className='text-5xl font-bold py-6 text-center'>Growing together with us</h3>
              <p className='py-4 text-3xl text-slate-300'>At DEKATIVE, we are more than just a organization we are a creative powerhouse that thrives on innovation and excellence. With a passion for design, a flair for video production, and a knack for cutting-edge programming.</p>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8'>
                     
                      <h3 className='font-bold text-2xl my-6'>Design</h3>
                      <p className='text-gray-600 text-xl'>Embark on a creative journey that covers Graphic Design, Art Design, and Illustrator three dynamic disciplines that blend artistic expression with practical skills.</p>
                  </div>
                  <div className='bg-slate-100 pl-8 py-4'>
                      <p className='flex items-center text-purple-700'>Contact Us </p>
                  </div>
              </div>
              <div className='bg-gray-200 rounded-xl shadow-2xl'>
                  <div className='p-8'>
                     
                      <h3 className='font-bold text-2xl my-6'>Video Production</h3>
                      <p className='text-gray-600 text-xl'>Step into the dynamic realm of Video Production, where creativity meets technology to craft compelling visual stories. from concept to final edit,.</p>
                  </div>
                  <div className='bg-slate-100 pl-8 py-4'>
                      <p className='flex items-center text-purple-700'>Contact Us </p>
                  </div>
              </div>
              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8'>
                     
                      <h3 className='font-bold text-2xl my-6'>Programming</h3>
                      <p className='text-gray-600 text-xl'>Embark on a fascinating journey of Web Programming,This comprehensive Community is your gateway to mastering web development.</p>
                  </div>
                  <div className='bg-slate-100 pl-8 py-4'>
                      <p className='flex items-center text-purple-700'>Contact Us</p>
                  </div>
              </div>
          </div>
      </div>
  </div>
  );
};

export default Cards;