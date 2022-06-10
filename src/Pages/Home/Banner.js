import React from 'react';
import portfolioImage from '../../assets/images/portfolio-image.png';
import { BsArrowDownCircle } from 'react-icons/bs';
import { MdMarkEmailRead } from 'react-icons/md';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import HTML5Icon from '../../assets/icons/html-5.png';
import CSS3Icon from '../../assets/icons/css3.png';
import JsIcon from '../../assets/icons/js.png';
import ReactIcon from '../../assets/icons/react.png';
import ExpressJsIcon from '../../assets/icons/expressjs-icon.png';
import MongodbIcon from '../../assets/icons/mongodb.png';

const Banner = () => {
    return (
        <section className='grid lg:grid-cols-2 items-center'>
            <div className='order-2 lg:order-1'>
                <h1 className='text-2xl lg:text-4xl font-serif'>
                    Hello, My name is
                    <br />
                    <span className='font-bold text-4xl lg:text-6xl text-sky-700'>Sajeeb Das Shuvo</span>
                </h1>
                <div className='my-5 text-lg'>
                    <p className='flex items-center'>
                        <span className='text-xl mr-2'><MdMarkEmailRead /></span>
                        <a
                            href="mailto:hellosdshuvo@gmail.com"
                            aria-label="My email"
                            title="My email"
                            className="transition-colors duration-300 hover:text-sky-700"
                        >
                            hellosdshuvo@gmail.com
                        </a>
                    </p>

                    <p className='flex items-center'>
                        <span className='text-xl mr-2'><AiFillLinkedin /></span>
                        <a
                            href="https://www.linkedin.com/in/sdshuvo/"
                            target="_blank"
                            rel="noreferrer"
                            className="transition-colors duration-300 hover:text-sky-700"
                        >
                            LinkedIn
                        </a>
                    </p>


                    <p className='flex items-center'>
                        <span className='text-xl mr-2'><AiFillGithub /></span>
                        <a
                            href="https://github.com/sdshuvo98"
                            target="_blank"
                            rel="noreferrer"
                            className="transition-colors duration-300 hover:text-sky-700"
                        >
                            GitHub
                        </a>
                    </p>
                </div>
                <div className='mb-8'>
                    <p className='uppercase font-bold'>List of Technologies : </p>
                    {/* icons  */}
                    <div className='flex flex-wrap gap-5 my-3'>
                        <div className='border border-sky-700 rounded-full p-3 w-12 h-12'>
                            <img src={HTML5Icon} alt="" />
                        </div>
                        <div className='border border-sky-700 rounded-full p-3 w-12 h-12'>
                            <img src={CSS3Icon} alt="" />
                        </div>
                        <div className='border border-sky-700 rounded-full p-3 w-12 h-12'>
                            <img src={JsIcon} alt="" />
                        </div>
                        <div className='border border-sky-700 rounded-full p-3 w-12 h-12'>
                            <img src={ReactIcon} alt="" />
                        </div>
                        <div className='border border-sky-700 rounded-full p-3 w-12 h-12'>
                            <img src={ExpressJsIcon} alt="" />
                        </div>
                        <div className='border border-sky-700 rounded-full p-3 w-12 h-12'>
                            <img src={MongodbIcon} alt="" />
                        </div>
                    </div>
                </div>
                <a href='#project' >
                    <button className='flex justify-center items-center bg-sky-700 px-5 py-4 text-white rounded-lg font-semibold uppercase tracking-wide transition-colors duration-300 hover:bg-sky-800'>
                        Recent Projects
                        <span className='ml-3 text-lg'><BsArrowDownCircle /></span>
                    </button>
                </a>
            </div>
            {/* image  */}
            <div className='p-5 lg:p-16 order-1 lg:order-2'>
                <img src={portfolioImage} alt="" />
            </div>
        </section>
    );
};

export default Banner;