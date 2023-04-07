import React from 'react'
import './stylingSheet.css'
import Heading from './Heading'
import Paragraph from './Paragraph'
import './mediaQueries.css'
export default function PressPage() {
  return (
    <div className='frame1' id="pressContainer" style={{flexDirection:'column', background: 'linear-gradient(180deg, #F6F6F6 0%, #FFFFFF 17.24%, #FFFFFF 100%)'}}>
    
    <Heading content="In the press" />
    
    <Paragraph content="Discover the passion, expertise, and values that drive our team and fuel their commitment to excellence." />

    <div className='flexContainer'id ="pressImg" style={{marginTop: '90px'}}>
      <img className = "pImg" src='/images/image 16.png' height='100px' width='290px' alt='' />
      <img className = "pImg" src='/images/image 14.png' height='100px' width='290px' alt='' />
      <img className = "pImg" src='/images/image 15.png' height='100px' width='290px' alt='' />

    </div>
    </div>
  )
}
