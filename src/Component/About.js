import React, { useState } from 'react';
import { FaUser, FaBirthdayCake, FaMapMarkerAlt, FaEnvelope, FaPhone, FaRocket } from 'react-icons/fa'; // Import icons
import img1 from"/home/uki-jaffna/Documents/my-portfolio/src/Component/img/IMG-20240801-WA0016.jpg"
const About = () => {
  const [isHovered, setIsHovered] = useState(false);

  const sectionStyle = {
    backgroundColor: '#000',
    color: '#fff',
    padding: '4rem 1rem',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
  };

  const headingStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '2rem',
    color: '#FF6600',
    textTransform: 'uppercase',
    letterSpacing: '2px',
  };

  const contentStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '2rem',
  };

  const imageContainerStyle = {
    position: 'relative',
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    overflow: 'hidden',
    boxShadow: '0 0 20px rgba(255, 102, 0, 0.3)',
    transition: 'transform 0.3s ease',
    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  const textContainerStyle = {
    flex: 1,
  };

  const paragraphStyle = {
    fontSize: '1.1rem',
    lineHeight: 1.6,
    marginBottom: '1.5rem',
    textAlign: 'justify',
  };

  const listStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1rem',
    listStyleType: 'none',
    padding: 0,
  };

  const listItemStyle = {
    fontSize: '1rem',
    marginBottom: '0.5rem',
    display: 'flex',
    alignItems: 'center',
  };

  const iconStyle = {
    color: '#FF6600',
    marginRight: '0.5rem',
    fontSize: '1.2rem',
  };

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={headingStyle}>About Me</h2>
        <div style={contentStyle}>
          <div
            style={imageContainerStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Replace `your-image-url.jpg` with the actual image URL */}
            <img
              src={img1}
              alt="Profile of Shashika Shehan"
              style={imageStyle}
            />
          </div>
          <div style={textContainerStyle}>
            <p style={paragraphStyle}>
              Hello! I'm Shashika Shehan, a passionate and creative fullstack web developer based in San Francisco. With a keen eye for detail and a love for clean, efficient code, I specialize in creating seamless, user-friendly web applications that not only meet but exceed client expectations. My journey in web development has been driven by curiosity and a constant desire to learn and adapt to new technologies.
            </p>
            <ul style={listStyle}>
              <li style={listItemStyle}>
                <FaUser style={iconStyle} />
                <strong>Name:</strong> Shashika Shehan
              </li>
              <li style={listItemStyle}>
                <FaBirthdayCake style={iconStyle} />
                <strong>Date of Birth:</strong> January 1, 1987
              </li>
              <li style={listItemStyle}>
                <FaMapMarkerAlt style={iconStyle} />
                <strong>Location:</strong> pointpedro
              </li>
              <li style={listItemStyle}>
                <FaEnvelope style={iconStyle} />
                <strong>Email:</strong> example@gmail.com
              </li>
              <li style={listItemStyle}>
                <FaPhone style={iconStyle} />
                <strong>Phone:</strong> +123-456-7890
              </li>
              <li style={listItemStyle}>
                <FaRocket style={iconStyle} />
                <strong>Projects Completed:</strong> 73
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
