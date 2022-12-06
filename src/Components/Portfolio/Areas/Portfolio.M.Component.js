import React from 'react';
import { Routes, Route, NavLink, Link, BrowserRouter } from 'react-router-dom';
const Marketing = () => {
  return (
    <div className="content-m">
      <NavLink
        to="/publicidad"
        className="b21 blureable projects-button"
      ></NavLink>
    </div>
  );
};
export default Marketing;
