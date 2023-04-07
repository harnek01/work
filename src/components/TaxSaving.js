import React from "react";
import "./stylingSheet.css";
import Heading from "./Heading";


export default function TaxSaving() {
  return (
    <div
      className="frame1 taxContainer"
      style={{justifyContent:'space-between',
        background: "linear-gradient(180deg, #F6F6F6 0%, #F5FAE7 100%)",
      }}
    >
      <div className="taxF1"
        style={{ width: "500px", height: "500px", background: "#F4F3F3" }}
      ></div>
      <div className="taxF2" style={{display:'flex', flexDirection:'column', alignItems:'flex-end', textAlign:'right'}}>
        <Heading content='Tax saver' />
        <div className="para taxPara" style={{textAlign:'right'}}>
        Choose across investments that you can easily withdraw and liquidate in times of need
        </div>
        <div className="btn2" >
            Save your tax
        </div>
      </div>
    </div>
  );
}
