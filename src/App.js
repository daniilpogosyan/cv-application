import React from 'react';
import Personal from './components/Personal';
import Education from './components/Education';

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
      workExperience: []
    }

    this.handlePersonalChange = this.handlePersonalChange.bind(this);
    this.handleEducationItemChange = this.handleEducationItemChange.bind(this);
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
      </div>
    );
  }

}

export default App;
