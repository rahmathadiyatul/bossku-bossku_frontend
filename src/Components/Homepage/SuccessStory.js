import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import ArrowRight from '@mui/icons-material/ArrowRight';
import './SuccessStory.css'
import RatingClass from '../ProjectCard/RatingClass';

const SuccessStory = () => {
    return (
        <div className='story'>
            <Box class='upper'>
                <Box class='upper-left'>
                    <Typography class='success-story-1'>SUCCESS STORY</Typography>
                    <Typography class='success-story-2'>Read Their Stories With Bossku</Typography>
                    <Typography class='success-story-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</Typography>
                </Box>
                <Button class='button'>
                    <Typography class='button-text'>View More</Typography>
                    <ArrowRight sx={{ color: 'white' }}></ArrowRight>
                </Button>
            </Box>
            <Box class='lower'>
                <img src='https://res.cloudinary.com/dxyxg3egs/image/upload/v1700923643/bossku/d5b10ba2a25136f175cda956bc7dac1b_fflq3o.png'></img>
                <Box class='lower-right'>
                    <Typography class='text-1'>Samcung Okulus Rivt PC - Powered VR  Gaming Headset</Typography>
                    <Typography class='text-2'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit au</Typography>
                    <Typography class='text-3'>Rp 24,553,852</Typography>
                    <Typography class='text-4'>Total funded</Typography>
                    <RatingClass></RatingClass>
                </Box>
            </Box>
        </div >
    )
}

export default SuccessStory
