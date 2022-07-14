import React from "react";
import WorkExperienceItem from "./WorkExperienceItem";

export default function WorkExperience(props) {
  return (
    <section>
      <h2>Work Experience:</h2>
      <ul>
        {
          props.workExperience.map((workExperienceItem) => (
            <li key={workExperienceItem.id}>
              <WorkExperienceItem
                workExperienceItem={workExperienceItem.data}
                onUpdate={(event) => props.onItemUpdate(event, workExperienceItem.id)}
                onDelete={(event) => props.onItemDelete(event, workExperienceItem.id)}
              />
            </li>
          ))
        }
      </ul>
      <button onClick={props.onItemAdd}>Add +</button>
    </section>
  )
}
