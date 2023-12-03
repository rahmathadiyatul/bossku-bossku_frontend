import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import './RatingClass.css'

const RatingClass = (props) => {
    const { name, location } = props
    return (
        <div className='rating-class'>
            <Box class='account-icon'>
                <img src='https://res.cloudinary.com/dxyxg3egs/image/upload/v1701617589/bossku/ProjectCard/7ba21ea5-3047-4b3e-9751-f148dc9f4434_foto_1_cj8mk0.png'></img>
            </Box>
            <Box class='rating-detail'>
                <Box class='rating-name'>
                    <Typography class='name'>{name}</Typography>
                    <img style={{ width: '.8em', height: '.8em' }} src='https://res.cloudinary.com/dxyxg3egs/image/upload/v1700930784/bossku/ProjectCard/star_7_1_i7rv1k.png'></img>
                    <img style={{ width: '.8em', height: '.8em' }} src='https://res.cloudinary.com/dxyxg3egs/image/upload/v1700930784/bossku/ProjectCard/star_7_1_i7rv1k.png'></img>
                    <img style={{ width: '.8em', height: '.8em' }} src='https://res.cloudinary.com/dxyxg3egs/image/upload/v1700930784/bossku/ProjectCard/star_7_1_i7rv1k.png'></img>
                </Box>
                <Box class='rating-data'>
                    <Typography class='campaign'>12 Campaign</Typography>
                    <ul>
                        <li className='location'>
                            {location}
                        </li>
                    </ul>
                </Box>
            </Box>
        </div>
    )
}

export default RatingClass
