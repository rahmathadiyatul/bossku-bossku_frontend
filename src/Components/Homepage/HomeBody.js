import React, { useEffect, useState, useContext } from 'react'
import { Box, Typography, Button } from '@mui/material'
import SuccessStory from './SuccessStory.js';
import FindInvestor from '../Investor-Upgrade/FindInvestor.js';
import OurPartners from './OurPartners.js';
import OurProjects from './OurProjects.js';
import WhatTheySay from './WhatTheySay.js';
import Trainings from './Trainings.js';
import Upgrade from '../Investor-Upgrade/Upgrade.js';
import Weekly from './Weekly.js';
import Http from '../../Axios/Config.js';
import './HomeBody.css'
import '@fontsource/montserrat'
import '@fontsource/inter'

const HomeBody = () => {
    const [classList, setClassList] = useState([])
    const [categoryList, setCategoryList] = useState([])

    useEffect(() => {
    }, [])

    // const getClasses = () => {
    //     Http.get('Course')
    //         .then((res) => {
    //             console.log(localStorage.getItem('tl'))
    //             if (res.status === 200) {
    //                 const dataClass = res.data.map(item => {
    //                     return { ...item }
    //                 })
    //                 let classes = []
    //                 let categories = []
    //                 for (let i = 0; i < 72; i += 12) {
    //                     classes.push(dataClass[i])
    //                 }
    //                 setClassList(classes)
    //                 for (let i = 0; i < 72; i += 9) {
    //                     categories.push(dataClass[i])
    //                 }
    //                 setCategoryList(categories)
    //             }
    //         }).catch((err) => {
    //             console.log(err)
    //         })
    // }
    return (
        <div className='main'>
            <div className='main-page'>
                <Box class='main-left'>
                    <Typography class='empower'>- Empowering SMEs to Conquer New Horizons</Typography>
                    <Typography class='welcome'>Welcome to Bosskuuuuuuuuuuuuuuuuuuu</Typography>
                    <Typography class='unveil'>Unveiling a New Era</Typography>
                    <Typography class='par'>At Bossku, we embody more than just a brand – we stand as a symbol of empowerment, a driving force that fuels the dreams and aspirations of Small and Medium Enterprises (SMEs) across Indonesia. "Bossku," which translates to "I am the boss," encapsulates the spirit of taking charge, of owning your destiny, and of forging paths to success.</Typography>
                    <Box class='buttons'>
                        <FindInvestor></FindInvestor>
                        {/* <Upgrade styleClass='upgrade' butText='Upgrade'></Upgrade> */}
                    </Box>
                </Box>
                <Box class='main-right'>
                    <img className='businessman' src='https://res.cloudinary.com/dxyxg3egs/image/upload/v1700843809/bossku/businessman_r81f3y.png' alt='businessman'></img>
                </Box>
            </div>
            <div className='categories'>
                <Typography class='cat-text'>CATEGORIES</Typography>
                <Typography class='journey'>Your journey. Your success.<br></br>
                    You are The Boss</Typography>
                <Typography class='par-2'>It's time to embrace your inner boss – the visionary, the leader, the dreamer. Bossku is here to amplify your potential, streamline your growth, and guide you towards success that knows no bounds. Are you ready to redefine your journey? Welcome to Bossku, where you're not just a part of something big – you're the driving force behind it.</Typography>
                <Box class='cat-icons'>
                    <div className='cats'>
                        <Box class='icons'>
                            <img src='https://res.cloudinary.com/dxyxg3egs/image/upload/v1700847417/bossku/categories_icons/vr-glasses_1_nf5kbs.png'></img>
                        </Box>
                        <Typography class='text'>Technology</Typography>
                    </div>
                    <div className='cats'>
                        <Box class='icons'>
                            <img src='https://res.cloudinary.com/dxyxg3egs/image/upload/v1700847417/bossku/categories_icons/book_1_1_upbg39.png'></img>
                        </Box>
                        <Typography class='text'>Education</Typography>
                    </div>
                    <div className='cats'>
                        <Box class='icons'>
                            <img src='https://res.cloudinary.com/dxyxg3egs/image/upload/v1700847417/bossku/categories_icons/video_1_hrlaj2.png'></img>
                        </Box>
                        <Typography class='text'>Videos</Typography>
                    </div>
                    <div className='cats'>
                        <Box class='icons'>
                            <img src='https://res.cloudinary.com/dxyxg3egs/image/upload/v1700847417/bossku/categories_icons/doctor-bag_1_m1gjcp.png'></img>
                        </Box>
                        <Typography class='text'>Medical</Typography>
                    </div>
                    <div className='cats'>
                        <Box class='icons'>
                            <img src='https://res.cloudinary.com/dxyxg3egs/image/upload/v1700847417/bossku/categories_icons/clothes_1_fm1ojf.png'></img>
                        </Box>
                        <Typography class='text'>Fashion</Typography>
                    </div>
                    <div className='cats'>
                        <Box class='icons'>
                            <img src='https://res.cloudinary.com/dxyxg3egs/image/upload/v1700847417/bossku/categories_icons/transformation_1_yr3yqo.png'></img>
                        </Box>
                        <Typography class='text'>Design</Typography>
                    </div>
                </Box>
            </div>
            <div className='member'>
                <Typography class='member-text'>TEAM MEMBER</Typography>
                <Typography class='meet-member'>Meet Our Great Member</Typography>
                <Typography class='par-3'>Are you ready to redefine what's possible? At Bossku, we're not just shaping the future – we're inviting you to be the architects of your own success stories. You're not just a founder; you're a trailblazer, and we're here to light up the path ahead.</Typography>
                <Box class='member-icons'>
                    <div className='members'>
                        <Box class='image'>
                            <img src='https://res.cloudinary.com/dxyxg3egs/image/upload/v1700848900/bossku/members/DSC08089_vqzsb2.png'></img>
                        </Box>
                        <Typography class='name'>Dadang Firmasnyah S.P, M.Si</Typography>
                        <Typography class='desc'>An entrepreneur with experience study in japan, Malaysia, and Singapore also Global Ideapreneur MAGIC Malaysia and succeed in Inkubator KIBAR 1000 Startup KOMINFO </Typography>
                    </div>
                    <div className='members'>
                        <Box class='image'>
                            <img src='https://res.cloudinary.com/dxyxg3egs/image/upload/v1700848901/bossku/members/DSC08075_xzfvho.png'></img>
                        </Box>
                        <Typography class='name'>Amelia Nurfauziah, S.I.Kom</Typography>
                        <Typography class='desc'>Experience with brand strategy with career history as Brand Manager of PT. Solusi Diagnostik Indonesia and Senior Project Manager of Boleh Dicoba Digital</Typography>
                    </div>
                    <div className='members'>
                        <Box class='image'>
                            <img src='https://res.cloudinary.com/dxyxg3egs/image/upload/v1700848901/bossku/members/DSC08109_fqhrda.png'></img>
                        </Box>
                        <Typography class='name'>Muhammad Juandi, S.Kom</Typography>
                        <Typography class='desc'>Having knowledge about sprint growth and market consultant with experiences as Head of Brand MNC Group and VP of Creative BDD </Typography>
                    </div>
                </Box>
            </div>
            <SuccessStory></SuccessStory>
            <OurPartners></OurPartners>
            <OurProjects></OurProjects>
            <WhatTheySay></WhatTheySay>
            <Box class='totals'>
                <img src='https://res.cloudinary.com/dxyxg3egs/image/upload/v1700981743/bossku/background_tywv3n.png'></img>
                <Box class='inner-box'>
                    <Box sx={{ width: '12em', display: 'flex', flexDirection: 'column' }}>
                        <Typography class='upper-text'>23,577</Typography>
                        <Typography class='lower-text'>Total SME’S</Typography>
                    </Box>
                    <Box sx={{ width: '12em', display: 'flex', flexDirection: 'column' }}>
                        <Typography class='upper-text'>978k</Typography>
                        <Typography class='lower-text'>SME’S Development</Typography>
                    </Box>
                    <Box sx={{ width: '12em', display: 'flex', flexDirection: 'column' }}>
                        <Typography class='upper-text'>762</Typography>
                        <Typography class='lower-text'>Project Fund</Typography>
                    </Box>
                    <Box sx={{ width: '12em', display: 'flex', flexDirection: 'column' }}>
                        <Typography class='upper-text'>852k</Typography>
                        <Typography class='lower-text'>Total  Product</Typography>
                    </Box>
                </Box>
            </Box>
            <Trainings></Trainings>
            <Weekly></Weekly>
        </div>

    )
}

export default HomeBody