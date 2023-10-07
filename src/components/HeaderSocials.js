import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function HeaderSocials() {
  return (
    <div className="home__socials" target="_blank">
        <a href="https://www.linkedin.com/in/sara-donnelly-213037229/" className="home__social-link" target="_blank">
        <LinkedInIcon fontSize="large" />
        </a>
        <a href="https://www.github.com/saradonnelly97" className="home__social-link" target="_blank">
        <GitHubIcon fontSize="large" />
        </a>
    </div>
  )
}

export default HeaderSocials
