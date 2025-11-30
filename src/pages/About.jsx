import '../styles/About.css'

const About = () => {
  const skills = {
    programming: ["Python", "C/C++", "MATLAB"],
    tools: ["Robot Operating System (ROS)", "Gazebo", "CAD", "TensorFlow", "PyTorch"]
  }

  return (
    <div className="page about-page">
      <div className="container">
        <section className="section">
          <h1 className="section-title">About</h1>
          
          {/* Introduction */}
          <div className="about-section">
            <h2>Introduction</h2>
            <p className="intro-text">
              I received my Master's degree in Mechanical Engineering from Columbia University. 
              My research experience includes work in rehabilitation robotics, human biomechanics, 
              and robotic perception & control, especially in VR-based postural training 
              and UAV ground station systems. I received my Bachelor's degree in 
              Aeronautical & Astronautical Engineering from Sun Yat-sen University.
            </p>
          </div>

          {/* Education */}
          <div className="about-section">
            <h2>Education</h2>
            <div className="education-timeline">
              <div className="education-item card">
                <div className="education-header">
                  <h3>Columbia University</h3>
                  <span className="education-period">2023 – 2025</span>
                </div>
                <p className="education-degree">M.S. in Mechanical Engineering</p>
                <p className="education-details">GPA: 3.86</p>
              </div>
              <div className="education-item card">
                <div className="education-header">
                  <h3>Sun Yat-sen University</h3>
                  <span className="education-period">2019 – 2023</span>
                </div>
                <p className="education-degree">B.Eng in Aeronautical & Astronautical Engineering</p>
                <p className="education-details">GPA: 3.6</p>
              </div>
            </div>
          </div>

          {/* Research Interests */}
          <div className="about-section">
            <h2>Research Interests</h2>
            <ul className="interests-list">
              <li>Rehabilitation robotics and cable-driven parallel robots</li>
              <li>Multisegment biomechanical modeling in VR</li>
              <li>UAV-based LiDAR mapping and point cloud streaming</li>
              <li>Robot motion planning & control</li>
              <li>Human–robot interaction in virtual environments</li>
            </ul>
          </div>

          {/* CV Download */}
          <div className="about-section cv-section">
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
                📄 View CV (PDF)
              </a>
              <p className="cv-updated">Last updated: November 2024</p>
            </div>
          </div>

          {/* Skills */}
          <div className="about-section">
            <h2>Skills</h2>
            <div className="skills-content">
              <div>
                <strong>Programming:</strong>
                <p>{skills.programming.join(', ')}</p>
              </div>
              <div>
                <strong>Tools:</strong>
                <p>{skills.tools.join(', ')}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About

