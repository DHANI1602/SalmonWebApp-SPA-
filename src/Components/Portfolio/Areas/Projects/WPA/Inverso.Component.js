import React from 'react';
import './WPA.Component.scss';
const Inverso = () => {
  return (
    <div className="main-project">
      <div className="project-content">
        <h1 className="secction">Diseño e Ilustración</h1>
        <h1 className="project-title">Peaky Blinders</h1>
        <video
          src="https://firebasestorage.googleapis.com/v0/b/tesis2-c4a1a.appspot.com/o/programacion%2FJUEGOS%2Fgameplay-invero_1.mp4?alt=media&token=fccb5a1d-0e49-4705-bb09-06696d1b3199"
          className="img-slayer"
          controls
        />
        <h1 className="content">
          Pieza realizada para un fan de esta increíble serie(Peaky blinders).
          Se tomó un concepto general y se usaron sus personajes favoritos. Este
          trabajo se hizo en Photoshop , logrando la técnica de doble exposición
          y dándole un significado global a la serie.
        </h1>
        <button href="" className="wpa-button">
          Descargar
        </button>
      </div>
    </div>
  );
};
export default Inverso;
