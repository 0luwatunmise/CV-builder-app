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
  });

  return (
    <div className="page-container">
      <Sidebar generalInfo={generalInfo} setGeneralInfo={setGeneralInfo} />
      <MainPage generalInfo={generalInfo} />
    </div>
  );
}

export default App;
