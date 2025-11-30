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
        pdf: "/Reaching_only_Characterization_TNSRE_Final_Submission.pdf",
        video: "/reaching.mp4"
      }
    },
    {
      title: "Postural Models to Control Cable-Driven Parallel Robots For Rehabilitation: A Pilot Study on Squat Assistance",
      authors: "Robert M. Carrera, Yupei Cai, Keshu Cai, et al.",
      venue: "IEEE Robotics and Automation Letters (RA-L)",
      
      status: "Under Review",
      description: "We coordinate pelvic and shank forces from a cable-driven parallel robot to provide squat assistance, and EMG results show how different strategies affect knee loading and ankle stability.",
      links: {
        pdf: "/Squatting_Multisegment_Assistance_Paper_IEEE.pdf",
        video: "/squatting.mp4"
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
                    <a href={pub.links.pdf} className="pub-link" target="_blank" rel="noopener noreferrer">
                      📄 PDF
                    </a>
                  )}
                  {pub.links.video && (
                    <a href={pub.links.video} className="pub-link" target="_blank" rel="noopener noreferrer">
                      🎥 Video
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>


        </section>
      </div>
    </div>
  )
}

export default Publications

