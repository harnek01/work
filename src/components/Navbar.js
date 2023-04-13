import React from 'react'
import "./Navbar.css"
import {useState} from 'react';
export default function Navbar() {

    const [isShown, setIsShown] = useState(false);
  const handleClick = event => {
    setIsShown(current => !current);
  };
  return (
    <>
      <div className="navbar-container">
        <div className="nav-frame-1">
            <img src='images/fixed.png' alt = ''/>
        </div>
        <div className="nav-frame-2">
            <div className="nav-item-1">
            Invest
            </div>
            <div className="nav-item-2">Blog</div>
            <div className="nav-item-3">About</div>
        </div>
        <div className="nav-frame-3">Best Investment Options</div>
        <div className="hamburger">
        <a >
                        <button  onClick={handleClick}>
                        <i class="fa-solid fa-bars"></i>
                        </button>
                    </a>
        </div>
      </div>
      {/* {isShown && (
                <div className="investContainer">
                  <div>FD Bazaar</div>
                  <div>Savings++</div>
                  <div>Tax Saver</div>
                </div>
            )} */}
      {isShown && (
                <div className='hamburgerContainer'>
                    <div className='hamFrame1' >
                        <div >Invest</div>
                        <div >Blogs</div>
                        <div>About</div>
                    </div>
                    <div >
                        <div className='hamBtn'
  >
                            <div className="hamBtn-content">
                            <span  >Best
                                Investment
                                Options</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
    </>
  )
}
