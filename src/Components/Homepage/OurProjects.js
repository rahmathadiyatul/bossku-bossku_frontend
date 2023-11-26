import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import './HomeBody.css'
import ProjectCard from '../ProjectCard/ProjectCard'

const OurProjects = () => {
    return (
        <div style={{ height: '100vh', gap: '2em', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Typography class='journey'>Our Projects</Typography>
            <Typography class='par-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', gap: '2em' }}>
                <ProjectCard></ProjectCard>
                <ProjectCard></ProjectCard>
                <ProjectCard></ProjectCard>
                <ProjectCard></ProjectCard>
            </Box>
        </div >
    )
}

export default OurProjects
