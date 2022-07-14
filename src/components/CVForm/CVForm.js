import React from "react";
import Personal from './Personal';
import Education from './Education';
import WorkExperience from './WorkExperience';

export default function CVForm(props) {
  return (
    <main>
      <Personal
        personal={props.personal}
        onUpdate={props.onPersonalUpdate}
      />
      <Education
        education={props.education}
        onItemUpdate={props.onEducationItemUpdate}
        onItemAdd={props.onEducationItemAdd}
        onItemDelete={props.onEducationItemDelete}
      />
      <WorkExperience
        workExperience={props.workExperience}
        onItemUpdate={props.onWorkExperienceItemUpdate}
        onItemAdd={props.onWorkExperienceItemAdd}
        onItemDelete={props.onWorkExperienceItemDelete}
      />
    </main>
  )
}