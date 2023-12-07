import React, { useState, useNavigate } from 'react';
import './Header.css';
import PersonIcon from '@mui/icons-material/Person';
import { Button, Dropdown } from '@mui/base';
import { Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { Email, Call, ExitToApp, Menu } from '@mui/icons-material';
import Upgrade from '../Components/Investor-Upgrade/Upgrade';

function Header(props) {
  const { contacts = 'contacts', account = 'account', headAll = 'head-all', upperHead = 'upper-head', lowerHead = 'lower-head', logoText = 'logo-text', navs = 'navs' } = props
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [openNavbar, setOpenNavbar] = useState(false);


  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const toggleNavbar = () => {
    setOpenNavbar(!openNavbar);
  };

  return (
    <div className={headAll}>
      <Box class={upperHead}>
        <Box sx={{ alignItems: 'center', display: 'flex', flexDirection: 'row', gap: '1.5em' }}>
          <Typography class='top-header'>Your dreams. Your venture. You are The  Boss.</Typography>
          <Button style={{
            display: 'flex',
            flexDirection: 'row',
            height: '2.5em',
            borderRadius: '8px',
            background: 'var(--Changes---Main, #BD0304)',
            alignItems: 'center',
            border: 'none',
            color: 'white',
            padding: '0 2em',
            gap: '.8em',
            cursor: 'pointer',
          }}
          >
            <Link style={{
              display: 'flex',
              flexDirection: 'row',
              height: '2.5em',
              alignItems: 'center',
              color: 'white',
              textDecoration: 'none',
              gap: '.8em',
            }}
              to='/register'>
              <Upgrade hideButton={true}></Upgrade>
              <ExitToApp></ExitToApp>
              <Typography>Sign Up Now</Typography>
            </Link>
          </Button>
        </Box>
        <Box class={contacts}>
          <Box class='contact'>
            <Call sx={{ height: '.7em' }}></Call>
            <Typography sx={{ fontSize: '.8em' }} class='top-texts'>394-091-3312</Typography>
          </Box>
          <Box class='contact'>
            <Email sx={{ height: '.7em' }}></Email>
            <Typography sx={{ fontSize: '.8em' }} class='top-texts'>help@bossku.id</Typography>
          </Box>
        </Box>
      </Box>
      <header className={lowerHead}>
        <div className='full-logo'>
          <Link to='/'>
            <img
              className='logo'
              src="https://res.cloudinary.com/dxyxg3egs/image/upload/v1700152396/bossku/logo_od1hnl.png"
              alt="logo"
            />
          </Link>
          <div className={logoText}>
            <h1 className="bosses">BOSSKU</h1>
            <Typography class='smes'>SME’s Capitalization</Typography>
          </div>
        </div>
        <nav className={navs}>
          <Box class='menu' onClick={toggleNavbar}>
            <Menu sx={{ height: '2em', width: '2em' }}></Menu>
            {openNavbar && (
              <ul style={{ backgroundColor: 'white', marginTop: '2em', width: '8.5em', paddingLeft: '2em' }} className='dropdown'>
                <li><Link class='dropdown-items' to='/'>Home</Link></li>
                <li><Link class='dropdown-items' to='/projects'>Services</Link></li>
                <li><Link class='dropdown-items' to='/about-us'>About Us</Link></li>
                <li><Link class='dropdown-items' to='/contact-us'>Contact Us</Link></li>
              </ul>
            )}
          </Box>
          <ul className='nav_links'>
            <li><Link to='/'>Home</Link></li>
            <li>
              <a onClick={toggleDropdown}>
                Services
                {isDropdownOpen && (
                  <ul style={{ backgroundColor: 'white', marginTop: '2em' }} className='dropdown'>
                    <li><Link class='dropdown-items' to='/projects'>Funding</Link></li>
                    <li><Link class='dropdown-items' to='/projects'>Fund Submission</Link></li>
                    <li><Link class='dropdown-items' to='/projects'>Buy Product</Link></li>
                    <li><Link class='dropdown-items' to='/projects'>Sell Product</Link></li>
                    <li><Link class='dropdown-items' to='/projects'>Training</Link></li>
                  </ul>
                )}
              </a>
            </li>
            <li><Link to='/about-us'>About</Link></li>
            <li><Link to='/contact-us'>Contact Us</Link></li>
            <li className={account}>
              <Button style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '.8em .8em',
                gap: '13px',
                borderRadius: '8px',
                height: '3em',
                border: '1px solid var(--primary-700, #BD0304)',
                transition: 'background 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease'
              }}>
                <Link style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }} to='/home'>
                  <PersonIcon sx={{ color: '#BD0304', height: '1em' }} className='person-icon'></PersonIcon>
                  <Typography class='my-account'>My Account</Typography>
                </Link>
              </Button>
            </li>
          </ul>
        </nav>
      </header>
    </div >
  );
}

export default Header;
