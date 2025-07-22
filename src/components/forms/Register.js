import React, { useState } from 'react';
import './form.css';

const Register = () => {
    const [registrationData, setRegistrationData] = useState({
        fullname: '',
        emailPhone: '',
        username: '',
        password: '',
        confirmPassword: ''
    });

    const { fullname, emailPhone, username, password, confirmPassword } = registrationData

    const submitRegistrationData = (e) => {
        e.preventDefault();
        const userDetail = { fullname, emailPhone, username, password, confirmPassword }
        setRegistrationData({
            fullname: '',
            emailPhone: '',
            username: '',
            password: '',
            confirmPassword: ''
        })
    }

    const handleRegistrationData = (e) => {
        const { id, value } = e.target
        setRegistrationData((...data) => {
            return { ...data, [id]: value }
        })
    }
    return (
        <div className='form'>
            <form onSubmit={submitRegistrationData}>
                <div>
                    <label>Full Name</label>
                    <input type='text' placeholder='Frist Name Last Name' id='fullname' value={registrationData.fullname} onChange={handleRegistrationData} />
                </div>
                <div>
                    <label>Email or Phone No</label>
                    <input type='text' placeholder='Phone No' id='emailPhone' value={registrationData.emailPhone} onChange={handleRegistrationData} />
                </div>
                <div>
                    <label>Username</label>
                    <input type='text' placeholder='Username' id='username' value={registrationData.username} onChange={handleRegistrationData} />
                </div>
                <div>
                    <label>Password</label>
                    <input type='password' placeholder='Password' id='password' value={registrationData.password} onChange={handleRegistrationData} />
                </div>
                <div>
                    <label>Confirm Password</label>
                    <input type='password' placeholder='Confirm password' id='confirmPassword' value={registrationData.confirmPassword} onChange={handleRegistrationData} />
                </div>
                <button type='submit'>Sign up</button>
            </form>
        </div>
    )
}

export default Register