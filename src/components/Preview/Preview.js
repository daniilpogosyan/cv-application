import React from "react";
import Education from "./Education";
import Personal from "./Personal";
import WorkExperience from "./WorkExperience";
import './styles/Preview.css'

export default function Preview(props) {
  return (
    <article className="Preview">
      <Personal personal={props.personal} />
      <Education education={props.education} />
      <WorkExperience workExperience={props.workExperience} />
    </article>
  )
}