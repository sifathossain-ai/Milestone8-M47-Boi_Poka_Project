import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { ReadBooks } from '../ReadBooks/ReadBooks';

const ListedBooks = () => {
    const [readList, setReadList] = useState([]);
    const [wishlist, setWishlist] = useState([]);
    const allBooks = useLoaderData()
    const [sort, setSort] = useState('');
    // console.log(allBooks);

    useEffect(() => {
        const getBookList = localStorage.getItem('read-list');
        const getBookListObject = JSON.parse(getBookList);
        const getBookListInt = getBookListObject.map(id => parseInt(id));
        // console.log(getBookListInt);
        const readBookList = allBooks.filter(book => getBookListInt.includes(book.bookId));
        // console.log(readBookList);
        setReadList(readBookList);
    }, [])

    useEffect(() => {
        const getWishlist = localStorage.getItem('wish-list');
        const getWishlistObject = JSON.parse(getWishlist);
        const getWishlistInt = getWishlistObject.map(id => parseInt(id));
        // console.log(getWishlistInt);
        const readWishlist = allBooks.filter(book => getWishlistInt.includes(book.bookId));
        // console.log(readWishlist);
        setWishlist(readWishlist);
    }, [])

    const handleSort = sortType => {
        setSort(sortType);

        if(sortType === "Number of Pages"){
            const SortByPages = [...readList].sort((a, b) =>
                b.totalPages - a.totalPages);
            setReadList(SortByPages);
        }
        else{
            const sortByRating = [...readList].sort((a, b) => {
                if (b.rating === a.rating){
                    return b.totalPages - a.totalPages;
                }
                else {
                    return b.rating - a.rating;
                }
            });
            setReadList(sortByRating);
        }
    }

    return (
        <div>
            <div className='bg-[#F3F3F3] rounded-lg mb-12 md:mb-20'>
                <h2 className='text-center text-2xl font-bold md:text-4xl p-5'>Books</h2>
            </div>
            <Tabs>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist Books</Tab>
                </TabList>

                <TabPanel className='my-12'>
                    <div className='flex justify-between items-center'>
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-xs border-none bg-emerald-100 m-1 rounded-full">
                                {
                                    sort ? `Sort By: ${sort}` : 'Sort By'
                                }
                            </div>
                            <ul tabIndex={0} className="dropdown-content menu bg-emerald-100 rounded-box z-1 w-32 p-2 shadow-sm">
                                <small onClick={() => handleSort('Rating')}><li><a>Rating</a></li></small>
                                <small onClick={() => handleSort('Number of Pages')}><li><a>Number of Pages</a></li></small>
                            </ul>
                        </div>
                        <button className='btn btn-xs border-none bg-cyan-100 rounded-full text-black font-bold'>
                            <p>Total Book List: {readList.length}</p>
                        </button>
                    </div>
                    {
                        readList.map(book => <ReadBooks book={book}></ReadBooks>)
                    }
                </TabPanel>

                <TabPanel>
                    <button className='btn btn-xs border-none bg-cyan-100 rounded-full text-black font-bold'>
                        <p>Total Wish List: {wishlist.length}</p>
                    </button>
                    {
                        wishlist.map(book => <ReadBooks book={book}></ReadBooks>)
                    }
                </TabPanel>
            </Tabs >
        </div >
    );
};

export default ListedBooks;