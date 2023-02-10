import React from 'react';

const Discount = () => {
    return (
        <div className='bg-blue-300 mx-10 rounded my-10 hidden lg:block' >
            <div className='flex justify-between items-center h-20 mx-20'>
                <div>
                    <button className='px-6 py-2 bg-white text-gray-500 font-extrabold' >View Sale</button>
                </div>
                <div className='flex gap-2'>
                    <h2 className='text-white text-lg font-extrabold' >ALL NEW FASHION BRANDS ITEMS UP TO 70% OFF</h2>
                    <p className='text-[#777]' >Online Purchases Only</p>
                    <button className='bg-black text-white font-extrabold px-6 py-2 -rotate-6' >Big Sale</button>
                </div>
            </div>
        </div>
    );
};

export default Discount;