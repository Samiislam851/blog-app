import  Head  from 'next/head';
import React from 'react';

const About = () => {
    return (
        <div >
            <Head>
                <title>About Us - Your Blog</title>
                <meta name="description" content="Learn more about our blog and team." />
            </Head>
            <main className="container mx-auto text-center">
                <p className="text-gray-700 mb-8">
                    Welcome to Your Blog! We are a passionate team dedicated to sharing valuable insights and information through our blog posts.
                </p>

                <div className="flex items-center justify-center mb-8">
          <img className='rounded-xl' alt="contact us blogpage" src='/about.png' width={700} height={700}/>
                </div>

                <p className="text-gray-700">
                    Our mission is to provide quality content that educates, inspires, and entertains. Feel free to explore our blog and discover a variety of topics.
                </p>
            </main>

        </div>
    );
}

export default About;
