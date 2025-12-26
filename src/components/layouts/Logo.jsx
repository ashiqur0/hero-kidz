import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
    return (
        <Link href={'/'} className='flex items-center gap-2'>
            <Image
                src={'/assets/logo.png'}
                alt='logo-hero-kidz'
                width={50}
                height={40}
            />
            <h2 className='text-xl font-bold'>Hero Kidz</h2>
        </Link>
    );
};

export default Logo;