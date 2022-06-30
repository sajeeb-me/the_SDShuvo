import React from 'react';
import { useNavigate } from 'react-router-dom';
import useProjects from '../../hooks/useProjects';



const Projects = () => {
    const navigate = useNavigate();
    const [projects] = useProjects();

    return (
        <section className='py-20' id='project'>
            <div className='text-center'>
                <h1 className='text-3xl lg:text-4xl font-bold'>My Recent Projects</h1>
                <p className='mt-4 text-base text-gray-600 md:text-lg'>Here you will get the overview of latest <br className="hidden md:block" /> three projects done by me.</p>
            </div>
            <section className='my-10 grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    projects.slice(0, 3)?.map(project =>
                        <div key={project.id} className="max-w-xl bg-white border border-sky-700 rounded-xl shadow-xl">
                            <div className="px-5 pt-5">
                                <img src={project.img} alt="Shoes" className="rounded-xl" />
                            </div>
                            <div className="items-center text-center px-2 my-2">
                                <h2 className="text-2xl font-semibold">{project.name}</h2>
                                <p className='my-3'>{project.description}</p>
                                <div className='flex justify-center gap-5 my-10'>
                                    <button
                                        onClick={() => navigate(`/details/${project.id}`)}
                                        className="border border-sky-700 px-6 py-3 text-sm hover:text-white rounded-lg font-semibold uppercase tracking-wide hover:bg-sky-800"
                                    >
                                        View Details
                                    </button>
                                    <button>
                                        <a href={project.link} target="_blank" rel='noreferrer' role="button" className="border border-sky-700 bg-sky-700 px-6 py-3 text-sm text-white rounded-lg font-semibold uppercase tracking-wide hover:bg-sky-800">Visit Project</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </section>
        </section>
    );
};

export default Projects;