import React from 'react';
import './WPA.Component.scss';
const Museo = () => {
  return (
    <div className="main-project">
      <div className="project-content">
        <h1 className="secction">Diseño e Ilustración</h1>
        <h1 className="project-title">Peaky Blinders</h1>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/tesis2-c4a1a.appspot.com/o/programacion%2FWEB%2Fmuseum.jpg?alt=media&token=c481e4c1-7205-4609-8c33-2a85ad48035a"
          className="img-slayer"
        />
        <h1 className="content">
          Pieza realizada para un fan de esta increíble serie(Peaky blinders).
          Se tomó un concepto general y se usaron sus personajes favoritos. Este
          trabajo se hizo en Photoshop , logrando la técnica de doble exposición
          y dándole un significado global a la serie.
        </h1>
        <button href="" className="wpa-button-web">
          ver
        </button>
      </div>
    </div>
  );
};
export default Museo;
