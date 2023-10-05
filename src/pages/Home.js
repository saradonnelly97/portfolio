import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import "../styles/Home.css"; 


function Home() {
    return (
      <div className="home">
        <div className="about">
          <h2> Hi, My Name is Sara</h2>
          <div className="prompt">
            <p>An illustrator turned software developer with a passion for learning and creating.</p>
            <LinkedInIcon />
            <MailOutlineIcon />
            <GitHubIcon />
          </div>
        </div>
        <div className="skills">
          <h1> Skills</h1>
          <ol className="list">
            <li className="item">
              <h2> Front-End</h2>
              <span>
                ReactJS, Redux, HTML, CSS,
                BootStrap, MaterialUI, StyledComponents
              </span>
            </li>
            <li className="item">
              <h2>Back-End</h2>
              <span>
                NodeJS, ExpressJS, 
                 MongoDB
              </span>
            </li>
            <li className="item">
              <h2>Languages</h2>
              <span>JavaScript</span>
            </li>
            <li className="item">
              <h2>Software</h2>
              <span>Adobe Creative Suite, ProCreate, ClipStudio Paint, Blender</span>
            </li>
          </ol>
        </div>
      </div>
    );
  }
  
  export default Home;