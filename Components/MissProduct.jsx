import { AiFillStar } from 'react-icons/ai';
import watch from '../Assets/Product/watch.jpg'
import { BsCart4 } from 'react-icons/bs';
import Image from 'next/image';

const MissProduct = () => {
    return (
        <div className='mt-10' >
            <div>
                <h1 className='uppercase font-extrabold text-lg mb-2' >You Miss The Product</h1>
                <hr className='border-gray-900 border-b-0' />
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 justify-center items-center mt-10' >
                <div>
                    <div className='group relative block overflow-hidden transition ease-in-out delay-150 justify-center ' >
                        <Image
                            className="scale-100 hover:scale-105 ease-in duration-500"
                            src={watch}
                            alt="Picture of the author"
                        />
                        <div className='absolute -bottom-52 group-hover:bottom-0 right-2 left-2 transition-all duration-500 font-extrabold text-lg flex justify-center items-center ' >
                            <button className='bg-black flex items-center px-4 gap-1 py-2 text-white mt-20 uppercase' ><span><BsCart4></BsCart4></span>Add to Cart</button>
                            {/* <button className='bg-yellow-500 flex items-center gap-1 px-4 py-4 text-black mt-20 uppercase' ><span><GrView></GrView></span> Quick View</button> */}
                        </div>
                    </div>
                    <div className='mt-5' >
                        <div className='flex justify-between  font-bold'>
                            <h1 className='uppercase text-lg'>Watch</h1>
                            <p className='uppercase text-lg'>$300.00</p>
                        </div>
                        <hr className=' border-black border-b-inherit mt-2' />
                        <div className='flex justify-between items-center font-bold mt-2'>
                            <p className='uppercase text-2xl '>ski</p>
                            <span className='flex'>

                                <AiFillStar></AiFillStar>
                                <AiFillStar></AiFillStar>
                                <AiFillStar></AiFillStar>
                                <AiFillStar></AiFillStar>
                                <AiFillStar></AiFillStar>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MissProduct;