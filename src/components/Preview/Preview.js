import React from "react";
import Personal from "./Personal";

export default class Preview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <article>
        <Personal personal={this.props.personal} />
      </article>
    )
  }
}