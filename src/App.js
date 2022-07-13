import React from 'react';
import CVForm from './components/CVForm/CVForm'
import Preview from './components/Preview/Preview';
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
    this.handleEducationItemDelete = this.handleEducationItemDelete.bind(this);

    this.handleWorkExperienceItemChange = this.handleWorkExperienceItemChange.bind(this);
    this.handleWorkExperienceItemAdd = this.handleWorkExperienceItemAdd.bind(this);
    this.handleWorkExperienceItemDelete = this.handleWorkExperienceItemDelete.bind(this);
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
  
  handleEducationItemDelete(event, id) {
    this.setState({
      education: this.state.education.filter((item) => item.id !== id)
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
  
  handleWorkExperienceItemDelete(event, id) {
    this.setState({
      workExperience: this.state.workExperience.filter((item) => item.id !== id)
    })
  }

  render() {
    return (
      <div className="App">
        <CVForm
          personal={this.state.personal}
          onPersonalUpdate={this.handlePersonalChange}

          education={this.state.education}
          onEducationItemUpdate={this.handleEducationItemChange}
          onEducationItemAdd={this.handleEducationItemAdd}
          onEducationItemDelete={this.handleEducationItemDelete}

          workExperience={this.state.workExperience}
          onWorkExperienceItemUpdate={this.handleWorkExperienceItemChange}
          onWorkExperienceItemAdd={this.handleWorkExperienceItemAdd}
          onWorkExperienceItemDelete={this.handleWorkExperienceItemDelete}
        />
        <Preview 
          personal={this.state.personal}
          education={this.state.education}
          workExperience={this.state.workExperience}
        />
      </div>
    );
  }

}

export default App;
