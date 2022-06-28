import React from "react";
import { NavLink } from "react-router-dom";

const NoteFound = () => {
  return (
    <div className={"notFound"}>
      <div className="notFound-content">
        <h2>Erreur 404</h2>
        <NavLink to="/">
          <h3>
            <i className="fas fa-home"></i> Accueil
          </h3>
        </NavLink>
      </div>
    </div>
  );
};

export default NoteFound;
