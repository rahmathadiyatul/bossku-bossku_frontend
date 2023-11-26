import React, { useState } from 'react';
import './Header.css';
import PersonIcon from '@mui/icons-material/Person';
import { Button, Dropdown } from '@mui/base';
import { Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { Email, Call, ExitToApp } from '@mui/icons-material';

function Header() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ margin: '1em 4em 0 4em', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
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
            padding: '0 2em'

          }}>
            <ExitToApp></ExitToApp>
            <Typography>Sign Up Now</Typography>
          </Button>
        </Box>
        <Box sx={{ alignItems: 'center', display: 'flex', flexDirection: 'row', gap: '1.5em' }}>
          <Box sx={{ display: 'flex', flexDirection: 'row', gap: '.3em', color: '#BD0304', fontFamily: 'sans-serif', alignItems: 'center' }}>
            <Call sx={{ height: '.7em' }}></Call>
            <Typography sx={{ fontSize: '.8em' }} class='top-texts'>394-091-3312</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', gap: '.3em', color: '#BD0304', fontFamily: 'sans-serif', alignItems: 'center' }}>
            <Email sx={{ height: '.7em' }}></Email>
            <Typography sx={{ fontSize: '.8em' }} class='top-texts'>help@bossku.id</Typography>
          </Box>
        </Box>
      </Box>
      <header>
        <div className='full-logo'>
          <Link to='/'>
            <img
              className='logo'
              src="https://res.cloudinary.com/dxyxg3egs/image/upload/v1700152396/bossku/logo_od1hnl.png"
              alt="logo"
            />
          </Link>
          <div className='logo-text'>
            <h1 className="bosses">BOSSKU</h1>
            <Typography class='smes'>SME’s Capitalization</Typography>
          </div>
        </div>
        <nav>
          <ul className='nav_links'>
            <li><Link to='/myclass'>Home</Link></li>
            <li>
              <a href='/#' onClick={toggleDropdown}>
                Services
                {isDropdownOpen && (
                  <ul className='dropdown'>
                    <li><Link class='dropdown-items' to='/service1'>Service 1</Link></li>
                    <li><Link to='/service2'>Service 2</Link></li>
                    <li><Link to='/service3'>Service 3</Link></li>
                    <li><Link to='/service4'>Service 4</Link></li>
                  </ul>
                )}
              </a>
            </li>
            <li><Link to='/invoice'>About</Link></li>
            <li><Link to='/invoice'>Contact Us</Link></li>
            <li className='account'>
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
                }} to='/invoice'>
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
