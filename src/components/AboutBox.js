import React from 'react'

function AboutBox() {
  return (
    <div className="about__boxes grid">
        <div className="about__box">
            <div>
                <h3 className="about__title">32</h3>
                <span className="about__subtitle">Projects Completed</span>
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
                <h3 className="about__title">1</h3>
                <span className="about__subtitle">Satisfied Clients</span>
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