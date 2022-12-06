import React from 'react';
import './Postpro.Component.scss';
const DemonFashion = () => {
  return (
    <div class="main-project">
      <div class="project-content">
        <h1 class="secction">Postproduccion y Motion Graphics</h1>
        <h1 class="project-title">Demonio Fashion</h1>
        <div class="fashionDemon" />
        <h1 class="content">
          Animación de un personaje hecho en 3DMax, texturizado en Substance
          Painter, y por último se integró en marmoset para sacar los renders
          junto a un mini escenario modelado en 3Dmax
        </h1>
        <h1 class="Process">Presentacion</h1>
        <video
          src="https://firebasestorage.googleapis.com/v0/b/tesis-3919e.appspot.com/o/motion%20y%20postproduccion%2FDemonio%20fashion%2FvideoDemonio%2Bescenario.mp4?alt=media&token=c3d2b27f-c86a-4892-88b3-d0dd9a6c2b40"
          controls
          class="demonFashion-process"
        ></video>
      </div>
    </div>
  );
};
export default DemonFashion;
