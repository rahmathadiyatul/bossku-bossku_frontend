import React, { useEffect } from 'react'
import { Box, Typography, Button } from '@mui/material'
import ArrowRight from '@mui/icons-material/ArrowRight';
import './../Projects.css'
import ProjectCard from '../../ProjectCard/ProjectCard';
import { useNavigate } from 'react-router-dom';

const CrowdFunding = () => {
    const navigate = useNavigate()
    const onProjectClick = () => {
        navigate('/project-detail')
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', justifyContent: 'center' }}>
            <Box style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin: '0 9%', alignItems: 'center' }}>
                <Typography class='projects-head'>We have done<br></br>
                    many crowdfunding projects</Typography>
                <Button class='view-more'>
                    <Typography class='view-text'>View More</Typography>
                    <ArrowRight></ArrowRight>
                </Button>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: '1em', justifyContent: 'center', marginTop: '4%' }}>
                <ProjectCard
                    category='MEDICAL'
                    cover='https://res.cloudinary.com/dxyxg3egs/image/upload/v1700929257/bossku/placeholder_x31gbm.jpg'
                    title='Beautiful color for designers & students'
                    accountName='Cheyenne Curtis'
                    location='New York, London'
                    onClick={onProjectClick}
                ></ProjectCard>
                <ProjectCard
                    category='MEDICAL'
                    cover='https://res.cloudinary.com/dxyxg3egs/image/upload/v1700929257/bossku/placeholder_x31gbm.jpg'
                    title='Beautiful color for designers & students'
                    accountName='Cheyenne Curtis'
                    location='New York, London'
                    onClick={onProjectClick}
                ></ProjectCard>
                <ProjectCard
                    category='MEDICAL'
                    cover='https://res.cloudinary.com/dxyxg3egs/image/upload/v1700929257/bossku/placeholder_x31gbm.jpg'
                    title='Beautiful color for designers & students'
                    accountName='Cheyenne Curtis'
                    location='New York, London'
                    onClick={onProjectClick}
                ></ProjectCard>
                <ProjectCard
                    category='MEDICAL'
                    cover='https://res.cloudinary.com/dxyxg3egs/image/upload/v1700929257/bossku/placeholder_x31gbm.jpg'
                    title='Beautiful color for designers & students'
                    accountName='Cheyenne Curtis'
                    location='New York, London'
                    onClick={onProjectClick}
                ></ProjectCard>
            </Box>
        </div >
    )
}

export default CrowdFunding
