import React from 'react'
import './stylingSheet.css'
import Button from './Button'

export default function FirstPage() {
  return (
    <div className='frame1 firstContainer' style={{flexDirection:'column',position:'relative'}}>
        <img className='rupeeCoin' src='images/Rupee Gold Coin.png' style={{position:'absolute', top:'100px', left:'50px',width:'250px'}} alt='' />
        <img className='percentCoin' src='images/Percent Coin 1.png' style={{position:'absolute',bottom:'205px',left:'135px',width:'170px'}} alt='' />
        <img className='fCoin' src='images/F Coin 2.png' style={{position:'absolute', top:'90px', right:'40px',width:'170px'}} alt='' />
        <img className='arrowCoin' src='images/Arrow Coin 1.png' style={{position:'absolute', bottom:'200px', right:'150px',width:'100px'}} alt='' />
      <div className='heading1 stressHead' style={{marginTop:'200px', fontSize:'96px'}}>
        <b>Stress-Free Investing</b>
      </div>
      <div className='para stressPara'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
      </div>
      <Button content='Join the Waitlist' />
    </div>
  )
}
