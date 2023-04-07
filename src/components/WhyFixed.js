import React from 'react'
import './stylingSheet.css'
import Heading from './Heading'
import Paragraph from './Paragraph'
import Card3 from './Card3'
import './mediaQueries.css'
import './mediaQueryMob.css'
export default function WhyFixed() {
  return (
    <div className='frame1 fixed' style={{flexDirection:'column', background: 'linear-gradient(180deg, #F6F6F6 0%, #FFFFFF 31.23%)'}}>
      <Heading content='Why Fixed ?' />
      <Paragraph content='Choose across investments that you can easily withdraw and liquidate in times of need' />
      <div style={{display:'flex', width:'100%', justifyContent:'space-around'}} className='fixCards'>
        <Card3 imageUrl='images/Frame 282.png' title='Safe investments that beat inflation' description='Low risk, High return investments that are easy to understand' />
        <Card3 imageUrl='images/Frame 282.png' title='Safe investments that beat inflation' description='Low risk, High return investments that are easy to understand' />
        <Card3 imageUrl='images/Frame 282.png' title='Safe investments that beat inflation' description='Low risk, High return investments that are easy to understand' />
      </div>
    </div>
  )
}
