import user from '../Assets/user/PXL_20220310_052614784.MP.jpg'
import Image from 'next/image'
import { BiAddToQueue } from 'react-icons/bi';
import { TbListDetails } from 'react-icons/tb';
import { AiOutlineEdit } from 'react-icons/ai';


const dashboard = () => {
    return (
        <div className="h-full p-3 space-y-2 w-60 bg-white mt-10 mx-10 rounded-lg shadow-lg">
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
                        <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                            <span><BiAddToQueue></BiAddToQueue></span>
                            <span>Add Product</span>
                        </a>
                    </li>
                    <li className='hover:bg-gray-100 hover:rounded '>
                        <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                            <span><TbListDetails></TbListDetails></span>
                            <span>Product Details</span>
                        </a>
                    </li>
                    <li className='hover:bg-gray-100 hover:rounded '>
                        <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                            <span><AiOutlineEdit></AiOutlineEdit></span>
                            <span>Edit or Delete</span>
                        </a>
                    </li>
                    <li className='hover:bg-gray-100 hover:rounded '>
                        <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">

                            <span>Orders</span>
                        </a>
                    </li>
                    <li className='hover:bg-gray-100 hover:rounded '>
                        <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                            <span>Wishlist</span>
                        </a>
                    </li>
                </ul>

            </div>
        </div >
    );
};

export default dashboard;