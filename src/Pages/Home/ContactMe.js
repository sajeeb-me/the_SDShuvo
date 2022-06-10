import React from 'react';

const ContactMe = () => {
    return (
        <section id='contact'>
            <div className='text-center'>
                <h1 className='text-3xl lg:text-4xl font-bold'>Contact Me</h1>
                <p className='mt-4 text-base text-gray-600 md:text-lg'>Please fill this form and give your information <br className="hidden md:block" /> I will contact you very soon. </p>
            </div>
            <div className='my-10 border lg:w-1/2 mx-auto p-5 lg:p-10 rounded-xl border-sky-700 shadow-lg'>
                <form action="https://public.herotofu.com/v1/f183eca0-e808-11ec-ad8d-e72489fe64ed" method="post">
                    <div className="mb-4">
                        <label htmlFor="name" className="block mb-2 text-sm font-medium">Your Name</label>
                        <input
                            name="Name"
                            id="name"
                            type="text"
                            className='bg-gray-50 border border-gray-300 text-sm rounded-lg focus:outline-sky-700 block w-full p-2.5'
                            placeholder='Your name here'
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium">Your Email</label>
                        <input
                            name="Email"
                            id="email"
                            type="email"
                            className='bg-gray-50 border border-gray-300 text-sm rounded-lg focus:outline-sky-700 block w-full p-2.5'
                            placeholder='Your email address here'
                            required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium">Message</label>
                        <textarea
                            name="Message"
                            id="message"
                            className='bg-gray-50 border border-gray-300 text-sm rounded-lg focus:outline-sky-700 block w-full p-2.5'
                            placeholder='Your valuable message here'
                            rows="5"
                            required />
                    </div>
                    <div>
                        <input
                            type="submit"
                            value="submit"
                            className='bg-sky-700 px-5 py-2 text-white rounded-lg font-semibold uppercase tracking-wide transition-colors duration-300 hover:bg-sky-800' />
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ContactMe;