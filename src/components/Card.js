import React from 'react'

export default function Card(props) {
  return (
    <>
    <div style={{display:'flex', flexDirection:'column', border:'1px solid gray', position:'relative'}}>
      <img src={props.imageSrc} className='cardMeet' alt='' />
      
      <div style={{margin:'16px 16px'}}>
        <span   style={{fontWeight: '500', color:'#000000'}}><b>Akshar</b> Shah </span> <br />
        <span   style={{fontWeight: '400', color: '#686868'}}>Founder and CEO</span>
      </div>
      <img src='images/Vector.png' width='23px' height='23px' style={{position:'absolute',bottom: '25px',
    right: '25px'}} alt='' className="card1Img"/>
      </div>
        </>
  )
}
