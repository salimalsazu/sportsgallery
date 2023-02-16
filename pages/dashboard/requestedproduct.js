import React from 'react';

const requestedproduct = ({ data }) => {

    const stock = data?.stock;
    return (
        <div className="overflow-x-auto mt-10 mx-10">
            <h1 className='uppercase font-extrabold text-center my-10' >Requested Products</h1>
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>SL No</th>
                        <th>Product</th>
                        <th>Requested Id</th>
                        <th>SKU</th>
                        <th>Price</th>
                        <th>Mobile</th>
                        <th>Status</th>
                    </tr>
                </thead>

                <tbody>

                    {
                        stock?.map((s, index) =>
                            <tr>
                                <th>{index + 1}</th>
                                <td>{s?.name}</td>
                                <td>{s?._id}</td>
                                <td>{s?.sku}</td>
                                <td>{s?.price}</td>
                                <td>{s?.mobile}</td>
                                <td><button className='bg-black text-white rounded-full px-4' >Pending</button></td>
                            </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};


export async function getStaticProps() {
    const res = await fetch(`${NEXT_URL}/api/stocks`)
    // console.log(res.data.watches)
    const data = await res.json()
    // const { watches } = res.data
    // console.log(watches)
    return {
        props: { data }
    }
}





export default requestedproduct;


