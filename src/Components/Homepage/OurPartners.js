import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import './HomeBody.css'

const OurPartners = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '5em 5em' }}>
            <Typography class='partners-text'>Our Partnership</Typography>
            <Box sx={{ marginTop: '3em', display: 'flex', flexDirection: 'row', gap: '3em' }}>
                <img style={{ width: '7em' }} src='https://res.cloudinary.com/dxyxg3egs/image/upload/v1700927212/bossku/partners/Group_7_kynjkx.svg'></img>
                <img style={{ width: '7em' }} src='https://res.cloudinary.com/dxyxg3egs/image/upload/v1700927213/bossku/partners/Group_8_mefkfg.svg'></img>
                <img style={{ width: '7em' }} src='https://res.cloudinary.com/dxyxg3egs/image/upload/v1700927214/bossku/partners/Group_9_t21ltw.svg'></img>
                <img style={{ width: '7em' }} src='https://res.cloudinary.com/dxyxg3egs/image/upload/v1700927213/bossku/partners/Group_13_pijwbe.svg'></img>
                <img style={{ width: '7em' }} src='https://res.cloudinary.com/dxyxg3egs/image/upload/v1700927212/bossku/partners/Group_11_irdy9v.svg'></img>
            </Box >
        </div >
    )
}

export default OurPartners
