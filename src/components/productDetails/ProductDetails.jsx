import React from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { Link } from 'react-router-dom';

const ProductDetails = ({ product }) => {

    const { id, category, img, name, price, ratings, seller, shipping, stock } = product;
    return (
        <div className='py-2'>
            <div className="card w-96 h-[650px] bg-base-100 shadow-xl rounded-lg hover:mt-[-0px] hover:scale-105">
                <figure>
                    <img src={img} alt={name} />
                </figure>
                <div className="card-body font-serif">
                    <h2 className="card-title">{name}</h2>
                    <p>Category: {category}</p>
                    <p>Brand: {seller}</p>
                    <p >Price: $<span className='font-sans'>{price}</span></p>
                    <p className='flex items-center gap-2'>Rating:
                        <span>{ratings}</span>
                        <Rating style={{ maxWidth: 120 }} value={ratings} readOnly />
                    </p>
                    <Link to={`/product/${id}`}>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Details</button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;