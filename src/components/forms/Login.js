import React, { useState} from 'react';
import './form.css';

const Login = () => {

    const [login, setLogin] = useState({
        emailPhone: '',
        password: ''
    })

    const handleSubmit = (e) =>{
        e.preventDefault();
        const {emailPhone, password} = login;
        const loginDetails = { emailPhone, password }
    }

    const handleLogin = (e) =>{
        const {id, value} = e.target
        setLogin((...data) =>{
            return {...data, [id]:value}
        })
    }
    return (
        <div className='form'>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email or Phone No</label>
                    <input type='text' placeholder='email or Phone No' value={login.emailPhone} id='emailPhone' onChange={handleLogin}/>
                </div>
                <div>
                    <label>Password</label>
                    <input type='password' placeholder='Password' value={login.password} id='password' onChange={handleLogin} />
                </div>
                <button type='submit'>Log in</button>
            </form>
        </div>
    )
}

export default Login