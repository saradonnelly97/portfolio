import React from 'react';
import "../styles/Contact.css";


function Contact() {
  return (
    <section className="contact container section" id="contact">
        <h2 className="section__title">Get In Touch</h2>

        <div className="contact__container grid">
            <div className="contact__info">
                <h3 className="contact__title">Let's talk about Everything!</h3>
                <p className="contact__details">Don't like forms? Send me an email.</p>
            </div>

            <form action="https://formsubmit.co/sara.donnelly8@gmail.com" method="POST" className="contact__form">
                <input type="text" name="_honey" style="display: none;"/>
                <input type="hidden" name="_captcha" value="false" />
                
                <div className="contact__form-group">
                    <div className="contact__form-div">
                        <input type="text" name="Name" className="contact__form-input" placeholder="Last Name, First Name" />
                    </div>

                    <div className="contact__form-div">
                        <input type="text" name="Subject" className="contact__form-input" placeholder="Insert your subject" />
                    </div>

                    <div className="contact__form-div">
                        <input type="email" name="Email" className="contact__form-input" 
                        placeholder="Insert your email" />
                    </div>

                    <div className="contact__form-div contact__form-area">
                        <textarea name="Message" 
                        id="" 
                        cols="30" 
                        rows="10" 
                        className="contact__form-input" 
                        placeholder="Write your message"></textarea>
                    </div>

                    <button className="btn">Send Message</button>
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact