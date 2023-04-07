import React from 'react'
import './stylingSheet.css'
import Heading from './Heading'

export default function Saving() {
  return (
    <div className='frame1 savingsContainer' style={{justifyContent:'space-between', background: 'linear-gradient(180deg, #F7F7F7 0%, rgba(255, 255, 255, 0.95) 35.27%)'}}>
      
      <div className='savingF1' style={{display:'flex', flexDirection:'column', alignItems:'flex-start', textAlign:'left'}}>
        <Heading content='Savings' />
        <div className="para savingPara" style={{textAlign:'left'}}>
        Get access to stable and low risk investment options for goals where you cannot afford losses
        </div>
        <div className="btn2" style={{width:'104px'}} >
            Save Now
        </div>
      </div>
      <div className='savingF2'
        style={{ width: "500px", height: "500px", background: "#F4F3F3" }}
      ></div>
    </div>
  )
}
