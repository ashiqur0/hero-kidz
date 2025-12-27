import { fontBangla } from '@/app/layout';
import Image from 'next/image';
import React from 'react';

const Banner = () => {
    return (
        <div className='flex md:flex-row flex-col justify-between items-center'>
            <div className='flex-1 space-y-5 p-4 md:p-0'>
                <h2 className={`${fontBangla.className} md:text-6xl text-5xl text-center font-bold leading-20 `}>আপনার শিশুকে দিন একটি <span className='text-primary'>সুন্দর ভবিষ্যৎ</span></h2>
                <p className='text-center'>Buy Every Toy With Up To 15% Discount</p>
                <div className='flex justify-center w-full'>
                    <button className='btn btn-primary btn-outline'>Explore Products</button>
                </div>
            </div>

            <div className='flex-1'>
                <Image
                    src={'/assets/hero.png'}
                    alt='Buy Every Toy With Up To 15% Discount'
                    width={500}
                    height={400}
                />
            </div>
        </div>
    );
};

export default Banner;