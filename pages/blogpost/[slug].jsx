import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
// import { getServerSideProps } from 'next';
import * as fs from 'fs'
const BlogPost = (props) => {
    // const router = useRouter();
    // const { slug } = router.query
    const [blog, setBlog] = useState(props.blog);
    console.log(blog);
    // console.log(slug);
    // useEffect(() => {

    //     if (router.isReady) {
    //         axios.get(`http://localhost:3000/api/blogs/blog?slug=${slug}`).then(res => setBlog(res.data))
    //     }

    // }, [router.isReady]);

    if (!blog) {
        return <p>Loading...</p>; // or render an appropriate loading state
    }
    return (
        <div className='text-center'>
            <h3 className='text-4xl'>{blog.title}</h3>
            <p>{blog.body}</p>
            <p>by: {blog.author}</p>
        </div>
    );
}

// export async function getServerSideProps  (context){
//     const {slug} = context.query

// console.log(slug); 
//    const res = await axios.get(`http://localhost:3000/api/blogs/blog?slug=${slug}`)
//    console.log('',res.data);
//    const myBlog = res.data
//    return {props : {myBlog}}
// }

export const getStaticPaths = async () => {
    console.log('got into getStaticPaths.................');
    return {

        paths: [
            { params: { slug: 'blog-title-1' } },
            { params: { slug: 'blog-title-2' } },
            { params: { slug: 'blog-title-3' } },
            { params: { slug: 'blog-title-4' } },
        ],
        fallback: true
    }
}

export const getStaticProps = async (context) => {
    const { slug } = context.params;
    const res = await fs.promises.readFile('blogData/blogdata.json');
    const fetchedData = JSON.parse(res);
    const blogs = fetchedData.blogs;
    const blog = blogs?.find((blog) => blog.slug == slug);
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>',blog);
    if (!blog) {
        return { notFound: true }; // Handle the case when the blog is not found
    }
    return { props: { blog } }
}


export default BlogPost;
