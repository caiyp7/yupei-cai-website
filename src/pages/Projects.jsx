import '../styles/Projects.css'

const Projects = () => {
  const projects = [
    {
      title: "Quadruped Robot Design and Control",
      time: "2024",
      tags: ["Research", "Robotics"],
      points: [
        "Designed and built a simple quadruped robot using SolidWorks for CAD design, 3D printing, assembly and testing.",
        "Implemented simulation in PyBullet and used an evolution algorithm to optimize motor parameters.",
        "Applied crossover and mutation operations in the algorithm, with speed, distance, and stability as fitness scores for selection, and utilized parallel computation to reduce running time."
      ],
      video: "https://youtu.be/Ap7q0w-yRoo"
    },
    {
      title: "Web-Integrated QGroundControl for UAV Point Cloud & Video",
      time: "2025",
      tags: ["Research", "UAV"],
      overview: "Embedded web renderer in QGroundControl to integrate point cloud, video, and telemetry information in one screen.",
      points: [
        "Used Draco to compress LiDAR point clouds and transmit over network",
        "Developed point cloud reception and decoding modules on Android/PC platforms",
        "Embedded HTML + WebGL renderer to enable point cloud rotation, zooming, and trajectory display",
        "Adjusted QGC layout to display flight control data, video streams, and point clouds simultaneously"
      ],
      video: "https://youtu.be/oJ4fbM_4nQA"
    }
  ]

  const renderProject = (project, index) => (
    <div key={index} className="project-item card">
      <div className="project-header">
        <h3 className="project-title">{project.title}</h3>
        <div className="project-meta">
          <span className="project-time">{project.time}</span>
          <div className="project-tags">
            {project.tags.map((tag, i) => (
              <span key={i} className="project-tag">{tag}</span>
            ))}
          </div>
        </div>
      </div>
      
      <div className="project-points">
        <ul>
          {project.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>

      {project.video && (
        <div className="project-video">
          <h4>Demo Video:</h4>
          {project.video.includes('youtu.be') || project.video.includes('youtube.com') ? (
            <div className="youtube-video-container">
              <iframe
                src={(() => {
                  if (project.video.includes('youtu.be')) {
                    return `https://www.youtube.com/embed/${project.video.split('/').pop()}`
                  } else if (project.video.includes('/shorts/')) {
                    return `https://www.youtube.com/embed/${project.video.split('/shorts/').pop()}`
                  } else if (project.video.includes('watch?v=')) {
                    return project.video.replace('watch?v=', 'embed/')
                  } else {
                    return project.video.replace('youtube.com', 'youtube.com/embed')
                  }
                })()}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ) : project.video.endsWith('.mov') ? (
            <div className="video-download-box">
              <p className="video-download-text">
                This video is in MOV format. Please download to view.
              </p>
              <a href={project.video} className="project-link" download>
                📥 Download Video (.mov)
              </a>
            </div>
          ) : (
            <>
              <video 
                controls 
                className="project-video-player"
                preload="metadata"
                playsInline
              >
                <source src={project.video} type="video/mp4" />
                <div className="video-fallback">
                  <p>Your browser does not support video playback.</p>
                  <a href={project.video} className="project-link" download>
                    📥 Download Video
                  </a>
                </div>
              </video>
              <p style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: '#666' }}>
                Video may take a moment to load due to file size. If playback is slow, try downloading the video.
              </p>
            </>
          )}
        </div>
      )}
    </div>
  )

  return (
    <div className="page projects-page">
      <div className="container">
        <section className="section">
          <h1 className="section-title">Projects</h1>

          <div className="projects-grid">
            {projects.map((project, index) => renderProject(project, index))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Projects

