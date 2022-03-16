import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import {Button} from "./Button";
import "./Navbar.css"


function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closedMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true);
        }
    };
    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener("resize", showButton);
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
                {/* {button && <Button buttonStyle="btn--outline">Submit name</Button>} */}
            </div>
        </nav>
    </div>
  )
}

export default Navbar