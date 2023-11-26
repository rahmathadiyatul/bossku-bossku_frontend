import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import './RatingClass.css'

const RatingClass = () => {
    return (
        <div className='rating-class'>
            <Box sx={{ width: '3em', height: '3em', borderRadius: '50%', border: '1px solid grey', backgroundColor: 'grey' }}></Box>
            <Box class='rating-detail'>
                <Box class='rating-name'>
                    <Typography class='name'>Cheyenne Curtis</Typography>
                    <img style={{ width: '.8em', height: '.8em' }} src='https://res.cloudinary.com/dxyxg3egs/image/upload/v1700930784/bossku/ProjectCard/star_7_1_i7rv1k.png'></img>
                    <img style={{ width: '.8em', height: '.8em' }} src='https://res.cloudinary.com/dxyxg3egs/image/upload/v1700930784/bossku/ProjectCard/star_7_1_i7rv1k.png'></img>
                    <img style={{ width: '.8em', height: '.8em' }} src='https://res.cloudinary.com/dxyxg3egs/image/upload/v1700930784/bossku/ProjectCard/star_7_1_i7rv1k.png'></img>
                </Box>
                <Box class='rating-data'>
                    <Typography class='campaign'>12 Campaign</Typography>
                    <ul>
                        <li className='location'>
                            New York, London
                        </li>
                    </ul>
                </Box>
            </Box>
        </div>
    )
}

export default RatingClass
