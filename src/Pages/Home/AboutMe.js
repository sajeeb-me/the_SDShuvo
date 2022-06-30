import React from 'react';

const AboutMe = () => {
    return (
        <section id='about' className='mb-24 lg:pt-20 lg:mb-44'>
            <div className='lg:flex justify-between'>
                <div className='flex-1'>
                    <h1 className='text-3xl lg:text-4xl font-bold'>About Me</h1>
                    <p className='mt-4 text-base text-gray-600 md:text-lg'>Please have a look about me section <br className="hidden md:block" /> You will get the proper idea about me. </p>
                </div>
                <div className='flex-1 my-5'>
                    <q className='text-2xl font-medium'>
                        Hello, I am a Web Developer.
                        <br />
                        <br />
                        Love to use my Web Development skills and also possess a great eye for design while making any project.
                        <br />
                        <br />
                        Have knowledge in JavaScript, HTML, CSS, mobile responsive web development, little bit UX Design knowledge  and currently building my projects with Rect.js
                    </q>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;