import SingleProduct from "./SingleProduct";
import SingleTrandingProducts from "./SingleTrandingProducts";
import { motion, AnimatePresence } from "framer-motion"


const TrandingProducts = ({ isVisible }) => {

    const products = [
        {
            "title": "watch",
            "img": 'https://i.ibb.co/BZVCPMN/cs-home-shop-7.jpg',
            "price": 100
        },
        {
            "title": "watch",
            "img": 'https://i.ibb.co/HXNBtT3/cs-home-shop-8.jpg',
            "price": 100
        },
        {
            "title": "watch",
            "img": 'https://i.ibb.co/FsqCJZW/cs-home-shop-9.jpg',
            "price": 100
        },
        {
            "title": "watch",
            "img": 'https://i.ibb.co/jvXfhHc/cs-home-shop-10.jpg',
            "price": 100
        },
        {
            "title": "watch",
            "img": 'https://i.ibb.co/XbGXzLD/cs-home-shop-11.jpg',
            "price": 100
        },
        {
            "title": "watch",
            "img": 'https://i.ibb.co/qByygbh/cs-home-shop-12.jpg',
            "price": 100
        },
        {
            "title": "watch",
            "img": 'https://i.ibb.co/zfdKp66/cs-home-shop-13.jpg',
            "price": 100
        },
        {
            "title": "watch",
            "img": 'https://i.ibb.co/0QZcCSB/cs-home-shop-14.jpg',
            "price": 100
        }

    ]

    const randomProduct = products[Math.floor(Math.random() * products.length)];

    console.log(randomProduct);

    return (




        <div className="my-20 flex flex-col justify-center items-center" >

            <div >

                <h1 className="text-6xl font-extrabold text-black " >Products are  now </h1>
                <div>
                    <p className="flex items-end text-6xl font-extrabold text-black mt-2" >Tranding </p><hr className="border-yellow-500 border-b-4 w-20" />
                </div>


            </div>



            <div className="mt-14 grid grid-cols-1 lg:grid-cols-4 gap-3 justify-center items-center mx-10" >


                {
                    products.length && products?.map((p, i) => <SingleTrandingProducts p={p} key={i} ></SingleTrandingProducts>)
                }

            </div>

        </div >


    );
};





export default TrandingProducts;