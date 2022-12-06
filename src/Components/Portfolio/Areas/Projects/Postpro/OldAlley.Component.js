import React from 'react';
import './Postpro.Component.scss';
const OldAlley = () => {
  return (
    <div className="main-project">
      <div className="project-content">
        <h1 className="secction">Postproduccion y Motion Graphics</h1>
        <h1 className="project-title">Demonio Fashion</h1>
        <video
          src="https://firebasestorage.googleapis.com/v0/b/tesis-3919e.appspot.com/o/motion%20y%20postproduccion%2FCallej%C3%B3n%20encantado%2Fvideo%20final1.mp4?alt=media&token=e2808f6b-6689-4cc3-8208-927c8611350b"
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
          src="https://firebasestorage.googleapis.com/v0/b/tesis-3919e.appspot.com/o/motion%20y%20postproduccion%2FCallej%C3%B3n%20encantado%2Fpftrack.mp4?alt=media&token=ec688983-bbb9-4dab-bdce-7de4afc7b9c1"
          controls
          className="demonFashion-process"
        ></video>
      </div>
    </div>
  );
};
export default OldAlley;
