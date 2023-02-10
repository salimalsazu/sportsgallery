
import { RiArrowDropDownLine } from 'react-icons/ri';
import { BsTelephone } from 'react-icons/bs';

const TopNav = () => {
    return (

        <div className="flex justify-between items-center h-[50px] mx-10">
            <div className='flex gap-14'>
                <div className='flex gap-1  items-center text-sm font-extrabold' >
                    <span className='text-2xl'> <BsTelephone></BsTelephone> </span>
                    <p className='text-[#3467ef] ' >+88 01714 486218</p>
                </div>
                <div className='hidden lg:flex gap-1 items-center animate-bounce' >
                    <h1 className='text-sm  text-[#777]' ><span className='text-[#3467ef] font-extrabold'>Extra 15% OFF</span> Health & Wellness</h1>
                </div>
            </div>
            {/* <div className='flex gap-1 items-center animate-bounce' >
                        <span className='text-lg'><CiDeliveryTruck ></CiDeliveryTruck></span>
                        <h1>Home Delivery available</h1>
                </div> */}
            <div className='hidden lg:flex gap-5 items-center text-sm text-[#777] font-bold' >
                <div >
                    <h1>Track Your Order</h1>
                </div>
                <div>
                    <h1>Help Center</h1>
                </div>
                <div>
                    <div className="dropdown dropdown-hover">
                        <label className='flex items-center' tabIndex={0}>Currency <span><RiArrowDropDownLine className='text-2xl'></RiArrowDropDownLine></span></label>
                        <ul tabIndex={0} className="dropdown-content menu p-2 bg-white text-[#777]">
                            <li><a>USD</a></li>
                            <li><a>BDT</a></li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default TopNav;