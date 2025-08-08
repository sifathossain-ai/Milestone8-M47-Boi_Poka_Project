import { CiLocationOn } from "react-icons/ci";
import { BsPeople } from "react-icons/bs";
import { HiOutlineNewspaper } from "react-icons/hi2";
export const ReadBooks = ({ book }) => {
    const { bookId, bookName, image, author, tags, yearOfPublishing, publisher, totalPages, category, rating } = book;
    /* 
author: "F. Scott Fitzgerald"
bookId: 1
bookName: "The Great Gatsby"
category: "Classic"
image: "https://i.ibb.co.com/khHN7Pk/9780143454212.jpg"
publisher: "Scribner"
rating: 4.5
review: tags
: (2) ['Fiction', 'Romance']
totalPages: 192
yearOfPublishing: 1925
     */
    return (
        <div className="border border-gray-100 rounded-xl my-5">
            <div className="p-4 md:p-7 md:flex gap-7">
                <div className="py-12 px-16 rounded-xl bg-[#F3F3F3] md:w-1/3 flex justify-center items-center">
                    <div>
                        <img
                            src={image}
                            className="w-32 h-44 object-cover rounded-sm"
                        />
                    </div>
                </div>
                <div className="md:w-2/3 mt-7 md:mt-0">
                    <div className="space-y-4">
                        <h1 className="text-2xl md:text-4xl font-bold">{bookName}</h1>
                        <p className="text-gray-600 font-bold">By: {author}</p>
                        <div className='flex gap-3'>
                            <p className='font-bold text-black'>Tag </p>
                            {
                                tags.map((tag, idx) => <button key={idx} className="btn btn-xs bg-green-50 border-none rounded-full text-green-500 font-bold">#{tag}</button>)
                            }
                            <div className="flex gap-1 justify-center items-center">
                                <CiLocationOn></CiLocationOn>
                                <small className="text-gray-600">Publishing: {yearOfPublishing}</small>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 text-gray-600">
                            <div className="flex items-center gap-2">
                                <BsPeople></BsPeople>
                                <small>Publisher: {publisher}</small>
                            </div>
                            <div className="flex items-center gap-2">
                                <HiOutlineNewspaper></HiOutlineNewspaper>
                                <small>Page: {totalPages}</small>
                            </div>
                        </div>
                    </div>
                    <div className="divider"></div>
                    <small className="flex items-center gap-4 font-thin">
                        <button className="btn btn-xs rounded-full border-none text-teal-600 bg-teal-50">Id: {bookId}</button>
                        <button className="btn btn-xs rounded-full border-none text-blue-600 bg-blue-50">Category: {category}</button>
                        <button className="btn btn-xs rounded-full border-none text-orange-500 bg-orange-50">Rating: {rating}</button>
                        <button className="btn btn-xs border-none rounded-full text-white bg-green-600">View Details</button>
                    </small>
                </div>
            </div>
        </div>
    );
};
