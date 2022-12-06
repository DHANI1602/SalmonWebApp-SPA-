import React from 'react';
import { Routes, Route, NavLink, Link, BrowserRouter } from 'react-router-dom';
import './Portfolio.WPA.Component.scss';
const WPA = () => {
  return (
    <div className="content-box-wpa">
      <NavLink to="/App" className="b15 blureable projects-button"></NavLink>
      <NavLink to="/Potato" className="b16 blureable projects-button"></NavLink>
      <NavLink
        to="/Elimination"
        className="b17 blureable projects-button"
      ></NavLink>
      <NavLink
        to="/Inverso"
        className="b18 blureable projects-button"
      ></NavLink>
      <NavLink to="/Cats" className="b19 blureable projects-button"></NavLink>
      <NavLink to="/Museo" className="b20 blureable projects-button"></NavLink>
    </div>
  );
};
export default WPA;
