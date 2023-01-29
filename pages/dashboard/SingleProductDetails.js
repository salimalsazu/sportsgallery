import React from 'react';

import Image from 'next/image'

const SingleProductDetails = ({ p }) => {
    return (
        <div className="overflow-x-auto mx-20 mt-10 ">
            <table className="table w-full ">

                <thead>
                    <tr>
                        <th>SL No</th>
                        <th>Image</th>
                        <th>Product title</th>
                        <th>Price</th>
                        <th>Discount Price</th>
                        <th>Quantity</th>
                        <th>SKU</th>

                    </tr>
                </thead>
                <tbody>

                    <tr>
                        <th>1</th>
                        <td>
                            <Image
                                src={p.img}
                                width={100}
                                height={100}
                                alt="product image"
                            />
                        </td>
                        <td>{p.name}</td>
                        <td>{p.price}</td>
                        <td>N/A</td>
                        <td>{p.quantity}</td>
                        <td>{p.sku}</td>
                    </tr>

                </tbody>
            </table>
        </div>
    );
};

export default SingleProductDetails;