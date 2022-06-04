import React from 'react';
import portfolioImage from '../assets/images/portfolio-image.png';
import { BsArrowDownCircle } from 'react-icons/bs';
import { MdMarkEmailRead } from 'react-icons/md';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import HTML5Icon from '../assets/icons/html-5.png';
import CSS3Icon from '../assets/icons/css3.png';
import JsIcon from '../assets/icons/js.png';
import ReactIcon from '../assets/icons/react.png';
import ExpressJsIcon from '../assets/icons/expressjs-icon.png';
import MongodbIcon from '../assets/icons/mongodb.png';

const Home = () => {
    const projects = [
        {
            id: 1,
            name: "CARTS",
            description: "This project is for Car Parts Manufacturer who manufacture the parts of Car.",
            img: "https://i.ibb.co/QKBKDWY/CARTS.png",
            link: "https://carts-68435.web.app/"
        },
        {
            id: 2,
            name: "Auto Ment",
            description: "This is a website for inventory management, which will help to manage all inventories",
            img: "https://i.ibb.co/0MJPGB5/AutoMent.png",
            link: "https://automent-4fd77.web.app/"
        },
        // {
        //     id: 2,
        //     name: "Traveeel",
        //     description: "Traveeel is a website for passionate travelers. Who want to travel all over the world.",
        //     img: "https://i.ibb.co/JBPvkg1/Traveeel.png",
        //     link: "https://traveeel-7ce5d.web.app/"
        // },
        {
            id: 3,
            name: "Coin Kinbo",
            description: "This is a coin buying website where user can buy coin whatever they want",
            img: "https://i.ibb.co/8MQ96Mw/Coin-Kinbo.png",
            link: "https://coin-kinbo.web.app/"
        }
    ]

    return (
        <section className='px-4 lg:px-20 my-10'>
            <div>
                <article className='grid lg:grid-cols-2 items-center'>
                    {/* about me  */}
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
                </article>

                {/* projects  */}
                <article className='py-20' id='project'>
                    <div className='text-center'>
                        <h1 className='text-3xl lg:text-4xl font-bold'>My Recent Projects</h1>
                        <p className='mt-4 text-base text-gray-600 md:text-lg'>Here you will get the overview of latest <br className="hidden md:block" /> three projects done by me.</p>
                    </div>
                    <section className='my-10 grid grid-cols-1 lg:grid-cols-3 gap-5'>
                        {
                            projects.map(project =>
                                <div key={project.id} className="max-w-xl bg-white border border-sky-700 rounded-xl shadow-xl">
                                    <div className="px-5 pt-5">
                                        <img src={project.img} alt="Shoes" className="rounded-xl" />
                                    </div>
                                    <div className="items-center text-center px-2 my-2">
                                        <h2 className="text-2xl font-semibold">{project.name}</h2>
                                        <p className='my-3'>{project.description}</p>
                                        <button className="my-5">
                                            <a href={project.link} target="_blank" rel='noreferrer' role="button" className="bg-sky-700 px-8 py-4 text-white rounded-lg font-semibold uppercase tracking-wide hover:bg-sky-800">Visit Project</a>
                                        </button>
                                    </div>
                                </div>
                            )
                        }
                    </section>
                </article>
            </div>
        </section>
    );
};

export default Home;