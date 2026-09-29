import "./Experience.css";

export function Experience() {
  return (
    <div className="experience-container">
      <p className="experience-header">EXPERIENCE</p>

      <div className="experience-info-container">
        <div>
          <p className="role">JUNIOR DEV</p>
          <p className="company-name">Generic Hub</p>

          <div className="responsibilities">
            <ul>
              <li>Designed working systems</li>
              <li>Maintained existing systems</li>
              <li>Buit cool stuff</li>
            </ul>
          </div>
        </div>

        <div className="experience-year">Jun 2002 - Aug 2005</div>
      </div>
    </div>
  );
}
