import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import './TrainingCard.css'
import './../ProjectCard/ProjectCard.css'

import RatingClass from './../ProjectCard/RatingClass'

const TrainingCard = (props) => {
    const { titles } = props;
    return (
        <div style={{
            display: 'flex', flexDirection: 'column', margin: '0 1em',
            border: '1px solid rgb(192, 183, 183)',
            borderRadius: '12px 12px 12px 12px'
        }}>
            <Box class='training-box'>
                <img src='https://res.cloudinary.com/dxyxg3egs/image/upload/v1702698593/bossku/unsplash_tLZhFRLj6nY_x071me.png'></img>
                <Button class='training-button'>Online</Button>
            </Box>
            <Box class='training-data'>
                <Typography class='title'>{titles}</Typography>
                <RatingClass></RatingClass>
            </Box>
        </div >
    )
}

export default TrainingCard
