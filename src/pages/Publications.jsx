import '../styles/Publications.css'

const Publications = () => {
  const publications = [
    {
      title: "Characterizing Standing Postural Coordination Across the Reaching Workspace With A Six-Degree-of-Freedom Biomechanical Model",
      authors: "Robert M. Carrera, Yupei Cai, Keshu Cai, et al.",
      venue: "IEEE Transactions on Neural Systems and Rehabilitation Engineering (TNSRE)",
      
      status: "Under Review",
      description: "We use a 6-DoF biomechanical model and VR-based reaching tasks to quantify how unimpaired subjects coordinate posture across different targets, which can inform clinical postural training.",
      links: {
        pdf: "https://cdn.jsdelivr.net/gh/caiyp7/yupei-cai-website@main/public/Reaching_only_Characterization_TNSRE_Final_Submission.pdf",
        video: "https://youtu.be/krjQ4g-URy4"
      }
    },
    {
      title: "Postural Models to Control Cable-Driven Parallel Robots For Rehabilitation: A Pilot Study on Squat Assistance",
      authors: "Robert M. Carrera, Yupei Cai, Keshu Cai, et al.",
      venue: "IEEE Robotics and Automation Letters (RA-L)",
      
      status: "Under Review",
      description: "We coordinate pelvic and shank forces from a cable-driven parallel robot to provide squat assistance, and EMG results show how different strategies affect knee loading and ankle stability.",
      links: {
        pdf: "https://cdn.jsdelivr.net/gh/caiyp7/yupei-cai-website@main/public/Squatting_Multisegment_Assistance_Paper_IEEE.pdf",
        video: "https://youtube.com/shorts/0BP6bu9ySdQ"
      }
    }
  ]

  return (
    <div className="page publications-page">
      <div className="container">
        <section className="section">
          <h1 className="section-title">Publications</h1>
          
          <div className="publications-list">
            {publications.map((pub, index) => (
              <div key={index} id={`publication-${index}`} className="publication-item card">
                <h2 className="publication-title">{pub.title}</h2>
                
                <div className="publication-meta">
                  <p className="publication-authors">
                    <strong>Authors:</strong> {' '}
                    {pub.authors.split(', ').map((author, i, arr) => (
                      <span key={i}>
                        {author.includes('Yupei Cai') ? (
                          <span className="author-me">{author}</span>
                        ) : (
                          <span>{author}</span>
                        )}
                        {i < arr.length - 1 && ', '}
                      </span>
                    ))}
                  </p>
                  <p className="publication-venue">
                    <strong>Venue:</strong> {pub.venue}, {pub.year}
                  </p>
                  <p className="publication-status">
                    <span className={`status-badge ${pub.status.toLowerCase().replace(' ', '-')}`}>
                      {pub.status}
                    </span>
                  </p>
                </div>

                <p className="publication-description">{pub.description}</p>

                <div className="publication-links">
                  {pub.links.pdf && (
                    <a 
                      href={pub.links.pdf} 
                      className="pub-link" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      📄 View PDF
                    </a>
                  )}
                  {pub.links.video && (
                    <a 
                      href={pub.links.video} 
                      className="pub-link" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      🎥 {pub.links.video.includes('youtu.be') || pub.links.video.includes('youtube.com') ? 'Watch on YouTube' : 'Video (Open in new tab)'}
                    </a>
                  )}
                </div>
                {pub.links.video && (
                  <div className="publication-video" style={{ marginTop: '1rem' }}>
                    <h4 style={{ marginBottom: '0.5rem', fontSize: '1rem' }}>Video Preview:</h4>
                    {pub.links.video.includes('youtu.be') || pub.links.video.includes('youtube.com') ? (
                      <div className="youtube-video-container">
                        <iframe
                          src={(() => {
                            if (pub.links.video.includes('youtu.be')) {
                              return `https://www.youtube.com/embed/${pub.links.video.split('/').pop()}`
                            } else if (pub.links.video.includes('/shorts/')) {
                              return `https://www.youtube.com/embed/${pub.links.video.split('/shorts/').pop()}`
                            } else if (pub.links.video.includes('watch?v=')) {
                              return pub.links.video.replace('watch?v=', 'embed/')
                            } else {
                              return pub.links.video.replace('youtube.com', 'youtube.com/embed')
                            }
                          })()}
                          title="YouTube video player"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    ) : (
                      <>
                        <video 
                          controls 
                          className="publication-video-player"
                          preload="metadata"
                          playsInline
                          style={{ width: '100%', maxWidth: '600px', borderRadius: '8px' }}
                        >
                          <source src={pub.links.video} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                        <p style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: '#666' }}>
                          Video may take a moment to load due to file size.
                        </p>
                      </>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>


        </section>
      </div>
    </div>
  )
}

export default Publications

