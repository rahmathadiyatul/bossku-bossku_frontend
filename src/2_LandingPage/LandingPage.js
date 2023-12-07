import React from 'react'
import Header from '../1_Header/Header.js'
import Footer from '../3_Footer/Footer.js'
import '@fontsource/montserrat'
import '@fontsource/inter'
import HomeBody from '../Components/Homepage/HomeBody'
// const cors = require('cors')
// const classes = require('../Components/Homepage/classDummy')

const LandingPage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', maxWidth:'100vw' }}>
      <Header></Header>
      <HomeBody></HomeBody>
      <Footer></Footer>
    </div >
  )
}

export default LandingPage
