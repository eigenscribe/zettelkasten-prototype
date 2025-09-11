// Personal Portfolio App - Clean and simple using your actual design system
import React from 'react'

function App() {
  return (
    <div>
      {/* Header with logo - smaller as requested */}
      <header className="header">
        <div className="header-content">
          <img 
            src="/assets/logo1_1757552304373.png" 
            alt="Personal Logo" 
            className="header-logo"
          />
          {/* Space for future navigation links you'll add manually */}
        </div>
      </header>

      {/* Main content */}
      <div className="container">
        
        {/* Profile Section */}
        <section className="section">
          <div className="section-content" style={{ textAlign: 'center' }}>
            <h1 className="gradient-heading" style={{ fontSize: '3rem', marginBottom: '1rem' }}>
              Your Name
            </h1>
            <h2 style={{ color: 'var(--color-primary)', fontSize: '1.5rem', marginBottom: '1.5rem' }}>
              Software Developer & Creator
            </h2>
            <p style={{ color: 'whitesmoke', fontSize: '1.2rem', lineHeight: '1.6', maxWidth: '600px', margin: '0 auto' }}>
              Welcome to my digital space! I'm passionate about creating beautiful, 
              functional applications and exploring the intersection of technology and creativity.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section className="section">
          <div className="section-content">
            <h3 className="gradient-heading" style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '2rem' }}>
              Skills & Technologies
            </h3>
            
            <div className="skills-grid">
              {/* Tech Skills */}
              {['React', 'Python', 'JavaScript', 'Flask', 'Node.js', 'CSS'].map((skill) => (
                <div key={skill} className="skill-item">
                  {skill}
                </div>
              ))}
              
              {/* STEM Skills */}
              {['Math', 'Physics', 'Data Science', 'Analytics'].map((skill) => (
                <div key={skill} className="skill-item stem">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section">
          <div className="section-content" style={{ textAlign: 'center' }}>
            <h3 className="gradient-heading" style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>
              Let's Connect
            </h3>
            
            <div className="contact-links">
              <a href="mailto:your.email@example.com">
                📧 Email
              </a>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                🔗 GitHub
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                💼 LinkedIn
              </a>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                🐦 Twitter
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default App
