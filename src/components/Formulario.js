import React, { Fragment, useState } from "react";
import shortid from "shortid";

const Formulario = ({ crearCita }) => {
  const [cita, actualizarCita] = useState({
    nombre: "",
    apellido: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });

  const [error, actualizarError] = useState(false);

  const actualizarState = (e) => {
    actualizarCita({
      ...cita,
      [e.target.name]: e.target.value,
    });
  };

  const { nombre, apellido, fecha, hora, sintomas } = cita;

  const submitCita = (e) => {
    e.preventDefault();

    if (
      nombre.trim() === "" ||
      apellido.trim() === "" ||
      fecha.trim() === "" ||
      hora.trim() === "" ||
      sintomas.trim() === ""
    ) {
      actualizarError(true);
      return;
    }
    actualizarError(false);

    cita.id = shortid.generate();
    crearCita(cita);

    actualizarCita({
      nombre: "",
      apellido: "",
      fecha: "",
      hora: "",
      sintomas: "",
    });
  };

  return (
    <Fragment>
      <h2>Crear Cita</h2>
      <form onSubmit={submitCita}>
        <label>Nombre </label>
        <input
          type="text"
          name="nombre"
          className="u-full-width"
          placeholder="Nombre del paciente"
          onChange={actualizarState}
          value={nombre}
        />
        <label>Apellido </label>
        <input
          type="text"
          name="apellido"
          className="u-full-width"
          placeholder="Apellido del paciente"
          onChange={actualizarState}
          value={apellido}
        />

        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={actualizarState}
          value={fecha}
        />

        <label>Hora</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={actualizarState}
          value={hora}
        />

        <label>Sintomas</label>
        <textarea
          name="sintomas"
          className="u-full-width"
          onChange={actualizarState}
          value={sintomas}
        ></textarea>
        <button type="submit" className="button-primary u-full-width">
          {" "}
          Agregar
        </button>

        {error ? (
          <span>
            <p className="alerta-error">Complete todos los campos</p>
          </span>
        ) : null}
      </form>
    </Fragment>
  );
};

export default Formulario;
