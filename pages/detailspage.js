import DetailsProduct from '@/Components/DetailsProduct';
import RelatedProducts from '@/Components/RelatedProducts';
import Review from '@/Components/Review';
import React from 'react';

const DetailsPage = () => {
    return (
        <div className='mx-10' >
            <DetailsProduct></DetailsProduct>
            <Review></Review>
            <RelatedProducts></RelatedProducts>
        </div>
    );
};

export default DetailsPage;