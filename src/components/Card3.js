import React from "react";
import "./stylingSheet.css";
import "./mediaQueries.css"
export default function Card3(props) {
  return (
    <div className="card3">
      <div style={{ display: "flex", width: "100%", gap: "20px" }}>
        <div className="arrowImg">
          <img src={props.imageUrl} alt="" />
        </div>
        <div
          className="para"
          style={{ color: "#32302F",paddingRight:'16px', fontWeight: "500", margin: "0", textAlign:'left' }}
        >
          <b className="cardHead">
          {props.title}
            </b>
        </div>
      </div>
      <div className="hrLine"
        style={{ width: "384px", height: "0px", border: "1px solid #DFDEDE" }}
      ></div>
      <div
        className="btn-content"
        style={{ fontSize: "20px", lineHeight: "26px", color:'#32302F', textAlign:'left' }}
      >
        {props.description}
      </div>
    </div>
  );
}
