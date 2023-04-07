import React from 'react'
import './stylingSheet.css'
import Heading from './Heading'
import Card2 from './Card2'

export default function Learning() {
  return (
    <div className='frame1 learnFrame' style={{height:'996px',flexDirection:'column' , background: 'linear-gradient(180deg, #F6F6F6 0%, #F5FAE7 100%)'}}>
      <Heading content='Keep Learning. Keep Growing' />
      <div className='para' style={{width:'945px'}}>
      Insights and Strategies for Mastering Your Finances: Stay Up-to-Date with the Latest Trends, Tips, and Techniques to Take Control of Your Money
      </div>
      <div className='flexContainer'>
        <Card2 imageUrl='images/Frame 241.png' title='Save money, the right way' description='Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.'/>
        
        <Card2 imageUrl='images/Frame 241 (1).png' title='Save money, the right way. Second line test' description='Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.' />
        
        <Card2 imageUrl='images/Frame 241 (2).png' title='Save money, the right way. Second line test' description='Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.'/>
        
        <Card2 imageUrl='images/Frame 241 (3).png' title='Save money, the right way' description='Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.'/>
      </div>
    </div>
  )
}
