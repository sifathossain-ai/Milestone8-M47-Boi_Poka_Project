import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { ReadBooks } from '../ReadBooks/ReadBooks';

const ListedBooks = () => {
    const [readList, setReadList] = useState([]) 
    const allBooks = useLoaderData()
    // console.log(allBooks);

    useEffect( () => {
        const getBookList = localStorage.getItem('read-list');
        const getBookListObject = JSON.parse(getBookList);
        const getBookListInt = getBookListObject.map(id => parseInt(id));
        console.log(getBookListInt);
        const readBookList = allBooks.filter(book => getBookListInt.includes(book.bookId));
        console.log(readBookList);
        setReadList(readBookList);
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

                <TabPanel>
                    <h2>Read Books: {readList.length}</h2>
                    {
                        readList.map(book => <ReadBooks book={book}></ReadBooks>)
                    }
                </TabPanel>

                <TabPanel>
                    <h2>This is Wishlist Books Section</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;