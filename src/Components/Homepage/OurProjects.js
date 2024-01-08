import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material'
import './HomeBody.css'
import ProjectCard from '../ProjectCard/ProjectCard'

const OurProjects = () => {
    const navigate = useNavigate();
    const onProjectClick = () => {
        navigate('/project-detail')
    }
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className='our-project'>
            <Typography class='journey'>Our Projects</Typography>
            <Typography class='par-2'>We take pride in being the driving force behind the success stories of numerous small and medium-sized enterprises (SMEs). Here is our commitment to not just meet but exceed the expectations of our clients, elevating their businesses to new heights.</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', gap: '1em', padding: '0 1em' }}>
                <ProjectCard
                    category='FARM'
                    cover='https://res.cloudinary.com/dxyxg3egs/image/upload/v1701617107/bossku/ProjectCard/placeholder_msrwm3.png'
                    title='FRESH POTATO GANITRI'
                    accountName='Upland Project'
                    location='Kab. Garut'
                    onClick={onProjectClick}
                ></ProjectCard>
                <ProjectCard
                    category='FARM'
                    cover='https://res.cloudinary.com/dxyxg3egs/image/upload/v1701617107/bossku/ProjectCard/placeholder_1_hyounn.png'
                    title='LG MANDIRI MANGOSTEEN'
                    accountName='Upland Project'
                    location='Kab. Subang'
                    onClick={onProjectClick}
                ></ProjectCard>
                <Box class='last-card'>
                    <ProjectCard
                        category='FARM'
                        cover='https://res.cloudinary.com/dxyxg3egs/image/upload/v1701617107/bossku/ProjectCard/placeholder_2_tpsy0z.png'
                        title='FRESH RED ONION RAJA'
                        accountName='Upland Project'
                        location='Kab. Sumbawa'
                        onClick={onProjectClick}
                    ></ProjectCard>
                </Box>
            </Box>
        </div >
    )
}

export default OurProjects
