import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import LeftGrid from './LeftGrid/LeftGrid'

const Dashboard = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <LeftGrid></LeftGrid>
            <Box class='dashboard-contents'></Box>
        </div >
    )
}

export default Dashboard
