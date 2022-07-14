import React from "react";

export default function EducationItem(props) {
  return (
    <article>
      <p>{props.educationItem.place}</p>
      <p>{props.educationItem.study}</p>
      <p>{props.educationItem.period}</p>
    </article>
  )
}