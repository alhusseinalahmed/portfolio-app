import { portfolioData } from "../data/portfolioData";

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <p className="section-subtitle">
          The tools and technologies I use to bring ideas to life
        </p>

{/* Skills Overview */}
        <div className="skills-overview">
          <div className="overview-card">
            <div className="overview-icon">⚡</div>
            <div className="overview-content">
              <h3>Electrical Design & Automation</h3>
              <p>
                Studying CAD (AutoCAD/MagiCAD), PLC programming, and electric power systems for modern automation.
              </p>
            </div>
          </div>

          <div className="overview-card">
            <div className="overview-icon">💻</div>
            <div className="overview-content">
              <h3>Software Architecture</h3>
              <p>
                Strong foundation in Object-Oriented Design, C#, Java, and network programming.
              </p>
            </div>
          </div>

          <div className="overview-card">
            <div className="overview-icon">🚀</div>
            <div className="overview-content">
              <h3>Bridging IT and OT</h3>
              <p>
                Passionate about merging software logic with industrial automation and smart grid technologies.
              </p>
            </div>
          </div>
        </div>
        {/* Technologies Cloud */}
        <div className="tech-cloud">
          <h3>Technologies I Work With</h3>
          <div className="cloud-tags">
            {Object.values(portfolioData.skills)
              .flat()
              .map((skill, index) => (
                <span
                  key={index}
                  className="cloud-tag"
                  style={{
                    fontSize: `${Math.random() * 0.8 + 0.9}rem`,
                    opacity: Math.random() * 0.4 + 0.6,
                  }}
                >
                  {skill}
                </span>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
