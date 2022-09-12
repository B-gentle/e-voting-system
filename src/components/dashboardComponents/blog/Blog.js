import React from 'react';
import useFetch from '../../../useFetch';
import './blog.css';
import BlogList from './BlogList';
import { Link } from 'react-router-dom';

const Blog = () => {
    const { data: blogs, isLoading, isError } = useFetch('https://vobes-blog.herokuapp.com/blogs')
    return (
        <div className='blog'>
            <div>
                <BlogList blogs={blogs} title='All Blogs' />
                {isLoading && <div>Loading...</div>}
                {isError && <div>{isError}</div>}
            </div>
            <div>
                <Link className='blog-link' to='/create-post'><h2>Add Post</h2></Link>
            </div>

        </div>
    )
}

export default Blog