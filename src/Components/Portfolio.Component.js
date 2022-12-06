import './Portfolio.Component.scss';
import React, { useState, useEffect } from 'react';
import PortfolioSubtitle from './Portfolio/Portfolio.subtitle.Component.js';
import Design from './Portfolio/Areas/Portfolio.Design.Component.js';
import Motion from './Portfolio/Areas/Portfolio.Motion.Component.js';
import Modeler from './Portfolio/Areas/Portfolio.Modeler.Component.js';
import WPA from './Portfolio/Areas/Portfolio.WPA.Component.js';
import Marketing from './Portfolio/Areas/Portfolio.M.Component.js';

const Portfolio = () => {
  return (
    <div className="main-portfolio">
      <div className="main-portfolio-center">
        <h1 className="main-title">Mis proyectos</h1>
        <PortfolioSubtitle name="Diseño e Ilustración" />
        <div className="b-components"></div>
        <Design />
        <div className="a-components"></div>
        <PortfolioSubtitle name="Postproducción y Motion Graphics" />
        <div className="b-components"></div>
        <Motion />
        <div className="a-components"></div>
        <PortfolioSubtitle name="Modelado 3D y Texturizado" />
        <div className="b-components"></div>
        <Modeler />
        <div className="a-components"></div>
        <PortfolioSubtitle name="Webs, apps y juegos" />
        <div className="b-components"></div>
        <WPA />
        <div className="a-components"></div>
        <PortfolioSubtitle name="Publicidad " />
        <div className="b-components"></div>
        <Marketing />
      </div>
    </div>
  );
};
export default Portfolio;
