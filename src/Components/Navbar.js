import React from 'react';
import { Link } from 'react-router-dom';
import Resume from '../assets/resume/sajeeb-das-shuvo-resume.pdf'

const navItems = [
    <Link to='/' className='font-medium tracking-wide'>Home</Link>,
    <Link to='/blogs' className='font-medium tracking-wide'>Blogs</Link>,
    <li>
        <a href='/#about' className='font-medium tracking-wide' >About me</a>
    </li>,
    <li>
        <a href='/#contact' className='font-medium tracking-wide' >Contact me</a>
    </li>,
    <li>
        <a href={Resume} download='sajeeb-das-shuvo-resume'>
            <button className=' px-3 py-1 rounded-md font-semibold border border-sky-700 transition-colors duration-300 hover:text-white hover:bg-sky-700'>Resume</button>
        </a>
    </li>
]


const Navbar = () => {
    return (
        <nav>
            <ul className='flex justify-end items-center gap-5 px-4 lg:px-20 pt-5'>
                {navItems}
            </ul>
        </nav>
    );
};

export default Navbar;