import '../styles/Contact.css'

const Contact = () => {
  const contactInfo = {
    email: "yc1234@columbia.edu", // Placeholder - update with actual email
    linkedin: "https://linkedin.com/in/yupei-cai", // Placeholder
    github: "https://github.com/yupei-cai", // Placeholder
    scholar: "https://scholar.google.com/citations?user=...", // Placeholder
    wechat: "your-wechat-id" // Placeholder
  }

  const skills = {
    programming: ["Python", "C++", "MATLAB", "JavaScript", "TypeScript"],
    frameworks: ["ROS", "Gazebo", "TensorFlow", "PyTorch"],
    tools: ["CAD", "SolidWorks", "QGroundControl", "Unity", "RobUST"]
  }

  return (
    <div className="page contact-page">
      <div className="container">
        <section className="section">
          <h1 className="section-title">Contact & CV</h1>

          {/* Contact Information */}
          <div className="contact-section">
            <h2>Contact</h2>
            <div className="contact-grid">
              <a href={`mailto:${contactInfo.email}`} className="contact-item card">
                <div className="contact-icon">📧</div>
                <div className="contact-content">
                  <h3>Email</h3>
                  <p>{contactInfo.email}</p>
                </div>
              </a>

              {contactInfo.linkedin && (
                <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="contact-item card">
                  <div className="contact-icon">💼</div>
                  <div className="contact-content">
                    <h3>LinkedIn</h3>
                    <p>Connect with me</p>
                  </div>
                </a>
              )}

              {contactInfo.github && (
                <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" className="contact-item card">
                  <div className="contact-icon">💻</div>
                  <div className="contact-content">
                    <h3>GitHub</h3>
                    <p>View my projects</p>
                  </div>
                </a>
              )}

              {contactInfo.scholar && (
                <a href={contactInfo.scholar} target="_blank" rel="noopener noreferrer" className="contact-item card">
                  <div className="contact-icon">📚</div>
                  <div className="contact-content">
                    <h3>Google Scholar</h3>
                    <p>View publications</p>
                  </div>
                </a>
              )}

              {contactInfo.wechat && (
                <div className="contact-item card">
                  <div className="contact-icon">💬</div>
                  <div className="contact-content">
                    <h3>WeChat</h3>
                    <p>{contactInfo.wechat}</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* CV Download */}
          <div className="cv-section">
            <h2>Curriculum Vitae</h2>
            <div className="cv-card card">
              <p className="cv-description">
                Download my latest CV to learn more about my education, research, 
                publications, and professional experience.
              </p>
              <a 
                href="/CV_Yupei_Cai.pdf" 
                className="btn cv-download-btn" 
                target="_blank"
                rel="noopener noreferrer"
              >
                📄 查看 CV (PDF)
              </a>
              <p className="cv-updated">Last updated: November 2024</p>
            </div>
          </div>

          {/* Quick Info */}
          <div className="quick-info-section">
            <h2>Quick Information</h2>
            <div className="quick-info-grid">
              <div className="info-card card">
                <h3>Education</h3>
                <p>Columbia University – M.S. in Mechanical Engineering (2023–2025)</p>
                <p>Sun Yat-sen University – B.Eng in Aeronautical & Astronautical Engineering (2019–2023)</p>
              </div>

              <div className="info-card card">
                <h3>Research Areas</h3>
                <ul>
                  <li>Rehabilitation Robotics</li>
                  <li>UAV Perception</li>
                  <li>Biomechanics</li>
                  <li>Motion Control</li>
                </ul>
              </div>

              <div className="info-card card">
                <h3>Skills</h3>
                <div className="skills-content">
                  <div>
                    <strong>Programming:</strong>
                    <p>{skills.programming.join(', ')}</p>
                  </div>
                  <div>
                    <strong>Frameworks:</strong>
                    <p>{skills.frameworks.join(', ')}</p>
                  </div>
                  <div>
                    <strong>Tools:</strong>
                    <p>{skills.tools.join(', ')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Contact

