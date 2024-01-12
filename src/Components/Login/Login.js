import React, { useState, useContext } from 'react'
import Header from '../../1_Header/Header.js';
import Http from './../../Axios/Config.js'
import './../UserPageComponents/User.css'
import SingleButton from './../UserPageComponents/SingleButton.js'
import H1User from './../UserPageComponents/H1User';
import H2User from './../UserPageComponents/H2User';
import InputUser from './../UserPageComponents/InputUser';
import '@fontsource/montserrat/400.css';
import { useNavigate, Link } from 'react-router-dom';
import { ValidateEmail } from './../UserPageComponents/Validation.js';
import { TokenContext } from './../UserPageComponents/TokenContext.js';

const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMsg, setErrorMsg] = useState('')

    const { setToken } = useContext(TokenContext)

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        if (id === "email") {
            setEmail(value)
        }
        if (id === "password") {
            setPassword(value)
        }
    }

    const clearData = () => {
        setErrorMsg('')
        setEmail('')
        setPassword('')
    }

    const handleSubmit = async () => {
        try {
            if (ValidateEmail(email) === false) {
                setErrorMsg('Email Invalid!');
                return;
            }

            const userData = {
                email: email,
                password: password,
            };

            clearData();

            const res = await Http.post('User/Login', userData);

            if (res.status === 200 && res.data.token) {
                setToken(res.data.token);
                localStorage.setItem('user', res.data.idUser);
                navigate('/home');
            } else {
                setErrorMsg('Email or Password Invalid');
            }
        } catch (error) {
            if (error.response && error.response.status === 401) {
                setErrorMsg('Email or Password Invalid');
                console.error('Authentication failed:', error);
            } else {
                console.error('An unexpected error occurred:', error);
            }
        }
    };

    return (
        <div>
            <Header isLogin={true}></Header>
            <div className='card'>
                <H1User text={'Please Login'}></H1User>
                <H2User text={'Please login first'}></H2User>
                <InputUser id='email' type="email" text='Email' value={email} onChange={(e) => handleInputChange(e)}></InputUser>
                <InputUser id='password' type="password" text='Password' value={password} onChange={(e) => handleInputChange(e)}></InputUser>
                <p style={{ color: "red", textAlign: 'left', marginTop: '20px' }}>{errorMsg}</p>
                <p className='para'>Forgot Password?<a style={{
                    textDecoration: 'none', marginLeft: '.5em'
                }} href='/resetpassword'>Click Here</a></p>
            </div>
            <div className='card3'>
                <SingleButton onClick={() => handleSubmit()} type='submit' orangeButton={'Login'}></SingleButton>
                <div className='card4'>
                    <p>
                        Don't have an account?
                    </p>
                    <Link to='/register' style={{ textDecoration: 'none', marginLeft: '.5em' }}>
                        <h4>Sign Up here</h4>
                    </Link>
                </div>
            </div>
        </div >
    )
}

export default Login;