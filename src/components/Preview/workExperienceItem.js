import React from "react";

export default class WorkExperienceItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <article>
        <p>{this.props.workExperienceItem.company}</p>
        <p>{this.props.workExperienceItem.position}</p>
        <p>{this.props.workExperienceItem.period}</p>
      </article>
    )
  }
}