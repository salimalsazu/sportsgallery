import React, { useState } from 'react';

const trackorder = () => {

    const [type, setType] = useState(false);


    return (
        <div className='flex flex-col justify-center items-center mt-20 ' >
            <div className='flex items-end' >
                <h1 className='uppercase text-4xl font-extrabold' >Track Your Order</h1>
                <hr className='border-yellow-500 border-b-4 w-10 ' />
            </div>
            <div >
                <form action="" className='mt-20 flex flex-col justify-center items-center'>
                    <div>
                        <input onChange={() => { setType(true) }} type="text" placeholder="Type Your Order ID" className="input input-bordered w-full " />
                    </div>

                    <div className='mt-4' >
                        {
                            !type ? <button disabled className='bg-gray-300 px-4 py-1 uppercase text-white' > Track</button> :

                                <button className='bg-black px-4 py-1 uppercase text-white' > Track</button>
                        }
                    </div>
                </form>
            </div>
        </div>
    );
};

export default trackorder;
