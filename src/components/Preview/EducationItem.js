import React from "react";

export default class EducationItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <article>
        <p>{this.props.educationItem.place}</p>
        <p>{this.props.educationItem.study}</p>
        <p>{this.props.educationItem.period}</p>
      </article>
    )
  }
}