import React from 'react';

const orders = () => {
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
                <table className="table w-full ">

                    <thead>
                        <tr>
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
                            <th>Invoice</th>

                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                            <td>Blue</td>
                            <td>Blue</td>
                            <td>Blue</td>
                            <td>Blue</td>
                            <td>Blue</td>
                            <td>Blue</td>
                            <td>Blue</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default orders;