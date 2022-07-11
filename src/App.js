import React from 'react';
import Personal from './components/Personal';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      personal: {
        name: "",
        email: "",
        phoneNumber: ""
      },
      education: [],
      workExperience: []
    }

    this.handlePersonalChange = this.handlePersonalChange.bind(this);
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

  render() {
    return (
      <div className="App">
        <Personal
          personal={this.state.personal}
          onUpdate={this.handlePersonalChange}
        />
      </div>
    );
  }

}

export default App;
