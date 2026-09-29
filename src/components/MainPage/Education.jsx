import "./Education.css";

export function Education({ education, removeEducation }) {
  return (
    <div className="education-container">
      <p className="education-header">EDUCATION</p>

      {education.length === 0 ? (
        <div className="education-info-container">
          <div>
            <p className="degree">BACHELOR OF ENGINEERING (B.ENG)</p>
            <p className="institution">Generic College </p>
          </div>

          <div className="education-year">Jun 2002 - Aug 2005</div>
        </div>
      ) : (
        education.map((e) => (
          <div className="education-info-container" key={e.id}>
            <div>
              <p className="degree">{e.qualification}</p>
              <p className="institution">{e.school} </p>
            </div>

            <div className="education-year">
              {e.from} - {e.to}
            </div>

            <button
              className="delete-entry"
              onClick={() => removeEducation(e.id)}
              aria-label="Remove education entry"
            >
              ✕
            </button>
          </div>
        ))
      )}
    </div>
  );
}
