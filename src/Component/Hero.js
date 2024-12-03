// Hero.js
import React, { useState } from "react";
import About from "../Component/About"; // Adjust the path as needed
import Contact from "../Component/Contactus";
import Skills from "../Component/ Skills";
import img1 from"/home/uki-jaffna/Documents/my-portfolio/src/Component/img/IMG-20240801-WA0016.jpg"
const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  const sectionStyle = {
    backgroundColor: "black",
    color: "white",
    textAlign: "center",
    padding: "5rem 1rem",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    maxWidth: "1200px",
    width: "100%",
    margin: "0 auto",
  };

  const contentStyle = {
    flex: 1,
    textAlign: "left",
    paddingRight: "2rem", // Add padding to space out content from the image
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  };

  const headingStyle = {
    fontSize: "clamp(2.5rem, 5vw, 4rem)",
    fontWeight: "bold",
    marginBottom: "1rem",
    textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
  };

  const subheadingStyle = {
    fontSize: "clamp(1.25rem, 3vw, 1.5rem)",
    marginBottom: "2rem",
    opacity: 0.8,
  };

  const buttonContainerStyle = {
    display: "flex",
    flexDirection: "row", // Change to row for horizontal alignment
    gap: "1rem", // Space between buttons
    marginTop: "2rem",
  };

  const buttonStyle = (primary) => ({
    backgroundColor: primary ? "#FF6600" : "transparent",
    color: primary ? "black" : "#FF6600",
    border: primary ? "none" : "2px solid #FF6600",
    padding: "0.75rem 1.5rem",
    borderRadius: "0.5rem",
    fontSize: "1rem",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "all 0.3s ease",
    textTransform: "uppercase",
    letterSpacing: "1px",
    boxShadow: primary ? "0 4px 6px rgba(255, 102, 0, 0.25)" : "none",
  });

  const imageContainerStyle = {
    flex: 1,
    textAlign: "center",
    transition: "transform 0.3s ease",
    transform: isHovered ? "scale(1.1)" : "scale(1)",
  };

  const imageStyle = {
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    objectFit: "cover",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
  };

  return (
    <>
      <section style={sectionStyle}>
        <div style={containerStyle}>
          <div style={contentStyle}>
            <h1 style={headingStyle}>I'm Shashika Shehan</h1>
            <p style={subheadingStyle}>Fullstack Web Developer</p>
            <div style={buttonContainerStyle}>
              <button
                style={buttonStyle(true)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#FF8533";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#FF6600";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                Hire Me
              </button>
              <button
                style={buttonStyle(false)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(255, 102, 0, 0.1)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                View More
              </button>
            </div>
          </div>
          <div
            style={imageContainerStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img
              src={img1}// Replace with your image URL
              alt="Shashika Shehan"
              style={imageStyle}
            />
          </div>
        </div>
      </section>
      <About/> {/* Render the About component here */}
      <Skills/>
      <Contact/>

    </>
  );
};

export default Hero;
