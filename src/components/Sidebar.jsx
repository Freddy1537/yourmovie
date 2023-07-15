import React from 'react';

const Sidebar = ({ selectedMovie }) => {
  return (
    <div className="sidebar">
      {selectedMovie ? (
        <>
          <h2>{selectedMovie.title}</h2>
          <p>{selectedMovie.description}</p>
          {/* Agrega más detalles de la película según tus necesidades */}
        </>
      ) : (
        <p>Selecciona una película</p>
      )}
    </div>
  );
};

export default Sidebar;
