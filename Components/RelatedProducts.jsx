import { AiFillStar } from 'react-icons/ai';
// import { BsCart4 } from 'react-icons/bs';
import { GrView } from 'react-icons/gr';
import Image from 'next/image';
import Link from 'next/link'

const RelatedProducts = ({ d }) => {
    return (



        <div>
            <div className='group relative block overflow-hidden transition ease-in-out delay-150 justify-center ' >
                <Image
                    className="scale-100 hover:scale-105 ease-in duration-500"
                    src={d.img}
                    width={500}
                    height={500}
                    alt="Picture of the author"
                />

                <div className='absolute  top-0' >
                    {
                        (d.quantity === 0) && <button className='px-4 py-1 z-50 bg-red-600 text-white ' >StockOut</button>
                    }
                </div>
                <div className='absolute -bottom-52 group-hover:bottom-0 right-2 left-2 transition-all duration-500 font-extrabold text-lg flex justify-center items-center ' >
                    {/* <button className='bg-black flex items-center px-4 gap-1 py-2 text-white mt-20 uppercase' ><span><GrView></GrView></span>Quick View</button> */}
                    <Link href={`/detailspage/${d._id}`}>
                        <button className='bg-yellow-500 flex items-center gap-1 px-4 py-4 text-black mt-20 uppercase' ><span><GrView></GrView></span> Quick View</button>

                    </Link>
                </div>
            </div>
            <div className='mt-5' >
                <div className='flex justify-between w-64 font-bold'>
                    <h1 className='uppercase text-lg'>{d.name}</h1>
                    <p className='uppercase text-lg'>${d.price}.00</p>
                </div>
                <hr className=' border-black border-b-inherit mt-2' />
                <div className='flex justify-between items-center  w-64 font-bold mt-2'>
                    <p className='uppercase text-2xl '>sku:{d.sku}</p>
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


    );
};

export default RelatedProducts;    