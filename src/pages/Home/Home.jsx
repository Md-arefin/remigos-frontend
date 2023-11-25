import React, { useEffect, useState } from 'react';
import ProductDetails from '../../components/productDetails/ProductDetails';

const Home = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('/products.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                // console.log(data);
            });


    }, [])

    return (
        <div className='my-10'>
            <div className='flex gap-5 justify-around'>
                <div>
                    <p>Filter section</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        products.map(product =>
                            <ProductDetails key={product._id} product={product} />
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;