import React from 'react';
import { Routes, Route, NavLink, Link, BrowserRouter } from 'react-router-dom';
import './Portfolio.Design.Component.scss';
const Design = () => {
  return (
    <div className="content-box">
      <NavLink
        to="/PeakyBlinders"
        className="b1 blureable projects-button"
      ></NavLink>
      <NavLink to="/Nature" className="b2 blureable projects-button"></NavLink>
      <NavLink
        to="/DemonSlayer"
        className="b3 blureable projects-button"
      ></NavLink>
      <NavLink to="/GokuPS" className="b4 blureable projects-button"></NavLink>
    </div>
  );
};
export default Design;
