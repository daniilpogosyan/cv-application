import React from 'react'
import Field from './Field';

export default function Personal(props) {
  const { name, email, phoneNumber } = props.personal;
  const handleUpdate = props.onUpdate;

  return (
    <section>  
      <h2>Personal Information:</h2>
      <Field 
        onChange={handleUpdate}
        fieldName="Name:"
        value={name}
        varName="name"
      /> 
      <Field 
        onChange={handleUpdate}
        fieldName="Email:"
        value={email}
        varName="email"
      /> 
      <Field 
        onChange={handleUpdate}
        fieldName="Phone Number:"
        value={phoneNumber}
        varName="phoneNumber"
      /> 
    </section>
  )
}

// export default class Personal extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     const { name, email, phoneNumber } = this.props.personal;
//     const handleUpdate = this.props.onUpdate;

//     return (
//       <section>  
//         <h2>Personal Information:</h2>
//         <Field 
//           onChange={handleUpdate}
//           fieldName="Name:"
//           value={name}
//           varName="name"
//         /> 
//         <Field 
//           onChange={handleUpdate}
//           fieldName="Email:"
//           value={email}
//           varName="email"
//         /> 
//         <Field 
//           onChange={handleUpdate}
//           fieldName="Phone Number:"
//           value={phoneNumber}
//           varName="phoneNumber"
//         /> 
//       </section>
//     )
//   }
// }

