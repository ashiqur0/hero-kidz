import Link from 'next/link';
import React from 'react';

const Navbar = () => {

    const links = <>
        <li><Link href='/'>Home</Link></li>
    </>

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start w-full">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link href={'/'} className="btn btn-ghost text-xl">Hero Kidz</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end w-full">
                <Link href='/login ' className="btn btn-sm btn-soft btn-success border border-green-400">Login</Link>
            </div>
        </div>
    );
};

export default Navbar;