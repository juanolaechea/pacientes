import React from 'react';
import PropTypes from "prop-types";
const Cita = ({ cita, eliminarCita }) =>

(

    <div className="cita" >
    
        <p> Paciente: <span> {cita.nombre} </span> </p>
        <p> Apellido: <span> {cita.apellido} </span> </p>
        <p> Fecha: <span> {cita.fecha} </span> </p>
        <p> Hora: <span> {cita.hora} </span> </p>
        <p> Sintomas: <span> {cita.sintomas} </span> </p>


        <button className="button eliminar"
            onClick={ () =>eliminarCita (cita.id)}
        >
            Eliminar &times;</button>

        
    </div>

);
 Cita.propTypes = {
     eliminarCita: PropTypes.func.isRequired,
     cita:PropTypes.object.isRequired
 };

export default Cita;