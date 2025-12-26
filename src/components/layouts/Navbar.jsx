import Link from 'next/link';
import React from 'react';
import Logo from './Logo';
import NavLink from './NavLink';
import { MdOutlineShoppingCart } from "react-icons/md";

const Navbar = () => {

    const links = <>
        <li><NavLink href='/products'>Products</NavLink></li>
        <li><NavLink href='/blog'>Blog</NavLink></li>
        <li><NavLink href='/contact'>Contact</NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100">
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
                <Logo />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end md:flex gap-4 hidden w-full">
                <Link href={'/cart'} className='btn '><MdOutlineShoppingCart /></Link>
                <Link href='/login ' className="btn btn-outline btn-primary border">Login</Link>
            </div>
        </div>
    );
};

export default Navbar;