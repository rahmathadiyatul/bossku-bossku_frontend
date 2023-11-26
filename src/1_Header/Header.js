import React, { useState } from 'react';
import './Header.css';
import PersonIcon from '@mui/icons-material/Person';
import { Button, Dropdown } from '@mui/base';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function Header() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
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
            <h1 className="boss">BOSSKU</h1>
            <Typography class='sme'>SME’s Capitalization</Typography>
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
            <li><Link to='/invoice'>Notifications</Link></li>
            <li><Link to='/invoice'>About</Link></li>
            <li><Link to='/invoice'>Contact Us</Link></li>
            <li className='account'>
              <Button>
                <Link to='/invoice'>
                  <PersonIcon sx={{ color: '#BD0304' }} className='person-icon'></PersonIcon>
                  <Typography class='my-account'>My Account</Typography>
                </Link>
              </Button>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
