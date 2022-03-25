import React, {useState} from 'react';
import {Link} from "react-router-dom";
import "./Navbar.css"


function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closedMobileMenu = () => setClick(false);
  return (
    <div>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    Onboarding Portal
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to="/" className="nav-links" onClick={closedMobileMenu}>
                            Test1
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/test" className="nav-links" onClick={closedMobileMenu}>
                            Test2
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar