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
                    <Typography class='success-story-3'>Witness the transformative impact Bossku has had on small and medium-sized enterprises (SMEs) Our commitment to supercharging business growth has resulted in numerous success stories from delighted clients.</Typography>
                </Box>
                <Button class='button'>
                    <Typography class='button-text'>View More</Typography>
                    <ArrowRight sx={{ color: 'white' }}></ArrowRight>
                </Button>
            </Box>
            <Box class='lower'>
                <img src='https://res.cloudinary.com/dxyxg3egs/image/upload/v1700923643/bossku/d5b10ba2a25136f175cda956bc7dac1b_fflq3o.png'></img>
                <Box class='lower-right'>
                    <Typography class='text-1'>UPLAND</Typography>
                    <Typography class='text-2'><i>"Bossku has been the catalyst for our business expansion. Their strategic insights, tailored solutions, and unwavering support have been instrumental in achieving remarkable growth. Working with them has been nothing short of a game-changer." <br></br>- Upland, Jawa Barat</i></Typography>
                    <Typography class='money-text'>Rp 24,553,852,-</Typography>
                    <RatingClass></RatingClass>
                </Box>
            </Box>
        </div >
    )
}

export default SuccessStory
