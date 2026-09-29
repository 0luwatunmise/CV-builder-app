import { Sidebar } from "./components/Sidebar/general/Sidebar";
import { MainPage } from "./components/MainPage/MainPage";
import { useState } from "react";
import { useEffect } from "react";
import html2pdf from "html2pdf.js";
import { useRef } from "react";
import "./App.css";

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const stored = localStorage.getItem(key);
      return stored !== null ? JSON.parse(stored) : initialValue;
    } catch {
      return initialValue; // corrupted or blocked storage: fall back
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // storage full or disabled: fail silently rather than crash the app
    }
  }, [key, value]);

  return [value, setValue];
}

function App() {
  const [generalInfo, setGeneralInfo] = useLocalStorage("cv-general", {
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

  const [education, setEducation] = useLocalStorage("cv-education", []);

  const removeEducation = (id) =>
    setEducation((prev) => prev.filter((entry) => entry.id !== id));

  const [experiences, setExperiences] = useLocalStorage("cv-experiences", []);

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

  const STORAGE_KEYS = ["cv-general", "cv-education", "cv-experiences"];

  function handleReset() {
    STORAGE_KEYS.forEach((key) => localStorage.removeItem(key));
    window.location.reload();
  }

  const cvRef = useRef(null);

  function handleDownload() {
    html2pdf()
      .set({
        margin: 10,
        filename: "my-cv.pdf",
        html2canvas: { scale: 2 },
        jsPDF: { format: "a4" },
        pagebreak: {
          mode: ["css", "legacy"],
          avoid: [
            ".experience-info-container",
            ".education-info-container",
            "li",
          ],
        },
      })
      .from(cvRef.current)
      .save();
  }

  return (
    <div className="page-container">
      <Sidebar
        generalInfo={generalInfo}
        setGeneralInfo={setGeneralInfo}
        education={education}
        setEducation={setEducation}
        addExperience={addExperience}
        handleReset={handleReset}
        handleDownload={handleDownload}
      />

      <div ref={cvRef}>
        <MainPage
          generalInfo={generalInfo}
          education={education}
          removeEducation={removeEducation}
          experiences={experiences}
          deleteExperience={deleteExperience}
          deleteResponsibility={deleteResponsibility}
        />
      </div>
    </div>
  );
}

export default App;
