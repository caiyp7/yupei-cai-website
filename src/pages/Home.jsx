import { Link } from 'react-router-dom'
import '../styles/Home.css'

const Home = () => {
  return (
    <div className="page home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Yupei Cai</h1>
            <h2 className="hero-subtitle">Mechanical Engineering @ Columbia University</h2>
            <p className="hero-tagline">Rehabilitation & Robotics / UAV Perception & Ground Control</p>
            <div className="hero-description">
              <p>I received my Master's degree in Mechanical Engineering from Columbia University.</p>
              <p>My research focuses on rehabilitation robotics and VR biomechanics.</p>
              <p>I work on UAV, point cloud, and QGroundControl development at MARS Lab.</p>
            </div>
            <div className="hero-buttons">
              <Link to="/projects" className="btn">View Projects</Link>
              <Link to="/publications" className="btn btn-outline">Publications</Link>
              <a href="/yupei-cai-website/CV_Yupei_Cai.pdf" className="btn btn-outline" target="_blank" rel="noopener noreferrer">View CV</a>
            </div>
            <div className="hero-email">
              <a href="mailto:yc4363@columbia.edu">yc4363@columbia.edu</a>
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas Section */}
      <section className="section research-areas">
        <div className="container">
          <h2 className="section-title">Research & Projects</h2>
          <div className="research-grid">
            <Link to="/publications#publication-1" className="research-card card">
              <h3>Squat Assistance with Cable-Driven Parallel Robots</h3>
              <p>Coordinating pelvic and shank forces from a cable-driven parallel robot to provide squat assistance, evaluating different strategies through EMG analysis.</p>
            </Link>
            <Link to="/projects" className="research-card card">
              <h3>UAVs & Ground Control</h3>
              <p>Working on QGroundControl integration, LiDAR point cloud processing, and video streaming systems.</p>
            </Link>
            <Link to="/projects" className="research-card card">
              <h3>Legged Robotics</h3>
              <p>Designing and controlling quadruped robots with locomotion and balance control algorithms.</p>
            </Link>
            <Link to="/publications#publication-0" className="research-card card">
              <h3>Standing Postural Coordination in VR</h3>
              <p>Using a 6-DoF biomechanical model and VR-based reaching tasks to quantify postural coordination strategies across different targets.</p>
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Home

