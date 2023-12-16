import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import './SuccessStory.css'
import './HomeBody.css'
import './WTS&Trainings.css'

const WhatTheySay = () => {
    return (
        <div className='what-they'>
            <Typography class='journey'>What they say</Typography>
            <Typography class='success-story-3'>"The impact of Bossku’s expertise on our operations was immediate. Their insights and solutions not only saved us resources but positioned us for sustainable growth in the long run." - Upland Kab.Sumenep</Typography>
            <Box class='comment'>
                <img src='https://res.cloudinary.com/dxyxg3egs/image/upload/v1700975078/bossku/ProjectCard/c862k6drfoaloj62wnlo.svg'></img>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography class='par-comment'>“Partnering with Bossku was the best decision we made for our digital strategy. Their team's expertise and dedication catapulted us to the forefront of our industry." - Upland Kab.Banjarnegara</Typography>
                </Box>
                <Box style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                    <Box style={{ display: 'flex', flexDirection: 'row', gap: '1em', alignItems: 'center' }}>
                        <img src='https://res.cloudinary.com/dxyxg3egs/image/upload/v1700975322/bossku/placeholder_1_mpf4pn.jpg'></img>
                        <Box style={{ display: 'flex', flexDirection: 'column' }}>
                            <Typography class='wts-name'>Jonathan Lee</Typography>
                            <Typography class='wts-role'>Joe’s Parents</Typography>
                        </Box>
                    </Box>
                    <Box class='stars' style={{ display: 'flex', flexDirection: 'row' }}>
                        <img src='https://res.cloudinary.com/dxyxg3egs/image/upload/v1700930784/bossku/ProjectCard/star_7_1_i7rv1k.png'></img>
                        <img src='https://res.cloudinary.com/dxyxg3egs/image/upload/v1700930784/bossku/ProjectCard/star_7_1_i7rv1k.png'></img>
                        <img src='https://res.cloudinary.com/dxyxg3egs/image/upload/v1700930784/bossku/ProjectCard/star_7_1_i7rv1k.png'></img>
                        <img src='https://res.cloudinary.com/dxyxg3egs/image/upload/v1700930784/bossku/ProjectCard/star_7_1_i7rv1k.png'></img>
                    </Box>
                </Box>
            </Box>
        </div >
    )
}

export default WhatTheySay
