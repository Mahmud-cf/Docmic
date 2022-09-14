import React from 'react'
import circulTwo from '../../../images/circleTwo.png'
import group20 from '../../../images/group20.png'
import group21 from '../../../images/group21.png'
import Group22 from '../../../images/Group22.png'
import Group23 from '../../../images/Group23.png'
import Group24 from '../../../images/Group24.png'
import Collaps from './Collaps/Collaps'
import Group27 from '../../../images/Group27.png'
import Group29 from '../../../images/Group29.png'
import SimpleSlider from './Slider/Slider'

function SectioTwo() {
  return (
    <div className='container-fluid section-two-bg-colo'>
        <div className="section-two">
            <div className="section-two-wrapper container">
                <div className="row">
                    <div className="col-md-5">
                        <div className='section-two-left-img'>
                            <img className='img-fluid' src={group20} alt="" />
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className='section-heading'>
                            <p>Our Hospital Feature</p>
                            <h2>Make An Appointment Easy And Fast Services</h2>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className='appoinment'>
                                    <div className='d-flex'>
                                        <h5>24 Hours Doctor Support</h5>
                                        <img src={group21} alt="" />
                                    </div>
                                    <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className='appoinment'>
                                    <div className='d-flex'>
                                        <h5>24 Hours Doctor Support</h5>
                                        <img src={Group22} alt="" />
                                    </div>
                                    <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className='appoinment'>
                                    <div className='d-flex'>
                                        <h5>24 Hours Doctor Support</h5>
                                        <img src={Group23} alt="" />
                                    </div>
                                    <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className='appoinment'>
                                    <div className='d-flex'>
                                        <h5>24 Hours Doctor Support</h5>
                                        <img src={Group24} alt="" />
                                    </div>
                                    <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-two-2">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="section-two-2-left">
                                <div className='section-heading'>
                                    <p>FAQ Questions</p>
                                    <h2>Get Your General Answer</h2>
                                </div>
                                <div className="faq-ans">
                                    <div>
                                        <div className="faq-ans-details">
                                            <Collaps title='Get Your General Answer' ></Collaps>
                                            <Collaps title='Will I always see my own doctor?' ></Collaps>
                                            <Collaps title='What is one Medical’s care?' ></Collaps>
                                            <Collaps title='What is evidence based medicine?' ></Collaps>
                                            <Collaps title='What is an academic medical center?' ></Collaps>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className='section-two-2-right'>
                                <div>
                                    <img className='img-fluid' src={Group27} alt="" />
                                    <img className='img-fluid image' src={Group29} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-two-3">
                    <div className="section-two-3-wrapper">
                        <div className='section-heading'>
                            <p>Testimonial</p>
                            <h2>What they say?</h2>
                        </div>
                        <div className='testimonial' >
                            <div className='testimonial-slider'>
                                <SimpleSlider></SimpleSlider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SectioTwo