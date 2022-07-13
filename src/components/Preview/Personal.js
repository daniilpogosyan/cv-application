import React from "react";
import './styles/Personal.css'

export default class Personal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="preview__personal">
        <h2 className="name">{this.props.personal.name}</h2>
        <div className="contacts">
          <p>Phone: <span>{this.props.personal.phoneNumber}</span></p>
          <p>Email: <span>{this.props.personal.email}</span></p>
        </div>
      </section>
    )
  }
}