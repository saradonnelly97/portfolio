import React from 'react'

function AboutBox() {
  return (
    <div className="about__boxes grid">
        <div className="about__box">
            <div>
                <h3 className="about__title">87</h3>
                <span className="about__subtitle">GitHub Projects Completed <i>(and counting!)</i></span>
            </div>
        </div>

        <div className="about__box">
            <div>
                <h3 className="about__title">5937</h3>
                <span className="about__subtitle">Cups of Coffee</span>
            </div>
        </div>

        <div className="about__box">
            <div>
                <h3 className="about__title">146</h3>
                <span className="about__subtitle">Artworks Executed</span>
            </div>
        </div>

        <div className="about__box">
            <div>
                <h3 className="about__title">1</h3>
                <span className="about__subtitle">Software Development Certifications</span>
            </div>
        </div>
    </div>
  )
}

export default AboutBox