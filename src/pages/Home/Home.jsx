import React, { useEffect, useState } from 'react';
import ProductDetails from '../../components/productDetails/ProductDetails';

const Home = () => {

    const [products, setProducts] = useState([]);
    const [productsData, setProductsData] = useState([]);

    useEffect(() => {
        fetch('/products.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setProductsData(data);
            });
    }, []);

    const categoryData = products.map(product => product.category);
    const uniqueCategory = ["All", ...new Set(categoryData)];

    const handleFilter = (category) => {
        console.log(category);
    }

    return (
        <div className='my-10'>

            <div className='mx-auto w-8/12 mb-10'>
                <form className='flex gap-10'>
                    <input
                        type="text"
                        placeholder="Type here..." className="input input-bordered w-full " />
                    <button className="btn rounded-lg btn-primary">Search</button>
                </form>
            </div>

            <div className='flex gap-5 justify-around'>

                <div className='flex flex-col gap-1 w-44 sticky top-5 h-[100vh]'>
                    <h6 className='font-serif text-xl text-center'>Categories</h6>
                    {
                        uniqueCategory.map((category, i) =>
                            <p key={i}
                                className='btn w-48 my-1 rounded-lg font-serif text-lg font-normal'
                                onClick={() => handleFilter(category)}>
                                {category}
                            </p>
                        )
                    }
                    <div>
                        <details className="dropdown mt-5">
                            <summary className="m-1 btn bg-sky-500 w-48 rounded-lg">Sort Prices</summary>
                            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                                <li className='btn my-1 w-48 rounded-lg'>High to Low</li>
                                <li className='btn my-1 w-48 rounded-lg'>Low to High</li>
                            </ul>
                        </details>
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5'>
                    {
                        productsData.map(product =>
                            <ProductDetails key={product._id} product={product} />
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;