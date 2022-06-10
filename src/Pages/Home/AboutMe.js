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
                    <q className='text-2xl font-medium'>A self-motivated Web Developer with knowledge in JavaScript, HTML, CSS, and mobile responsive web development seeking a position as a Junior Web Developer where I can apply my skills and ability in writing clean and efficient code</q>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;