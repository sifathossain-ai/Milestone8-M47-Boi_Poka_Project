import React from 'react';

const ErrorPage = () => {
    return (
        <div className='h-screen text-center flex flex-col justify-center items-center'>
            <h2 className='text-4xl font-bold'>Page Not Found</h2>
            <p className='text-3xl font-semibold'>Status: 404</p>
        </div>
    );
};

export default ErrorPage;