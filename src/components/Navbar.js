import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Navbar.css";
import CabinIcon from '@mui/icons-material/Cabin';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

function Navbar() {

  return (
    <aside className="aside">
        <nav className="nav">   
            <div className="nav__menu">
                <ul className="nav__list">
                    <li className="nav__item">  
                        <Link to='/'>
                            <CabinIcon fontSize="large" />
                            
                        </Link>
                    </li>
                    <li className="nav__item">
                        <Link to='/about'>
                            <AccountCircleOutlinedIcon fontSize="large" />
                            
                        </Link>
                    </li>
                    <li className="nav__item">  
                    <Link to='/projects'>
                        <WorkOutlineOutlinedIcon fontSize="large" />
                        
                        </Link>
                    </li>
                    <li className="nav__item">
                    <Link to='/contact'>
                        <MailOutlineIcon fontSize="large" />
                        
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    </aside >
  )
}

export default Navbar