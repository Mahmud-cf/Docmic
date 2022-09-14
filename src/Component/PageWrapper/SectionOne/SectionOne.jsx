import React from 'react'
import './SectionOne.css'
import Service from './Service/Service'
import medicleIcon from '../../../images/medicleIcon.png'
import rightSign from '../../../images/rightSign.png'
import teeth from '../../../images/teeth.png'
import medicleBag from '../../../images/medicleBag.png'
import Group11 from '../../../images/Group11.png'


function SectionOne() {
  return (
    <div className='container-fluid section-one-wrapper'>
        <div className=''>
            <div className=' container'>
                <div className="under-section-one-wrapper">
                    <div className="section-heading section-one">
                        <p>Our Services</p>
                        <h2>Services For Your Health</h2>
                    </div>
                        <div className='row'>
                            <Service 
                                title='Cardiology'
                                body='Seduahag perspiciati under omnised atused error.'
                                img={medicleIcon}
                            >
                            </Service>
                            <Service 
                                title='Monthly Check Up'
                                body='Seduahag perspiciati under omnised atused error.'
                                img={rightSign}
                            >
                            </Service>
                            <Service 
                                title='Dental Care'
                                body='Seduahag perspiciati under omnised atused error.'
                                img={teeth}
                            >
                            </Service>
                            <Service 
                                title='Opthalmology'
                                body='Seduahag perspiciati under omnised atused error.'
                                img={medicleBag}
                            >
                            </Service>
                            
                        </div>
                    
                </div>
                <div className='experience'>
                    <div>
                        <div className="row">
                            <div className="col-md-7">
                                <div className='section-heading'>
                                    <p>16+ Years Experiences</p>
                                    <h2>We Are Always ensure Best Medical Treatment For Your Health</h2>
                                </div>
                                <div className="expirence-details">
                                    <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look lik</p>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className='section-one-img' >
                                    <img className='img-fluid' src={Group11} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        



    </div>
  )
}

export default SectionOne