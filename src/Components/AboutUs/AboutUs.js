import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import Header from '../../1_Header/Header'
import Weekly from '../Homepage/Weekly'
import Footer from '../../3_Footer/Footer'
import FindInvestor from '../Investor-Upgrade/FindInvestor'
import Upgrade from '../Investor-Upgrade/Upgrade'
import NewsCard from '../News/NewsCards/NewsCard'
import './AboutUs.css'
import './../Homepage/SuccessStory.css'
import './../Homepage/HomeBody.css'

const AboutUs = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', margin: '0', padding: '0', maxHeight: '100vh' }}>
            <Header></Header>
            <Box class='main-about'>
                <img src='https://res.cloudinary.com/dxyxg3egs/image/upload/v1701180612/bossku/main-about_uuqmia.jpg'></img>
                <Typography class='dreams'>Your Dreams, Our Canvas</Typography>
                <Typography sx={{ fontWeight: '700', color: 'white', position: 'absolute', top: '65%', left: '50%', transform: 'translate(-50%, -50%)' }}>Home / About</Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', margin: '0 0', padding: '0 0' }}>
                <Box class='embark'>
                    <Typography class='success-story-1'>- Unveiling a New Era of Empowerment</Typography>
                    <Typography class='success-story-2'>Embark on Your Journey of Entrepreneurial Excellence</Typography>
                    <Typography class='success-story-3'>Bossku is more than a platform; it's a canvas where your dreams take shape. As founders ourselves, we know the thrill of innovation and the hurdles of growth. That's why we're committed to empowering you with the tools, resources, and community you need to craft your masterpiece.</Typography>
                    <Box class='embark-box'>
                        <img src='https://res.cloudinary.com/dxyxg3egs/image/upload/v1701182275/bossku/embark/icon_gpdmxr.svg'></img>
                        <Box class='embark-text'>
                            <Typography class='text-1'>Our Purpose</Typography>
                            <Typography class='text-2'>To revolutionize the way SMEs navigate the business landscape. With our comprehensive one-stop platform, we're here to uplift, guide, and propel your business forward.</Typography>
                        </Box>
                    </Box>
                    <Box class='embark-box'>
                        <img src='https://res.cloudinary.com/dxyxg3egs/image/upload/v1701182275/bossku/embark/icon_gpdmxr.svg'></img>
                        <Box class='embark-text'>
                            <Typography class='text-1'>Responsibility</Typography>
                            <Typography class='text-2'>Whether it's mentoring, funding, logistics, or global expansion, Bossku has you covered.</Typography>
                        </Box>
                    </Box>
                </Box>
                <img className='biswoman' src='https://res.cloudinary.com/dxyxg3egs/image/upload/v1701181422/bossku/indonesian-business-woman-hold-laptop-computer-2022-12-15-21-00-58-utc-removebg-preview_1_wcepfw.jpg'></img>
            </Box>
            <div class='founder'>
                <Box class='inlet'>
                    <img src='https://res.cloudinary.com/dxyxg3egs/image/upload/v1701183576/bossku/embark/DSC08089_krwoeq.jpg'></img>
                    <Box class='calling'>
                        <Typography class='success-story-2'>Calling All Founders: Be the Architects of Your Dreams with Bossku</Typography>
                        <Typography class='success-story-3'>Dear Visionaries, Mavericks, and Dream Chasers,<br></br><br></br>
                            Are you ready to redefine what's possible? At Bossku, we're not just shaping the future – we're inviting you to be the architects of your own success stories. You're not just a founder; you're a trailblazer, and we're here to light up the path ahead.</Typography>
                        <img src='https://res.cloudinary.com/dxyxg3egs/image/upload/v1701183575/bossku/embark/d-signature-letter-logo-design-concept-vector-31859951_1_ojreuw.jpg'></img>
                        <Typography>Dadang Firmansyah <br></br>Founder of Bossku</Typography>
                    </Box>
                </Box>
            </div>
            <Box class='why'>
                <Typography class='cat-text'>Our Pillar</Typography>
                <Typography class='journey'>Why Choose Bossku?</Typography>
                <Typography class='par-2'>Bossku is more than a platform; it's a canvas where your dreams take shape. As founders ourselves, we know the thrill of innovation and the hurdles of growth. That's why we're committed to empowering you with the tools, resources, and community you need to craft your masterpiece.</Typography>
                <Box class='pillar'>
                    <Box class='embark-box'>
                        <img className='pillar-img' src='https://res.cloudinary.com/dxyxg3egs/image/upload/v1701185316/bossku/embark/vr-glasses_1_mypha8.svg'></img>
                        <Box class='embark-text'>
                            <Typography class='text-1'>Elevate Your Vision</Typography>
                            <Typography class='text-2'>Your vision is the North Star guiding your every move. Bossku elevates that vision by offering insights, data-driven strategies, and a global perspective that propels you towards exponential growth.</Typography>
                        </Box>
                    </Box>
                    <Box class='embark-box'>
                        <img className='pillar-img' src='https://res.cloudinary.com/dxyxg3egs/image/upload/v1701185316/bossku/embark/transformation_1_f2jur6.svg'></img>
                        <Box class='embark-text'>
                            <Typography class='text-1'>Unwavering Support</Typography>
                            <Typography class='text-2'>With Bossku, you're not alone on this journey. We stand beside you, providing the guidance, mentorship, and unwavering support that turns challenges into triumphs</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box class='pillar'>
                    <Box class='embark-box'>
                        <img className='pillar-img' src='https://res.cloudinary.com/dxyxg3egs/image/upload/v1701185317/bossku/embark/doctor-bag_1_o7wny2.svg'></img>
                        <Box class='embark-text'>
                            <Typography class='text-1'>Foster Connections</Typography>
                            <Typography class='text-2'>Join a community of fellow founders who understand the exhilaration and the grind. Network, collaborate, and learn from one another – because growth is better when shared</Typography>
                        </Box>
                    </Box>
                    <Box class='embark-box'>
                        <img className='pillar-img' src='https://res.cloudinary.com/dxyxg3egs/image/upload/v1701185317/bossku/embark/book_1_1_eovdkr.svg'></img>
                        <Box class='embark-text'>
                            <Typography class='text-1'>Step into Your Power</Typography>
                            <Typography class='text-2'>The journey ahead is not for the faint of heart. It's for those who dare to dream, dare to act, and dare to own their destiny. It's for you, the fearless founder who's ready to embrace challenges and turn them into opportunities</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box class='future-awaits'>
                <img src='https://res.cloudinary.com/dxyxg3egs/image/upload/v1701356749/bossku/embark/businessman-offering-hand-shake-2022-02-04-03-19-43-utc-removebg-preview_1_rlakv7.png'></img>
                <Box>
                    <Typography class='success-story-1'>- Our Mission</Typography>
                    <Typography class='success-story-2'>The Future Awaits Your Mark</Typography>
                    <Typography class='success-story-3'>to ignite the potential within every Small and Medium Enterprise (SME) and empower them to thrive on a global stage. We are committed to being the guiding force that transforms challenges into opportunities, enabling SMEs to conquer new horizons and realize their fullest potential</Typography>
                    <Box style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingRight: '10%' }}>
                        <Box class='total-mission'>
                            <Typography class='upper-mission'>4,556</Typography>
                            <Typography class='lower-mission'>Total SME</Typography>
                        </Box>
                        <Box class='total-mission'>
                            <Typography class='upper-mission'>874</Typography>
                            <Typography class='lower-mission'>Projects</Typography>
                        </Box>
                        <Box class='total-mission'>
                            <Typography class='upper-mission'>Rp 195,234,000</Typography>
                            <Typography class='lower-mission'>Total Funds</Typography>
                        </Box>
                    </Box>
                    <Box class='buttons'>
                        <FindInvestor></FindInvestor>
                        <Upgrade styleClass='upgrade' butText='Upgrade'></Upgrade>
                    </Box>
                    <Box>

                    </Box>
                </Box>
            </Box>
            <Box sx={{ height: '100vh', gap: '1em', display: 'flex', flexDirection: 'column', paddingBottom: '1em', alignItems: 'center' }}>
                <Typography class='journey'>Bossku News</Typography>
                <Typography class='par-2'>Are you ready to forge your legacy? Join us at Bossku, where your journey as a founder is celebrated, supported, and elevated. Let's shape the future, one venture at a time</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', gap: '2em' }}>
                    <NewsCard
                        cardImg='https://res.cloudinary.com/dxyxg3egs/image/upload/v1701359327/bossku/embark/placeholder_fseomi.jpg'
                        cardTitle='New vaccine for cattle protects against fetal calf loss from EBA – anatomy of..'
                        cardPar='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                        cardLink='https://res.cloudinary.com/dxyxg3egs/image/upload/v1701359356/bossku/embark/placeholder_1_a48vxr.jpg'
                        cardName='Hawkins Junior'
                        cardStamp='24min read - November 21th, 2020'
                    ></NewsCard>
                    <NewsCard
                        cardImg='https://res.cloudinary.com/dxyxg3egs/image/upload/v1701356617/bossku/embark/placeholder_nj1ddz.png'
                        cardTitle='4 Things parents learned for they jids in 2020'
                        cardPar='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                        cardLink='https://res.cloudinary.com/dxyxg3egs/image/upload/v1701359356/bossku/embark/placeholder_2_r8md2p.png'
                        cardName='Jean Kapoor'
                        cardStamp='24min read - November 21th, 2020'
                    ></NewsCard>
                    <NewsCard
                        cardImg='https://res.cloudinary.com/dxyxg3egs/image/upload/v1701356751/bossku/embark/placeholder_1_qcsnem.png'
                        cardTitle='He Created the Web. Now He’s Out to Remake the Digital World.'
                        cardPar='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                        cardLink='https://res.cloudinary.com/dxyxg3egs/image/upload/v1701359355/bossku/embark/placeholder_3_icj8tz.png'
                        cardName='Melinda Humbles'
                        cardStamp='24min read - November 21th, 2020'
                    ></NewsCard>
                </Box>
            </Box>
            <Weekly></Weekly>
            <Footer></Footer>
        </div >
    )
}

export default AboutUs
