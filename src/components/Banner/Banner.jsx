import React from 'react';
import bannerImg from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className="hero bg-base-200 py-20 mb-24
        ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='lg:w-1/2'>
                    <img
                        src={bannerImg}
                        className="rounded-lg shadow-2xl"
                    />
                </div>
                <div className='lg:w-1/2 space-y-7'>
                    <h1 className="text-5xl font-bold">Books to freshen up <br />your bookshelf</h1>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;