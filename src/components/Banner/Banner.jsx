import React from 'react';
import bannerImg from '../../assets/books.jpg'
import { NavLink } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="hero bg-[#F3F3F3] rounded-xl py-20 mb-24
        ">
            <div className="hero-content flex-col md:flex-row-reverse">
                <div className='md:w-1/2'>
                    <img
                        src={bannerImg}
                        className="rounded-lg shadow-2xl"
                    />
                </div>
                <div className='text-center md:text-start md:w-1/2 space-y-8 mt-8 md:mt-0'>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Books to freshen up your bookshelf</h1>
                    <button className="btn btn-success text-base md:text-xl font-bold text-white py-5"><NavLink to='/ViewTheList'>View The List</NavLink></button>
                </div>
            </div>
        </div>
    );
};

export default Banner;