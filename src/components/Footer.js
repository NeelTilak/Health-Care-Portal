import React from 'react'
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa'
import "./FooterStyles.css"

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='left'>
          <div className='location'>
            <FaHome size={20} styles={{ color: "#fff", marginRight : "2rem"}} />
            <div>
              <p>Rajiv Gandhi Institute of Technology</p>
              <p>Juhu-Versova Link Road, Mumbai</p>
            </div>
          </div>
          <div className='phone'>
            <h4>
              <FaPhone size ={20} style = {{ color: '#fff', marginRight: "2rem"}} />
              8669198154
            </h4>
          </div>
          <div className='email'>
            <h4>
              <FaMailBulk size={20} style={{ color: '#fff', marginRight: "2rem"}} />
              co1705630400@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
                    <h4>About Me</h4>
                    <p>
                        My name is Neel, Currently I'm Pursing the Computer Science Degree From Mumbai University. I like to Enhance my Knowledge in this Field
                    </p>
                    <div className="social">
                    <FaFacebook size={20} style={{ color: "#fff", marginRight: "1rem" }} />

                    <FaTwitter size={20} style={{ color: "#fff", marginRight: "1rem" }} />

                    <FaLinkedin size={20} style={{ color: "#fff", marginRight: "1rem" }} />
                    
                    </div>
                </div>
      </div>
    </div>
  )
}

export default Footer