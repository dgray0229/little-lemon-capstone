import * as React from 'react';
import logo from '../assets/images/logo.svg';

export function Footer () {
  return (
    <footer>
      <section>
        <div className="company-info">
          <img src={logo} alt="" />
          <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        </div>
        <div>
          <h3>Important Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Reservations Online</a></li>
            <li><a href="#">Order Online</a></li>
            <li><a href="#">Login Online</a></li>
          </ul>
        </div>
        <div>
          <h3>Contact</h3>
          <ul>
            <li>Address: 1234 Main St, Menlo Park, CA, 94444</li>
          </ul>
        </div>
        <div>
          <h3>Social Media Links</h3>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instagram</a></li>
          </ul>
        </div>
      </section>
    </footer>
  );
}
