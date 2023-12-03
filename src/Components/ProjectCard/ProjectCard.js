import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import './ProjectCard.css'
import RatingClass from './RatingClass'
import { ShoppingCart } from '@mui/icons-material'

const ProjectCard = (props) => {
    const { cover, category, title, accountName, location } = props
    return (
        <div className='project'>
            <img src={cover}></img>
            <Box class='contents'>
                <Typography sx={{
                    color: 'var(--primary-700, var(--Changes---Main, #BD0304))',
                    fontFamily: 'Poppins',
                    fontSize: '.8em',
                    fontStyle: 'normal',
                    fontWeight: '700',
                    lineHeight: '120%',
                    letterSpacing: '0.027px'
                }}
                >{category}</Typography>
                <Typography class='title'>{title}</Typography>
                <img style={{ width: '100%' }} src='https://res.cloudinary.com/dxyxg3egs/image/upload/v1700929702/bossku/progressBar_q1aedt.png'></img>
                <Box class='qty'>
                    <img src='https://res.cloudinary.com/dxyxg3egs/image/upload/v1700930115/bossku/ProjectCard/stacks-of-coins_1_ih7fym.svg'></img>
                    <Typography class='total'>Production Capacity:<br></br> -ton/month</Typography>
                </Box>
                <RatingClass
                    name={accountName}
                    location={location}
                ></RatingClass>
                <Box class='project-buttons'>
                    <Button class='cart-button'>
                        <ShoppingCart style={{
                            color: 'white',
                            height: '.8em'
                        }}></ShoppingCart>
                    </Button>
                    <Button class='fund-button'>
                        <Typography class='fund-text'>Fund This Project</Typography>
                    </Button>
                </Box>
            </Box>
        </div >
    )
}

export default ProjectCard
