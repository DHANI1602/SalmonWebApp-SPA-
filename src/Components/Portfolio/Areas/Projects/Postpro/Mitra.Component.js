import React from 'react';
import './Postpro.Component.scss';
const Mitra = () => {
  return (
    <div className="main-project">
      <div className="project-content">
        <h1 className="secction">Postproduccion y Motion Graphics</h1>
        <h1 className="project-title">Demonio Fashion</h1>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/tesis-3919e.appspot.com/o/motion%20y%20postproduccion%2Fmitra%2Fportada4.png?alt=media&token=d0bffc0e-ffb1-423f-903b-8c94190e09fc"
          className="mitra-img"
        />
        <h1 className="content">
          Animación de un personaje hecho en 3DMax, texturizado en Substance
          Painter, y por último se integró en marmoset para sacar los renders
          junto a un mini escenario modelado en 3Dmax
        </h1>
        <h1 className="Process">Presentacion</h1>
        <video
          src="https://firebasestorage.googleapis.com/v0/b/tesis-3919e.appspot.com/o/motion%20y%20postproduccion%2Fmitra%2FMITRA%203era%20parte.mp4?alt=media&token=9c98caab-1476-49e3-97c2-5423f3bb8c97"
          controls
          className="demonFashion-process"
        ></video>
      </div>
    </div>
  );
};
export default Mitra;
