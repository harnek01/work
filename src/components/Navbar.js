import React from 'react'
import "./Navbar.css"
export default function Navbar() {
  return (
    <>
      <div className="navbar-container">
        <div className="nav-frame-1">
            <img src='images/fixed.png' alt = ''/>
        </div>
        <div className="nav-frame-2">
            <div className="nav-item-1">Invest</div>
            <div className="nav-item-2">Blog</div>
            <div className="nav-item-3">About</div>
        </div>
        <div className="nav-frame-3">Best Investment Options</div>
      </div>
    </>
  )
}
