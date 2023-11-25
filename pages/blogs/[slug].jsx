import { useRouter } from 'next/router';
import React from 'react';

const blog = () => {
    const router = useRouter()
    const {slug} = router.query
    console.log(slug);
    return (
        <div>
{slug}
        </div>
    );
};

export default blog;