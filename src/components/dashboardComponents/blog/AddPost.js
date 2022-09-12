import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './blog.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import App from '../../../App';

const AddPost = () => {
    const [formData, setFormData] = useState({
        title: '',
        author: '',
        snippet: ''
    })

    const [content, setContent] = useState('');
    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()

    const handleEditorChange = (e) => {
        setContent(e)
    }

    const handlePostChange = (e) => {
        const { name, value } = e.target;
        setFormData((form) => {
            return { ...form, [name]: value }
        }
        )
    }

    const submitPost = (e) => {
        e.preventDefault();
        setIsLoading(true)
        const { title, author, snippet } = formData
        const post = { title, author, snippet, content }
        fetch('https://vobes-blog.herokuapp.com/blogs' || 'http://localhost:3400/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(post)
        }).then(() => {
            console.log('new post added')
            setIsLoading(false);
            navigate('/blog')
        })

        setFormData({
            title: '',
            author: '',
            snippet: ''
        })
        setContent('')
    }

    App.modules = {
        toolbar: [
            ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
            ['blockquote', 'code-block'],

            [{ 'header': 1 }, { 'header': 2 }],               // custom button values
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
            [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
            [{ 'direction': 'rtl' }],                         // text direction

            [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

            [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
            [{ 'font': [] }],
            [{ 'align': [] }],

            ['clean']                                         // remove formatting button
        ]
    };

    return (
        <div className='add-post'>
            <Link className='blog-link' to='/blog'>Add a new post</Link>
            <form onSubmit={submitPost}>
                <div>
                    <label htmlFor='title'>Post Title:</label>
                    <input type='text' name='title' value={formData.title} onChange={handlePostChange} required />
                </div>
                <div>
                    <label>Snippet: </label>
                    <input type='text' name='snippet' value={formData.snippet} onChange={handlePostChange} required />
                </div>
                <div className='content'>
                    <label>Content:</label>
                    <ReactQuill theme="snow" placeholder='Enter Content....' modules={App.modules} value={content} onChange={handleEditorChange} />
                </div>
                <div>
                    <label>Author: </label>
                    <input type='text' name='author' value={formData.author} onChange={handlePostChange} required />
                </div>
                { isLoading && <button type='submit' disabled>Adding Post</button>}
                { !isLoading && <button type='submit'>Add Post</button>}
            </form>
        </div>
    )
}

export default AddPost