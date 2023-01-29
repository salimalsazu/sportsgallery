import SingleProduct from './SingleProduct';
import { motion } from "framer-motion";


const WhatsNew = ({ data }) => {

    const nProduct = data.watches;

    return (
        <div className='flex flex-col lg:flex-row justify-center items-center mx-10 mt-20' >
            <div>
                <div className='uppercase w-96' >
                    <h1 className='text-5xl font-extrabold' >Our Latest <br /> Product</h1>
                    <hr className='border-yellow-500 border-b-2 w-20 mt-5' />

                    <motion.div
                        className="box"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}

                    ><button className='bg-black px-12 py-2 text-white mt-20' >Shop Now</button></motion.div>
                </div>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-3' >
                {
                    nProduct?.slice(0, 2).map(n => <SingleProduct n={n} key={n._id}></SingleProduct>)
                }
            </div>
        </div >
    );
};




export default WhatsNew;