import React, { Component } from "react";

class Person extends Component {
  render() {
    const { name, surname, age } = this.props;
    return (
      <div>
        <span>Nombre: {name} </span> |<span> Apellido: {surname} </span> |
        <span> Edad: {age}</span>
      </div>
    );
  }
}

export default Person;
