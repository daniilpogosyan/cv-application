import React from 'react';
import Personal from './components/Personal';
import Education from './components/Education';
import WorkExperience from './components/WorkExperience';
import uniqid from 'uniqid';

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
          id: uniqid(),
          data: {
            place: "home",
            study: "math",
            period: "2000"
          }
        },
      ],
      workExperience: [
        {
          id: uniqid(),
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
    this.handleEducationItemAdd = this.handleEducationItemAdd.bind(this);

    this.handleWorkExperienceItemChange = this.handleWorkExperienceItemChange.bind(this);
    this.handleWorkExperienceItemAdd = this.handleWorkExperienceItemAdd.bind(this);
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

  handleEducationItemAdd(event) {
    const newItem = {
      id: uniqid(),
      data: {
        place: "",
        study: "",
        period: ""
      }
    }
    this.setState({
      education: this.state.education.concat(newItem)
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

  handleWorkExperienceItemAdd(event) {
    const newItem = {
      id: uniqid(),
      data: {
        company: "",
        position: "",
        period: ""
      }
    }
    this.setState({
      workExperience: this.state.workExperience.concat(newItem)
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
          onItemAdd={this.handleEducationItemAdd}
        />
        <WorkExperience
          workExperience={this.state.workExperience}
          onItemUpdate={this.handleWorkExperienceItemChange}
          onItemAdd={this.handleWorkExperienceItemAdd}
        />
      </div>
    );
  }

}

export default App;
