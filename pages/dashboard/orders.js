import { NEXT_URL } from '@/Config';
import React from 'react';

const orders = ({ data }) => {

    const order = data.order;

    return (
        <div className='mx-auto mt-10'>
            <h1 className='uppercase font-extrabold text-center' >Order Details</h1>
            <form className=" flex justify-end mx-5" >
                <div className="flex items-center  border-b-2 border-teal-500 py-2">
                    <input
                        className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                        type="text"
                        placeholder="Search Order"

                    />
                    <button
                        className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                        type="submit"
                    >
                        Search
                    </button>
                </div>
            </form>
            <div className="overflow-x-auto mx-5 mt-10 ">
                <table className="table w-full">

                    <thead>
                        <tr >
                            <th>SL No</th>
                            <th>Order No</th>
                            <th>product Image</th>
                            <th>Product title</th>
                            <th>Product Id</th>
                            <th>Price</th>
                            <th>Shipping Address</th>
                            <th>Quantity</th>
                            <th>Mobile</th>
                            <th>Veiw Details</th>


                        </tr>
                    </thead>
                    {
                        order.map((o, index) => <tbody>

                            <tr>
                                <th>{index + 1}</th>
                                <td>{o._id}</td>
                                <td>Image </td>
                                <td>{o.name}</td>
                                <td>{o.productId}</td>
                                <td>{o.price}</td>
                                <td>N/A</td>
                                <td>N/A</td>
                                <td>{o.mobile}</td>
                                <td><button className='px-4 py-1 bg-black text-white' >View</button></td>

                            </tr>

                        </tbody>)
                    }
                </table>
            </div>
        </div>
    );
};


export async function getServerSideProps() {
    const res = await fetch(`${NEXT_URL}/api/orders`)
    // console.log(res.data.watches)
    const data = await res.json()
    // const { watches } = res.data
    // console.log(watches)
    return {
        props: { data }
    }
}



export default orders;