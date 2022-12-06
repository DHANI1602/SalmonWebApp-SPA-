import React from 'react';
import { Routes, Route, NavLink, Link, BrowserRouter } from 'react-router-dom';

export default function NavBar() {
  return (
    <header className="nav" data-spy="scroll" data-target="#nav">
      <div className="nav-logo">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/tesis2-c4a1a.appspot.com/o/logo.png?alt=media&token=441b0dee-e385-4981-9f9b-d255bbaddd63"
          width="200px"
        />
      </div>
      <nav className="nav-list">
        <ul>
          <NavLink
            to="/Inicio"
            className={({ isActive }) =>
              isActive ? 'actived navli' : 'desabled navli'
            }
          >
            Inicio
          </NavLink>
          <NavLink
            to="/Contact"
            className={({ isActive }) =>
              isActive ? 'actived navli' : 'desabled navli'
            }
          >
            Contacto
          </NavLink>
          <NavLink
            to="/Portfolio"
            className={({ isActive }) =>
              isActive ? 'actived navli' : 'desabled navli'
            }
          >
            Portfolio
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}
