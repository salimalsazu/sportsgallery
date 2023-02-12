import user from '../Assets/user/PXL_20220310_052614784.MP.jpg'
import Image from 'next/image'
import { BiAddToQueue } from 'react-icons/bi';
import { TbListDetails } from 'react-icons/tb';
import { AiOutlineEdit } from 'react-icons/ai';
import { MdOutlineFavoriteBorder, MdStarRate, MdAutoFixHigh } from 'react-icons/md';
import { TbJewishStar } from 'react-icons/tb';
import Link from 'next/link'

import { useEffect, useState } from 'react';
import { getSession, signIn } from 'next-auth/react';


const Dashboard = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const securePage = async () => {
            const session = await getSession()
            if (!session) {
                signIn()
            } else {
                setLoading(false)
            }
        }
        securePage();
    }, [])


    return (
        <div>
            <div className='grid lg:grid-cols-4 grid-cols-1 justify-center items-center mx-10 mt-10 gap-5' >
                <div className='bg-white flex flex-col justify-center items-center shadow-lg rounded-lg h-20 '>
                    <h1 className='font-extrabold' >Total Order</h1>
                    <p>15</p>
                </div>
                <div className='bg-white flex flex-col justify-center items-center shadow-lg rounded-lg h-20 '>
                    <h1 className='font-extrabold' >Total Customer</h1>
                    <p>15</p>
                </div>
                <div className='bg-white flex flex-col justify-center items-center shadow-lg rounded-lg h-20 '>
                    <h1 className='font-extrabold' >Total Sale</h1>
                    <p>15</p>
                </div>
                <div className='bg-white flex flex-col justify-center items-center shadow-lg rounded-lg h-20 '>
                    <h1 className='font-extrabold' >Total Delivered</h1>
                    <p>15</p>
                </div>
            </div>
            <div className="h-full p-3 lg:space-y-2 lg:w-60 bg-white mt-10 mx-10 rounded-lg shadow-lg">
                <div className="flex items-center p-2 space-x-4">
                    <Image src={user} alt="" className="w-12 h-12 rounded-full dark:bg-gray-500" />
                    <div>
                        <h2 className="text-lg font-semibold">Salim Al Sazu</h2>
                        <span className="flex items-center space-x-1">
                            <a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-400">View profile</a>
                        </span>
                    </div>
                </div>
                <div className="divide-y divide-gray-700">
                    <ul className="pt-2 pb-4 space-y-1 text-sm">
                        <li className='hover:bg-gray-100 hover:rounded ' >
                            <Link rel="noopener noreferrer" href="/dashboard/addproduct" className="flex items-center p-2 space-x-3 rounded-md">
                                <span><BiAddToQueue></BiAddToQueue></span>
                                <span>Add Product</span>
                            </Link>
                        </li>
                        <li className='hover:bg-gray-100 hover:rounded '>
                            <Link rel="noopener noreferrer" href="/dashboard/productdetails" className="flex items-center p-2 space-x-3 rounded-md">
                                <span><TbListDetails></TbListDetails></span>
                                <span>Product Details</span>
                            </Link>
                        </li>
                        <li className='hover:bg-gray-100 hover:rounded '>
                            <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                                <span><MdStarRate></MdStarRate></span>
                                <span>Top Rated Products</span>
                            </a>
                        </li>
                        <li className='hover:bg-gray-100 hover:rounded '>
                            <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                                <span><MdAutoFixHigh></MdAutoFixHigh></span>
                                <span>Tranding Products</span>
                            </a>
                        </li>
                        <li className='hover:bg-gray-100 hover:rounded '>
                            <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                                <span><AiOutlineEdit></AiOutlineEdit></span>
                                <span>Edit or Delete</span>
                            </a>
                        </li>
                        <li className='hover:bg-gray-100 hover:rounded '>
                            <Link rel="noopener noreferrer" href="/dashboard/orders" className="flex items-center p-2 space-x-3 rounded-md">
                                <span><MdOutlineFavoriteBorder></MdOutlineFavoriteBorder></span>
                                <span>Orders</span>
                            </Link>
                        </li>
                        <li className='hover:bg-gray-100 hover:rounded '>
                            <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                                <span><TbJewishStar></TbJewishStar></span>
                                <span>Wishlist</span>
                            </a>
                        </li>
                        <li className='hover:bg-gray-100 hover:rounded '>
                            <a rel="noopener noreferrer" href="/dashboard/requestedproduct" className="flex items-center p-2 space-x-3 rounded-md">
                                <span><TbJewishStar></TbJewishStar></span>
                                <span>Requested Product</span>
                            </a>
                        </li>
                    </ul>

                </div>
            </div >
        </div>
    );
};

export default Dashboard;