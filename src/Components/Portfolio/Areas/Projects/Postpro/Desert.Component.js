import React from 'react';
import './Postpro.Component.scss';
const Desert = () => {
  return (
    <div className="main-project">
      <div className="project-content">
        <h1 className="secction">Postproduccion y Motion Graphics</h1>
        <h1 className="project-title">Demonio Fashion</h1>
        <video
          src="https://firebasestorage.googleapis.com/v0/b/tesis-3919e.appspot.com/o/motion%20y%20postproduccion%2Fdesierto%2FTrabajo5.mp4?alt=media&token=150d6e25-0e22-42d4-b544-bc950a728321"
          controls
          className="demonFashion-process"
        ></video>
        <h1 className="content">
          Animación de un personaje hecho en 3DMax, texturizado en Substance
          Painter, y por último se integró en marmoset para sacar los renders
          junto a un mini escenario modelado en 3Dmax
        </h1>
        <h1 className="Process">Presentacion</h1>
        <video
          src="https://firebasestorage.googleapis.com/v0/b/tesis-3919e.appspot.com/o/motion%20y%20postproduccion%2Fdesierto%2FEfecto%20Vs%20real%202.mp4?alt=media&token=3704aeb6-fdcd-4df9-813a-8fe012f6218f"
          controls
          className="demonFashion-process"
        ></video>
      </div>
    </div>
  );
};
export default Desert;
