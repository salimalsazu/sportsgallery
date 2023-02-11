import React from 'react';
import reader from './error (2).json'
import Lottie from 'lottie-react';

const error = () => {
    return (
        <div className='flex flex-col justify-center items-center mt-10' >
            <h1 className='text-3xl text-[#777] font-extrabold' >OPS... !!!</h1>
            <Lottie className='w-1/2 h-1/2' animationData={reader} loop={true} />
        </div>
    );
};

export default error;
