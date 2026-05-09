import { useState } from "react"
import GeneralInfo from "./components/GeneralInfo"
import Education from "./components/Education"
import Experience from "./components/Experience"
import './styles/App.css';

function App() {
  const [experiences, setExperiences] = useState([
    { id: Date.now(), companyName: '', positionTitle: ''}
  ]);
  
  const addExperience = () => {
    setExperiences([
      ...experiences,
      { id: Date.now(), companyName: '', positionTitle: ''}
    ])
  };

  const deleteExperience = (idToRemove) => {
    setExperiences(prev => prev.filter(exp => exp.id !== idToRemove))
  }

  return (
    <div className="cv-app">
      <h1>CV Application</h1>
      <GeneralInfo/>
      <Education/>
      {experiences.map(exp => (
        <Experience 
          key={exp.id}
          onDelete={() => deleteExperience(exp.id)}
        />
      ))}
      <button className="add-experience" onClick={addExperience}>Add Additional Experience</button>
    </div>
  )
}

export default App
