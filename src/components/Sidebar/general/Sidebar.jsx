import { Education } from "../Education";
import { GeneralInformation } from "../GeneralInformation";
import { Experience } from "../Experience";
import "./Sidebar.css";

export function Sidebar({
  generalInfo,
  setGeneralInfo,
  education,
  setEducation,
  addExperience,
  handleReset,
  handleDownload
}) {
  return (
    <div className="info-bar">
      <GeneralInformation
        generalInfo={generalInfo}
        setGeneralInfo={setGeneralInfo}
      />
      <Education education={education} setEducation={setEducation} />
      <Experience addExperience={addExperience} />

      <div className="info-bar-footer">
        <button type="button" className="download-btn" onClick={handleDownload}>
          Download PDF
        </button>

        <button type="button" className="reset-btn" onClick={handleReset}>
          Reset all data
        </button>
      </div>
    </div>
  );
}
