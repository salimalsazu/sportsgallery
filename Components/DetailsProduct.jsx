import React, { useState } from 'react';
import Image from 'next/image'
import product from '../Assets/Slider/carousel-2.png'
import { AiFillStar } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';
import { BsCart4, BsFillArrowDownSquareFill, BsFillArrowUpSquareFill } from 'react-icons/bs';

const DetailsProduct = () => {

    const [count, setCount] = useState(1)
    return (
        <div className='mt-10' >
            <div>
                <h1 className='text-4xl font-extrabold text-gray-800 uppercase' >Shop</h1>
            </div>

            <div className='mt-20 flex flex-col lg:flex-row justify-center items-start gap-5' >
                <div className='lg:w-1/2'>
                    <Image
                        src={product}
                        alt="product page"

                    />
                </div>

                <div className='lg:w-1/2 flex flex-col gap-3 justify-start' >
                    <h1 className='text-4xl font-extrabold uppercase text-gray-700' >Smart Watch</h1>
                    <p className='font-extrabold' >$300.00</p>
                    <div className='flex' >
                        <AiFillStar></AiFillStar>
                        <AiFillStar></AiFillStar>
                        <AiFillStar></AiFillStar>
                        <AiFillStar></AiFillStar>
                        <AiFillStar></AiFillStar>
                    </div>
                    <h2 className='text-justify font-extralight'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque neque qui ipsum aperiam, deserunt magnam dolores, iusto quia pariatur voluptatum minus quo? Expedita cum natus hic eaque minima ratione magnam? </h2>
                    <p><span className='font-extrabold' >SKU:</span> <span>42</span></p>
                    <p><span className='uppercase font-bold' >Category:</span><span className='ml-2' >Sports</span></p>
                    <div className='flex  items-center ' >
                        <span  >
                            <AiFillHeart className='text-gray-500'></AiFillHeart>

                        </span>
                        <p className='text-xs' >ADD TO WISHLIST</p>
                    </div>

                    <div className='flex items-center mt-5' >

                        <div className='flex mr-10 items-center border border-gray-600 p-1' >
                            <p className='mr-5 ' >{count}</p>
                            <span  >
                                <BsFillArrowUpSquareFill className='text-lg' onClick={() => { setCount(count + 1) }} ></BsFillArrowUpSquareFill>
                                {
                                    count === 1 ? <>
                                        <BsFillArrowDownSquareFill className='text-lg hidden' onClick={() => { setCount(count - 1) }} ></BsFillArrowDownSquareFill>
                                    </>
                                        :
                                        <>
                                            <BsFillArrowDownSquareFill className='text-lg ' onClick={() => { setCount(count - 1) }} ></BsFillArrowDownSquareFill>
                                        </>
                                }
                            </span>
                        </div>

                        <button className='bg-black px-6 py-2 text-white flex items-center' > <BsCart4 className='mr-2' ></BsCart4> Add to Cart</button>

                    </div>


                </div>

            </div>
        </div>

    )
};

export default DetailsProduct;