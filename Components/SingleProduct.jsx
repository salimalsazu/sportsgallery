import Image from 'next/image';
import { AiFillStar } from 'react-icons/ai';
import { BsCart4 } from 'react-icons/bs';
import { GrView } from 'react-icons/gr';
import watch from '../Assets/Product/watch.jpg'
import jacket from '../Assets/Product/Untitled-16.jpg'
import Link from 'next/link'



const SingleProduct = () => {


    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-3' >
            <div>
                <div className='group relative block overflow-hidden transition ease-in-out delay-150 justify-center ' >
                    <Image
                        className="scale-100 hover:scale-105 ease-in duration-500"
                        src={watch}
                        alt="Picture of the author"
                    />
                    <div className='absolute -bottom-52 group-hover:bottom-0 right-2 left-2 transition-all duration-500 font-extrabold text-sm flex ' >
                        <button className='bg-black flex items-center px-4 gap-1 py-4 text-white mt-20 uppercase' ><span><BsCart4></BsCart4></span>Add to Cart</button>


                        <Link href='/detailspage'>
                            <button className='bg-yellow-500 flex items-center gap-1 px-4 py-4 text-black mt-20 uppercase' ><span><GrView></GrView></span> Quick View</button>

                        </Link>
                    </div>
                </div>
                <div className='mt-5' >
                    <div className='flex justify-between w-80 font-bold'>
                        <h1 className='uppercase text-2xl'>sports watch </h1>
                        <p className='uppercase text-2xl'>$550.00</p>
                    </div>
                    <hr className=' border-black border-b-inherit mt-2' />
                    <div className='flex justify-between items-center  w-80 font-bold mt-2'>
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
            <div>
                <div className='group relative block overflow-hidden transition ease-in-out delay-150 justify-center ' >
                    <Image
                        className="scale-100 hover:scale-105 ease-in duration-500"
                        src={jacket}
                        alt="Picture of the author"
                    />
                    <div className='absolute -bottom-52 group-hover:bottom-0 right-2 left-2 transition-all duration-500 flex font-extrabold text-sm ' >
                        <button className='bg-black flex items-center px-4 gap-1 py-4 text-white mt-20 uppercase' ><span><BsCart4></BsCart4></span>Add to Cart</button>
                        <Link href='/detailspage'>

                            <button className='bg-yellow-500 flex items-center gap-1 px-4 py-4 text-black mt-20 uppercase' ><span><GrView></GrView></span> Quick View</button>

                        </Link>
                    </div>
                </div>
                <div className='mt-5' >
                    <div className='flex justify-between w-80 font-bold'>
                        <h1 className='uppercase text-2xl'>sports wtach </h1>
                        <p className='uppercase text-2xl'>$550.00</p>
                    </div>
                    <hr className=' border-black border-b-inherit mt-2' />
                    <div className='flex justify-between items-center  w-80 font-bold mt-2'>
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
    );
};

export default SingleProduct;