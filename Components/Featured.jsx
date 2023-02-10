import React from 'react';
import SingleFeatured from './SingleFeatured';

const Featured = ({ data }) => {
    const products = data.watches;
    console.log(products)

    let featuredproduct;

    if (products.length) {
        featuredproduct = products?.slice(0, 4).map(p => <SingleFeatured p={p} key={p._id} ></SingleFeatured>)
    }

    return (
        <div className='grid grid-cols-4 gap-5 mx-10'>
            <div>
                <h1 className='font-extrabold text-xl' >Featured</h1>
                <div className='flex flex-col gap-5 mt-5'>
                    {featuredproduct}
                </div>
            </div>
            <div>
                <h1 className='font-extrabold text-xl' >Best Selling</h1>
                <div className='flex flex-col gap-5 mt-5'>
                    {featuredproduct}
                </div>
            </div>
            <div>
                <h1 className='font-extrabold text-xl' >Latest</h1>
                <div className='flex flex-col gap-5 mt-5'>
                    {featuredproduct}
                </div>
            </div>
            <div>
                <h1 className='font-extrabold text-xl' >Top Rated</h1>
                <div className='flex flex-col gap-5 mt-5'>
                    {featuredproduct}
                </div>
            </div>

        </div>
    );
};

export default Featured;

