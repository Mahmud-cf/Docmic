import React from 'react'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import './PageWrapper.css'
import SectionOne from './SectionOne/SectionOne'
import SectioTwo from './SectionTwo/SectioTwo'

function PageWrapper() {
  return (
    <div>
        <div className='wrapper-div' >
          <Header></Header>
          <SectionOne></SectionOne>
          <SectioTwo></SectioTwo>
          <Footer></Footer>
        </div>
    </div>
  )
}

export default PageWrapper