import React from 'react';
import { Box, ImageList, ImageListItem } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import '@fontsource/poppins';
import { LocationOn, Call, Email, Facebook, LinkedIn, Twitter, YouTube, Instagram } from '@mui/icons-material';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <Box class='main-footer'>
                <Box class='footer-1'>
                    <Box class='full-logo'>
                        <Link to='/'>
                            <img
                                className='logo'
                                src="https://res.cloudinary.com/dxyxg3egs/image/upload/v1700152396/bossku/logo_od1hnl.png"
                                alt="logo"
                            />
                        </Link>
                        <div className='logo-text'>
                            <h1 className="boss">BOSSKU</h1>
                            <Typography class='sme'>SME’s Capitalization</Typography>
                        </div>
                    </Box>
                    <Typography class='footer-par'>Bossku empowerment, a driving force that fuels the dreams and aspirations of Small and Medium Enterprises (SMEs) across Indonesia. "Bossku,"</Typography>
                    <Box class='media-icons'>
                        <div>
                            <Facebook></Facebook>
                        </div>
                        <div>
                            <Twitter></Twitter>
                        </div>
                        <div>
                            <YouTube></YouTube>
                        </div>
                        <div>
                            <LinkedIn></LinkedIn>
                        </div>
                        <div>
                            <Instagram></Instagram>
                        </div>
                    </Box>
                </Box>
                <Box class='footer-2'>
                    <Typography class='header'>Bossku</Typography>
                    <Typography class='data'>Why Bossku</Typography>
                    <Typography class='data'>Enterprise</Typography>
                    <Typography class='data'>Customer Story</Typography>
                    <Typography class='data'>Security</Typography>
                    <Typography class='data'>Pricing</Typography>
                </Box>
                <Box class='footer-2'>
                    <Typography class='header'>Resources</Typography>
                    <Typography class='data'>Download</Typography>
                    <Typography class='data'>Help Center</Typography>
                    <Typography class='data'>Events</Typography>
                    <Typography class='data'>Guides</Typography>
                    <Typography class='data'>Partner</Typography>
                    <Typography class='data'>Directories</Typography>
                </Box>
                <Box class='footer-2'>
                    <Typography class='header'>Company</Typography>
                    <Typography class='data'>About Us</Typography>
                    <Typography class='data'>Contact Us</Typography>
                    <Typography class='data'>Products</Typography>
                    <Typography class='data'>Login</Typography>
                    <Typography class='data'>Sign Up</Typography>
                    <Typography class='data'>FAQ</Typography>
                </Box>
                <Box class='footer-3'>
                    <Typography class='header'>Get in Touch with Us</Typography>
                    <Box class='footer-contacts'>
                        <LocationOn></LocationOn>
                        <Typography class='data'>Kemang 10 Building, Level 3,<br></br> Jalan Kemang Raya Nomor 10A, <br></br>Kel. Bangka, Kec. Mampang Prapatan, <br></br>Kota Adm. Jakarta
                        Selatan, <br></br>Provinsi DKI Jakarta
                        </Typography>
                    </Box>
                    <Box class='footer-contacts'>
                        <Call></Call>
                        <Typography class='data'>394-091-3312</Typography>
                    </Box>
                    <Box class='footer-contacts'>
                        <Email></Email>
                        <Typography class='data'>support@akcel.com</Typography>
                    </Box>
                </Box>
            </Box>
            <Typography class='copyright'>PT. Bossku Bossmu Juga  -  © 2023 Bossku.id</Typography>
        </div >
    )
}

export default Footer
