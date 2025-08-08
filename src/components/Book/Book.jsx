import React from 'react';
import { FaRegStar } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
    const { bookId, image, bookName, author, tags, category, rating } = book;
    // console.log(book);
    return (
        <Link to={`/books/${bookId}`}>
            <div className="card text-start border border-gray-100">
                <div className='p-6'>
                    <div className='py-8 bg-[#F3F3F3] rounded-xl px-24'>
                        <div>
                            <figure>
                                <img className='rounded-sm h-40 w-full object-cover'
                                    src={image}
                                    alt="Shoes" />
                            </figure>
                        </div>
                    </div>
                    <div className="space-y-3 mt-7">
                        <div className='flex gap-3'>
                            {
                                tags.map((tag, idx) => <button key={idx} className="btn btn-xs bg-green-50 border-none rounded-full text-green-500 font-bold">#{tag}</button>)
                            }
                        </div>
                        <h2 className="card-title font-bold">{bookName}</h2>
                        <p className='font-semibold text-gray-600'>By: {author}</p>

                        <div className="border-t border-dashed"></div>

                        <div className="card-actions justify-between font-semibold text-gray-600">
                            <p className=''>{category}</p>
                            <div className='flex justify-center items-center gap-2'>
                                <p>{rating}</p>
                                <FaRegStar></FaRegStar>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;