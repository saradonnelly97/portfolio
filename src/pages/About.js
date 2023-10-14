import React from 'react';
import "../styles/About.css";
import Image from '../assets/Aviator.jpeg';
import AboutBox from '../components/AboutBox'; 


const About = () => {
  return (
    <section className="about container section" id='about'>
        <h2 className="section__title">About Me</h2>

        <div className="about__container grid">
            <img src={Image} alt="" className="about__img" />

            <div className="about__data grid">
                <div className="about__info">
                    <p className="about__description">
                        I am Sara Donnelly, a full-stack web developer from the Carolinas. I have experience in web site design and building and customization.
                    </p>
                    <Link to="/projects">
                        <button>Project List</button>
                    </Link>
                </div>

                <div className="about__skills grid">
                    <div className="skills__data">
                        <div className="skills__titles">
                            <h3 className="skills__name">Development</h3>
                            <span className="skills__number">90%</span>
                        </div>

                        <div className="skills__bar">
                            <span className="skills__percentage development"></span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <div className="skills__titles">
                            <h3 className="skills__name">UI/UX design</h3>
                            <span className="skills__number">80%</span>
                        </div>

                        <div className="skills__bar">
                            <span className="skills__percentage ui__design"></span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <div className="skills__titles">
                            <h3 className="skills__name">Illustration/Graphic Design</h3>
                            <span className="skills__number">60%</span>
                        </div>

                        <div className="skills__bar">
                            <span className="skills__percentage illustration"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <AboutBox />
    </section>
  )
}

export default About