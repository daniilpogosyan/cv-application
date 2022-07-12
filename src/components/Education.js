import React from "react";
import EducationItem from "./EducationItem";

export default class Education extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <section>
        <h2>Education:</h2>
        <ul>
          {
            this.props.education.map((educationItem) => (
              <li key={educationItem.id}>
                <EducationItem
                  educationItem={educationItem.data}
                  onUpdate={(event) => this.props.onItemUpdate(event, educationItem.id)}
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
