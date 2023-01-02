import React from "react";
import { Link,NavLink } from "react-router-dom";

const Navbar = (props) => {
   
  return (
    <nav>
      <div className="nav-wrapper">
        <Link href="#" className="brand-logo">
          Logo
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
           
          <NavLink to="/about">About</NavLink>
          </li>
          <li>
          <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
