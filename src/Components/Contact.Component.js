import React from 'react';
import './Contact.Component.scss';
const Contact = () => {
  return (
    <>
      <div className="main">
        <div className="Bio">
          <img
            className="photo"
            src="https://firebasestorage.googleapis.com/v0/b/tesis2-c4a1a.appspot.com/o/mi%20foto.JPG?alt=media&token=5bdaaf3a-882e-4e8b-995b-69cf78f83444"
          />
        </div>
        <div className="info">
          <h1 className="name">Patricia Veronica Gomez Campanelli</h1>
          <h1>
            Estudiante trabajadora, con aspiraciones altas. Preparada para usar
            todas mis habilidades y pasión. Amplios conocimientos en diversos
            programas de edición, modelado y programación, con ganas de seguir
            aprendiendo mucho más.
          </h1>
          <h1>Detalles:</h1>
          <ul>
            <li>
              Fecha de nacimiento : 10/09/1999, Venezuela, Edo. Anzoátegui
            </li>
            <li>Contacto: salmon.agencia.dm@gmail.com</li>
            <li>Nacionalidad: Venezolana</li>
          </ul>
          <h1>Educacion:</h1>
          <ul>
            <li>
              Cursando la carrera de Diseño multimedial, Davinci, Primera
              escuela de arte multimedial, Argentina
            </li>
            <li> Nota media: 8.90/10</li>
            <li>
              Título de Bachillerato, Colegio Jose Gil Fortoul, Venezuela (
              2016) Nota media: 18/20
            </li>
          </ul>
          <h1>Habilidades:</h1>
          <p>
            Conocimiento en los siguientes programas: 3Dmax, Substance Painter,
            Zbrush, Keyshot, Adobe After Effects, Adobe Illustrator, Adobe
            Photoshop, Visual Studio, Visual Studio code, Marmoset, Unity,
            Construct, Cinema 4D, Adobe Premiere, Adobe Audition
          </p>
        </div>
      </div>
    </>
  );
};
export default Contact;
