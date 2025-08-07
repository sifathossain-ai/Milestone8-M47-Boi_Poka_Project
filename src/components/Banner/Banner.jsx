import React from 'react';
import bannerImg from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className="hero bg-base-200 rounded-xl py-20 mb-24
        ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='lg:w-1/2'>
                    <img
                        src={bannerImg}
                        className="rounded-lg shadow-2xl"
                    />
                </div>
                <div className='text-center md:text-start lg:w-1/2 space-y-7'>
                    <h1 className="text-6xl font-bold">Books to freshen up <br />your bookshelf</h1>
                    <button className="btn btn-success text-xl font-bold text-white py-5">View The List</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;