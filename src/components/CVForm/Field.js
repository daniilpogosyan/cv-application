import React from 'react'

function Field(props) {
  return (
    <p>
      <label>{props.fieldName}</label>
      <input value={props.value} name={props.varName} onChange={props.onChange}/>
    </p>
  )
}

export default Field