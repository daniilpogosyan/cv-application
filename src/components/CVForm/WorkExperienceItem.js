import React from "react";
import Field from './Field'

export default class WorkExperienceItem extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <section>
        <Field
          fieldName="Company:"
          varName="company"
          value={this.props.workExperienceItem.company}
          onChange={this.props.onUpdate}
        />
        <Field
          fieldName="Position title:"
          varName="position"
          value={this.props.workExperienceItem.position}
          onChange={this.props.onUpdate}
        />
        <Field
          fieldName="Period of work:"
          varName="period"
          value={this.props.workExperienceItem.period}
          onChange={this.props.onUpdate}
        />
        <button onClick={this.props.onDelete}>Delete</button>
      </section>
    )
  }
}