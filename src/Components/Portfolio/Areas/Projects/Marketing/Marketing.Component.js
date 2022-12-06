import React from 'react';
const Marketing = () => {
  return (
    <div className="main-project">
      <div className="project-content">
        <h1 className="secction">Diseño e Ilustración</h1>
        <h1 className="project-title">Peaky Blinders</h1>
        <video
          src="https://firebasestorage.googleapis.com/v0/b/tesis-3919e.appspot.com/o/publicidad%2Fcampaña%20wacom.mp4?alt=media&token=b3077879-86ea-4d1f-a60e-d3217d6cfdf9"
          className="video-m"
          controls
        />
        <h1 className="content">
          Pieza realizada para un fan de esta increíble serie(Peaky blinders).
          Se tomó un concepto general y se usaron sus personajes favoritos. Este
          trabajo se hizo en Photoshop , logrando la técnica de doble exposición
          y dándole un significado global a la serie.
        </h1>
        {/* <h1 className="Process"> Proceso</h1> */}
      </div>
    </div>
  );
};
export default Marketing;
