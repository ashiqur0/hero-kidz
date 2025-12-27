import ProductCardSkeleton from '@/components/skeleton/ProductCardSkeleton';
import React from 'react';

const loading = () => {
    return (
        <div className='my-10'>
            <div className='grid md:grid-cols-3 gap-5'>
                {
                    [...Array(6)].map((_, index) => <ProductCardSkeleton key={index}></ProductCardSkeleton>)
                }
            </div>
        </div>
    );
};

export default loading;