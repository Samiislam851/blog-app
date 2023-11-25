import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import  Link  from 'next/link'
import styles1 from '../styles/myStyle.module.css'

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


      <header>
        <nav className='w-full'>
          <ul className=' w-fit mx-auto flex gap-5 my-5 py-3 navStyle'>
            <Link href={`/`}>   <li >Home</li></Link>
            <Link href={`/about`}>     <li>About</li></Link>
            <Link href={`/blogs`}>     <li>Blog</li></Link>
            <Link href={`/contact`}>    <li>Contact</li></Link>
          </ul>
        </nav>
      </header>

      <section>
        <h2 className='text-5xl md:text-8xl mt-20 font-semibold text-center'>Simple Blogs</h2>



      </section>

    </main>
  )
}
