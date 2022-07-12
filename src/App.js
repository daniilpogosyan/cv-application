import React from 'react';
import Personal from './components/Personal';
import Education from './components/Education';
import WorkExperience from './components/WorkExperience';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      personal: {
        name: "",
        email: "",
        phoneNumber: ""
      },
      education: [
        {
          id: "firstItem",
          data: {
            place: "home",
            study: "math",
            period: "2000"
          }
        },
      ],
      workExperience: [
        {
          id: "secondItem",
          data: {
            company: "macrohard",
            position: "janitor",
            period: "2022"
          }
        },
      ]
    }

    this.handlePersonalChange = this.handlePersonalChange.bind(this);
    this.handleEducationItemChange = this.handleEducationItemChange.bind(this);
    this.handleWorkExperienceItemChange = this.handleWorkExperienceItemChange.bind(this);
  }

  handlePersonalChange(event) {
    this.setState((state) => {
      const personal = JSON.parse(
        JSON.stringify(state.personal)
      );
      personal[event.target.name] = event.target.value;
      return {personal}
    })
  }
  
  handleEducationItemChange(event, id) {
    this.setState((state) => {
      const education = JSON.parse(
        JSON.stringify(state.education)
      );

      const targetIndex = state.education
        .findIndex((educationItem) => educationItem.id === id);
        
      education[targetIndex].data[event.target.name] = event.target.value;
      
      return {education}
    })
  }

  handleWorkExperienceItemChange(event, id) {
    this.setState((state) => {
      const workExperience = JSON.parse(
        JSON.stringify(state.workExperience)
      );

      const targetIndex = state.workExperience
        .findIndex((workExperienceItem) => workExperienceItem.id === id);
        
      workExperience[targetIndex].data[event.target.name] = event.target.value;
      
      return {workExperience}
    })
  }

  render() {
    return (
      <div className="App">
        <Personal
          personal={this.state.personal}
          onUpdate={this.handlePersonalChange}
        />
        <Education
          education={this.state.education}
          onItemUpdate={this.handleEducationItemChange}
        />
        <WorkExperience
          workExperience={this.state.workExperience}
          onItemUpdate={this.handleWorkExperienceItemChange}
        />
      </div>
    );
  }

}

export default App;
