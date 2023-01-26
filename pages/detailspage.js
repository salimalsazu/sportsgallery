import DetailsProduct from '@/Components/DetailsProduct';
import RelatedProducts from '@/Components/RelatedProducts';
import React from 'react';

const DetailsPage = () => {
    return (
        <div className='mx-10' >
            <DetailsProduct></DetailsProduct>
            <RelatedProducts></RelatedProducts>
        </div>
    );
};

export default DetailsPage;