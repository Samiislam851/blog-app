import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Link from 'next/link'
const blogs = (props) => {
    const [blogs, setBlogs] = useState(props.myBlogs);
   

    console.log(blogs);
    return (
        <div >
            {blogs?.map(blog =>
                <div className='border rounded-lg py-10 px-3 my-3 w-fit mx-auto'>
                    <Link href={`/blogpost/${blog.slug}`}> <h3 className='text-xl text-center font-semibold'>{blog?.title}</h3></Link>
                    <p className='text-gray-500'>{blog?.body.substr(0, 60)}...</p>
                </div>)}
        </div>
    );
};
export const getServerSideProps = async (context) => {
    const res = await axios.get('/hello')
    const myBlogs = res.data.blogs
    return { props: {myBlogs} }
}
export default blogs;