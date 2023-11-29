import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
// import { getServerSideProps } from 'next';

const BlogPost = (props) => {
    const router = useRouter();
    const { slug } = router.query
    const [blog, setBlog] = useState(props.myBlog);
    // console.log(slug);
    // useEffect(() => {

    //     if (router.isReady) {
    //         axios.get(`http://localhost:3000/api/blogs/blog?slug=${slug}`).then(res => setBlog(res.data))
    //     }
        
    // }, [router.isReady]);
    return (
        <div className='text-center'>
            <h3 className='text-4xl'>{blog.title}</h3>
            <p>{blog.body}</p>
            <p>by: {blog.author}</p>
        </div>
    );
}

export async function getServerSideProps  (context){
    const {slug} = context.query

console.log(slug); 
   const res = await axios.get(`http://localhost:3000/api/blogs/blog?slug=${slug}`)
   console.log('heeeeeeeeeeeeeeeeeeeeeeey',res.data);
   const myBlog = res.data
   return {props : {myBlog}}
}
export default BlogPost;
