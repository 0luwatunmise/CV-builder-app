import "./MainPage.css";
import { GeneralInformation } from "./GeneralInformation";
import { OtherInfo } from "./OtherInfo";
import { Education } from "./Education";
import { Experience } from "./Experience";

export function MainPage({
  generalInfo,
  education,
  removeEducation,
  experiences,
  deleteExperience,
  deleteResponsibility,
}) {
  return (
    <div className="main-page">
      <GeneralInformation generalInfo={generalInfo} />
      <OtherInfo generalInfo={generalInfo} />
      <Education education={education} removeEducation={removeEducation} />
      <Experience
        experiences={experiences}
        deleteExperience={deleteExperience}
        deleteResponsibility={deleteResponsibility}
      />
    </div>
  );
}
