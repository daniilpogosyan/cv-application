import React from 'react'

class Field extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <p>
        <label>{this.props.fieldName}</label>
        <input value={this.props.value} name={this.props.varName} onChange={this.props.onChange}/>
      </p>
    )
  }
}

export default Field