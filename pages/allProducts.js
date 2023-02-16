import { toggleCategory } from '@/Redux/Feature/filter/filterslice';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SingleTrandingProducts from '@/Components/SingleTrandingProducts';




const allProducts = () => {

    const [allProducts, setAllProducts] = useState([])

    useEffect(() => {
        fetch('/api/watch')
            .then(res => res.json())
            .then(data => setAllProducts(data))
    }, [])

    const allData = allProducts?.watches;

    const filter = useSelector((state) => state.filter)
    const dispatch = useDispatch();

    const { category } = filter;


    let data;

    if (allData?.length) {
        data =
            allData?.map(p => <SingleTrandingProducts p={p} key={p._id} ></SingleTrandingProducts>)

    }

    if (allData?.length && filter.category.length) {
        data = allData.filter(p => {
            if (filter.category.length) {
                return filter.category.includes(p.category)
            }
            return p;

        })
            .map(p => <SingleTrandingProducts p={p} key={p._id}></SingleTrandingProducts>)
    }



    return (
        <div className='flex flex-col lg:flex-row lg:mx-10 mt-5 ' >
            <div className='bg-white shadow-lg shadow-lime-500 lg:w-1/4 p-10 flex flex-col gap-3 m-5 lg:m-0 h-full sticky top-20'>
                <div>
                    <p
                        onClick={() => dispatch(toggleCategory("Sports Watch"))}
                        className='bg-gray-100 font-extrabold rounded-2xl py-2 text-center cursor-pointer hover:shadow-lime-200 hover:text-gray-500 hover:shadow-md ' >Sports Watch</p>
                </div>
                <div>
                    <p
                        onClick={() => dispatch(toggleCategory("Fashion"))}
                        className='bg-gray-100 font-extrabold rounded-2xl py-2 text-center cursor-pointer hover:shadow-lime-200 hover:text-gray-500 hover:shadow-md ' >Fashion</p>
                </div>
                <div>
                    <p
                        onClick={() => dispatch(toggleCategory("Sports Item"))}

                        className='bg-gray-100 font-extrabold rounded-2xl py-2 text-center cursor-pointer hover:shadow-lime-200 hover:text-gray-500 hover:shadow-md '>Sports Item</p>
                </div>

            </div>
            <div className='lg:w-3/3 grid grid-cols-3 justify-center items-center gap-4 mx-5'>

                {data}
                {/* {
                    allData?.map(p => <SingleTrandingProducts p={p} key={p._id} ></SingleTrandingProducts>)
                } */}
            </div>
        </div>
    );
};

export default allProducts;
