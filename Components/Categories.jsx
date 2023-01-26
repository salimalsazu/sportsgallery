import Image from 'next/image';
import image1 from '../Assets/Category/glass.png'
import image2 from '../Assets/Category/bag.png'
import image3 from '../Assets/Category/snicker.png'
import { RxDoubleArrowRight } from 'react-icons/rx';

const Categories = () => {
    return (
        <div className='my-40 grid grid-cols-1 lg:grid-cols-3 gap-5 mx-10' >
            <div className='group relative block overflow-hidden transition ease-in-out delay-150   bg-lime-100 p-10 h-72' >
                <Image src={image1}
                    alt="image"
                    className='absolute bottom-5 right-5 w-72 scale-100 hover:scale-105 ease-in duration-500'
                />

                <div className='uppercase absolute top-5 left-5 cale-100 hover:scale-105 ease-in duration-500 ' >
                    <h1 className='font-extrabold' >Sports Glass</h1>
                    <p className='flex gap-1 items-center mt-5 cursor-pointer' >Shop <span><RxDoubleArrowRight></RxDoubleArrowRight></span></p>
                </div>

            </div>

            <div className='group relative block  transition ease-in-out delay-150   bg-lime-100 p-10 h-72' >
                <Image src={image2}
                    alt="image"

                    className='absolute bottom-5 right-5 w-72 scale-100 hover:scale-105 ease-in duration-500'
                />

                <div className='uppercase absolute top-5 left-5 scale-100 hover:scale-105 ease-in duration-500 ' >
                    <h1 className='font-extrabold' >Bag</h1>
                    <p className='flex gap-1 items-center mt-5 cursor-pointer' >Shop <span><RxDoubleArrowRight></RxDoubleArrowRight></span></p>
                </div>

            </div>

            <div className='group relative block overflow-hidden transition ease-in-out delay-150   bg-lime-100 p-10 h-72' >
                <Image src={image3}
                    alt="image"

                    className='absolute bottom-5 right-5 w-72 scale-100 hover:scale-105 ease-in duration-500'
                />

                <div className='uppercase absolute top-5 left-5 cale-100 hover:scale-105 ease-in duration-500 ' >
                    <h1 className='font-extrabold' >Snicker</h1>
                    <p className='flex gap-1 items-center mt-5 cursor-pointer' >Shop <span><RxDoubleArrowRight></RxDoubleArrowRight></span></p>
                </div>

            </div>
        </div>
    );
};

export default Categories;