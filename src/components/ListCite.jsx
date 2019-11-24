import React from "react";
import Cite from "./Cite";
import PropTypes from "prop-types";
const ListCite = ({ cite, deleteCite }) => {
  const message =
    Object.keys(cite).length === 0 ? "No hay citas" : "Administra las citas";

  return (
    <div>
      <h1>{message}</h1>
      {cite.map(cite => (
        <Cite key={cite.id} cite={cite} deleteCite={deleteCite} />
      ))}
    </div>
  );
};
ListCite.propTypes = {
  cite: PropTypes.array.isRequired,
  deleteCite: PropTypes.func.isRequired
};
export default ListCite;
