import "./Experience.css";

export function Experience({
  experiences,
  deleteExperience,
  deleteResponsibility,
}) {
  return (
    <div className="experience-container">
      <p className="experience-header">EXPERIENCE</p>

      {experiences.length === 0 ? (
       
        <div className="experience-info-container">
          <div>
            <p className="role">Junior Dev</p>
            <p className="company-name">Generic Hub</p>

            <div className="responsibilities">
              <ul>
                <li>Designed working systems</li>
                <li>Maintained existing systems</li>
                <li>Built cool stuff</li>
              </ul>
            </div>
          </div>

          <div className="experience-year">Jun 2002 - Aug 2005</div>
        </div>
      ) : (
        experiences.map((exp) => (
          <div className="experience-info-container" key={exp.id}>
            <button
              type="button"
              className="delete-btn delete-experience"
              aria-label="Delete experience"
              onClick={() => deleteExperience(exp.id)}
            >
              ✕
            </button>

            <div>
              <p className="role">{exp.position}</p>
              <p className="company-name">{exp.company}</p>

              <div className="responsibilities">
                <ul>
                  {exp.responsibilities.map((r) => (
                    <li key={r.id}>
                      {r.text}
                      <button
                        type="button"
                        className="delete-btn"
                        aria-label="Delete responsibility"
                        onClick={() => deleteResponsibility(exp.id, r.id)}
                      >
                        ✕
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="experience-year">
              {exp.from} - {exp.to}
            </div>
          </div>
        ))
      )}
    </div>
  );
}
