import React from "react";
import EducationItem from "./EducationItem";

export default function Education(props) {
  return (
    <section>
      <h2>Education:</h2>
      <ul>
        {
          props.education.map((educationItem) => (
            <li key={educationItem.id}>
              <EducationItem
                educationItem={educationItem.data}
                onUpdate={(event) => props.onItemUpdate(event, educationItem.id)}
                onDelete={(event) => props.onItemDelete(event, educationItem.id)}
              />
            </li>
          ))
        }
      </ul>
      <button onClick={props.onItemAdd}>Add +</button>
    </section>
  )  
}