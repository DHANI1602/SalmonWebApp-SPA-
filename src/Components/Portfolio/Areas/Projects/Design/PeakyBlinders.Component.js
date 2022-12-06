import React from 'react';
import './Design.Component.scss';
const PeakyBlinders = () => {
  return (
    <div className="main-project">
      <div className="project-content">
        <h1 className="secction">Diseño e Ilustración</h1>
        <h1 className="project-title">Peaky Blinders</h1>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/tesis-3919e.appspot.com/o/ilustracion%20y%20dise%C3%B1o%2Fpieza2%2Fpieza%20publicitaria%20pb.png?alt=media&token=dfd0d1e4-da3c-4748-b034-e5afaa83232b"
          className="image"
        />
        <h1 className="content">
          Pieza realizada para un fan de esta increíble serie(Peaky blinders).
          Se tomó un concepto general y se usaron sus personajes favoritos. Este
          trabajo se hizo en Photoshop , logrando la técnica de doble exposición
          y dándole un significado global a la serie.
        </h1>
        <h1 className="Process"> Proceso</h1>
        <video
          src="https://firebasestorage.googleapis.com/v0/b/tesis-3919e.appspot.com/o/ilustracion%20y%20dise%C3%B1o%2Fpieza2%2FPBoriginal%202.mp4?alt=media&token=c999c095-0569-458b-aeb5-23d2380a9515"
          controls
          className="video-process"
        ></video>
      </div>
    </div>
  );
};
export default PeakyBlinders;
