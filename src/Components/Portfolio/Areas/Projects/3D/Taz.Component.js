import React from 'react';
import './Modeler.Component.scss';
const Taz = () => {
  return (
    <div className="main-project">
      <div className="project-content">
        <h1 className="secction">Diseño e Ilustración</h1>
        <h1 className="project-title">Shinobu y Giyuu</h1>
        <div className="taz" />
        <h1 className="content">
          Pieza realizada para un fan del increíble anime Demon Slayer para su
          habitación , colocando a sus dos personajes favoritos en una sola
          pieza. Inspirado en la primera temporada. Este trabajo se hizo en
          Adobe Illustrator con maya, y técnica vectorial.
        </h1>
        <h1 className="Process"> Proceso</h1>
        <video
          src="https://firebasestorage.googleapis.com/v0/b/tesis2-c4a1a.appspot.com/o/modelado%203%20d%2Ftazz%2Ftazz.25.mp4?alt=media&token=dd25c944-a2c6-46dc-88a1-03af92a604e6"
          controls
          className="video-taz"
        ></video>
      </div>
    </div>
  );
};
export default Taz;
