import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import './WTS&Trainings.css'
import './HomeBody.css'
import './SuccessStory.css'
import TrainingCard from '../TrainingCard/TrainingCard'

const Trainings = () => {
    return (
        <div className='trains'>
            <Typography class='journey'>Bossku Training</Typography>
            <Typography class='par-2'>Are you ready to forge your legacy? Join us at Bossku, where your journey as a founder is celebrated, supported, and elevated. Let's shape the future, one venture at a time</Typography>
            <Box class='trainings'>
                <TrainingCard 
                    titles='Digital Marketing Strategy'
                    img='https://res.cloudinary.com/dxyxg3egs/image/upload/v1702698593/bossku/unsplash_tLZhFRLj6nY_x071me.png'
                ></TrainingCard>
                <TrainingCard 
                    titles='Business Consultant'
                    img='https://res.cloudinary.com/dxyxg3egs/image/upload/v1702707895/bossku/ProjectCard/campaign-creators-gMsnXqILjp4-unsplash_dkma8o.jpg'    
                ></TrainingCard>
                <TrainingCard
                    titles='Business Growth Analysis'
                    img='https://res.cloudinary.com/dxyxg3egs/image/upload/v1702707892/bossku/ProjectCard/john-schnobrich-FlPc9_VocJ4-unsplash_oftoy3.jpg'    
                ></TrainingCard>
                <TrainingCard 
                    titles='Research & Development Product'
                    img='https://res.cloudinary.com/dxyxg3egs/image/upload/v1702707893/bossku/ProjectCard/ux-indonesia-WCID2JWoxwE-unsplash_i0g5uz.jpg'
                ></TrainingCard>
            </Box>
            <Box class='training-1'>
                <TrainingCard ></TrainingCard>
            </Box>
        </div >
    )
}

export default Trainings
