import React, { Fragment, useState, useEffect } from 'react';
import {
    Box,
    Button,
    TextField,
    Dialog,
    DialogActions,
    DialogContent,
    Checkbox,
    DialogTitle,
    Typography,
    FormLabel,
    Select,
    FormGroup,
    MenuItem,
    Snackbar
} from '@mui/material';
import { Close } from '@mui/icons-material';
import './../Homepage/HomeBody.css'
import './../Homepage/WTS&Trainings.css'
import './InvUpg.css'
import './../../1_Header/Header.css'
import { Link, useNavigate } from 'react-router-dom';
import { ValidateEmail } from '../UserPageComponents/Validation';
import Http from '../../Axios/Config';

export default function InvestorDialog() {
    const [open, setOpen] = useState(false)
    const [isChecked, setIsChecked] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [companyName, setCompanyName] = useState('')
    const [companyCat, setCompanyCat] = useState('')
    const [companyLoc, setCompanyLoc] = useState('')
    const [successOpen, setSuccessOpen] = useState(false);
    const navigate = useNavigate()

    const handleSuccessClose = () => {
        setSuccessOpen(false);
    };

    const handleClickOpen = () => {
        setOpen(true)
        setErrorMsg('')
    }

    const handleCheckbox = () => {
        if (!isChecked) {
            setIsChecked(true)
        } else {
            setIsChecked(false)
        }
    }

    const handleClose = () => {
        setOpen(false)
    }

    const clearData = () => {
        setFullName('')
        setEmail('')
        setPhone('')
        setCompanyName('')
        setCompanyCat('')
        setCompanyLoc('')
        setErrorMsg('')
    }

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        if (id === "full-name") {
            setFullName(value)
        }
        if (id === "email") {
            setEmail(value)
        }
        if (id === "phone") {
            setPhone(value)
        }
        if (id === "company-name") {
            setCompanyName(value)
        }
        if (id === "company-cat") {
            setCompanyCat(value)
        }
        if (id === "company-loc") {
            setCompanyLoc(value)
        }
    }

    const handleSubmit = () => {
        if (ValidateEmail(email) === false) {
            setErrorMsg('Email Invalid!')
            return;
        }
        if (!fullName) {
            setErrorMsg('Full name is required!')
            return;
        }
        if (!phone) {
            setErrorMsg('Phone number is required!')
            return;
        }
        if (!companyName) {
            setErrorMsg('Company name is required!')
            return;
        }
        if (!companyLoc) {
            setErrorMsg('Company location is required!')
            return;
        }
        if (!isChecked) {
            setErrorMsg('Please accept our terms & condtions')
            return;
        }

        const investorData = {
            FullName: fullName,
            Email: email,
            CompanyName: companyName,
            Phone: phone,
            CompanyCat: companyCat,
            CompanyLoc: companyLoc
        }
        clearData()
        Http.post('Investor/Signup', investorData)
            .then((res) => {
                if (res.status === 200) {
                    setSuccessOpen(true);
                    handleClose()
                    navigate('/home')
                } else {
                    setErrorMsg('Data Invalid!')
                }
            }
            ).catch((err) => {
                if (err.response.status === 401) {
                    setErrorMsg('Data Invalid!')
                }
            })
    }

    const handleCompanyCat = (e) => {
        const value = e.target.getAttribute('data-value');
        setCompanyCat(value)
    }

    return (
        <Fragment>
            <Snackbar
                sx={{
                    position: 'fixed',
                    zIndex: 9999,
                    top: '65%',
                    marginLeft: '4%'
                }}
                open={successOpen}
                autoHideDuration={3000}
                onClose={handleSuccessClose}
                message="Your investment registration has been successful! Please check your email to confirm the registration"
            />
            <ul style={{ backgroundColor: 'white', marginTop: '.5em' }} className='dropdown'>
                <li><Link class='dropdown-items' onClick={handleClickOpen}>Funding</Link></li>
                {/* <li><Link class='dropdown-items' to='/projects'>Fund Submission</Link></li> */}
                <li><Link class='dropdown-items' to='/projects'>Buy Product</Link></li>
                <li><Link class='dropdown-items' to='/projects'>Sell Product</Link></li>
                <li><Link class='dropdown-items' to='/projects'>Training</Link></li>
            </ul>
            <Dialog fullWidth open={open} onClose={handleClose}>
                <DialogTitle sx={{ alignItems: 'center', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography class='wts-name'>Find Investor</Typography>
                        <Typography class='wts-role'>Connect your best investor here</Typography>
                    </Box>
                    <Close sx={{ cursor: 'pointer' }} onClick={handleClose}></Close>
                </DialogTitle>
                <span style={{ color: "red", textAlign: 'left', margin: 'auto 1.5em' }}>{errorMsg}</span>
                <DialogContent>
                    <FormGroup>
                        <FormLabel sx={{ marginTop: '1.5em' }} id="full-name" >Full Name</FormLabel>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="full-name"
                            label="Required"
                            fullWidth
                            variant="standard"
                            required
                            onChange={(e) => handleInputChange(e)}
                            value={fullName}
                        ></TextField>
                        <FormLabel sx={{ marginTop: '1.5em' }} id="email" >Email Address</FormLabel>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="email"
                            label="Required"
                            fullWidth
                            variant="standard"
                            required
                            onChange={(e) => handleInputChange(e)}
                            value={email}
                        ></TextField>
                        <FormLabel sx={{ marginTop: '1.5em' }} id="phone" >Phone Number</FormLabel>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="phone"
                            label="Required"
                            fullWidth
                            variant="standard"
                            required
                            onChange={(e) => handleInputChange(e)}
                            value={phone}
                        ></TextField>
                        <FormLabel sx={{ marginTop: '1.5em' }} id="companyName" >Company Name</FormLabel>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="company-name"
                            label="Required"
                            fullWidth
                            variant="standard"
                            required
                            onChange={(e) => handleInputChange(e)}
                            value={companyName}
                        ></TextField>
                        <FormLabel sx={{ marginTop: '1.5em' }} id="company-cat" >Company Category</FormLabel>
                        <Select
                            autoFocus
                            margin="dense"
                            id="company-cat"
                            label="Required"
                            fullWidth
                            variant="standard"
                            required
                            onChange={(e) => handleInputChange(e)}
                            value={companyCat}
                        >
                            <MenuItem onClick={(e) => handleCompanyCat(e)} value="logistic">Logistic</MenuItem>
                            <MenuItem onClick={(e) => handleCompanyCat(e)} value="b2b">B2B E-Commerce</MenuItem>
                            <MenuItem onClick={(e) => handleCompanyCat(e)} value="argitech">Argitech</MenuItem>
                        </Select>
                        <FormLabel sx={{ marginTop: '1.5em' }} id="company-loc" >Company Location</FormLabel>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="company-loc"
                            label="Required"
                            fullWidth
                            variant="standard"
                            required
                            onChange={(e) => handleInputChange(e)}
                            value={companyLoc}
                        ></TextField>
                    </FormGroup>
                </DialogContent>
                <DialogActions sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginBottom: '.7em'
                }}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        gap: '.3em',
                        alignItems: 'center'
                    }}>
                        <Checkbox checked={isChecked} onClick={handleCheckbox}></Checkbox>
                        <Typography>Accept terms & conditions</Typography>
                    </Box>
                    <Button class='button-send' onClick={handleSubmit}>
                        <Typography class='send-text'>Send</Typography>
                    </Button>
                </DialogActions>
            </Dialog>
        </Fragment>
    );
}
