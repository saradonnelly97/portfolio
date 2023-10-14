import React from 'react'

function AboutBox() {
  return (
    <div className="about__boxes grid">
        <div className="about__box">
            <div>
                <h3 className="about__title">80</h3>
                <span className="about__subtitle">GitHub Projects Completed</span>
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
                <h3 className="about__title">32</h3>
                <span className="about__subtitle">Nominees Winner</span>
            </div>
        </div>
    </div>
  )
}

export default AboutBox