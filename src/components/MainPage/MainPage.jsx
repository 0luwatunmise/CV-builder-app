import "./MainPage.css"
import { GeneralInformation } from "./GeneralInformation"
import { Education } from "./Education"
import { Experience } from "./Experience"



export function MainPage ({generalInfo}){
  return (
      <div className="main-page">
        <GeneralInformation generalInfo={generalInfo} />
        <Education />
        <Experience />
      </div>
  )
}