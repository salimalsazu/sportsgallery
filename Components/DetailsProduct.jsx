import React, { useState } from 'react';
import Image from 'next/image'
import product from '../Assets/Slider/carousel-2.png'
import { AiFillStar } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';
import { BsCart4, BsFillArrowDownSquareFill, BsFillArrowUpSquareFill } from 'react-icons/bs';

const DetailsProduct = ({ data }) => {

    const details = data.watches;
    const [count, setCount] = useState(1)

    const [disabled, setDisabled] = useState(false)

    return (
        <div className='mt-10' >
            <div>
                <h1 className='text-4xl font-extrabold text-gray-800 uppercase' >Shop</h1>
            </div>

            <div className='mt-20 flex flex-col lg:flex-row justify-center items-start gap-5' >
                <div className='lg:w-1/2'>
                    <Image
                        src={details.img}
                        width={500}
                        height={500}
                        alt="product page"

                    />
                </div>

                <div className='lg:w-1/2 flex flex-col gap-3 justify-start' >
                    <h1 className='text-4xl font-extrabold uppercase text-gray-700' >{details.name}</h1>
                    <p className='font-extrabold' >${details.price}.00</p>
                    <div className='flex' >
                        <AiFillStar></AiFillStar>
                        <AiFillStar></AiFillStar>
                        <AiFillStar></AiFillStar>
                        <AiFillStar></AiFillStar>
                        <AiFillStar></AiFillStar>
                    </div>
                    <h2 className='text-justify font-extralight'> {details.description}</h2>


                    <div class="relative rounded-md flex gap-1 items-center">
                        {
                            details.quantity > 1 && <div>
                                <h1 className='font-extrabold' >Select Size</h1>
                                <select onClick={() => { setDisabled(true) }} class="form-input py-2 px-3 leading-5 rounded-md bg-white border placeholder-gray-500 text-gray-700 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-50 active:text-gray-800">
                                    <option>SM</option>
                                    <option>MD</option>
                                    <option>XL</option>
                                </select>
                            </div>
                        }
                    </div>


                    <div class="flex items-center gap-3 ">

                        {
                            details.quantity > 1 && <div>
                                <h1 className='font-extrabold' >Select Color</h1>
                                <label onClick={() => { setDisabled(true) }} class="inline-flex items-center">
                                    <input type="radio" class="form-radio text-indigo-600 transition duration-150 ease-in-out" name="radio-button-example" value="option1" />
                                    <span class="ml-2">Red</span>
                                </label>

                                <label onClick={() => { setDisabled(true) }} class="inline-flex items-center ml-2 ">
                                    <input type="radio" class="form-radio text-indigo-600 transition duration-150 ease-in-out" name="radio-button-example" value="option2" />
                                    <span class="ml-2">White</span>
                                </label>

                                <label onClick={() => { setDisabled(true) }} class="inline-flex items-center ml-2 ">
                                    <input type="radio" class="form-radio text-indigo-600 transition duration-150 ease-in-out" name="radio-button-example" value="option3" />
                                    <span class="ml-2">Gray</span>
                                </label>
                            </div>
                        }
                    </div>



                    <p><span className='font-extrabold' >Stock Now:</span> <span>{details.quantity}</span></p>
                    <p><span className='font-extrabold' >SKU:</span> <span>{details.sku}</span></p>
                    <p><span className='uppercase font-bold' >Category:</span><span className='ml-2' >{details.category}</span></p>
                    <div className='flex  items-center ' >
                        <span  >
                            <AiFillHeart className='text-gray-500'></AiFillHeart>

                        </span>
                        <p className='text-xs' >ADD TO WISHLIST</p>
                    </div>
                    <div>
                        {
                            count === 10 && <h1 className='text-red-600 font-extrabold' > For bulk order, contact with us !!!</h1>
                        }
                    </div>
                    <div className='flex items-center mt-5' >

                        <div  >
                            {
                                details.quantity > 1 && <div className='flex mr-10 items-center border border-gray-600 p-1' >
                                    <p className='mr-5 ' >{count}</p>
                                    <span  >
                                        {
                                            count != 10 ? <> <BsFillArrowUpSquareFill className='text-lg ' onClick={() => { setCount(count + 1) }} ></BsFillArrowUpSquareFill>

                                            </> :
                                                <>
                                                    <BsFillArrowDownSquareFill className='text-lg hidden ' onClick={() => { setCount(count - 1) }} ></BsFillArrowDownSquareFill>
                                                </>
                                        }
                                        {
                                            count === 1 ? <>
                                                <BsFillArrowDownSquareFill className='text-lg hidden ' onClick={() => { setCount(count - 1) }} ></BsFillArrowDownSquareFill>
                                            </>
                                                :
                                                <>
                                                    <BsFillArrowDownSquareFill className='text-lg ' onClick={() => { setCount(count - 1) }} ></BsFillArrowDownSquareFill>
                                                </>
                                        }
                                    </span>
                                </div>
                            }
                        </div>

                        {
                            !disabled ? <button disabled className='bg-gray-300 px-6 py-2 text-white flex items-center' > <BsCart4 className='mr-2' ></BsCart4> Add to Cart</button> :

                                <button className='bg-black px-6 py-2 text-white flex items-center' > <BsCart4 className='mr-2' ></BsCart4> Add to Cart</button>
                        }

                        {
                            details.quantity === 0 && <button className='bg-black px-6 ml-2 py-2 text-white flex items-center' > Request for Stock</button>
                        }

                    </div>


                </div>

            </div>
        </div>

    )
};

export default DetailsProduct;