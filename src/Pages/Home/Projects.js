import React from 'react';



const Projects = () => {
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
        <section className='py-20' id='project'>
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
        </section>
    );
};

export default Projects;