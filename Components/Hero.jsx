import Image from 'next/image';
import slider2 from '../Assets/Slider/carousel-2.png'
import slider3 from '../Assets/Slider/carousel-3.png'
import slider4 from '../Assets/Slider/carousel-4.png'
import { AiFillStar } from 'react-icons/ai';
import { motion } from "framer-motion";


const Hero = () => {


    return (
        <div className="carousel w-full mt-10">
            <div id="slide1" className="carousel-item relative w-full ">


                <motion.div
                    className="box flex flex-col justify-center items-center w-full"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        default: {
                            duration: 0.3,
                            ease: [0, 0.71, 0.2, 1.01]
                        },
                        scale: {
                            type: "spring",
                            damping: 5,
                            stiffness: 100,
                            restDelta: 0.001
                        }
                    }}
                >
                    <h1 className=' text-7xl text-gray-700 text-center font-extrabold uppercase w-auto ' >See Whats New <br /> this winter</h1>
                    <button className='bg-black px-16 py-3 text-white mt-12' >Shop Now</button>
                </motion.div>


                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <Image
                    src={slider2}
                    alt="Picture of the author"
                />

                <motion.div
                    className='flex flex-col absolute right-40 bottom-1/3'
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, type: "tween" }}
                >
                    <div className='flex justify-between w-96 font-bold'>
                        <h1 className='uppercase text-2xl'>smart watch</h1>
                        <p className='uppercase text-2xl'>$150.00</p>
                    </div>
                    <hr className=' border-black border-b-inherit mt-2' />
                    <div className='flex justify-between items-center  w-96 font-bold mt-2'>
                        <p className='uppercase text-2xl '>ski</p>
                        <span className='flex'>

                            <AiFillStar></AiFillStar>
                            <AiFillStar></AiFillStar>
                            <AiFillStar></AiFillStar>
                            <AiFillStar></AiFillStar>
                            <AiFillStar></AiFillStar>
                        </span>
                    </div>
                    <button className='bg-black scroll-px-6 py-3 text-white mt-20' >Shop Now</button>
                </motion.div>



                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">

                <motion.div
                    className='flex flex-col absolute right-40 bottom-1/3'
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, type: "tween" }}
                >
                    <div className='flex justify-between w-96 font-bold'>
                        <h1 className='uppercase text-2xl'>Jacket</h1>
                        <p className='uppercase text-2xl'>$450.00</p>
                    </div>
                    <hr className=' border-black border-b-inherit mt-2' />
                    <div className='flex justify-between items-center  w-96 font-bold mt-2'>
                        <p className='uppercase text-2xl '>ski</p>
                        <span className='flex'>

                            <AiFillStar></AiFillStar>
                            <AiFillStar></AiFillStar>
                            <AiFillStar></AiFillStar>
                            <AiFillStar></AiFillStar>
                            <AiFillStar></AiFillStar>
                        </span>
                    </div>
                    <button className='bg-black scroll-px-6 py-3 text-white mt-20' >Shop Now</button>
                </motion.div>
                <Image
                    src={slider3}
                    alt="Picture of the author"
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">

                <motion.div
                    className='flex flex-col absolute right-28 bottom-1/3'
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, type: "tween" }}
                >
                    <div className='flex justify-between w-96 font-bold'>
                        <h1 className='uppercase text-2xl'>sports sneakers </h1>
                        <p className='uppercase text-2xl'>$550.00</p>
                    </div>
                    <hr className=' border-black border-b-inherit mt-2' />
                    <div className='flex justify-between items-center  w-96 font-bold mt-2'>
                        <p className='uppercase text-2xl '>ski</p>
                        <span className='flex'>

                            <AiFillStar></AiFillStar>
                            <AiFillStar></AiFillStar>
                            <AiFillStar></AiFillStar>
                            <AiFillStar></AiFillStar>
                            <AiFillStar></AiFillStar>
                        </span>
                    </div>
                    <button className='bg-black scroll-px-6 py-3 text-white mt-20' >Shop Now</button>
                </motion.div>
                <Image
                    src={slider4}
                    alt="Picture of the author"
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Hero;