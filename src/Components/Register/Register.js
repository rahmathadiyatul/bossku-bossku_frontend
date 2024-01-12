import React, { useState, useContext } from 'react'
import './../UserPageComponents/User.css'
import SingleButton from './../UserPageComponents/SingleButton';
import H1User from './../UserPageComponents/H1User';
import H2User from './../UserPageComponents/H2User';
import InputUser from './../UserPageComponents/InputUser';
import '@fontsource/montserrat/400.css';
import Http from './../../Axios/Config';
import { useNavigate } from 'react-router-dom';
import { ValidateEmail } from './../UserPageComponents/Validation';
import Header from '../../1_Header/Header';
import { Snackbar, Alert } from '@mui/material';


const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [errorMsg, setErrorMsg] = useState('');
    const [openSuccessSnackbar, setOpenSuccessSnackbar] = useState(false);
    const navigate = useNavigate();;

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        if (id === "name") {
            setName(value)
        }
        if (id === "email") {
            setEmail(value)
        }
        if (id === "password") {
            setPassword(value)
        }
        if (id === "confirm") {
            setConfirmPassword(value)
        }
    }
    const clearData = () => {
        setErrorMsg('')
        setName('')
        setEmail('')
        setPassword('')
        setConfirmPassword('')
    }

    const handleSnackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSuccessSnackbar(false);
    };

    const handleSubmit = () => {
        if (name === '' || email === '' || password === '') {
            setErrorMsg('Field Cannot Be Empty!')
            return;
        }
        if (password !== confirmPassword) {
            setErrorMsg('Password Does Not Match!')
            return;
        }
        if (ValidateEmail(email) === false) {
            setErrorMsg('Email Format Invalid!')
            return;
        }
        const userData = {
            name: name,
            email: email,
            password: password
        }
        clearData()
        Http.post('User/Register', userData)
            .then((res) => {
                if (res.status === 200) {
                    setTimeout(() => {
                        setOpenSuccessSnackbar(true);
                    }, 6000)
                    navigate('/login');
                }
            })
            .catch((err) => {
                console.log('There was an error!', err);
            });
    }

    return (
        <div>
            <Header isLogin={true}></Header>
            <div className='card'>
                <H1User text={'Are you ready to sell worldwide?'}></H1User>
                <H2User text={'Please register first'}></H2User>
                <InputUser id="name" type="text" text='Name' value={name} onChange={(e) => handleInputChange(e)}></InputUser>
                <InputUser id='email' type="email" text='Email' value={email} onChange={(e) => handleInputChange(e)}></InputUser>
                <InputUser id='password' type="password" text='Password' value={password} onChange={(e) => handleInputChange(e)}></InputUser>
                <InputUser id='confirm' type="password" text='Confirm Password' value={confirmPassword} onChange={(e) => handleInputChange(e)}></InputUser>
                <p style={{ color: "red", textAlign: 'left', marginTop: '20px' }}>{errorMsg}</p>
            </div>
            <div className='card3'>
                <div>
                    <SingleButton onClick={() => handleSubmit()} type='submit' orangeButton={'Sign Up'}></SingleButton>
                </div>
                <div className='card4'>
                    <p>Have account? <a style={{
                        textDecoration: 'none'
                    }} href='/login'>Login Here</a></p>
                </div>
                <Snackbar
                    open={openSuccessSnackbar}
                    autoHideDuration={6000}
                    onClose={handleSnackbarClose}
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                >
                    <Alert onClose={handleSnackbarClose} severity='success'>
                        Registration successful! You can now log in.
                    </Alert>
                </Snackbar>
            </div>
        </div >
    )
}

export default Register;