import { Link } from 'react-router-dom'
import '../styles/Research.css'

const Research = () => {
  return (
    <div className="page research-page">
      <div className="container">
        <section className="section">
          <h1 className="section-title">Research Directions</h1>

          {/* Rehabilitation & Biomechanics */}
          <div className="research-category">
            <h2 className="category-title">Rehabilitation & Biomechanics</h2>
            
            <div className="research-project card">
              <h3>Standing Postural Coordination in VR</h3>
              <p className="project-intro">
                16-person VR reaching experiment using a 6-DoF biomechanical model to study 
                standing postural coordination strategies.
              </p>
              <div className="project-details">
                <h4>Key Points:</h4>
                <ul>
                  <li>Developed and used a 6-degree-of-freedom biomechanical model to analyze 
                      postural coordination strategies during standing reaching tasks;</li>
                  <li>Utilized VR and motion capture to study the impact of different target 
                      heights on postural strategies;</li>
                  <li>Provided quantitative metrics and reference patterns for clinical 
                      postural training.</li>
                </ul>
              </div>
              <Link to="/publications" className="project-link">View Publication →</Link>
            </div>

            <div className="research-project card">
              <h3>Squat Assistance with Cable-Driven Parallel Robot</h3>
              <p className="project-intro">
                Using CDPR to control multi-segment forces to assist subjects in completing 
                squatting motions. Integration of RobUST Framework with Unity VR, including 
                multi-joint models and seven Vive trackers for squat training and assessment.
              </p>
              <div className="project-details">
                <h4>Key Points:</h4>
                <ul>
                  <li>Designed and used a multi-segment lower-limb postural model to 
                      distinguish pelvis-driven and shank-driven force control;</li>
                  <li>Provided targeted assistance through a cable-driven parallel robot 
                      in a VR environment;</li>
                  <li>Evaluated the impact of different assistance strategies on muscle 
                      loading through EMG analysis (including Vastus medialis, tibialis, 
                      soleus);</li>
                  <li>Built a controllable multi-joint lower-limb model in Unity/RobUST;</li>
                  <li>Implemented real-time trajectory tracking and assistance force control 
                      strategies;</li>
                  <li>Designed experimental tasks including deep squats and balance maintenance.</li>
                </ul>
              </div>
              <Link to="/publications" className="project-link">View Publication →</Link>
            </div>
          </div>

          {/* UAV Perception & Ground Station */}
          <div className="research-category">
            <h2 className="category-title">UAV Perception & Ground Station Systems</h2>
            
            <div className="research-project card">
              <h3>UAV LiDAR Point Cloud & Video Ground Station</h3>
              <p className="project-intro">
                Integration of LiDAR point clouds and video streams from UAVs into a 
                unified ground station UI. Current work at MARS Lab focusing on UAV systems, 
                perception, and ground control platforms.
              </p>
              <div className="project-details">
                <h4>Key Points:</h4>
                <ul>
                  <li>Used Draco for point cloud compression and transmission via UDP/other protocols;</li>
                  <li>Developed point cloud decoding and reception pipelines on local/Android platforms;</li>
                  <li>Embedded a web-based point cloud renderer in QGroundControl, enabling 
                      point cloud rotation, zooming, and path tracking;</li>
                  <li>Synchronized flight control data, video streams, and point clouds in 
                      a single interface;</li>
                  <li>Continuing to develop and enhance UAV perception systems, ground station 
                      interfaces, and real-time data processing pipelines for various applications.</li>
                </ul>
              </div>
              <Link to="/projects" className="project-link">View Project →</Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Research

