import { portfolioData } from "../data/portfolioData";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="about-content">
          <div className="about-text">
            <div className="about-intro">
              <p>{portfolioData.about}</p>
            </div>

            <div className="about-details">
              <div className="detail-item">
                <h4>📍 Location</h4>
                <p>{portfolioData.location}</p>
              </div>

              <div className="detail-item">
                <h4>🎓 Education</h4>
                <p>{portfolioData.education[0].degree}</p>
                <p className="detail-meta">
                  {portfolioData.education[0].institution}
                </p>
              </div>

              <div className="detail-item">
                <h4>💼 Status</h4>
                <p>Seeking LIA Internship</p>
                <p className="detail-meta">Oct 2027 & Feb 2028</p>
              </div>

              <div className="detail-item">
                <h4>🚀 Interests</h4>
                <p>Electrical Design, Automation, System Architecture</p>
              </div>
            </div>
          </div>

          <div className="about-skills-preview">
            <h3>Tech I Enjoy Working With</h3>
            <div className="skills-tags">
              {Object.values(portfolioData.skills)
                .flat()
                .slice(0, 8)
                .map((skill, index) => (
                  <span key={index} className="skill-tag">
                    {skill}
                  </span>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
