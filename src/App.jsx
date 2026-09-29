import { Sidebar } from "./components/Sidebar/general/Sidebar";
import { MainPage } from "./components/MainPage/MainPage";
import { useState } from "react";
import "./App.css";



function App() {
  const [generalInfo, setGeneralInfo] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    role: "",
    description: "",
    email: "",
    location: "",
    phone: "",
    photo: null,
  });

  const [education, setEducation] = useState([]);

  const removeEducation = (id) =>
    setEducation((prev) => prev.filter((entry) => entry.id !== id));
    
  return (
    <div className="page-container">
      <Sidebar
        generalInfo={generalInfo}
        setGeneralInfo={setGeneralInfo}
        education={education}
        setEducation={setEducation}
      

      />
      <MainPage
        generalInfo={generalInfo}
        education={education}
        removeEducation={removeEducation}


      />
    </div>
  );
}

export default App;
