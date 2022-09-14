import React from 'react'
import './Footer.css';
import logo from '../../../images/Main-logo.png'
import facebook from '../../../images/facebook.png'
import insta from '../../../images/insta.png'
import google from '../../../images/google.png'
import twitter from '../../../images/twitter.png'
import youtube from '../../../images/youtube.png'

function Footer() {
  return (
    <div className='contianer-fluid footer'>
        <div className="container">
            <div className='row footer-row'>
                <div className="col-md-4 col-sm-6">
                    <div className='footer-left-part' >
                        <div className='footer-logo-part'>
                            <img src={logo} alt="" />
                            <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has bee</p>
                        </div>
                        <div className="d-flex">
                            <div className='d-flex'><img className='img-fluid' src={facebook} alt="" /></div>
                            <div className='d-flex'><img className='img-fluid' src={insta} alt="" /></div>
                            <div className='d-flex'><img className='img-fluid' src={google} alt="" /></div>
                            <div className='d-flex'><img className='img-fluid' src={twitter} alt="" /></div>
                            <div className='d-flex'><img className='img-fluid' src={youtube} alt="" /></div>
                        </div>
                        <p className='copyright' >Copyright @222 Medicom All Rights Reserved</p>
                    </div>
                </div>
                <div className="col-md-2 col-sm-6  links-list-one">
                    <h5>Quick Linls </h5>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Our Pricing</a></li>
                        <li><a href="#">Our Gallery</a></li>
                        <li><a href="#">Appointment</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>
                <div className="col-md-2 col-sm-6  links-list-one links-list-two">
                    <ul>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Our Doctors</a></li>
                        <li><a href="#">Our Latest News</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>
                <div className="col-md-4 col-sm-6  links-list-one links-list-three">
                    <h5>Opening Hours </h5>
                    <ul>
                        <li><a href="#"><span>Mon- Tue</span></a>08:00 AM- 05:00 PM</li>
                        <li><a href="#"><span>Wed- Thu</span></a>09:00 AM- 06:00 PM</li>
                        <li><a href="#"><span>Fri- Sat</span></a>10:00 AM- 07:00 PM</li>
                        <li><a href="#"><span>Sunday</span></a>Emergency Onl</li>
                        <li><a href="#"><span>Personal</span></a>Mon- 05:00 PM</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer