import React from "react";
const Student = (props) => {
  return (
    <div>
      <h2> id:{props.sid}</h2>
      <h2>Name:{props.sname}</h2>
      <h2>Aim:{props.saim}</h2>
    </div>
  );
};
export default Student;
