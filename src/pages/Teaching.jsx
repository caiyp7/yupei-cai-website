import '../styles/Teaching.css'

const Teaching = () => {
  const teachingExperiences = [
    {
      institution: "Columbia University",
      role: "Teaching Assistant",
      courses: [
        {
          name: "Intro to Control Theory & Advanced Machine Dynamics",
          period: "2024 Fall - 2025 Spring",
          responsibilities: [
            "Led weekly recitation sessions and office hours, explaining core concepts in control theory and dynamics",
            "Designed and graded homework, projects, and exams",
            "Helped students use MATLAB & Simulink for control and dynamics assignments"
          ]
        }
      ]
    }
  ]

  return (
    <div className="page teaching-page">
      <div className="container">
        <section className="section">
          <h1 className="section-title">Teaching</h1>
          
          <div className="teaching-list">
            {teachingExperiences.map((exp, index) => (
              <div key={index} className="teaching-item card">
                <div className="teaching-header">
                  <h2 className="teaching-role">{exp.role}</h2>
                  <p className="teaching-institution">{exp.institution}</p>
                </div>

                <div className="courses-list">
                  {exp.courses.map((course, courseIndex) => (
                    <div key={courseIndex} className="course-item">
                      <div className="course-header">
                        <h3 className="course-name">{course.name}</h3>
                        <span className="course-period">{course.period}</span>
                      </div>
                      
                      <ul className="course-responsibilities">
                        {course.responsibilities.map((responsibility, respIndex) => (
                          <li key={respIndex}>{responsibility}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          
        </section>
      </div>
    </div>
  )
}

export default Teaching

