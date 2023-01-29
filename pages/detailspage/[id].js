import DetailsProduct from '@/Components/DetailsProduct';
import RelatedProducts from '@/Components/RelatedProducts';
import Review from '@/Components/Review';
import React, { useEffect, useState } from 'react';

const DetailsPage = ({ data }) => {

    console.log(data)

    const [related, setRelated] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/api/watch')
            .then(res => res.json())
            .then(data => setRelated(data))
    }, [])

    const dataRelated = related.watches;
    console.log(dataRelated);



    return (
        <div className='mx-10' >
            <DetailsProduct data={data} ></DetailsProduct>
            <Review data={data} ></Review>

            <div className='mt-10' >
                <div>
                    <h1 className='uppercase font-extrabold text-lg mb-2' >Related Products</h1>
                    <hr className='border-gray-900 border-b-0' />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 justify-center items-center my-10' >
                    {
                        dataRelated?.slice(0, 4).map(d => <RelatedProducts d={d} key={d._id} ></RelatedProducts>)
                    }

                </div>
            </div>
        </div>
    );
};


export async function getServerSideProps({ params }) {
    const id = params.id
    const res = await fetch(`http://localhost:3000/api/watch/${id}`)
    // console.log(res.data.watches)
    const data = await res.json()
    // const {watches} = res.data
    // console.log(watches)
    return {
        props: { data }
    }
}




export default DetailsPage;