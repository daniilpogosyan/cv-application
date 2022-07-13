import React from "react";
import EducationItem from "./EducationItem";
import './styles/previewSection.css'

export default class Education extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="preview__section">
        <h3 className="preview__section__heading">Education</h3>
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