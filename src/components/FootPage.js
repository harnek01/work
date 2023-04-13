import React from "react";

import "./FootPage.css";

export default function FootPage() {
  return (
    <>
    <div className="footContent footContainer">
      <div className="foot1 fixedContainer1">
        
          <img src="images/Frame.png" style={{alignSelf:'flex-start'}} alt="" />

        <div><br />
          Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis.
        </div>
      </div>
      <div className="fixedContainer2">
      <div className="foot1">
        <div className="talkContainer">
       <b> Want to talk?</b><br />
       <p>Call us and we will solve all your doubts and help you grow your business</p>
       <div style={{display:'flex'}}>
            <img src='images/Vector (3).png' style={{alignSelf:'center'}} alt="" />
            <span style={{margin:'10px'}}>Call  +91 9876543210</span>
        </div>
        </div>
        
      </div>
      <div className="foot1" style={{flexDirection:'row', justifyContent:'flex-end', gap:'50px'}}>
        <div className="foot2">
            <b>Company</b><br/>
            <span>About Us</span>
            <span>Career</span>
            <span>Features</span>
            <span>Mission</span>
            <span>Need & Support</span>
        </div>
        <div className="foot2">
        <b>Invest</b><br />
            <span>FD Bazaar</span>
            <span>Savings++</span>
            <span>Tax Saver</span>
            <span>Regular Income</span>
        </div>
      </div>
      </div>
    </div>
    </>
  );
}
