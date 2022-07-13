import React from "react";
import Personal from './Personal';
import Education from './Education';
import WorkExperience from './WorkExperience';

export default class CVForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main>
        <Personal
          personal={this.props.personal}
          onUpdate={this.props.onPersonalUpdate}
        />
        <Education
          education={this.props.education}
          onItemUpdate={this.props.onEducationItemUpdate}
          onItemAdd={this.props.onEducationItemAdd}
          onItemDelete={this.props.onEducationItemDelete}
        />
        <WorkExperience
          workExperience={this.props.workExperience}
          onItemUpdate={this.props.onWorkExperienceItemUpdate}
          onItemAdd={this.props.onWorkExperienceItemAdd}
          onItemDelete={this.props.onWorkExperienceItemDelete}
        />
      </main>
    )
  }
}