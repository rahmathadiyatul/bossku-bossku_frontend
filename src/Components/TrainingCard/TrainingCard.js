import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import './TrainingCard.css'
import './../ProjectCard/ProjectCard.css'

import RatingClass from './../ProjectCard/RatingClass'

const TrainingCard = () => {
    return (
        <div style={{
            display: 'flex', flexDirection: 'column', margin: '0 1em',
            border: '1px solid rgb(192, 183, 183)',
            borderRadius: '12px 12px 12px 12px'
        }}>
            <Box class='training-box'>
                <img src='https://res.cloudinary.com/dxyxg3egs/image/upload/v1700923643/bossku/d5b10ba2a25136f175cda956bc7dac1b_fflq3o.png'></img>
                <Button></Button>
            </Box>
            <Box class='training-data'>
                <Typography class='title'>Pemasaran di Media Sosial Sebagai Tenaga Pemasaran</Typography>
                <RatingClass></RatingClass>
            </Box>
        </div >
    )
}

export default TrainingCard
