import MissProduct from '@/Components/missproduct';
import Image from 'next/image'
import watch from '../Assets/Product/watch.jpg'
import { AiFillDelete } from 'react-icons/ai';
import { BsFillBagFill } from 'react-icons/bs';

const cart = ({ data }) => {

    const random = data.watches;

    // const randomProduct = random[Math.floor(Math.random() * random.length)];


    // console.log(randomProduct);


    return (
        <div className='lg:mx-10 lg:my-20 mx-5'>
            <h1 className='uppercase font-extrabold text-5xl' >Cart</h1>

            <div className='mt-20 flex lg:flex-row flex-col'>
                <div className='lg:w-2/3'>
                    <h1 className='uppercase font-bold flex items-center' >Added to Bag <span><BsFillBagFill className='ml-1' ></BsFillBagFill></span></h1>
                    <div className='mt-5'>
                        <table className="table-auto">
                            <thead>
                                <tr className="bg-gray-300">
                                    <th className="lg:px-6 py-4">SL No</th>
                                    <th className="lg:px-6 py-4">Image</th>
                                    <th className="lg:px-6 py-4">Title</th>
                                    <th className="lg:px-6 py-4">Price</th>
                                    <th className="lg:px-6 py-4">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="odd:bg-gray-200 ">
                                    <td className="border px-6 py-4">1</td>
                                    <td className="border px-6 py-4">
                                        <Image
                                            className='w-10 h-10 lg:w-20 lg:h-20'
                                            src={watch}
                                            alt="product"

                                        />


                                    </td>
                                    <td className="border px-6 py-4">Watch</td>
                                    <td className="border px-6 py-4">$100.00</td>
                                    <td className="border px-6 py-4">

                                        <AiFillDelete></AiFillDelete>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>

                </div>
                <div className='lg:w-1/3 p-5 lg:mt-0 mt-20 border border-gray-700 flex flex-col justify-center  ' >
                    <div>
                        <h1 className='uppercase font-bold' >Cart Totals</h1>
                        <p className='my-10' ><span className='uppercase font-extrabold mr-20 ' >Subtotal</span><span> $123</span></p>
                        <p><span className='uppercase font-extrabold mr-20 ' >Shipping :</span></p>
                    </div>

                    <div className='mt-20' >
                        <hr className='border-gray-500 border-t-2' />
                        <p className='my-10' ><span className='uppercase font-extrabold mr-28 ' >Total</span><span> $123</span></p>
                    </div>
                    <div className=' mx-auto'>
                        <button className='uppercase bg-yellow-500  font-bold text-gray-700 hover:border hover:bg-gray-400  px-10 py-3' >Proceed to checkout</button>
                    </div>
                </div>

            </div>
            <div >

                <div className='mt-10' >
                    <div>
                        <h1 className='uppercase font-extrabold text-lg mb-2' >You Miss The Product</h1>
                        <hr className='border-gray-900 border-b-0' />
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center items-center mt-10' >
                        {
                            random.map(r => <MissProduct r={r} key={r._id}></MissProduct>)
                        }

                    </div>
                    {/* <MissProduct randomProduct={randomProduct} ></MissProduct> */}
                </div>
            </div>
        </div>
    );
};


export async function getServerSideProps() {
    const res = await fetch('http://localhost:3000/api/watch')
    // console.log(res.data.watches)
    const data = await res.json()
    // const { watches } = res.data
    // console.log(watches)
    return {
        props: { data }
    }
}



export default cart;