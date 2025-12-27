import Logo from '@/components/layouts/Logo';
import React from 'react';

const loading = () => {
    return (
        <div className='flex flex-col min-h-screen justify-center items-center gap-4'>
            <Logo />
            <h1 className='text-xl font-bold'>Loading<span className="loading loading-dots loading-sm"></span></h1>
        </div>
    );
};

export default loading;