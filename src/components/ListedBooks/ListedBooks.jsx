import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ListedBooks = () => {
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
                    <h2>This is Read Books Section</h2>
                </TabPanel>
                <TabPanel>
                    <h2>This is Wishlist Books Section</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;