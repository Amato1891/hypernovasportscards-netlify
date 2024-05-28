import React, { useState } from 'react';
import '../views/landing-page.css'
import { Link, useLocation } from 'react-router-dom/cjs/react-router-dom';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const location = useLocation();
  return (
    <nav data-role="Header" className="landing-page-navbar">
      <h1 style={{color:'white'}}>Hypernova Sportscards</h1>
          <div className="landing-page-right-side">
            <div className="landing-page-links-container">
            <span className="landing-page-text">
              {location.pathname !== '/' && <span className="landing-page-text"><Link to="/">Home</Link></span>}
              {location.pathname !== '/about' && <span className="landing-page-text"><Link to="/about">About</Link></span>}
              {location.pathname !== '/terms-and-conditions' && <span className="landing-page-text"><Link to="/terms-and-conditions">Terms and Conditions</Link></span>}
          </span>
              {/* <span className="landing-page-text02">Reviews</span> */}
            </div>
            <a href="#main-section" className="landing-page-link">
            </a>
          </div>
          <div data-role="BurgerMenu" className="landing-page-burger-menu" onClick={toggleMobileMenu}>
          <svg viewBox="0 0 1024 1024" className="landing-page-burger-menu1" fill="#ffffff">
  <path d="M810.667 725.333h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
  <path d="M810.667 426.667h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
  <path d="M810.667 128h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
        </svg>
      </div>
      <div data-role="MobileMenu" className="landing-page-mobile-menu" style= {{display:isMobileMenuOpen ? 'flex' : 'none'}}>
            <div className="landing-page-nav">
              <div className="landing-page-top">
                <h1>Hypernova Sportscards</h1>
                <div
                  data-role="CloseMobileMenu"
                  className="landing-page-close-menu"
                  onClick={toggleMobileMenu}
                >
                  <svg viewBox="0 0 1024 1024" className="landing-page-icon03">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <div className="landing-page-right-side1">
                <div className="landing-page-links-container1">
                  {location.pathname !== '/' && <span className="landing-page-text"><Link to="/">Home</Link></span>}
                  {location.pathname !== '/about' && <span className="landing-page-text"><Link to="/about">About</Link></span>}
                  {location.pathname !== '/terms-and-conditions' && <span className="landing-page-text"><Link to="/terms-and-conditions">Terms and Conditions</Link></span>}
          
                  {/* <span className="landing-page-text06">Reviews</span> */}
                </div>
                <a href="#main-section" className="landing-page-link01">
                </a>
              </div>
            </div>
            <div className="landing-page-follow-container">
              <span className="landing-page-text08">
                Follow us on
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <div className="landing-page-icons-container">
                <a
                  href="https://www.instagram.com/hypernovasportscards/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="landing-page-link02"
                >
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="landing-page-icon05"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </a>
                <a
                  href="https://www.ebay.com/usr/hypernovasportscards"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="landing-page-link03"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="60" height="24" viewBox="0 0 120 60">
  <path d="M71.474 30.746c-3.794.124-6.165.804-6.165 3.32 0 1.63 1.3 3.382 4.578 3.382 4.392 0 6.743-2.392 6.743-6.33v-.433l-5.155.062zm9.362 5.196l.144 3.505h-3.897c-.103-.887-.144-1.773-.144-2.64-2.103 2.598-4.62 3.34-8.104 3.34-5.155 0-7.918-2.722-7.918-5.877 0-4.578 3.753-6.186 10.3-6.33C73 27.9 75 27.9 76.65 27.9v-.454c0-3.052-1.96-4.3-5.36-4.3-2.516 0-4.392 1.052-4.578 2.846H62.3c.474-4.495 5.196-5.63 9.34-5.63 5 0 9.176 1.773 9.176 7.032v8.557z" fill="#f5af02"/>
  <path d="M35.203 28.52c-.165-3.918-3-5.382-6.02-5.382-3.258 0-5.877 1.65-6.33 5.382zM22.77 31.304c.227 3.815 2.846 6.062 6.454 6.062 2.495 0 4.722-1 5.464-3.237h4.33c-.845 4.495-5.63 6.02-9.733 6.02-7.485 0-10.784-4.124-10.784-9.67 0-6.124 3.423-10.145 10.867-10.145 5.918 0 10.248 3.093 10.248 9.857v1.114z" fill="#e53238"/>
  <path d="M50.36 37.283c3.897 0 6.557-2.804 6.557-7.032s-2.66-7.032-6.557-7.032c-3.877 0-6.557 2.804-6.557 7.032s2.68 7.032 6.557 7.032zM39.615 12.97H43.8v10.537c2.062-2.454 4.887-3.155 7.67-3.155 4.68 0 9.857 3.155 9.857 9.96 0 5.7-4.124 9.857-9.94 9.857-3.052 0-5.897-1.093-7.67-3.258 0 .866-.04 1.732-.144 2.557H39.45l.144-4.33V12.97z" fill="#0064d2"/>
  <path d="M102.178 21.034L89.207 46.5h-4.7l3.732-7.073-9.753-18.393h4.908l7.176 14.372 7.155-14.372z" fill="#86b817"/>
</svg>
                </a>
                <a
                  href="https://www.whatnot.com/user/hypernovasports"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="landing-page-link04"
                >
                  <img src='https://www.whatnot.com/favicon.ico' style={{height: '24px', width: '24px'}}></img>
                </a>
              </div>
            </div>
          </div>
        </nav>
  );
}

export default Navbar;
