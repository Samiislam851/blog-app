import { Inter } from 'next/font/google'
import Head from 'next/head'
import Link from 'next/link'
import styles1 from '../styles/myStyle.module.css'
import axios from 'axios'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
 

  return (
    <main
      className={` ${inter.className}`}
    >

      <Head>
        {/* Add title to the page */}
        <title>My page</title>

        {/* Add meta tags for description, keywords, etc. */}
        <meta name="description" content="Your page description" />
        <meta name="keywords" content=" siam blog, Coder Blog, Siam's page" />

        {/* Include external stylesheet */}


        {/* Add other meta tags or links as needed */}
      </Head>


     
      <section className='banner flex flex-col md:flex-row gap-16 items-center justify-center border-b shadow-sm '>
        <div>
        <h2 className='text-5xl md:text-7xl mt-20 font-semibold text-center'>Simple Blogs</h2>
        <p className='text-xl my-5 text-center text-gray-500'>A simple project for starting next.js</p>
        </div>
        
        <div className='w-auto'>
          {/* <Image src="/banner.avif"
            alt='blogger banner'
            loading="lazy"
            width={500}
            height={500}
            blurDataURL="data:image/png;base64,..."
            className='rounded-lg'
          /> */}
          <img src="/banner.avif"
            alt='blogger banner'
            width={500}
            height={500}
           
          />
        </div>


      </section>

    </main>
  )
}
