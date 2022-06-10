import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
    const { id } = useParams();
    const [selectedProjects, setSelectedProjects] = useState({});
    useEffect(() => {
        fetch('../projects.json')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                const selected = data.find(d => d.id === parseInt(id));
                setSelectedProjects(selected);
            })
    }, [id])

    const { name, description, mockup, link, clientSiteLink, serverSiteLink, Technologies, about, projectDetails } = selectedProjects;

    return (
        <section className='px-4 lg:px-20 my-10'>
            <div>
                <h1 className='text-center text-2xl lg:text-4xl font-extrabold'>{name}</h1>
                <p className='my-5'><span className='font-medium'>Description :</span> {description}</p>
                <img src={mockup} alt="" />

                {/* site button  */}
                <div className='flex justify-center gap-4 lg:gap-10'>
                    <button>
                        <a
                            href={link}
                            target="_blank"
                            rel='noreferrer'
                            role="button"
                            className="border border-sky-700 px-2 lg:px-10 py-3 text-xs lg:text-base hover:text-white rounded-lg font-semibold uppercase tracking-wide hover:bg-sky-800 duration-300 ease-in-out"
                        >
                            Visit Project
                        </a>
                    </button><button>
                        <a
                            href={clientSiteLink}
                            target="_blank"
                            rel='noreferrer'
                            role="button"
                            className="border border-sky-700 px-2 lg:px-10 py-3 text-xs lg:text-base hover:text-white rounded-lg font-semibold uppercase tracking-wide hover:bg-sky-800 duration-300 ease-in-out"
                        >
                            Client Site
                        </a>
                    </button><button>
                        <a
                            href={serverSiteLink}
                            target="_blank"
                            rel='noreferrer'
                            role="button"
                            className="border border-sky-700 px-2 lg:px-10 py-3 text-xs lg:text-base hover:text-white rounded-lg font-semibold uppercase tracking-wide hover:bg-sky-800 duration-300 ease-in-out"
                        >
                            Server Site
                        </a>
                    </button>
                </div>

                <section className='my-20'>
                    <h1 className='text-xl font-bold text-sky-700'>List of Technologies :</h1>
                    <div className='flex gap-4 flex-wrap my-5'>
                        {
                            Technologies?.map(technology => <p className='border p-2 rounded-md bg-gray-50 text-sm lg:text-base'>{technology}</p>)
                        }
                    </div>
                </section>

                <section className='my-20'>
                    <h1 className='text-xl font-bold text-sky-700'>In this project :</h1>
                    <ul className='my-5 list-disc list-inside space-y-3'>
                        {
                            about?.map(a => <li>{a}</li>)
                        }
                    </ul>
                </section>

                <section className='my-20'>
                    <h1 className='text-xl font-bold text-sky-700'>Some sections :</h1>
                    <ul className='my-5 list-disc list-inside space-y-3'>
                        {
                            projectDetails?.map(detail =>
                                <div className='lg:w-3/4 mx-auto even:text-right'>
                                    <h1 className='text-xl lg:text-7xl font-semibold mt-20 mb-1 lg:-mb-2 lg:opacity-20'>{detail.name}</h1>
                                    <img className='rounded-xl shadow-xl' src={detail.img} alt="" />
                                </div>)
                        }
                    </ul>
                </section>

            </div>
        </section>
    );
};

export default Details;