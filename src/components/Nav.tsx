import * as React from 'react';
import logo from '../assets/logo.svg';
export interface INavProps {
}

export function Nav (props: INavProps) {
  return (
    <nav>
      <a href="/">
        <img src={logo} alt="logo" />
      </a>

      {/* {mobile navbar} */}
        <div className="mobile-nav">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
        </div>
        {/* nav items */}
        <ul>
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
