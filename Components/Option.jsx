import React from 'react';
import Image from 'next/image'
import pic1 from "../Assets/policy/cash-on-delivery.png"
import pic2 from "../Assets/policy/replacement.png"
import pic3 from "../Assets/policy/money-back-guarantee.png"
import pic4 from "../Assets/policy/original.png"

const Option = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-10 lg:-mt-28' >
            <div className='bg-white p-20 lg:p-10  rounded shadow-lg flex flex-col justify-center items-center' >
                <Image
                    src={pic1}
                    w={100}
                    height={100}
                />
                <h1 className='text-center font-extrabold mt-5'>Cash on Delivery Available</h1>
            </div>
            <div className='bg-white p-20 lg:p-10 rounded shadow-lg flex flex-col justify-center items-center font-extrabold' >
                <Image
                    src={pic2}
                    w={100}
                    height={100}
                />
                <h1 className='text-center mt-5'>7 Days Replacement Policy</h1>
            </div>
            <div className='bg-white p-20 lg:p-10 rounded shadow-lg flex flex-col justify-center items-center font-extrabold' >
                <Image
                    src={pic3}
                    w={100}
                    height={100}
                />
                <h1 className='text-center mt-5'>100% Money Back Guarantee</h1>
            </div>
            <div className='bg-white p-20 rounded shadow-lg flex flex-col justify-center items-center font-extrabold' >
                <Image
                    src={pic4}
                    w={100}
                    height={100}
                />
                <h1 className='text-center mt-5'>100% Original Product</h1>
            </div>
        </div>
    );
};

export default Option;