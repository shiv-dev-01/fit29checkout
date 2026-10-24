import React from "react";

const Logo = ({ className = "", style = {} }) => {
  return (
    <a
      href="/"
      className={`fit29-logo ${className}`}
      style={{
        fontSize: 22,
        fontWeight: 300,
        letterSpacing: "-0.04em",
        color: "hsl(var(--charcoal))",
        textDecoration: "none",
        ...style,
      }}
    >
      FIT<span className="neon-gradient-text" style={{ fontWeight: 600 }}>29</span>
    </a>
  );
};

export default Logo;
