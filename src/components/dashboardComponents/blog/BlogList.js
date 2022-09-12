import React from 'react';
import { Link } from 'react-router-dom';

      
const BlogList = ({blogs, title }) => {
    return (
        <div className='blog-list'>
            <h2><Link className='blog-link' to='/blog'>{title}</Link></h2>
            {blogs && blogs.map((blog, id) =>
                <div className='blog-preview' key={id}>
                    <Link className='blog-link' to={`/blog/${blog._id}`}>
                    <h2>{blog.title}</h2>
                    <p>{blog.snippet}</p>
                    <small><b>Author</b>: {blog.author}</small>
                    </Link>
                    
                </div>
            )}
        </div>
    )
}

export default BlogList