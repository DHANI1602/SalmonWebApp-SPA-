import React from 'react';
import './WPA.Component.scss';
const AppT = () => {
  return (
    <div className="main-project">
      <div className="project-content">
        <h1 className="secction">Diseño e Ilustración</h1>
        <h1 className="project-title">Peaky Blinders</h1>
        <video
          src="https://firebasestorage.googleapis.com/v0/b/tesis2-c4a1a.appspot.com/o/programacion%2FAPP%2FAPP%20SALMON.mp4?alt=media&token=2e7d00db-1846-4e67-a238-f9413b7207f7"
          className="app-video"
          controls
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
export default AppT;
