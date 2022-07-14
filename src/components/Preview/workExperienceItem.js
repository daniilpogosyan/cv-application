import React from "react";

export default function WorkExperienceItem(props) {
  return (
    <article>
      <p>{props.workExperienceItem.company}</p>
      <p>{props.workExperienceItem.position}</p>
      <p>{props.workExperienceItem.period}</p>
    </article>
  )
}