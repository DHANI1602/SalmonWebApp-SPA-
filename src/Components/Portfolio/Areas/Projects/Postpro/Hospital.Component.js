import React from 'react';
import './Postpro.Component.scss';
const Hospital = () => {
  return (
    <div className="main-project">
      <div className="project-content">
        <h1 className="secction">Postproduccion y Motion Graphics</h1>
        <h1 className="project-title">Demonio Fashion</h1>
        <img
          className="hospital-img"
          src="https://firebasestorage.googleapis.com/v0/b/tesis-3919e.appspot.com/o/motion%20y%20postproduccion%2Fhospital%2Fportada3.png?alt=media&token=57939b4f-1da7-4e52-9253-fee28c6d58f6"
        />
        <h1 className="content">
          Animación de un personaje hecho en 3DMax, texturizado en Substance
          Painter, y por último se integró en marmoset para sacar los renders
          junto a un mini escenario modelado en 3Dmax
        </h1>
        <h1 className="Process">Presentacion</h1>
        <video
          src="https://firebasestorage.googleapis.com/v0/b/tesis-3919e.appspot.com/o/motion%20y%20postproduccion%2Fhospital%2Fvideo%20hospital.mp4?alt=media&token=266546a9-4bc3-4146-bf72-064004182a18"
          controls
          className="demonFashion-process"
        ></video>
      </div>
    </div>
  );
};
export default Hospital;
