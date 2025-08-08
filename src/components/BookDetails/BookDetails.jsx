import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const BookDetails = () => {
    const { bookId } = useParams();
    const id = parseInt(bookId);
    const data = useLoaderData();
    const singleData = data.find(book => book.bookId === id);

    const { bookName, image, author, category, review, tags, totalPages, publisher, yearOfPublishing, rating } = singleData;
    // console.log(singleData);
    /* 
    "bookId": 2,
    "bookName": "To Kill a Mockingbird",
    "author": "Harper Lee",
    "image": "https://i.ibb.co.com/0cv102J/To-Kill-a-Mockingbird.webp",
    "review": 
    "totalPages": 281,
    "rating": 4.8,
    "category": "Fiction",
    "tags": ["Drama", "Social Justice"],
    "publisher": "J.B. Lippincott & Co.",
    "yearOfPublishing": 1960
     */
    return (
        <div className="hero my-12 min-h-screen">
            <div className="hero-content p-0 flex-col md:flex-row">
                <div className='md:w-1/2 bg-[#F3F3F3] rounded-xl'>
                    <div className='p-8 md:p-16'>
                        <img
                            src={image}
                            className="w-full rounded-sm shadow-2xl"
                        />
                    </div>
                </div>
                <div className='md:w-1/2 space-y-2'>
                    <div className='py-4 space-y-3'>
                        <h1 className="text-3xl md:text-4xl font-bold">{bookName}</h1>
                        <h3 className='text-gray-600'>By: {author}</h3>
                    </div>
                    <div className='divider'></div>
                    <h3 className='text-gray-600'>{category}</h3>
                    <div className='divider'></div>
                    <div className='py-4 space-y-3'>
                        <p className="text-gray-600"><span className='font-bold text-black'>Review: </span>{review}</p>
                        <div className='flex gap-3'>
                            <p className='font-bold text-black'>Tag </p>
                            {
                                tags.map((tag, idx) => <button key={idx} className="btn btn-xs bg-green-50 border-none rounded-full text-green-500 font-bold">#{tag}</button>)
                            }
                        </div>
                    </div>
                    <div className='divider'></div>
                    <div className='flex gap-10 py-4'>
                        <div className='text-gray-600 space-y-2'>
                            <p>Number of Pages: </p>
                            <p>Publisher: </p>
                            <p>Year of Publishing: </p>
                            <p>Rating: </p>
                        </div>
                        <div className='text-gray-600 space-y-2'>
                            <p className='font-bold text-black'>{totalPages}</p>
                            <p className='font-bold text-black'>{publisher}</p>
                            <p className='font-bold text-black'>{yearOfPublishing}</p>
                            <p className='font-bold text-black'>{rating}</p>
                        </div>
                    </div>
                    <div className='flex gap-3'>
                        <button className="btn btn-outline btn-info font-bold">Mark as Read</button>
                        <button className='btn btn-info text-white font-bold'>Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;