import React from 'react';
const Welcome = () => {
  return (
    <>
      <div className="welcome">
        <div className="main-content">
          <h1>
            Supera todos los desafíos que se presenten, motivate de las ideas
            únicas y diferentes.
          </h1>
          <h5>IDEAS CONTRACORRIENTES</h5>
        </div>
        <div className="first-line">
          <h1></h1>
        </div>
        <div className="salmon-info">
          <h1 className="first-info-title">Salmon, Agencia Multimedial</h1>
          <div className="first-info-line"></div>
          <div className="first-info-information">
            <p>
              "No pueden haber ideas sin personas, ni tampoco mentes intrépidas
              sin búsqueda. No puede haber evolución sin tenacidad, ni haber
              vanguardismo sin ruptura. No puede haber ruptura sin desafiar los
              límites, y por eso vamos hacía lo inesperado, porque aunque
              existan muchos caminos para lograrlo, nosotros vamos a
              construirlos"
            </p>
          </div>
        </div>
        <div className="first-info">
          <h1 className="manifiesto-info-title">Manifiesto</h1>
          <div className="manifiesto-info-information">
            <p>
              Breve animacion 2D hecha con la intenciones de expresar lo que
              somos como agencia
            </p>
          </div>
          <video
            src="https://firebasestorage.googleapis.com/v0/b/tesis-3919e.appspot.com/o/Manifiesto%20Salmon.mp4?alt=media&token=22d73c56-b2d2-43c9-83c3-063f3e3d2d6a"
            controls
            class="video-left"
          ></video>
        </div>
        <div className="first-video">
          <video
            src="https://firebasestorage.googleapis.com/v0/b/tesis-3919e.appspot.com/o/ReelSalmon.mp4?alt=media&token=2c504d8a-505f-45b9-ba86-93f1a4394ece"
            controls
            class="video-right"
          ></video>
          <h1 className="second-info-title">Reel de la agencia</h1>
          <div className="second-info-line"></div>
          <div className="second-information">
            <p>
              un resumen de varios trabajos realizados unidos para dar una
              muestra de lo que es Salmón
            </p>
          </div>
        </div>
        <div className="second-line">
          <h1></h1>
        </div>
      </div>
    </>
  );
};
export default Welcome;
