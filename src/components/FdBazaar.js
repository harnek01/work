import React from 'react';
import "./stylingSheet.css";
import Heading from "./Heading";

export default function FdBazaar() {
  return (
    <div
    className="frame1 fdContainer"
    style={{justifyContent:'space-between',
      background: "linear-gradient(180deg, #F6F6F6 0%, #F5FAE7 100%)",
    }}
  >
    <div className='fdF1'
      style={{ width: "500px", height: "500px", background: "#F4F3F3" }}
    ></div>
    <div className='fdF2' style={{display:'flex', flexDirection:'column', alignItems:'flex-end', textAlign:'right'}}>
      <Heading content='FD Bazaar' />
      <div className="para fdPara" style={{textAlign:'right'}}>
      Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
      </div>
      <div className="btn2" style={{width:'120px'}} >
          Explore FDs
      </div>
    </div>
  </div>
  )
}
