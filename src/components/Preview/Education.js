import React from "react";
import EducationItem from "./EducationItem";
import './styles/previewSection.css'

export default function Education(props) {
  return (
    <section className="preview__section">
      <h3 className="preview__section__heading">Education</h3>
      <ul>
        {props.education.map((educationItem) => (
          <li key={educationItem.id}>
            <EducationItem
              educationItem={educationItem.data}
            />
          </li>
        ))}
      </ul>
    </section>
  )
}