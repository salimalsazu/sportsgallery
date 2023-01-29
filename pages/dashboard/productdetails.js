import React from 'react';
import SingleProductDetails from './SingleProductDetails';

const productdetails = ({ data }) => {

    const productDetail = data.watches;

    return (
        <div className='mx-auto mt-10'>
            <h1 className='uppercase font-extrabold text-center' >Product Details</h1>
            <form className=" flex justify-end mx-20" >
                <div className="flex items-center  border-b-2 border-teal-500 py-2">
                    <input
                        className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                        type="text"
                        placeholder="Search products"

                    />
                    <button
                        className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                        type="submit"
                    >
                        Search
                    </button>
                </div>
            </form>

            <div className="overflow-x-auto mx-20 mt-10 ">
                <table className="table w-full ">

                    <thead>
                        <tr>
                            <th>SL No</th>
                            <th>Image</th>
                            <th>Product title</th>
                            <th>Price</th>
                            <th>Discount Price</th>
                            <th>Quantity</th>
                            <th>SKU</th>

                        </tr>
                    </thead>
                    {
                        productDetail.map((p, index) => <SingleProductDetails p={p} index={index} key={p._id} ></SingleProductDetails>)
                    }
                </table>
            </div>

        </div>
    );
};


export async function getStaticProps() {
    const res = await fetch('http://localhost:3000/api/watch')
    // console.log(res.data.watches)
    const data = await res.json()
    // const { watches } = res.data
    // console.log(watches)
    return {
        props: { data }
    }
}



export default productdetails;