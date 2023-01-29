import DetailsProduct from '@/Components/DetailsProduct';
import RelatedProducts from '@/Components/RelatedProducts';
import Review from '@/Components/Review';
import React from 'react';

const DetailsPage = ({ data }) => {

    console.log(data)

    return (
        <div className='mx-10' >
            <DetailsProduct data={data} ></DetailsProduct>
            <Review data={data} ></Review>
            <RelatedProducts></RelatedProducts>
        </div>
    );
};


export async function getServerSideProps({ params }) {
    const id = params.id
    const res = await fetch(`http://localhost:3000/api/watch/${id}`)
    // console.log(res.data.watches)
    const data = await res.json()
    // const { watches } = res.data
    // console.log(watches)
    return {
        props: { data }
    }
}




export default DetailsPage;