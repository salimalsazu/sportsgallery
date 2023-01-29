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

            <div >

                <h1 className="text-6xl font-extrabold text-black " >Products are  now </h1>
                <div>
                    <p className="flex items-end text-6xl font-extrabold text-black mt-2" >Tranding </p><hr className="border-yellow-500 border-b-4 w-20" />
                </div>


            </div>



            <div className="mt-14 grid grid-cols-1 lg:grid-cols-4 gap-3 justify-center items-center mx-10" >


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