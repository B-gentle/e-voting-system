import React from 'react';
import Button from 'react-bootstrap/Button';
      
const BlogList = ({blogs, title, handleDelete}) => {
    return (
        <div className='blog-list'>
            <h2>{title}</h2>
            {blogs && blogs.map((blog, id) =>
                <div className='blog-preview' key={blog.id}>
                    <h2>{blog.title}</h2>
                    <small><b>Author</b>: {blog.author}</small>
                    <Button onClick={()=>{handleDelete(blog.id)}} variant="primary">Delete Post</Button>
                </div>
            )}
        </div>
    )
}

export default BlogList