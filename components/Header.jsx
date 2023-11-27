import React from 'react';
import Link from 'next/link'
const Header = () => {
    return (
       
             <header>
        <nav className='w-full '>
          <ul className=' w-fit mx-auto flex gap-5 my-5 py-3 navStyle'>
            <Link href={`/`}>   <li >Home</li></Link>
            <Link href={`/about`}>     <li>About</li></Link>
            <Link href={`/blogs`}>     <li>Blog</li></Link>
            <Link href={`/contact`}>    <li>Contact</li></Link>
          </ul>
        </nav>
      </header>

       
    );
}

export default Header;
