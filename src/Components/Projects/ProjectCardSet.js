import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import ProjectCard from '../ProjectCard/ProjectCard'
import './Projects.css'

const ProjectCardSet = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', gap: '3em' }}>
            <ProjectCard
                category='FARM'
                cover='https://res.cloudinary.com/dxyxg3egs/image/upload/v1701617107/bossku/ProjectCard/placeholder_msrwm3.png'
                title='FRESH POTATO GANITRI'
                accountName='Upland Project'
                location='Kab. Garut'
            ></ProjectCard>
            <ProjectCard
                category='FARM'
                cover='https://res.cloudinary.com/dxyxg3egs/image/upload/v1701617107/bossku/ProjectCard/placeholder_msrwm3.png'
                title='FRESH POTATO GANITRI'
                accountName='Upland Project'
                location='Kab. Garut'
            ></ProjectCard>
            <Box class='will-hide'>
                <ProjectCard
                    category='FARM'
                    cover='https://res.cloudinary.com/dxyxg3egs/image/upload/v1701617107/bossku/ProjectCard/placeholder_msrwm3.png'
                    title='FRESH POTATO GANITRI'
                    accountName='Upland Project'
                    location='Kab. Garut'
                ></ProjectCard>
                <ProjectCard
                    category='FARM'
                    cover='https://res.cloudinary.com/dxyxg3egs/image/upload/v1701617107/bossku/ProjectCard/placeholder_msrwm3.png'
                    title='FRESH POTATO GANITRI'
                    accountName='Upland Project'
                    location='Kab. Garut'
                ></ProjectCard>
            </Box>
        </Box>
    )
}

export default ProjectCardSet
