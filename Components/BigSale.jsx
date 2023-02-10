import React from 'react';

const BigSale = () => {
    return (
        <div className='bg-slate-50  mx-10 ' >
            <div className='flex flex-col justify-center lg:flex-row lg:justify-between lg:h-[30vh] items-center lg:mx-20' >
                <div className='flex flex-col lg:flex-row p-2 md:p-0'>
                    <div>
                        <button className='bg-black text-white font-extrabold  py-2 px-6 -rotate-3 mt-5' >Big Sale</button>
                    </div>
                    <div className='ml-8 ' >
                        <h1 className='text-3xl font-extrabold text-center ' >Delivering Sports Item </h1>
                        <p className='text-[#777] uppercase mt-2 text-center '>Spotrs Snicker Sports Glass AND MORE</p>
                    </div>
                </div>
                <div>
                    <button className='bg-blue-500 text-white font-bold px-6 py-2 my-2 md:my-0 lg:mt-0' >Shop Now</button>
                </div>
            </div>
        </div>
    );
};

export default BigSale;