import React from 'react'
import './stylingSheet.css'

export default function Card2(props) {
  return (
    <div className='card2'>
      <div style={{display:'flex', flexDirection:'column', alignItems:'flex-start', padding:'0px',marginTop:'8px' }}>
        <img src={props.imageUrl} className='card2Img' alt='' />
      </div>
      <div style={{width:'100%', height:'100%', boxSizing:'border-box',position:'relative', padding:'8px'}} className='card2Cont'>
      <div className='btn-content' style={{color:'black', textAlign:'start', padding:'8px'}}>{props.title}</div>
      <div className='btn-content' style={{color:'#686868', textAlign:'start', padding:'8px'}}>{props.description}</div>
        
      </div>
      <div style={{display:'flex',width:'100%', justifyContent:'space-between', position:'relative', bottom:'0px'}} className='card2Bottom'>
            <div className='btn-content' style={{color:'#BEBEBE', padding:'16px'}}>24 May 2023</div>
            <div className='btn-content btn-read' style={{color:'#7E8139', padding:'16px'}}>Read Now</div>
        </div>
    </div>
  )
}
