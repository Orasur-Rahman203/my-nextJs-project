import React from 'react';
import Link from 'next/link';

const Navbar = () => {

    return (
        <div className="navbar bg-indigo-300 text-neutral-content p-8">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black">
              <Link href='/'>Home</Link>
               <Link href='/about'>About</Link>
               <Link href='/service'>Service</Link>
               <Link href='/ourteam'>Our Team</Link>
               <Link href='/contact'>Contact</Link>
            </ul>
          </div>
          <Link className="btn btn-ghost normal-case text-xl" href='/'>Fitness First</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-3 ">
          <Link className='mx-5' href='/'>Home</Link>
            {/* <li tabIndex={0}>
              <a>
                Menu
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
              </a>
              <ul className="p-2">
              <li><a>About</a></li>
              <li><a>Service</a></li>
              <li><a>Our Team</a></li>
              </ul>
            </li> */}
           <Link className='mx-5' href='/about'>About</Link>
           <Link className='mx-5' href='/service'>Service</Link>
           <Link className='mx-5' href='/ourteam'>Our Team</Link>
           <Link className='mx-5' href='/contact'>Contact</Link>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-outline btn-info bg-indigo-500">Profile</a>
        </div>
      </div>
    );
};

export default Navbar;