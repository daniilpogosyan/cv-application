import React from "react";
import Field from "./Field";

export default class EducationItem extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <section>
        <Field
          fieldName="Place of education:"
          varName="place"
          value={this.props.educationItem.place}
          onChange={this.props.onUpdate}
        />
        <Field
          fieldName="Title of study:"
          varName="study"
          value={this.props.educationItem.study}
          onChange={this.props.onUpdate}
        />
        <Field
          fieldName="Period of education:"
          varName="period"
          value={this.props.educationItem.period}
          onChange={this.props.onUpdate}
        />
        <button onClick={this.props.onDelete}>Delete</button>
      </section>
    )
  }
}