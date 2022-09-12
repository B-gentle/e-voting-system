import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import useFetch from '../../../../useFetch';
import parse from 'html-react-parser';

const BlogDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { data: blog, isLoading, isError} = useFetch('https://vobes-blog.herokuapp.com/blogs/' + id || 'http://localhost:3400/blogs/' + id);

    const handleDelete = ()=>{
        fetch('https://vobes-blog.herokuapp.com/blogs/' + id || 'http://localhost:3400/blogs/' + id , {
            method: 'DELETE'
        }).then(()=>{
            console.log('deleted Successfully');
            navigate('/blog')
        })
    }
  return (
    <div>
        <div>
            <Link className='blog-link' to='/blog'>All Blogs</Link>
        </div>
        {isLoading && <div>Loading...</div>}
        {isError && <div>{isError}</div>}
        {blog && (
            <article>
                <h2>{blog.title}</h2>
                <small>written by: <b>{blog.author}</b></small>
                <div>{parse(blog.content)}</div>
            </article>
        )}
        <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default BlogDetails