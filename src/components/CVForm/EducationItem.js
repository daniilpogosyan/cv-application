import React from "react";
import Field from "./Field";

export default function EducationItem(props)  {
  return (
    <section>
      <Field
        fieldName="Place of education:"
        varName="place"
        value={props.educationItem.place}
        onChange={props.onUpdate}
      />
      <Field
        fieldName="Title of study:"
        varName="study"
        value={props.educationItem.study}
        onChange={props.onUpdate}
      />
      <Field
        fieldName="Period of education:"
        varName="period"
        value={props.educationItem.period}
        onChange={props.onUpdate}
      />
      <button onClick={props.onDelete}>Delete</button>
    </section>
  )
}