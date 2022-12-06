import React from 'react';
import './Modeler.Component.scss';
const Office = () => {
  return (
    <div className="main-project">
      <div className="project-content">
        <h1 className="secction">Diseño e Ilustración</h1>
        <h1 className="project-title">Shinobu y Giyuu</h1>
        <div className="office" />
        <h1 className="content">
          Pieza realizada para un fan del increíble anime Demon Slayer para su
          habitación , colocando a sus dos personajes favoritos en una sola
          pieza. Inspirado en la primera temporada. Este trabajo se hizo en
          Adobe Illustrator con maya, y técnica vectorial.
        </h1>
        <h1 className="Process"> Proceso</h1>
        <video
          src="https://firebasestorage.googleapis.com/v0/b/tesis-3919e.appspot.com/o/modelado%203D%2Fhabitación%2Fhabitacion.mp4?alt=media&token=bb6b8f20-a1cd-4238-a97a-86afa47225ac"
          controls
          className="video-office"
        ></video>
      </div>
    </div>
  );
};
export default Office;
