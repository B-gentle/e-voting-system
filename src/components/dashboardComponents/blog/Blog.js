import React, { useState } from 'react';
import './blog.css';

const Blog = () => {

    const [blogs, setBlogs] = useState([{
        title: 'My New Blog',
        body: `about my new blog <b>great blog</b>`,
        author: 'BeeTech',
        id: 1
    },
        {
            title: 'My New Blog',
            body: `about my new blog <b>great blog</b>`,
            author: 'Favour',
            id: 2
        },
        {
            title: 'My New Blog',
            body: `about my new blog <b>great blog</b>`,
            author: 'Lizzy',
            id: 3
        },
        {
            title: 'My New Blog',
            body: 'Let me tell you all about html',
            author: 'Bash',
            id: 4
        }])
    return (
        <div className='blog'>
            {blogs && blogs.map((blog, id) =>
                <div className='blog-preview' key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>{blog.body}</p>
                    <small><b>Author</b>: {blog.author}</small>
                </div>
            )}
        </div>
    )
}

export default Blog