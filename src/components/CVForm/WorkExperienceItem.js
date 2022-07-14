import React from "react";
import Field from './Field'

export default function WorkExperienceItem(props) {
  return (
    <section>
      <Field
        fieldName="Company:"
        varName="company"
        value={props.workExperienceItem.company}
        onChange={props.onUpdate}
      />
      <Field
        fieldName="Position title:"
        varName="position"
        value={props.workExperienceItem.position}
        onChange={props.onUpdate}
      />
      <Field
        fieldName="Period of work:"
        varName="period"
        value={props.workExperienceItem.period}
        onChange={props.onUpdate}
      />
      <button onClick={props.onDelete}>Delete</button>
    </section>
  )
}