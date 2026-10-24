import React, { useEffect, useState } from "react";
import "./Navbar.css";
import Logo from "../../components/Logo";

const Navbar2 = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  useEffect(() => {
    console.log("window.location.host", window.location.host);
  }, []);

  return (
    <nav
      className="navbar"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "var(--clr-card-bg)",
        borderBottom: "1px solid var(--clr-border)",
      }}
    >
      <div className="navbar-brand">
        <Logo />
      </div>
    </nav>
  );
};

export default Navbar2;
