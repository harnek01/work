import React from 'react'
import './stylingSheet.css'
import Heading from './Heading'
import Paragraph from './Paragraph'
import Logo from './Logo'
export default function FollowPage() {
  return (
    <div className='frame1 followContainer' style={{flexDirection: 'column',background: 'linear-gradient(180deg, #F6F6F6 0%, #FFFFFF 52.6%, #FFFFFF 100%)'}}>
        <Heading content="Follow us" />
        <Paragraph content="Discover the passion, expertise, and values that drive our team and fuel their commitment to excellence." />
        
        <div className='follow1'>
          <Logo logoUrl='images/_YouTube.png' />
          <Logo logoUrl='images/_Linkedin.png' />
          <Logo logoUrl='images/_Telegram.png' />
        </div>
      
    </div>
  )
}
