import React from 'react'
import Navigation from './Navigation/Navigation'
import './Header.css';
import pose2 from '../../../images/pose_2.png'
import round from '../../../images/Ellipse_5.png';
import vactor from '../../../images/Vector.png'
import doctor1 from '../../../images/doctor1.png'
import doctor2 from '../../../images/doctor2.png'
import doctor3 from '../../../images/doctor3.png'
import doctor4 from '../../../images/doctor4.png'
import mask from '../../../images/Mask.png'
import Ornament19 from '../../../images/Ornament19.jpg'

function Header() {
  return (
    <div className='header-wrapper'>
        <Navigation></Navigation>
        <div className="container-fluid">
          <div className="container">
            <div className="row header-body">
              <div className="col-md-6">
                <div className='header-left' >
                  <div>
                    <h1>Your <span>Health</span> Is Our Top <span>Priority</span></h1>
                    <p>There are many variations of passages of lpsum available, but the majority hae suffered.</p>
                    <button className='nav-button' >Meet Our Specialist</button>
                  </div>
                  <div className='row header-bottom'>
                    <div className="col-sm-4">
                      <h1>262k+</h1>
                      <p>Recovered Patients</p>
                    </div>
                    <div className="col-sm-4">
                      <h1>96%</h1>
                      <p>Satisfaction Rate</p>
                    </div>
                    <div className="col-sm-4">
                      <h1>86+</h1>
                      <p>Expert Doctors</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 header-right">
                <div>
                      <img src={round} alt="" className='round-shape' />
                      <img src={pose2} alt="" className='pose2' />
                      <div className="checkup-button">
                          <img className='img-fluid image' src={vactor} alt="" />
                      </div>
                </div>
                <div className='doctor' >
                  <p>Meet Our Doctor</p>
                  <div className="doctor-image d-flex">
                    <img src={doctor4} alt="" />
                    <img src={doctor2} alt="" />
                    <img src={doctor1} alt="" />
                    <img src={doctor3} alt="" />
                    <img src={mask} alt="" />
                  </div>
                  <div className="progress-div">
                    <div className=" pg-one"></div>
                    <div className=" pg-two"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Header