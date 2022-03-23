import Persona from "../Persona/Persona";
import React from "react";

const Trabajo = ({ trabajo, persona }) => {
  return (
    <div className="container-trabajo">
      <h3>{trabajo}</h3>
      <div className="container-personas">
        {persona &&
          persona.map((personita) => (
            <Persona
              nombre={personita.nombre}
              iglink={personita.iglink}
              weblink={personita.weblink}
            />
          ))}
      </div>
    </div>
  );
};

export default Trabajo;
