import React from 'react';
import { Routes, Route, NavLink, Link, BrowserRouter } from 'react-router-dom';
import './Portfolio.Motion.Component.scss';
const Motion = () => {
  return (
    <div className="content-box-motion">
      <NavLink
        to="/DemonFashion"
        className="b5 blureable projects-button"
      ></NavLink>
      <NavLink
        to="/Hospital"
        className="b6 blureable projects-button"
      ></NavLink>
      <NavLink to="/Mitra" className="b7 blureable projects-button"></NavLink>
      <NavLink
        to="/OldAlley"
        className="b8 blureable projects-button"
      ></NavLink>
      <NavLink to="/Desert" className="b9 blureable projects-button"></NavLink>
    </div>
  );
};
export default Motion;
