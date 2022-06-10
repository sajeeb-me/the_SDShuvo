import React from 'react';
import Banner from './Banner';
import ContactMe from './ContactMe';
import Projects from './Projects';

const Home = () => {
    return (
        <section className='px-4 lg:px-20 my-10'>
            <Banner />
            <Projects />
            <ContactMe />
        </section>
    );
};

export default Home;