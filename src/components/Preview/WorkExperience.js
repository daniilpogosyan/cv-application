import React from "react";
import WorkExperienceItem from "./workExperienceItem";

export default class WorkExperience extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="preview__section">
        <h3 className="preview__section__heading">Work Experience</h3>
        <ul>
          {this.props.workExperience.map((workExperience) => (
            <li key={workExperience.id}>
              <WorkExperienceItem
                workExperienceItem={workExperience.data}
              />
            </li>
          ))}
        </ul>
      </section>
    )
  }
}