import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    const debounceScroll = () => {
      clearTimeout(window.navScrollTimeout);
      window.navScrollTimeout = setTimeout(handleScroll, 50);
    };

    document.addEventListener("scroll", debounceScroll);
    return () => {
      clearTimeout(window.navScrollTimeout);
      document.removeEventListener("scroll", debounceScroll);
    };
  }, [scrolled]);

  const navStyle = {
    backgroundColor: scrolled ? "rgba(0, 0, 0, 0.9)" : "rgba(0, 0, 0, 0.7)",
    color: "white",
    padding: "1rem",
    position: "fixed",
    top: 0,
    width: "100%",
    zIndex: 1000,
    transition: "all 0.3s ease-in-out",
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "1200px",
    margin: "0 auto",
  };

  const linksContainerStyle = {
    display: "flex",
    gap: "1.5rem",
    alignItems: "center",
  };

  const navLinkStyle = {
    color: "white",
    textDecoration: "none",
    fontSize: "1rem",
    fontWeight: "500",
    position: "relative",
    transition: "color 0.3s ease",
  };

  const buttonStyle = {
    backgroundColor: "#FF6600",
    color: "white",
    border: "none",
    padding: "0.5rem 1rem",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "1rem",
    fontWeight: "bold",
    transition: "background-color 0.3s ease",
  };

  return (
    <nav style={navStyle}>
      <div style={containerStyle}>
        {/* Logo */}
        <Link
          to="/"
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "white",
            textDecoration: "none",
          }}
        >
          SHEHAN
        </Link>

        {/* Navigation Links */}
        <div style={linksContainerStyle}>
          {["Home", "About",  "Skills", "Projects", "Contact"].map(
            (section) => (
              <Link
                key={section}
                to={`/${section.toLowerCase()}`}
                style={navLinkStyle}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#FF6600")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
              >
                {section}
              </Link>
            )
          )}

          {/* Get Started Button */}
          <button
            style={buttonStyle}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#FF8533")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#FF6600")
            }
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
