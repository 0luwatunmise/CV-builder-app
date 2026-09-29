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

  const [experiences, setExperiences] = useState([]);

  const addExperience = (newExp) => {
    setExperiences((prev) => [...prev, newExp]);
  };

  const deleteExperience = (id) => {
    setExperiences((prev) => prev.filter((e) => e.id !== id));
  };

  const deleteResponsibility = (expId, respId) => {
    setExperiences((prev) =>
      prev.map((e) =>
        e.id === expId
          ? {
              ...e,
              responsibilities: e.responsibilities.filter(
                (r) => r.id !== respId,
              ),
            }
          : e,
      ),
    );
  };

  return (
    <div className="page-container">
      <Sidebar
        generalInfo={generalInfo}
        setGeneralInfo={setGeneralInfo}
        education={education}
        setEducation={setEducation}
        addExperience={addExperience}
      />

      <MainPage
        generalInfo={generalInfo}
        education={education}
        removeEducation={removeEducation}
        experiences={experiences}
        deleteExperience={deleteExperience}
        deleteResponsibility={deleteResponsibility}
      />
    </div>
  );
}

export default App;
