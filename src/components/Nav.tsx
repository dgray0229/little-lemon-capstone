import { useState } from 'react';
import logo from '../assets/images/logo.svg';
export interface INavProps {
}

export function Nav () {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu (): void {
    setMenuOpen(isMenuOpen => !isMenuOpen);
  }
  function toggleClass (status: boolean, className: string): string {
    return status ? className : '';
  }


  return (
    <nav className={`navbar ${toggleClass(menuOpen, 'open')}`}>
      <a className='logo' href="/">
        <img src={logo} alt="logo" />
      </a>

      {/* {mobile navbar} */}
      <div className="menu-icon" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      {/* nav items */}
      <ul className={`nav-links ${toggleClass(menuOpen, 'visible')}`}>
        <li><a href="/">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Menu</a></li>
        <li><a href="#">Reservations</a></li>
        <li><a href="#">Order Online</a></li>
        <li><a href="#">Login</a></li>
      </ul>
    </nav>
  );
}
