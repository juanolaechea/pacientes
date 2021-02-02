import React from 'react';

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
 
export default Cita;