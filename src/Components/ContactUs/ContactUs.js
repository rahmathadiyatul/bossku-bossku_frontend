import React from 'react'
import { Box, Typography, Button, TextField, Checkbox } from '@mui/material'
import Header from '../../1_Header/Header'
import Footer from '../../3_Footer/Footer'
import OurPartners from '../Homepage/OurPartners'
import { Call, Email, LocationOn } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import './ContactUs.css'
import './../Homepage/HomeBody.css'

const ContactUs = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', fontSize: '16px' }}>
            <Header></Header>
            <Box class='contact-us-header' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography class='journey'>Contact Us</Typography>
                <Typography class='par-2'>Loremmmm ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>
            </Box>
            <Box class='contacts-data'>
                <Box sx={{ display: 'flex', flexDirection: 'row', gap: '1em' }}>
                    <Box class='icon-style'>
                        <Call></Call>
                    </Box>
                    <Box>
                        <h3 class='contact-head'>Telephone</h3>
                        <Typography class='contact-value'>394-091-3312</Typography>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'row', gap: '1em' }}>
                    <Box class='icon-style'>
                        <Email></Email>
                    </Box>
                    <Box>
                        <h3 class='contact-head'>Mail</h3>
                        <Typography class='contact-value'>support@akcel.com</Typography>
                    </Box>
                </Box>
                <Box class='shown-contact'>
                    <Box class='icon-style'>
                        <LocationOn></LocationOn>
                    </Box>
                    <Box>
                        <h3 class='contact-head'>Our Address</h3>
                        <Typography class='contact-value'>832  Thompson Drive, San Fransisco<br></br>
                            CA 94107, United States</Typography>
                    </Box>
                </Box>
            </Box>
            <Box class='hidden-contact'>
                <Box class='icon-style'>
                    <LocationOn></LocationOn>
                </Box>
                <Box>
                    <h3 class='contact-head'>Our Address</h3>
                    <Typography class='contact-value'>832  Thompson Drive, San Fransisco<br></br>
                        CA 94107, United States</Typography>
                </Box>
            </Box>
            <Box class='maps'>
                <Box class='contact-form'>
                    <h2>Write us a message</h2>
                    <Box>
                        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', gap: '5%' }}>
                            <TextField
                                id="outlined-password-input"
                                label="Full Name"
                                fullWidth
                            />
                            <TextField
                                id="outlined-password-input"
                                label="Email Address"
                                fullWidth
                            />
                        </Box>
                    </Box>
                    <Box>
                        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', gap: '5%' }}>
                            <TextField
                                id="outlined-password-input"
                                label="Phone Number"
                                fullWidth
                            />
                            <TextField
                                id="outlined-password-input"
                                label="Company Name"
                                fullWidth
                            />
                        </Box>
                    </Box>
                    <TextField
                        label='Message'
                        multiline
                        rows={2}
                        fullWidth
                    ></TextField>
                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                            gap: '.3em',
                            alignItems: 'center',
                            marginRight: '1em'
                        }}>
                            <Checkbox></Checkbox>
                            <Typography fontSize='.7em' >Accept terms & conditions</Typography>
                        </Box>
                        <Button class='button-send2'>
                            <Typography class='send-text'>Send</Typography>
                        </Button>
                    </Box>
                </Box>
            </Box>
            <OurPartners></OurPartners>
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', height: '30vh', background: '#BD0304', padding: '0 10%' }}>
                <Typography class="contact-text">Become Our Premium Partner Now!</Typography>
                <Link to='/register'>
                    <Button sx={{
                        padding: '.5em 2em',
                        marginTop: '2%', 
                        marginRight:'5%',
                        borderRadius: '8px',
                        background: '#121E31',
                        color: 'white',
                        width: '100%',
                        left: '45%',
                        fontWeight: 'bolder',
                        ":hover": { color: '#121E31', backgroundColor: 'white' }
                    }}
                    >Join Now</Button>
                </Link>
            </Box>
            <Footer></Footer>
        </div >
    )
}

export default ContactUs
