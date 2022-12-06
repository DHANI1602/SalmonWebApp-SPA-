import React from 'react';
import {
  Routes,
  Route,
  BrowserRouter,
  Link,
  NavLink,
  Navigate,
} from 'react-router-dom';
import Welcome from '../Components/Welcome.Component.js';
import Contact from '../Components/Contact.Component.js';
import NavBar from '../Components/Layout/NavBar.Component.js';
import Footer from '../Components/Layout/Footer.Component.js';
import Portfolio from '../Components/Portfolio.Component.js';
import PeakyBlinders from '../Components/Portfolio/Areas/Projects/Design/PeakyBlinders.Component.js';
import Nature from '../Components/Portfolio/Areas/Projects/Design/Nature.Component.js';
import DemonSlayer from '../Components/Portfolio/Areas/Projects/Design/DemonSlayer.Component.js';
import GokuPS from '../Components/Portfolio/Areas/Projects/Design/GokuPS.Component.js';
import DemonFashion from '../Components/Portfolio/Areas/Projects/Postpro/DemonFashion.Component.js';
const PrincipalRouter = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />

        {/*CONTENIDO */}
        <section className="content">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/Inicio" element={<Welcome />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Portfolio" element={<Portfolio />} />
            <Route path="/PeakyBlinders" element={<PeakyBlinders />} />
            <Route path="/Nature" element={<Nature />} />
            <Route path="/DemonSlayer" element={<DemonSlayer />} />
            <Route path="/GokuPS" element={<GokuPS />} />
            <Route path="/DemonFashion" element={<DemonFashion />} />
            <Route
              path="*"
              element={
                <>
                  <h1>error 404</h1>
                  <h3>aca no hay ningun salmón</h3>
                  <Link to="/Inicio">Volver al inicio</Link>
                </>
              }
            />
          </Routes>
        </section>
        {/*CONTENIDO*/}

        <Footer />
      </BrowserRouter>
    </>
  );
};
export default PrincipalRouter;
