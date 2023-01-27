import React, { useState } from 'react';
import Image from 'next/image'
import user from '../Assets/user/PXL_20220310_052614784.MP.jpg'

const Review = () => {

    const [open, setOpen] = useState(1)


    return (
        <div className='my-20'  >
            <div className="flex items-center uppercase font-extrabold" role="tablist" >
                <a rel="noopener noreferrer" className={"text-xs uppercase px-2 md:px-5 py-3 font-extrabold block leading-normal " +
                    (open === 1
                        ? "font-extrabold bg-black text-white mr-2 "
                        : "font-extrabold text-black mr-2 ")} onClick={(e) => {
                            e.preventDefault()
                            setOpen(1)
                        }}
                    data-toggle="tab"
                    href="#link1"
                    role="tablist"

                >Description</a>


                <a rel="noopener noreferrer" className={"text-xs uppercase px-2 md:px-5 py-3 font-extrabold block leading-normal " +
                    (open === 2
                        ? "font-extrabold bg-black text-white mr-2 "
                        : "font-extrabold text-black mr-2 ")} onClick={(e) => {
                            e.preventDefault()
                            setOpen(2)
                        }}
                    data-toggle="tab"
                    href="#link2"
                    role="tablist">Additional Information</a>

                <a rel="noopener noreferrer" className={"text-xs uppercase px-2 md:px-5 py-3 font-extrabold block leading-normal " +
                    (open === 3
                        ? "font-extrabold bg-black text-white mr-2 "
                        : "font-extrabold text-black mr-2 ")} onClick={(e) => {
                            e.preventDefault()
                            setOpen(3)
                        }}
                    data-toggle="tab"
                    href="#link3"
                    role="tablist">Review</a>

            </div>

            <div className={open === 1 ? "block" : "hidden"} id="link1" >
                <h2 className='text-justify font-extralight md:w-[450px] mt-5'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque neque qui ipsum aperiam, deserunt magnam dolores, iusto quia pariatur voluptatum minus quo? Expedita cum natus hic eaque minima ratione magnam? </h2>

            </div>
            <div className={open === 2 ? "block" : "hidden"} id="link2" >
                <h1><span className='font-extrabold mt-5' >Brand:</span> Microwear</h1>
                <p><span className='font-extrabold mt-5'  >Warranty Information:</span> 6 Months warranty (Please preserve your box to claim warranty)</p>
                <p className='font-extrabold' >Specifications:</p>
                <ul>
                    <li>Screen Size: Bezel Less 2.2-inch Giant IPS Retina HD Display</li>
                    <li>Screen Size: 428*518 pixels</li>
                    <li>RAM/ROM: 192/128 MB</li>
                    <li>Calling Feature: Bluetooth Calling</li>
                    <li>Battery: 450 mAh | Wireless Charging</li>
                </ul>

            </div>
            <div className={open === 3 ? "block" : "hidden"} id="link3" >
                <div className='flex flex-col gap-10' >
                    <div className='flex flex-col items-start mt-10' >
                        <h1 className='uppercase font-lightbold' >1 Review for Smart Watch</h1>

                        <div className='flex items-center gap-5 mt-5' >
                            <Image
                                className='rounded-full w-20 h-20'
                                src={user}
                                alt="Reviewer Image"
                            />
                            <div className='flex flex-col' >
                                <h3>Salim Al Sazu</h3>
                                <p>Date</p>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                    </div>

                    <div className='mt-10'>
                        <form action="">
                            <div className='flex gap-3 items-center ' >
                                <div>
                                    <label className="label">
                                        <span className="label-text"> Name</span>
                                    </label>
                                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                                </div>

                                <div >
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                                </div>
                            </div>

                            <div className='mt-5' >
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <textarea type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                            </div>
                            <button className='px-6 py-1 bg-black text-white mt-5' >Submit</button>
                        </form>
                    </div>
                </div>

            </div>



        </div >
    );
};

export default Review;