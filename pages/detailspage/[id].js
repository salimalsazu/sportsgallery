import DetailsProduct from '@/Components/DetailsProduct';
import RelatedProducts from '@/Components/RelatedProducts';
import Review from '@/Components/Review';
import SingleTrandingProducts from '@/Components/SingleTrandingProducts';
import { NEXT_URL } from '@/Config';
import React, { useEffect, useState } from 'react';

const DetailsPage = ({ data }) => {

    console.log(data)

    const [related, setRelated] = useState([])

    useEffect(() => {
        fetch(`${NEXT_URL}/api/watch`)
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
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2 justify-center items-center my-10' >

                    {
                        dataRelated?.slice(0, 5).map((p, i) => <SingleTrandingProducts p={p} key={i} ></SingleTrandingProducts>)
                    }

                </div>
            </div>
        </div>
    );
};


export async function getServerSideProps({ params }) {
    const id = params.id
    const res = await fetch(`${NEXT_URL}/api/watch/${id}`)
    // console.log(res.data.watches)
    const data = await res.json()
    // const {watches} = res.data
    // console.log(watches)
    return {
        props: { data }
    }
}




export default DetailsPage;