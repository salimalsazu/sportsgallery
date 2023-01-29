import { AiFillStar } from 'react-icons/ai';
import Image from 'next/image';
import { GrView } from 'react-icons/gr';
import Link from 'next/link'
import { motion } from "framer-motion";

const SingleTrandingProducts = ({ p }) => {



    return (
        <motion.div
            className="box"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}


        >
            <div className='group relative block overflow-hidden transition ease-in-out delay-150 justify-center ' >
                <Image
                    className="scale-100  hover:scale-105 ease-in duration-500"
                    src={p?.img}
                    width={500}
                    height={500}
                    alt="Picture of the author"
                />

                <div className='absolute  top-0' >
                    {
                        (p.quantity === 0) && <button className='px-4 py-1 z-50 bg-red-600 text-white ' >StockOut</button>
                    }
                </div>
                <div className='absolute -bottom-52 group-hover:bottom-0 right-2 left-2 transition-all duration-500 font-extrabold text-lg flex justify-center items-center ' >
                    <Link href={`/detailspage/${p._id}`} >
                        <button className='bg-yellow-500 flex items-center px-4 gap-1 py-2 text-black mt-20 uppercase' ><span><GrView></GrView></span>Quick View</button>
                    </Link>
                    {/* <button className='bg-yellow-500 flex items-center gap-1 px-4 py-4 text-black mt-20 uppercase' ><span><GrView></GrView></span> Quick View</button> */}
                </div>
            </div>
            <div className='mt-5' >
                <div className='flex justify-between w-64 font-bold'>
                    <h1 className='uppercase text-lg'>{p?.name} </h1>
                    <p className='uppercase text-lg'>${p.price}.00</p>
                </div>
                <hr className=' border-black border-b-inherit mt-2' />
                <div className='flex justify-between items-center  w-64 font-bold mt-2'>
                    <p className='uppercase text-2xl '>Sku {p.sku}</p>
                    <span className='flex'>

                        <AiFillStar></AiFillStar>
                        <AiFillStar></AiFillStar>
                        <AiFillStar></AiFillStar>
                        <AiFillStar></AiFillStar>
                        <AiFillStar></AiFillStar>
                    </span>
                </div>
            </div>
        </motion.div>


    );
};

export default SingleTrandingProducts;