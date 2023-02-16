import React from 'react';

import Image from 'next/image'

const SingleProductDetails = ({ p, index }) => {
    return (
        <tbody>

            <tr>
                <th>{index + 1}</th>
                <td>
                    <Image
                        src={p?.img}
                        width={100}
                        height={100}
                        alt="product image"
                    />
                </td>
                <td>{p?.name}</td>
                <td>{p?.price}</td>
                <td>N/A</td>
                <td>{p?.quantity}</td>
                <td>{p?.sku}</td>
            </tr>

        </tbody>
    );
};

export default SingleProductDetails;