
import { useForm } from "react-hook-form";
import React, { useState } from 'react';
import axios from "axios";
import Swal from 'sweetalert2'

const addproduct = () => {

    const [hide, setHide] = useState(false)

    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {


        const image = data.img[0];
        const formData = new FormData();
        formData.append('image', image)
        const url = 'https://api.imgbb.com/1/upload?key=a6f9b9970dcebe796e264ecdc5083f85'
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                console.log(imgData)
                if (imgData.success) {
                    console.log(imgData.data.url);
                }

                const addProducts = {
                    name: data.name,
                    price: data.price,
                    category: data.category,
                    size: data.size,
                    color: data.color,
                    quantity: data.quantity,
                    sku: data.sku,
                    description: data.description,
                    img: imgData.data.url,
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

                try {
                    setHide(false)
                    const res = axios('http://localhost:3000/api/watch', {
                        method: "POST",
                        headers: {
                            "content-Type": "application/json"
                        },
                        data: JSON.stringify(addProducts)
                    })
                    setHide(true);
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Product has beed created Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })

                } catch (error) {
                    console.log(error);
                }

            })

    }




    return (
        <div className='mx-auto w-full  mt-20 '>
            <h1 className="uppercase font-extrabold text-center" >Add Your Product</h1>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col'>

                <div className='flex gap-3 bg-gray-100 p-5 m-5' >
                    <input
                        {...register("name")}
                        placeholder="Name"
                        className="border w-full rounded p-2 mb-2"
                    />
                    <input
                        {...register("price")}
                        placeholder="Price"
                        className="border w-full rounded p-2 mb-2"
                    />
                </div>

                <div className='flex gap-3  bg-gray-100 p-5 m-5' >
                    <select
                        {...register("category")}
                        className="border w-full rounded p-2 mb-2"
                    >
                        <option value="">Select category</option>
                        <option value="Watch">Sports Watch</option>
                        <option value="Fashion">Jersey</option>
                        <option value="Sports Item">Sports Item</option>
                    </select>
                    <select
                        {...register("size")}
                        className="border rounded p-2 mb-2"
                    >
                        <option value="" >Select Size</option>
                        <option value="MD">MD</option>
                        <option value="XL">XL</option>
                        <option value="LG">LG</option>
                    </select>
                    <select
                        {...register("color")}
                        className="border w-full rounded p-2 mb-2"
                    >
                        <option value="" >Select Color</option>
                        <option value="BLack">Black</option>
                        <option value="Yellow">Yellow</option>
                        <option value="White">White</option>
                    </select>
                </div>
                <div className='flex gap-3  bg-gray-100 p-5 m-5' >
                    <input
                        {...register("quantity")}
                        placeholder="Quantity"
                        className="border w-full rounded p-2 mb-2"
                    />
                    <input
                        {...register("sku")}
                        placeholder="SKU"
                        className="border w-full rounded p-2 mb-2"
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


                <div className='flex gap-3  bg-gray-100 p-5 m-5'>
                    <input
                        type="file"
                        {...register("img", {
                            required: 'Photo is required'
                        })}
                        className="border w-full rounded p-2 mb-2"
                    />
                </div>
                <div className='flex gap-3  bg-gray-100 p-5 m-5' >
                    <textarea
                        {...register("description")}
                        placeholder="Description"
                        className="border w-full rounded p-2 mb-2 "
                    />
                </div>

                <div className="flex justify-center items-center" >
                    {
                        hide ? <button disabled className="bg-gray-200 text-white p-2 my-10 w-20 rounded-md" type="submit">
                            Submit
                        </button>

                            : <button onClick={() => setHide(hide)} className="bg-blue-500 text-white p-2 my-10 w-20 rounded-md" type="submit">
                                Submit
                            </button>
                    }
                </div>


            </form>
        </div>
    );
};

export default addproduct;







