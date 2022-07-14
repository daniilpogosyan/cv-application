import React, { useState } from 'react';
import CVForm from './components/CVForm/CVForm'
import Preview from './components/Preview/Preview';
import uniqid from 'uniqid';
import './App.css'

function App(props) {
  const [personal, setPersonal] = useState({
    name: "",
    email: "",
    phoneNumber: ""
  });

  const [education, setEducation] = useState([
    {
      id: uniqid(),
      data: {
        place: "home",
        study: "math",
        period: "2000"
      }
    },
  ]);

  const [workExperience, setWorkExperience] = useState([
    {
      id: uniqid(),
      data: {
        company: "macrohard",
        position: "janitor",
        period: "2022"
      }
    },
  ]);

  function handlePersonalChange(event) {
    const newPersonal = JSON.parse(
      JSON.stringify(personal)
    );
    newPersonal[event.target.name] = event.target.value;
    setPersonal(newPersonal)
  }

  function handleEducationItemChange(event, id) {
    const newEducation = JSON.parse(
      JSON.stringify(education)
    );

    const targetIndex = education
      .findIndex((educationItem) => educationItem.id === id);
      
    newEducation[targetIndex].data[event.target.name] = event.target.value;

    setEducation(newEducation);
  }

  function handleEducationItemAdd(event) {
    const newItem = {
      id: uniqid(),
      data: {
        place: "",
        study: "",
        period: ""
      }
    };

    setEducation(education.concat(newItem));
  }

  function handleEducationItemDelete(event, id) {
    setEducation(education.filter((item) => item.id !== id));
  }

  function handleWorkExperienceItemChange(event, id) {
    const newWorkExperience = JSON.parse(
      JSON.stringify(workExperience)
    );

    const targetIndex = workExperience
      .findIndex((workExperienceItem) => workExperienceItem.id === id);
      
    newWorkExperience[targetIndex].data[event.target.name] = event.target.value;
    
    setWorkExperience(newWorkExperience);
  }

  function handleWorkExperienceItemAdd(event) {
    const newItem = {
      id: uniqid(),
      data: {
        company: "",
        position: "",
        period: ""
      }
    }
    
    setWorkExperience(workExperience.concat(newItem));
  }
  
  function handleWorkExperienceItemDelete(event, id) {
    setWorkExperience(workExperience.filter((item) => item.id !== id));
  }

  return (
    <div className="App">
      <CVForm
        personal={personal}
        onPersonalUpdate={handlePersonalChange}

        education={education}
        onEducationItemUpdate={handleEducationItemChange}
        onEducationItemAdd={handleEducationItemAdd}
        onEducationItemDelete={handleEducationItemDelete}

        workExperience={workExperience}
        onWorkExperienceItemUpdate={handleWorkExperienceItemChange}
        onWorkExperienceItemAdd={handleWorkExperienceItemAdd}
        onWorkExperienceItemDelete={handleWorkExperienceItemDelete}
      />
      <Preview 
        personal={personal}
        education={education}
        workExperience={workExperience}
      />
    </div>
  )  
}

export default App;
