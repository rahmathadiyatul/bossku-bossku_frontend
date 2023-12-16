import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import './HomeBody.css'

const OurPartners = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '5em 5em', height: 'max-content' }}>
            <Typography class='partners-text'>Our Partnership</Typography>
            <Box class='partners-icons'>
                <img style={{ width: '10em', height: '4em'}} src='https://res.cloudinary.com/dxyxg3egs/image/upload/v1702704112/bossku/partners/ministry_qj0y0a.jpg'></img>
                <img style={{ width: '3em', height: '4em' }} src='https://res.cloudinary.com/dxyxg3egs/image/upload/v1702704112/bossku/partners/Seal_of_Tasikmalaya_Regency.svg_cpddef.png'></img>
                <img style={{ width: '4em', height: '4em' }} src='https://res.cloudinary.com/dxyxg3egs/image/upload/v1702704111/bossku/partners/YlxlZjWW_400x400_nmb14d.jpg'></img>
                <img style={{ width: '7em', height: '4em' }} src='https://res.cloudinary.com/dxyxg3egs/image/upload/v1702704111/bossku/partners/international-fund-for-agricultural-development-ifad-vector-logo_cxnhk4.png'></img>
                <img style={{ width: '7em', height: '4em' }} src='https://res.cloudinary.com/dxyxg3egs/image/upload/v1702704111/bossku/partners/download_e4wgtp.png'></img>
            </Box >
        </div >
    )
}

export default OurPartners
