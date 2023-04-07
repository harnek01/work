import React from 'react'
import './stylingSheet.css'

export default function Logo(props) {
  return (
    <div style={{display:'flex', flexDirection:'column' ,gap:'16px', justifyContent:'center', alignItems:'center'}}>
    <img src={props.logoUrl} alt='' />
    <div className='btn-content' style={{color: '#686868'}}>
      @fixedInvestments
    </div>
    </div>
  )
}
