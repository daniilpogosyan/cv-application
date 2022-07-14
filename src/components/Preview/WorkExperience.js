import React from "react";
import WorkExperienceItem from "./workExperienceItem";

export default function WorkExperience(props) {
  return (
    <section className="preview__section">
      <h3 className="preview__section__heading">Work Experience</h3>
      <ul>
        {props.workExperience.map((workExperience) => (
          <li key={workExperience.id}>
            <WorkExperienceItem
              workExperienceItem={workExperience.data}
            />
          </li>
        ))}
      </ul>
    </section>
  )
}