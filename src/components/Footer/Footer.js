import React from 'react'
import './Footer.css'
//components
import SocialMedia from '../SocialMedia/SocialMedia'
import Contact from '../Contact/Contact'
function Footer() {
    return (
        <div className="footer" id="contact-me">
            <SocialMedia />
            <Contact />
        </div>
    )
}

export default Footer
