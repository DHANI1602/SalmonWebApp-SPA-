import React from 'react';
import { Routes, Route, NavLink, Link, BrowserRouter } from 'react-router-dom';
import './Portfolio.Modeler.Component.scss';
const Modeler = () => {
  return (
    <div className="content-box-modeler">
      <NavLink
        to="/Cocacola"
        className="b10 blureable projects-button"
      ></NavLink>
      <NavLink to="/Taz" className="b11 blureable projects-button"></NavLink>
      <NavLink to="/Coco" className="b12 blureable projects-button"></NavLink>
      <NavLink to="/Office" className="b13 blureable projects-button"></NavLink>
      <NavLink to="/Goku" className="b14 blureable projects-button"></NavLink>
    </div>
  );
};
export default Modeler;
