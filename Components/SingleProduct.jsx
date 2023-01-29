import Image from 'next/image';
import { AiFillStar } from 'react-icons/ai';
import { BsCart4 } from 'react-icons/bs';
import { GrView } from 'react-icons/gr';
import Link from 'next/link'
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Swal from 'sweetalert2'


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
            const res = axios('http://localhost:3000/api/orders', {
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
                    width={1000}
                    height={1000}
                    alt="Picture of the author"
                />
                <div className='absolute -bottom-52 group-hover:bottom-0 right-2 left-2 transition-all duration-500 font-extrabold text-sm flex justify-center items-center' >
                    <button onClick={OpenModal} className='bg-black flex items-center px-4 gap-1 py-4 text-white mt-20 uppercase' ><span><BsCart4></BsCart4></span>Buy Now</button>

                    <div className='z-50'>
                        {isOpen && (
                            <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
                                <div className="w-full max-w-md bg-lime-300 rounded p-8">
                                    <form onSubmit={handleSubmit(onSubmit)} action="" className='flex'>
                                        <input

                                            {...register("mobile")}
                                            className="bg-white focus:outline-none focus:shadow-outline border border-gray-300  py-2 px-4 block w-full appearance-none leading-normal"
                                            type="text"
                                            placeholder="Enter Your Mobile Number"
                                        />

                                        <div>
                                            {
                                                hide ? <button type='submit' className=' hidden  px-6 py-2 bg-black text-white' >Buy</button> :

                                                    <button onClick={() => { setHide(hide) }} type='submit' className='px-6 py-2 bg-black text-white' >Buy</button>
                                            }
                                        </div>
                                    </form>


                                    <button className="bg-red-400 z-50 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4" onClick={OpenModal}>
                                        Close
                                    </button>
                                    <h1 className='font-extralight text-center animate-pulse' >** Order will be Confirmed by Phone Call</h1>
                                </div>
                            </div>
                        )}


                    </div>

                    <Link href={`/detailspage/${n._id}`}>
                        <button className='bg-yellow-500 flex items-center gap-1 px-4 py-4 text-black mt-20 uppercase' ><span><GrView></GrView></span> Quick View</button>

                    </Link>
                </div>
            </div>
            <div className='mt-5' >
                <div className='flex justify-between w-86 font-bold'>
                    <h1 className='uppercase text-2xl'>{n.name} </h1>
                    <p className='uppercase text-2xl'>${n.price}.00</p>
                </div>
                <hr className=' border-black border-b-inherit mt-2' />
                <div className='flex justify-between items-center  w-86 font-bold mt-2'>
                    <p className='uppercase text-2xl '>Sku: {n.sku}</p>
                    <span className='flex'>

                        <AiFillStar></AiFillStar>
                        <AiFillStar></AiFillStar>
                        <AiFillStar></AiFillStar>
                        <AiFillStar></AiFillStar>
                        <AiFillStar></AiFillStar>
                    </span>
                </div>
            </div>
        </div>

    );
};

export default SingleProduct;