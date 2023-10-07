import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import "../styles/Footer.css"; 

function Footer() {
  return (
    <div className="footer">
        <div>
            <a href="https://www.linkedin.com/in/sara-donnelly-213037229/"><LinkedInIcon /></a>
            <a href="https://github.com/saradonnelly97"><GitHubIcon /></a>
            <p> &copy; 2023.</p>
        </div>
    </div>
  )
}

export default Footer