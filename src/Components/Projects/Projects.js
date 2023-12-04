import React, { useState } from 'react';
import { Box, Typography, Button, TextField } from '@mui/material'
import { Search, KeyboardArrowDown } from '@mui/icons-material';
import Header from '../../1_Header/Header'
import OurPartners from '../Homepage/OurPartners'
import Weekly from '../Homepage/Weekly'
import Footer from '../../3_Footer/Footer'
import './Projects.css'
import ProjectCard from '../ProjectCard/ProjectCard';

const Projects = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Header
                contacts='contacts2'
                headAll='head-all2'
                upperHead='upper-head2'
                lowerHead='lower-head2'
                navs='navs2'
                logoText='logo-text2'
            ></Header>
            <Box class='cover'>
                <img src='https://res.cloudinary.com/dxyxg3egs/image/upload/v1701554010/bossku/background_kdgr4l.png'></img>
                <Typography class='cover-text'>Empowering SME’s around the world<br></br>
                    for a Brighter Tomorrow </Typography>
                <Box class='project-search'>
                    <a style={{ gap: '.5em', color: 'black', cursor: 'pointer', display: 'flex', flexDirection: 'row', alignItems: 'center' }} onClick={toggleDropdown}>
                        All Category <KeyboardArrowDown sx={{ color: '#BD0304' }}></KeyboardArrowDown>
                        {isDropdownOpen && (
                            <span style={{ backgroundColor: 'white', margin: '2em 2em', padding: '0.5em 1em' }} className='dropdown'>
                                <span>Technology</span>
                                <span>Medical</span>
                                <span>Business</span>
                                <span>Fashion</span>
                            </span>
                        )}
                    </a>
                    <TextField class='project-input'
                        id="filled-search"
                        type="search"
                        variant="standard"
                        fullWidth
                    />
                    <Search></Search>
                </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: '5%', margin: '5% 0', justifyContent: 'center' }}>
                <Typography>Popular Search:</Typography>
                <Typography sx={{ cursor: 'pointer', ":hover": { fontWeight: 'bold' } }} color="#EA5152">Technology Projects</Typography>
                <Typography sx={{ cursor: 'pointer', ":hover": { fontWeight: 'bold' } }} color="#EA5152">Cancer Charity Projects</Typography>
                <Typography sx={{ cursor: 'pointer', ":hover": { fontWeight: 'bold' } }} color="#EA5152">Design Interior</Typography>
            </Box>
            <Box sx={{ padding: '0 8%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: '3%' }}>
                <Box sx={{ display: 'flex', flexDirection: 'row', width: '60%', gap: '1%' }}>
                    <Button sx={{
                        fontSize: '.7em',
                        marginTop: '2%',
                        borderRadius: '3px',
                        background: 'var(--Changes---Main, #BD0304)',
                        color: 'white',
                        width: '30%',
                        fontWeight: 'bolder',
                        ":hover": { color: '#BD0304' }
                    }}
                    >All Projects</Button>
                    <Button sx={{
                        fontSize: '.7em',
                        marginTop: '2%',
                        borderRadius: '3px',
                        background: 'var(--old-color-styles-primary-light, #F6FBFA)',
                        color: '#BD0304',
                        width: '30%',
                        fontWeight: 'bolder',
                        ":hover": { color: '#BD0304' }
                    }}
                    >Technology</Button>
                    <Button sx={{
                        fontSize: '.7em',
                        marginTop: '2%',
                        borderRadius: '3px',
                        background: 'var(--old-color-styles-primary-light, #F6FBFA)',
                        color: '#BD0304',
                        width: '30%',
                        fontWeight: 'bolder',
                        ":hover": { color: '#BD0304' }
                    }}
                    >Medical</Button>
                    <Button sx={{
                        fontSize: '.7em',
                        marginTop: '2%',
                        borderRadius: '3px',
                        background: 'var(--old-color-styles-primary-light, #F6FBFA)',
                        color: '#BD0304',
                        width: '30%',
                        fontWeight: 'bolder',
                        ":hover": { color: '#BD0304' }
                    }}
                    >Business</Button>
                    <Button sx={{
                        fontSize: '.7em',
                        marginTop: '2%',
                        borderRadius: '3px',
                        background: 'var(--old-color-styles-primary-light, #F6FBFA)',
                        color: '#BD0304',
                        width: '30%',
                        fontWeight: 'bolder',
                        ":hover": { color: '#BD0304' }
                    }}
                    >Fashion</Button>
                </Box>
                <Box sx={{ width: '40%', display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                    <Button sx={{
                        fontSize: '.7em',
                        marginTop: '2%',
                        borderRadius: '3px',
                        background: 'var(--old-color-styles-primary-light, #F6FBFA)',
                        color: 'navy',
                        width: '30%',
                        height: 'auto',
                        fontWeight: 'bolder',
                        marginRight: '1em',
                        ":hover": { color: '#BD0304' }
                    }}>Newest<KeyboardArrowDown sx={{ color: '#BD0304', marginLeft: '.3em' }} /></Button>
                </Box>
            </Box>
            <Box class='project-contents'>
                <Box sx={{ display: 'flex', flexDirection: 'row', gap: '1em' }}>
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'row', gap: '1em' }}>
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'row', gap: '1em' }}>
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>
                </Box>
            </Box>
            <Button sx={{
                marginTop: '2%',
                borderRadius: '8px',
                background: 'var(--Changes---Main, #BD0304)',
                color: 'white',
                width: '10%',
                left: '45%',
                fontWeight: 'bolder',
                ":hover": { color: '#BD0304' }
            }}
            >Load More</Button>
            <OurPartners></OurPartners>
            <Weekly></Weekly>
            <Footer></Footer>
        </div >
    )
}

export default Projects
