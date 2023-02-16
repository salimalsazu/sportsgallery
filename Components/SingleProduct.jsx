import Image from 'next/image';
import { AiFillStar, AiOutlineHeart } from 'react-icons/ai';
import { BsCart4 } from 'react-icons/bs';
import { GrView } from 'react-icons/gr';
import Link from 'next/link'
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Swal from 'sweetalert2'
import { NEXT_URL } from '@/Config';


const SingleProduct = ({ n }) => {
    const { register, handleSubmit } = useForm();
    const [isOpen, setIsOpen] = useState(false);
    const [hide, setHide] = useState(false);

    const OpenModal = () => {
        setIsOpen(!isOpen);
    };


    const onSubmit = (order) => {

        const newOrder = {
            product: n.name,
            productId: n._id,
            sku: n.sku,
            size: n.size,
            color: n.color,
            price: n.price,
            mobile: order.mobile

        }

        console.log(newOrder)

        try {
            setHide(false);
            const res = axios(`${NEXT_URL}/api/orders`, {
                method: "POST",
                headers: {
                    "content-Type": "application/json"
                },
                data: JSON.stringify(newOrder)
            })
            Swal.fire({
                position: 'top',
                icon: 'success',
                title: 'Order Successfully Done',
                showConfirmButton: false,
                timer: 1000
            })
            setHide(true);

        } catch (error) {
            console.log(error);
        }

    }



    return (

        <div>
            <div className='group relative block overflow-hidden transition ease-in-out delay-150 justify-center ' >
                <Image
                    className="scale-100 hover:scale-105 w-full ease-in duration-500"
                    src={n.img}
                    width={250}
                    height={250}
                    alt="Picture of the author"
                />
                <div className='absolute -bottom-52 group-hover:bottom-0 right-2 left-2 transition-all duration-500 font-extrabold text-sm flex justify-center items-center' >
                    <button onClick={OpenModal} className='bg-blue-500 flex items-center gap-1 px-1 py-2  text-white mt-20 text-xs' ><span><BsCart4></BsCart4></span>Buy Now</button>

                    <div className='z-50'>
                        {isOpen && (
                            <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
                                <div className="w-full max-w-md bg-gray-300 rounded p-8">
                                    <form onSubmit={handleSubmit(onSubmit)} action="" className='flex'>
                                        <input

                                            {...register("mobile")}
                                            className="bg-white focus:outline-none focus:shadow-outline border border-gray-100  py-2 px-4 block w-full appearance-none leading-normal"
                                            type="text"
                                            placeholder="Enter Your Mobile Number"
                                        />

                                        <div>
                                            {
                                                hide ? <button type='submit' className=' hidden  px-6 py-2 bg-blue-500 text-white' >Buy</button> :

                                                    <button onClick={() => { setHide(hide) }} type='submit' className='px-6 py-2 bg-blue-500 text-white' >Buy</button>
                                            }
                                        </div>
                                    </form>


                                    <button className="bg-red-400 z-50 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4" onClick={OpenModal}>
                                        Close
                                    </button>
                                    <h1 className='font-extralight text-center text-red-600 animate-pulse' >** Order will be Confirmed by Phone Call</h1>
                                </div>
                            </div>
                        )}


                    </div>

                    <Link href={`/detailspage/${n._id}`}>
                        <button className='bg-yellow-500 flex items-center gap-1 px-1 py-2 text-black mt-20 text-xs ' ><span><GrView></GrView></span> Quick View</button>

                    </Link>
                </div>
            </div>
            <div className='mt-5' >
                <div className=' flex justify-between w-86'>
                    <h1 className='text-[#777]'>{n.name} </h1>
                    <p className='text-[#777]' ><AiOutlineHeart></AiOutlineHeart></p>
                </div>

                <div className='flex flex-col  w-86 mt-2'>
                    <span className='flex text-[#777]'>

                        <AiFillStar></AiFillStar>
                        <AiFillStar></AiFillStar>
                        <AiFillStar></AiFillStar>
                        <AiFillStar></AiFillStar>
                        <AiFillStar></AiFillStar>
                    </span>
                    <div className=' flex justify-between mt-3'>
                        <p className='font-bold text-xl'>${n.price}.00</p>
                        <p className='uppercase text-lg text-[#777]'>Sku: {n.sku}</p>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default SingleProduct;