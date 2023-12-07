import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import './SuccessStory.css'
import './HomeBody.css'
import './WTS&Trainings.css'

const WhatTheySay = () => {
    return (
        <div className='what-they'>
            <Typography class='journey'>What they say</Typography>
            <Typography class='success-story-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</Typography>
            <Box class='comment'>
                <img src='https://res.cloudinary.com/dxyxg3egs/image/upload/v1700975078/bossku/ProjectCard/c862k6drfoaloj62wnlo.svg'></img>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography class='par-comment'>“Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est”</Typography>
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
