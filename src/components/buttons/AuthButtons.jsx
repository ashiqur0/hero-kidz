'use client'

import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

const AuthButtons = () => {

    const session = useSession();

    return (
        <div>
            {
                session.status == 'authenticated' ? <>
                    <button onClick={() => signOut()} className='btn btn-primary'>Log out</button>
                </> : <div className='flex items-center gap-2'>
                    <Link href={'/login'} className='btn btn-primary btn-outline'>Sign In</Link>
                    <Link href={'/signup'} className='btn btn-primary'>Sign up</Link>
                </div>
            }
        </div>
    );
};

export default AuthButtons;