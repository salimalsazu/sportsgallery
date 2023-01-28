
import { useForm } from "react-hook-form";
import React, { useState } from 'react';


const addproduct = () => {

    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {


        const addProducts = {
            name: data.name,
            price: data.price,
            category: data.category,
            size: data.size,
            color: data.color,
            quantity: data.quantity,
            sku: data.sku,
            description: data.description,
            file: data.file,

            detail: [
                {
                    details1: data.details1,
                    details2: data.details2,
                    details3: data.details3,
                    details4: data.details4,
                    details5: data.details5
                }
            ]

        }
        console.log(addProducts)
    }




    return (
        <div className='flex justify-center items-center mt-20'>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col'>

                <div className='flex gap-3 bg-gray-100 p-5 m-5' >
                    <input
                        {...register("name")}
                        placeholder="Name"
                        className="border rounded p-2 mb-2"
                    />
                    <input
                        {...register("price")}
                        placeholder="Price"
                        className="border rounded p-2 mb-2"
                    />
                </div>

                <div className='flex gap-3  bg-gray-100 p-5 m-5' >
                    <select
                        name="category"
                        {...register("category")}
                        className="border rounded p-2 mb-2"
                    >
                        <option value="" disabled>Select category</option>
                        <option value="Electronics">Sports Watch</option>
                        <option value="Fashion">Jersey</option>
                        <option value="Home">Sports Item</option>
                    </select>
                    <select
                        {...register("size")}
                        className="border rounded p-2 mb-2"
                    >
                        <option value="" disabled>Select Size</option>
                        <option value="MD">MD</option>
                        <option value="XL">XL</option>
                        <option value="LG">LG</option>
                    </select>
                    <select
                        {...register("color")}
                        className="border rounded p-2 mb-2"
                    >
                        <option value="" disabled>Select Color</option>
                        <option value="BLack">Black</option>
                        <option value="Yellow">Yellow</option>
                        <option value="White">White</option>
                    </select>
                </div>
                <div className='flex gap-3  bg-gray-100 p-5 m-5' >
                    <input
                        {...register("quantity")}
                        placeholder="Quantity"
                        className="border rounded p-2 mb-2"
                    />
                    <input
                        {...register("sku")}
                        placeholder="SKU"
                        className="border rounded p-2 mb-2"
                    />
                </div>

                <div className=' bg-gray-100 p-5 m-5 ' >
                    <p className='text-center mb-2' >Products Details</p>
                    <div className='grid grid-cols-2 gap-3'>
                        <input
                            placeholder="details1"
                            {...register("details1")}

                            className="border rounded p-2 mb-2"
                        />
                        <input
                            {...register("details2")}
                            placeholder="details2"


                            className="border rounded p-2 mb-2"
                        />
                        <input
                            {...register("details3")}
                            placeholder="details3"


                            className="border rounded p-2 mb-2"
                        />
                        <input
                            {...register("details4")}
                            placeholder="details4"


                            className="border rounded p-2 mb-2"
                        />
                        <input
                            {...register("details5")}
                            placeholder="details5"
                            className="border rounded p-2 mb-2"
                        />

                    </div>
                </div>


                <input
                    type="file"
                    name="image"
                    {...register("file")}
                    className="border rounded p-2 mb-2"
                />
                <div className='flex gap-3  bg-gray-100 p-5 m-5' >
                    <textArea
                        {...register("description")}
                        placeholder="Description"


                        className="border rounded p-2 mb-2 w-full"
                    />
                </div>

                <button className="bg-blue-500 text-white p-2 rounded-md" type="submit">
                    Submit
                </button>


            </form>
        </div>
    );
};

export default addproduct;







