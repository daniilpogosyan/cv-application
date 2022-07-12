import React from "react";
import WorkExperienceItem from "./WorkExperienceItem";

export default class WorkExperience extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <section>
        <h2>Work Experience:</h2>
        <ul>
          {
            this.props.workExperience.map((workExperienceItem) => (
              <li key={workExperienceItem.id}>
                <WorkExperienceItem
                  workExperienceItem={workExperienceItem.data}
                  onUpdate={(event) => this.props.onItemUpdate(event, workExperienceItem.id)}
                  onDelete={(event) => this.props.onItemDelete(event, workExperienceItem.id)}
                />
              </li>
            ))
          }
        </ul>
        <button onClick={this.props.onItemAdd}>Add +</button>
      </section>
    )
  }
}
