import { Education } from "../Education";
import { GeneralInformation } from "../GeneralInformation";
import { Experience } from "../Experience";
import "./Sidebar.css";

export function Sidebar({generalInfo, setGeneralInfo}) {
  return (
    <div className="info-bar">
      <GeneralInformation generalInfo={generalInfo} setGeneralInfo={setGeneralInfo}/>
      <Education />
      <Experience />
    </div>
  );
}
