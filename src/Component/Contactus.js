import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const sectionStyle = {
    backgroundColor: '#000000',
    color: '#ffffff',
    padding: '4rem 2rem',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const containerStyle = {
    maxWidth: '1200px',
    width: '100%',
    margin: '0 auto',
  };

  const titleStyle = {
    fontSize: 'clamp(2rem, 5vw, 3.5rem)',
    marginBottom: '2rem',
    fontWeight: 'bold',
  };

  const titleSpanStyle = {
    color: '#FF6600',
  };

  const contentStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '4rem',
    alignItems: 'start',
  };

  const leftColumnStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
  };

  const subtitleStyle = {
    fontSize: '1.5rem',
    marginBottom: '1rem',
    color: '#ffffff',
  };

  const descriptionStyle = {
    color: '#999999',
    lineHeight: '1.6',
    marginBottom: '2rem',
  };

  const contactItemStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    color: '#999999',
    marginBottom: '1rem',
  };

  const iconContainerStyle = {
    width: '40px',
    height: '40px',
    backgroundColor: '#1a1a1a',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#FF6600',
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  };

  const inputStyle = {
    padding: '1rem',
    backgroundColor: '#1a1a1a',
    border: '1px solid #333333',
    borderRadius: '8px',
    color: '#ffffff',
    fontSize: '1rem',
    width: '100%',
    transition: 'border-color 0.3s ease',
  };

  const textareaStyle = {
    ...inputStyle,
    minHeight: '150px',
    resize: 'vertical',
  };

  const buttonStyle = {
    padding: '1rem 2rem',
    backgroundColor: '#FF6600',
    color: '#ffffff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1rem',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    width: 'fit-content',
    transition: 'background-color 0.3s ease',
  };

  const socialLinksStyle = {
    display: 'flex',
    gap: '1rem',
    marginTop: '2rem',
  };

  const socialIconStyle = {
    width: '35px',
    height: '35px',
    backgroundColor: '#1a1a1a',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#999999',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <h1 style={titleStyle}>
          GET IN <span style={titleSpanStyle}>TOUCH</span>
        </h1>
        <div style={contentStyle}>
          <div style={leftColumnStyle}>
            <div>
              <h2 style={subtitleStyle}>DON'T BE SHY!</h2>
              <p style={descriptionStyle}>
                Feel free to get in touch with me. I am always open
                to discussing new projects, creative ideas or
                opportunities to be part of your visions.
              </p>
            </div>
            <div>
              <div style={contactItemStyle}>
                <div style={iconContainerStyle}>
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <p>123 Street New York City, United States Of America 750065</p>
                </div>
              </div>
              <div style={contactItemStyle}>
                <div style={iconContainerStyle}>
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <p>steve@email.com</p>
                </div>
              </div>
              <div style={contactItemStyle}>
                <div style={iconContainerStyle}>
                  <i className="fas fa-phone"></i>
                </div>
                <div>
                  <p>+234 23 134 010</p>
                </div>
              </div>
            </div>
            <div style={socialLinksStyle}>
              <a href="#" style={socialIconStyle}><i className="fab fa-facebook-f"></i></a>
              <a href="#" style={socialIconStyle}><i className="fab fa-twitter"></i></a>
              <a href="#" style={socialIconStyle}><i className="fab fa-dribbble"></i></a>
              <a href="#" style={socialIconStyle}><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
          <form style={formStyle} onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="YOUR NAME"
              style={inputStyle}
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="YOUR EMAIL"
              style={inputStyle}
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="YOUR SUBJECT"
              style={inputStyle}
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="YOUR MESSAGE"
              style={textareaStyle}
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button 
              type="submit" 
              style={buttonStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#ff8533';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#FF6600';
              }}
            >
              SEND MESSAGE
              <i className="fas fa-arrow-right"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
