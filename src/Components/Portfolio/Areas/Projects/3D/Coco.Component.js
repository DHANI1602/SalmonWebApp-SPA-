import React from 'react';
import './Modeler.Component.scss';
const Coco = () => {
  return (
    <div className="main-project">
      <div className="project-content">
        <h1 className="secction">Diseño e Ilustración</h1>
        <h1 className="project-title">Shinobu y Giyuu</h1>
        <div className="coco" />
        <h1 className="content">
          Pieza realizada para un fan del increíble anime Demon Slayer para su
          habitación , colocando a sus dos personajes favoritos en una sola
          pieza. Inspirado en la primera temporada. Este trabajo se hizo en
          Adobe Illustrator con maya, y técnica vectorial.
        </h1>
        <h1 className="Process"> Proceso</h1>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/tesis-3919e.appspot.com/o/modelado%203D%2Fcoco%2Fcoco.2.png?alt=media&token=b78b65d6-ff59-4496-9132-86e4fff88eb4"
          className="slayer-process"
        ></img>
      </div>
    </div>
  );
};
export default Coco;
