import React from 'react';
import Image from 'next/image'

const SingleFeatured = ({ p }) => {

    console.log(p)

    return (
        <div className='flex '>
            <Image
                src={p?.img}
                width={80}
                height={80}
                alt="product image"
            />
            <div className='ml-5 flex flex-col gap-3' >
                <h1 className='font-bold text-sm text-gray-600 ' >{p.name}</h1>
                <p className='text-[#777] font-extrabold' >${p.price}.00</p>
            </div>
        </div>
    );
};

export default SingleFeatured;