import React from "react";

export default class Personal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section>
        <h2>{this.props.personal.name}</h2>
        <div>
          <p>Phone: <span>{this.props.personal.phoneNumber}</span></p>
          <p>Email: <span>{this.props.personal.email}</span></p>
        </div>
      </section>
    )
  }
}