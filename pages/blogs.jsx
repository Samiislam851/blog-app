import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Link from 'next/link'
const Blogs = (props) => {

    const [blogs, setBlogs] = useState(props.blogs);



    return (
        <div >
            {blogs?.map(blog =>
                <div key={blog.slug} className='border rounded-lg py-10 px-3 my-3 w-fit mx-auto'>
                    <Link href={`/blogpost/${blog.slug}`}> <h3 className='text-xl text-center font-semibold'>{blog?.title}</h3></Link>
                    <p className='text-gray-500'>{blog?.body.substr(0, 60)}...</p>
                </div>)}
        </div>
    );
};



// export const getStaticProps = async (context) => {
//     const res = await fs.promises.readFile("blogData/blogdata.json", (err, data) => {
//         console.log('error....', err);
//         return (data)
//     })
//     const blogs = JSON.parse(res).blogs

//     return { props: { blogs } }
// }

export const getServerSideProps = async (context) => {
    const res = await axios.get('/hello');
    console.log(res.data);
    const blogs = res.data.blogs; 
    return { props: { blogs } }
}

export default Blogs;