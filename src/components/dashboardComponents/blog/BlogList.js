import React from 'react'

const BlogList = ({blogs, title}) => {
    return (
        <div className='blog-list'>
            <h2>{title}</h2>
            {blogs && blogs.map((blog, id) =>
                <div className='blog-preview' key={blog.id}>
                    <h2>{blog.title}</h2>
                    <small><b>Author</b>: {blog.author}</small>
                </div>
            )}
        </div>
    )
}

export default BlogList