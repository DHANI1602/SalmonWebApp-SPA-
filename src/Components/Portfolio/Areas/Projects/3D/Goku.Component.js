import React from 'react';
import './Modeler.Component.scss';
const Goku = () => {
  return (
    <div className="main-project">
      <div className="project-content">
        <h1 className="secction">Diseño e Ilustración</h1>
        <h1 className="project-title">Shinobu y Giyuu</h1>
        <div className="goku" />
        <h1 className="content">
          Pieza realizada para un fan del increíble anime Demon Slayer para su
          habitación , colocando a sus dos personajes favoritos en una sola
          pieza. Inspirado en la primera temporada. Este trabajo se hizo en
          Adobe Illustrator con maya, y técnica vectorial.
        </h1>
        <h1 className="Process"> Proceso</h1>
        <video
          src="https://firebasestorage.googleapis.com/v0/b/tesis2-c4a1a.appspot.com/o/modelado%203%20d%2Fgoku%2Fgoku2.20.mp4?alt=media&token=a816d71a-efe2-4a92-9947-6678c98ba792"
          controls
          className="video-goku"
        ></video>
      </div>
    </div>
  );
};
export default Goku;
