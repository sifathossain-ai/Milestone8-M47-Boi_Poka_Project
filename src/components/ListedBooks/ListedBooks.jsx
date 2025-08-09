import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { ReadBooks } from '../ReadBooks/ReadBooks';

const ListedBooks = () => {
    const [readList, setReadList] = useState([]);
    const [wishlist, setWishlist] = useState([]);
    const allBooks = useLoaderData()
    // console.log(allBooks);

    useEffect(() => {
        const getBookList = localStorage.getItem('read-list');
        const getBookListObject = JSON.parse(getBookList);
        const getBookListInt = getBookListObject.map(id => parseInt(id));
        console.log(getBookListInt);
        const readBookList = allBooks.filter(book => getBookListInt.includes(book.bookId));
        console.log(readBookList);
        setReadList(readBookList);
    }, [])

    useEffect(() => {
        const getWishlist = localStorage.getItem('wish-list');
        const getWishlistObject = JSON.parse(getWishlist);
        const getWishlistInt = getWishlistObject.map(id => parseInt(id));
        console.log(getWishlistInt);
        const readWishlist = allBooks.filter(book => getWishlistInt.includes(book.bookId));
        console.log(readWishlist);
        setWishlist(readWishlist);
    }, [])

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
                    <button className='btn btn-xs border-none bg-cyan-100 rounded-full text-black font-bold'>
                        <p>Total Book List: {readList.length}</p>
                    </button>
                    {
                        readList.map(book => <ReadBooks book={book}></ReadBooks>)
                    }
                </TabPanel>

                <TabPanel>
                    <button className='btn btn-xs border-none bg-cyan-100 rounded-full text-black font-bold'>
                        <p>Total Book List: {wishlist.length}</p>
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