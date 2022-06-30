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

        <nav class="bg-white shadow dark:bg-gray-800">
            <div class="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
                <div class="flex items-center justify-end">

                    {/* <!-- Mobile menu button --> */}
                    <div class="flex md:hidden">
                        <button type="button" class="text-gray-500" aria-label="toggle menu">
                            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                                <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                            </svg>
                        </button>
                    </div>
                </div>

                {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
                <div class="items-center md:flex">
                    <ul class="flex flex-col md:flex-row md:mx-6 items-center gap-5">
                        {navItems}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;