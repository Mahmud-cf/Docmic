import React from 'react'
import './Service.css'
import './ResponsiveService.css'

function Service(props) {
  return (
    <div className='col-md-3 col-sm-6 '>
        <div className='service-div'>
            <div>
                <div>
                    <div className='d-flex service-main-div'>
                        <h4>{props.title}</h4>
                        <div><img src={props.img} alt="" /></div>
                    </div>
                    <p>{props.body}</p>
                </div>
                <h5><a href="#">Explore Now</a></h5>
            </div>
        </div>
    </div>
  )
}

export default Service