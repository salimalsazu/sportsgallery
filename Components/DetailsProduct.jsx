import React, { useState } from 'react';
import Image from 'next/image'
import { AiFillStar } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';
import { BsCart4, BsFillArrowDownSquareFill, BsFillArrowUpSquareFill } from 'react-icons/bs';
import axios from 'axios';
import Swal from 'sweetalert2'
import Link from 'next/link'
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

const DetailsProduct = ({ data }) => {
    const { register, handleSubmit } = useForm();
    const router = useRouter();
    const [count, setCount] = useState(1)
    const [disabled, setDisabled] = useState(false)
    const [isOpen, setIsOpen] = useState(false);
    const [hide, setHide] = useState(false);

    const OpenModal = () => {
        setIsOpen(!isOpen);
    };


    const details = data.watches;


    const price = details.price
    const subTotal = count * price;
    const item = count;

    const quantity = details.quantity - count;

    const addToCart = (id) => {

        const cartProduct = {
            subTotal,
            item,
            ...details
        }
        console.log(cartProduct);

        try {

            const res = axios('http://localhost:3000/api/cart', {
                method: "POST",
                headers: {
                    "content-Type": "application/json"
                },
                data: JSON.stringify(cartProduct)
            })

            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Successfully Added',
                showConfirmButton: false,
                timer: 500
            })
            router.push('/cart')

        } catch (error) {
            console.log(error);
        }

        const updateData = {
            quantity
        }


        try {

            const res = axios(`http://localhost:3000/api/watch/${id}`, {
                method: "PUT",
                headers: {
                    "content-Type": "application/json"
                },
                data: JSON.stringify(updateData)
            })

        } catch (error) {
            console.log(error);
        }


    }



    const onSubmit = (data) => {

        const stock = {
            name: details.name,
            price: details.price,
            productIdd: details._id,
            sku: details.sku,
            category: details.category,
            color: details.color,
            img: details.img,
            mobile: data.mobile
        }

        console.log(stock)

        try {
            setHide(false);
            const res = axios('http://localhost:3000/api/stocks', {
                method: "POST",
                headers: {
                    "content-Type": "application/json"
                },
                data: JSON.stringify(stock)
            })
            Swal.fire({
                position: 'top',
                icon: 'success',
                title: 'Thanks for Requesting',
                showConfirmButton: false,
                timer: 2000
            })
            setHide(true);

        } catch (error) {
            console.log(error);
        }
    }


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
                            details.quantity >= 1 && <div>
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
                            details.quantity >= 1 && <div>
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
                    <div >
                        {
                            count === 10 ? <h1 className='text-red-600 font-extrabold' > For bulk order, contact with us !!!</h1> :

                                <h1 className='text-[#777]' >Shipping Charge Starts From $10.00</h1>
                        }
                    </div>
                    <div className='my-2' >
                        {
                            count >= 1 && <h1>SubTotal: ${subTotal}.00</h1>
                        }
                    </div>
                    <div className='flex items-center mt-5' >

                        <div  >
                            {
                                details.quantity >= 1 && <div className='flex mr-10 items-center border border-gray-600 p-1' >
                                    <p className='mr-5 ' >{count}</p>
                                    <span  >
                                        {
                                            count != 10 && details.quantity > count ? <> <BsFillArrowUpSquareFill className='text-lg ' onClick={() => { setCount(count + 1) }} ></BsFillArrowUpSquareFill>

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

                                <Link href="#">
                                    <button onClick={() => addToCart(details._id)} className='bg-black px-6 py-2 text-white flex items-center' > <BsCart4 className='mr-2' ></BsCart4> Add to Cart</button>
                                </Link>
                        }

                        <div className='z-50'>
                            {isOpen && (
                                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
                                    <div className="w-full max-w-md bg-gray-200 rounded p-8">
                                        <form onSubmit={handleSubmit(onSubmit)} action="" className='flex'>
                                            <input

                                                {...register("mobile")}
                                                className="bg-white focus:outline-none focus:shadow-outline border border-gray-300  py-2 px-4 block w-full appearance-none leading-normal"
                                                type="text"
                                                placeholder="Enter Your Mobile Number"
                                            />

                                            <div>
                                                {
                                                    hide ? <button type='submit' className=' hidden  px-6 py-2 bg-blue-500 text-white' >Request</button> :

                                                        <button onClick={() => { setHide(hide) }} type='submit' className='px-6 py-2 bg-blue-500 text-white' >Request</button>
                                                }
                                            </div>
                                        </form>


                                        <button className="bg-red-400 z-50 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4" onClick={OpenModal}>
                                            Close
                                        </button>
                                    </div>
                                </div>
                            )}


                        </div>


                        {
                            details.quantity === 0 && <button onClick={OpenModal} className='bg-black px-6 ml-2 py-2 text-white flex items-center' > Request for Stock</button>
                        }

                    </div>


                </div>

            </div>

        </div>

    )
};

export default DetailsProduct;