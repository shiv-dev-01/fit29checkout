import React, { useEffect, useState } from "react";
import "./Navbar.css";
import images from "../../constants/images";
import { useNavigate } from "react-router-dom";
import Logo from "../../components/Logo";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const Navigate = useNavigate();

  useEffect(() => {
    console.log("window.location.host", window.location.pathname);
  }, []);

  return (
    <nav className="navbar">
      {/* ... previous content ... */}
      <div style={{ flex: "0.3" }} className="nav_eampy_div"></div>
      <div
        className="navbar-brand cursor-pointer"
        onClick={() => {
          Navigate("/");
        }}
      >
        <Logo className="h-14" />
      </div>
      <div className="navbar-signin">
        <a
          href="https://member.fit29.com/"
          target="_blank"
          className="product-button"
        >
          Sign In
        </a>
      </div>
      <div className="hamburger" onClick={handleMenuToggle}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </nav>
  );
};

export default Navbar;
