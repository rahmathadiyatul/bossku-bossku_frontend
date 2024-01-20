import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import './LeftGrid.css'

const LeftGrid = () => {
    const [boxVisible, setBoxVisible] = useState(false);

    const toggleBox = () => {
        setBoxVisible(!boxVisible);
    };
    return (
        <Box class='main-grid'>
            <Box class='logo-full'>
                <Link to='/home'>
                    <img
                        className='logo'
                        src="https://res.cloudinary.com/dxyxg3egs/image/upload/v1700152396/bossku/logo_od1hnl.png"
                        alt="logo"
                    />
                </Link>
                <div className='logo-text'>
                    <h1 className="bosses">BOSSKU</h1>
                    <Typography class='smes'>SME’s Capitalization</Typography>
                </div>
            </Box>
            <Box class='dashboard-grid'>
                <span className='grid-item'>
                    <img src='https://res.cloudinary.com/dxyxg3egs/image/upload/v1705424224/bossku/dashboard/dashboard-icon1_zhnxkf.png' alt="Icon1"></img>
                    Dashboard</span>
                <span className='grid-item'>
                    <img src='https://res.cloudinary.com/dxyxg3egs/image/upload/v1705423961/bossku/dashboard/dashboard-icon2_ezvj0g.png' alt='Icon2'></img>
                    Pendanaan</span>
                <span className='grid-item'>
                    <img src='https://res.cloudinary.com/dxyxg3egs/image/upload/v1705423962/bossku/dashboard/dashboard-icon3_xxaplo.png' alt='Icon3'></img>
                    Pelatihan</span>
                <span className='grid-item' onClick={toggleBox}>
                    <img src='https://res.cloudinary.com/dxyxg3egs/image/upload/v1705423961/bossku/dashboard/dashboard-icon4_ks3iwk.png' alt='Icon4'></img>
                    Penjualan Produk</span>
                {boxVisible && (
                    <Box class='dashboard-grid2'>
                        <span className='grid-item'>
                            <img src='https://res.cloudinary.com/dxyxg3egs/image/upload/v1705425818/bossku/dashboard/sales-product1_k4cwpm.svg' alt="Icon1"></img>
                            Data Toko</span>
                        <span className='grid-item'>
                            <img src='https://res.cloudinary.com/dxyxg3egs/image/upload/v1705425819/bossku/dashboard/sales-product2_usy0ba.svg' alt='Icon2'></img>
                            Produk</span>
                        <span className='grid-item'>
                            <img src='https://res.cloudinary.com/dxyxg3egs/image/upload/v1705425819/bossku/dashboard/sales-product4_owqhun.svg' alt='Icon3'></img>
                            Orders</span>
                        <span className='grid-item'>
                            <img src='https://res.cloudinary.com/dxyxg3egs/image/upload/v1705425818/bossku/dashboard/sales-product3_zank0p.svg' alt='Icon4'></img>
                            Data Pelanggan</span>
                    </Box>
                )}
                <span className='grid-item'>
                    <img src='https://res.cloudinary.com/dxyxg3egs/image/upload/v1705423961/bossku/dashboard/dashboard-icon5_rnpzsx.png' alt='Icon5'></img>
                    Pembelian Produk</span>
                <span className='grid-item'>
                    <img src='https://res.cloudinary.com/dxyxg3egs/image/upload/v1705423961/bossku/dashboard/dashboard-icon6_p6ande.png' alt='Icon6'></img>
                    Profile</span>
            </Box>
        </Box>
    )
}

export default LeftGrid
