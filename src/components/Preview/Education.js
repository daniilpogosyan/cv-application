import React from "react";
import EducationItem from "./EducationItem";

export default class Education extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section>
        <ul>
          {this.props.education.map((educationItem) => (
            <li key={educationItem.id}>
              <EducationItem
                educationItem={educationItem.data}
              />
            </li>
          ))}
        </ul>
      </section>
    )
  }
}