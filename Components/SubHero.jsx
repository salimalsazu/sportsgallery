import React from 'react';
import Image from 'next/image'
import Side1 from '../Assets/Category/ban007.jpg'
import Side2 from '../Assets/Category/ban006.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import { EffectCreative } from "swiper";

const SubHero = () => {
    return (
        <div className='my-10  mx-20'>
            <div className='flex  lg:flex-row flex-col gap-5'>
                <Swiper

                    grabCursor={true}
                    effect={"creative"}
                    creativeEffect={{
                        prev: {
                            shadow: true,
                            translate: [0, 0, -400],
                        },
                        next: {
                            translate: ["100%", 0, 0],
                        },
                    }}
                    modules={[EffectCreative]}
                    className="mySwiper lg:w-1/2"

                >

                    <SwiperSlide className='relative'>
                        <Image
                            src={Side1}
                            height={300}
                            width={500}


                        />
                        <div className='absolute left-0 top-0 ml-5'>
                            <h1 className='font-extrabold text-gray-500 text-5xl mt-10' >Up to 25% OFF</h1>
                            <button className='bg-black px-6 py-2 text-white mt-10' >Details</button>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide className='relative '>
                        <Image
                            src={Side1}
                            height={300}
                            width={500}


                        />
                        <div className='absolute left-0 top-0 ml-5'>
                            <h1 className='font-extrabold animate-pulse text-pink-600 text-5xl mt-10' >Up to 50% OFF</h1>
                            <button className='bg-black px-6 py-2 text-white mt-10' >Details</button>
                        </div>

                    </SwiperSlide>

                </Swiper>

                <Swiper

                    grabCursor={true}
                    effect={"creative"}
                    creativeEffect={{
                        prev: {
                            shadow: true,
                            translate: [-400, 0, 0],
                        },
                        next: {
                            translate: ["100%", 0, 0],
                        },
                    }}
                    modules={[EffectCreative]}
                    className="mySwiper lg:w-1/2 "

                >

                    <SwiperSlide className='relative '>
                        <Image
                            src={Side2}
                            height={300}
                            width={500}


                        />
                        <div className='absolute left-0 top-0 ml-5'>
                            <h1 className='font-extrabold text-white text-5xl mt-10' >Up to 35% OFF</h1>
                            <button className='bg-black px-6 py-2 text-white mt-10' >Details</button>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide className='relative '>
                        <Image
                            src={Side2}
                            height={300}
                            width={500}


                        />
                        <div className='absolute left-0 top-0 ml-5'>
                            <h1 className='font-extrabold animate-pulse text-gray-100 text-5xl mt-10' >Up to 60% OFF</h1>
                            <button className='bg-black px-6 py-2 text-white mt-10' >Details</button>
                        </div>

                    </SwiperSlide>

                </Swiper>

            </div>

        </div>
    );
};

export default SubHero;
