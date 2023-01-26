import SingleProduct from './SingleProduct';



const WhatsNew = () => {
    return (
        <div className='flex flex-col lg:flex-row justify-center items-center mx-10 mt-20' >
            <div>
                <div className='uppercase w-96' >
                    <h1 className='text-5xl font-extrabold' >Our Latest <br /> Product</h1>
                    <hr className='border-yellow-500 border-b-2 w-20 mt-5' />
                    <button className='bg-black px-12 py-2 text-white mt-20' >Shop Now</button>
                </div>
            </div>
            <SingleProduct></SingleProduct>
        </div >
    );
};

export default WhatsNew;