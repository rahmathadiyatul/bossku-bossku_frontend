import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import './HomeBody.css'

const Weekly = () => {
    return (
        <div className='last'>
            <Typography class='last-text'>Don’t miss our weekly updates<br></br>about SME’s</Typography>
            <Box class='subscribe'>
                <input className='last-input' placeholder='Enter your email address...'></input>
                <Button class='last-button'>
                    <Typography class='last-button-text'>SUBSCRIBE</Typography>
                </Button>
            </Box>
        </div>
    )
}

export default Weekly
