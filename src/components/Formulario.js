import React, { Fragment } from "react";

const Formulario = () => {
  return (
    <Fragment>
      <h2>Crear Cita</h2>
      <form>
        <label>Nombre </label>
        <input
          type="text"
          name="nombre"
          className="u-full-width"
          placeholder="Nombre del paciente"
        />
        <label>Apellido </label>
        <input
          type="text"
          name="Apellido"
          className="u-full-width"
          placeholder="Apellido del paciente"
        />

        <label>Fecha</label>
              <input type="date" name="fecha" className="u-full-width" />
              
        <label>Hora</label>
              <input type="time" name="hora" className="u-full-width" />
              
        <label>Sintomas</label>
              <textarea
                  name="sintomas"
                  className="u-full-width"
              >
              </textarea> 
              <button
                  type="submit"
                  className="button-primary u-full-width"
              > Agregar</button>
      </form>
    </Fragment>
  );
};

export default Formulario;
