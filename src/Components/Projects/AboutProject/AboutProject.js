import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material'
import { CheckCircleOutline } from '@mui/icons-material'
import ProjectCard from '../../ProjectCard/ProjectCard'
import './AboutProject.css'

const AboutProject = () => {
    const navigate = useNavigate();
    const onProjectClick = () => {
        navigate('/project-detail')
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{ display: 'flex', flexDirection: 'row', margin: '3% 10%', justifyContent: 'space-between' }}>
            <Box class='project-story'>
                <Box class='story-navbar'>
                    <Typography class='main-bar'>About Project</Typography>
                    <Typography class='other-bar'>Updates</Typography>
                    <Typography class='other-bar'>Backer List</Typography>
                    <Typography class='other-bar'>Reviews (245)</Typography>
                </Box>
                <Typography class='story-par'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum<br></br>
                    <br></br>
                    Eos cumque recusandae recusandae harum dolorem optio. Non asperiores ex qui mollitia et consectetur autem laborum ex. Enim ea deleniti sed omnis. Repudiandae nobis vitae in. Iusto ducimus sed non facilis occaecati quibusdam. Tenetur iure quo nihil minima aut qui. Harum voluptatem ullam deserunt voluptatem cumque rerum enim fugit nulla. Assumenda dolore ex inventore ut.<br></br>
                    <br></br>
                    Consequatur et dignissimos a pariatur et accusantium aliquid. Dolor fugiat corrupti soluta praesentium expedita ducimus labore. Unde minima nulla fuga quos minus temporibus animi qui expedita. Sed quibusdam et. Rerum tempora sit qui ut fugiat.
                </Typography>
                <Box class='checks'>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1.5em' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', height: '.5em', color: 'green' }}>
                            <CheckCircleOutline></CheckCircleOutline>
                            <Typography class='check-text'>Unde rerum a. Et voluptatem harum id.</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', height: '.5em', color: 'green' }}>
                            <CheckCircleOutline></CheckCircleOutline>
                            <Typography class='check-text'>Et aut dicta quibusdam iste necessitatibus ut ut.</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', height: '.5em', color: 'green' }}>
                            <CheckCircleOutline></CheckCircleOutline>
                            <Typography class='check-text'>Voluptas quos quia nisi sit impedit labore enim quod.</Typography>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1.5em' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', height: '.5em', color: 'green' }}>
                            <CheckCircleOutline></CheckCircleOutline>
                            <Typography class='check-text'>Voluptatem vel recusandae.</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', height: '.5em', color: 'green' }}>
                            <CheckCircleOutline></CheckCircleOutline>
                            <Typography class='check-text'>Aliquid veritatis rem voluptate non.</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', height: '.5em', color: 'green' }}>
                            <CheckCircleOutline></CheckCircleOutline>
                            <Typography class='check-text'>Itaque et officiis cum excepturi.</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box class='story-image'></Box>
                <Typography class='story-par'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumm tempor.
                </Typography>
            </Box>
            <Box class='side-bar'>
                <h2 style={{ marginTop: '.5em' }}>Support other projects</h2>
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

export default AboutProject
