import React from "react";
import './styles/Personal.css'

export default function Personal(props) {
  return (
    <section className="preview__personal">
      <h2 className="name">{props.personal.name}</h2>
      <div className="contacts">
        <p>Phone: <span>{props.personal.phoneNumber}</span></p>
        <p>Email: <span>{props.personal.email}</span></p>
      </div>
    </section>
  )
}