import React from 'react'
import './Navi.css'
export default function Navi() {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", () =>{
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    })
  return (
    <>
     <header>
     <div className="navbar">
        <div className="nav-branding"></div>
            <img src="images/fixed.png" alt="" />
            <ul className="nav-menu">
                <li className="nav-link">
                    <a href="#" className="nav-link">Invest</a>
                </li>
                <li className="nav-link">
                    <a href="#" className="nav-link">Blogs</a>
                </li>
                <li className="nav-link">
                    <a href="#" className="nav-link">About</a>
                </li>
            </ul>
            <div className="nav-btn">Best Investment Options</div>
            <div className="hamburger">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        
     </div> 
     </header>
    </>
  )
}
