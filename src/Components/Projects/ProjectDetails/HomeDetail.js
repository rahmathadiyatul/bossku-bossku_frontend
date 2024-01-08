import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import { PlayArrow, ShoppingCart } from '@mui/icons-material';
import './../../ProjectCard/ProjectCard.css'
import './HomeDetail.css'
import RatingClass from '../../ProjectCard/RatingClass';


const HomeDetail = () => {
    return (
        <div className='main-detail'>
            <Box class='detail-left'>
                <Box class='main-vid'>
                    <PlayArrow sx={{ width: '3em', height: '3em', color: 'white' }}></PlayArrow>
                </Box>
                <Box class='other-vids'>
                    <Box class='other-vid'></Box>
                    <Box class='other-vid'></Box>
                    <Box class='other-vid'></Box>
                    <Box class='other-vid'></Box>
                </Box>
            </Box>
            <Box class='detail-right'>
                <RatingClass name='Hendric Anderson' location='New York, London'></RatingClass>
                <h1 className='detail-title'>Samcung Okulus Rivt PC - Powered VR  Gaming Headset</h1>
                <img style={{ width: '100%' }} src='https://res.cloudinary.com/dxyxg3egs/image/upload/v1700929702/bossku/progressBar_q1aedt.png'></img>
                <Box class='project-buttons'>
                    <Button class='cart-button'>
                        <ShoppingCart style={{
                            color: 'white',
                            height: '.7em'
                        }}></ShoppingCart>
                    </Button>
                    <Button class='fund-button'>
                        <Typography class='fund-text'>Fund This Project</Typography>
                    </Button>
                </Box>
                <h5>Project Notes:</h5>
                <Box class='project-notes'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
                </Box>
            </Box>
        </div >
    )
}

export default HomeDetail
