import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import './WTS&Trainings.css'
import './HomeBody.css'
import './SuccessStory.css'
import TrainingCard from '../TrainingCard/TrainingCard'

const Trainings = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: 'max-content', justifyContent: 'center', alignItems: 'center', padding: '7em 7em' }}>
            <Typography class='journey'>Bossku Training</Typography>
            <Typography class='par-2'>Are you ready to forge your legacy? Join us at Bossku, where your journey as a founder is celebrated, supported, and elevated. Let's shape the future, one venture at a time</Typography>
            <Box class='trainings'>
                <TrainingCard></TrainingCard>
                <TrainingCard></TrainingCard>
                <TrainingCard></TrainingCard>
                <TrainingCard></TrainingCard>
            </Box>
            <Box class='training-1'>
                <TrainingCard ></TrainingCard>
            </Box>
        </div >
    )
}

export default Trainings
