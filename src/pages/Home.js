import React from 'react';
import "../styles/Home.css";
import HeaderSocials from '../components/HeaderSocials'; 


function Home() {
    return (
      <section className="home container" id="home">
        <div className="bio">
          <h1 className="home__name"> Hi, My Name is Sara</h1>
          <span className="home__education">
            <p>An illustrator turned software developer with a passion for learning and creating.</p>
          </span>

          <HeaderSocials />

          

          <a href="/about" className='btn'>Meet Me!</a>
          
         
          </div>
        </section>
    );
  }
  
  export default Home;