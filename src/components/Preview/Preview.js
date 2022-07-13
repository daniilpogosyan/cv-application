import React from "react";
import Education from "./Education";
import Personal from "./Personal";
import WorkExperience from "./WorkExperience";

export default class Preview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <article>
        <Personal personal={this.props.personal} />
        <Education education={this.props.education} />
        <WorkExperience workExperience={this.props.workExperience} />
      </article>
    )
  }
}