import React from "react";
import WorkExperienceItem from "./workExperienceItem";

export default class WorkExperience extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section>
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