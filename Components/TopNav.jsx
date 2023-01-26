import { CiDeliveryTruck } from 'react-icons/ci';
import { TbTruckReturn } from 'react-icons/tb';
import { RiUserFollowLine } from 'react-icons/ri';
import { BsPhoneVibrate } from 'react-icons/bs';

const TopNav = () => {
    return (
        <div className=" bg-gray-300 hidden lg:flex items-center font-extralight h-8 text-xs" >
            <div className="flex gap-4 items-center mx-20">
                <div className='flex gap-1 items-center animate-bounce' >
                    <span className='text-lg'><CiDeliveryTruck ></CiDeliveryTruck></span>
                    <h1>Home Delivery available</h1>
                </div>
                <div className='flex gap-1 items-center' >
                    <span className='text-lg' ><TbTruckReturn></TbTruckReturn></span>
                    <h1>Return Policy</h1>
                </div>
                <div className='flex gap-1 items-center'>
                    <span className='text-lg' ><RiUserFollowLine></RiUserFollowLine></span>
                    <h1>Follow Us</h1>
                </div>
                <div className='flex gap-1 items-center' >
                    <span className='text-lg' > <BsPhoneVibrate></BsPhoneVibrate> </span>
                    <p className='text-red-700 ' >+88 01714 486218</p>
                </div>
            </div>
        </div>
    );
};

export default TopNav;