import "./MainPage.css";
import { GeneralInformation } from "./GeneralInformation";
import { OtherInfo } from "./OtherInfo";
import { Education } from "./Education";
import { Experience } from "./Experience";

export function MainPage({ generalInfo, education, removeEducation }) {
  return (
    <div className="main-page">
      <GeneralInformation generalInfo={generalInfo} />
      <OtherInfo generalInfo={generalInfo} />
      <Education education={education} removeEducation={removeEducation} />
      <Experience />
    </div>
  );
}
