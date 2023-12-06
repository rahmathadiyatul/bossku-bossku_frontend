import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import './HomeBody.css'
import ProjectCard from '../ProjectCard/ProjectCard'

const OurProjects = () => {
    return (
        <div style={{ height: 'max-content', gap: '2em', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Typography class='journey'>Our Projects</Typography>
            <Typography class='par-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', gap: '1em' }}>
                <ProjectCard
                    category='FARM'
                    cover='https://res.cloudinary.com/dxyxg3egs/image/upload/v1701617107/bossku/ProjectCard/placeholder_msrwm3.png'
                    title='FRESH POTATO GANITRI'
                    accountName='Upland Project'
                    location='Kab. Garut'
                ></ProjectCard>
                <ProjectCard
                    category='FARM'
                    cover='https://res.cloudinary.com/dxyxg3egs/image/upload/v1701617107/bossku/ProjectCard/placeholder_1_hyounn.png'
                    title='LG MANDIRI MANGOSTEEN'
                    accountName='Upland Project'
                    location='Kab. Subang'
                ></ProjectCard>
                <ProjectCard
                    category='FARM'
                    cover='https://res.cloudinary.com/dxyxg3egs/image/upload/v1701617107/bossku/ProjectCard/placeholder_2_tpsy0z.png'
                    title='FRESH RED ONION RAJA'
                    accountName='Upland Project'
                    location='Kab. Sumbawa'
                ></ProjectCard>
            </Box>
        </div >
    )
}

export default OurProjects
