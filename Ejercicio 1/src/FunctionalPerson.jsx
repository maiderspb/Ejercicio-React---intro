import React from "react";

const Person = ({ name, surname, age }) => {
  return (
    <div>
      <span>Nombre: {name} </span> |<span> Apellido: {surname} </span> |
      <span> Edad: {age}</span>
    </div>
  );
};

export default Person;
