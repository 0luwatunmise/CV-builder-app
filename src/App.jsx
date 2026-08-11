import { Sidebar } from "./components/Sidebar"
import { Portfolio } from "./components/Portfolio"
import "./App.css"
 
 
 
 function App() {
    return(
    <div className="page-container">
      <Sidebar />
      <Portfolio />
    </div>
  )
}


export default App