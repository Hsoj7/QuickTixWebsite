import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);

  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>


            <img id='quickTixLogoShort' src='./images/QuickTixLogoShort.png' alt='QuickTix Logo' className='navbar-logo'/>
            {/* <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>Stocker</Link> */}

            <ul className='nav-menu'>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>Home</Link>
              </li>
              <li className='nav-item'>
                <Link to={'./about'} className='nav-links' onClick={closeMobileMenu}>About</Link>
              </li>
              {/* <li className='nav-item'>
                <Link to='/contact_us' className='nav-links' onClick={closeMobileMenu}>Contact Us</Link>
              </li> */}
            </ul>



        </div>
      </nav>
    </>
  );
}

export default Navbar;
