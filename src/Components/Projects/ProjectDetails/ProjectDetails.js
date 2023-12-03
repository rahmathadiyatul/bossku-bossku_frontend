import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import Header from './../../../1_Header/Header.js'
import Weekly from './../../Homepage/Weekly.js'
import Footer from './../../../3_Footer/Footer.js'
import CrowdFunding from './../CrowdFunding/CrowdFunding.js'

const DetailProject = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Header></Header>
            <Box></Box>
            <CrowdFunding></CrowdFunding>
            <Weekly></Weekly>
            <Footer></Footer>
            <Box></Box>
        </div >
    )
}

export default DetailProject
