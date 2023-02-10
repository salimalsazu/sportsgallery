import { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";
import SingleTrandingProducts from "./SingleTrandingProducts";



const TrandingProducts = ({ data }) => {

    console.log(data);
    const products = data.watches;

    // const randomProduct = products[Math.floor(Math.random() * products.length)];

    // console.log(randomProduct);

    return (

        <div className="my-20 flex flex-col justify-center items-center" >

            <div className='flex flex-col justify-center items-center' >
                <p className='text-[#777] uppercase' >TRANDING SELECTION</p>
                <h1 className='text-3xl font-extrabold'>Products are  now  Tranding</h1>
                <hr className='border-yellow-500 border-b-2 w-20 mt-5' />
            </div>



            <div className="mt-14 grid grid-cols-1 lg:grid-cols-5 gap-5 justify-center items-center mx-10" >


                {
                    products && products?.map((p, i) => <SingleTrandingProducts p={p} key={i} ></SingleTrandingProducts>)
                }

            </div>

        </div >


    );
};

// export async function getStaticProps() {
//     const res = await fetch('http://localhost:3000/api/watch')
//     // console.log(res.data.watches)
//     const data = await res.json()
//     const { watches } = res.data
//     console.log(watches)
//     return {
//         props: { watches }
//     }
// }


export default TrandingProducts;