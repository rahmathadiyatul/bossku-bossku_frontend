import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import './NewsCard.css'
import './../../Homepage/HomeBody.css'
import './../../Homepage/WTS&Trainings.css'

const NewsCard = (props) => {
    const { cardImg, cardTitle, cardPar, cardLink, cardName, cardStamp } = props
    return (
        <div className='news-card'>
            <img src={cardImg}></img>
            <Typography class='card-title'>{cardTitle}</Typography>
            <Typography class='card-par'>{cardPar}</Typography>
            <Box sx={{ margin: '1em 1em' }}>
                <Box style={{ display: 'flex', flexDirection: 'row', gap: '1em', alignItems: 'center' }}>
                    <img src={cardLink}></img>
                    <Box style={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography class='wts-name'>{cardName}</Typography>
                        <Typography class='wts-role'>{cardStamp}</Typography>
                    </Box>
                </Box>
            </Box>
        </div >
    )
}

export default NewsCard
