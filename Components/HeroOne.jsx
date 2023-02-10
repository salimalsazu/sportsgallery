import React from 'react';
import Image from 'next/image'
import smartwatch from '../Assets/Slider/carousel-2.png'

const HeroOne = () => {
    return (
        <div className='bg-teal-50 lg:h-[120vh] ' >
            <div className=' flex flex-col lg:flex-row lg:justify-between justify-center items-center lg:mx-10' >
                <div className='text-center lg:text-left' >
                    <p className='text-[#777]' >Shop for our products at exclusive price </p>
                    <h1 className='lg:text-5xl font-extrabold my-3' >Digital Smart Watch</h1>
                    <h3 className='lg:text-8xl font-extrabold' >35% OFF</h3>
                    <button className='px-6 py-2  lg:py-4 bg-blue-600 text-white font-extrabold lg:mt-10' >Buy Now</button>
                </div>
                <div className='flex relative mt-10 lg:mt-0'>
                    <div>
                        <Image
                            src={smartwatch}
                            alt="Smart Watch"
                        />
                    </div>
                    <div className='font-extrabold absolute lg:bottom-10 lg:right-5 right-1'>
                        <p>From $350.00</p>
                        <div className='flex items-center mt-2' >
                            <span className='mr-2'>to</span>
                            <button className='bg-red-400 text-white px-6 py-2 -rotate-3' >$227.00</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default HeroOne;

