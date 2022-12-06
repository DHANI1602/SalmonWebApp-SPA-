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
import Hospital from '../Components/Portfolio/Areas/Projects/Postpro/Hospital.Component.js';
import OldAlley from '../Components/Portfolio/Areas/Projects/Postpro/OldAlley.Component.js';
import Mitra from '../Components/Portfolio/Areas/Projects/Postpro/Mitra.Component.js';
import Desert from '../Components/Portfolio/Areas/Projects/Postpro/Desert.Component.js';
import Cocacola from '../Components/Portfolio/Areas/Projects/3D/Cocacola.Component.js';
import Coco from '../Components/Portfolio/Areas/Projects/3D/Coco.Component.js';
import Taz from '../Components/Portfolio/Areas/Projects/3D/Taz.Component.js';
import Office from '../Components/Portfolio/Areas/Projects/3D/Office.Component.js';
import Goku from '../Components/Portfolio/Areas/Projects/3D/Goku.Component.js';
import Inverso from '../Components/Portfolio/Areas/Projects/WPA/Inverso.Component.js';
import Eliminacion from '../Components/Portfolio/Areas/Projects/WPA/Eliminacion.Component.js';
import AppT from '../Components/Portfolio/Areas/Projects/WPA/App.Component.js';
import Cats from '../Components/Portfolio/Areas/Projects/WPA/Cats.Component.js';
import Museo from '../Components/Portfolio/Areas/Projects/WPA/Museo.Component.js';
import Potato from '../Components/Portfolio/Areas/Projects/WPA/Potato.Component.js';
import Marketing from '../Components/Portfolio/Areas/Projects/Marketing/Marketing.Component.js';
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
            <Route path="/Hospital" element={<Hospital />} />
            <Route path="/Mitra" element={<Mitra />} />
            <Route path="/OldAlley" element={<OldAlley />} />
            <Route path="/Desert" element={<Desert />} />
            <Route path="/Taz" element={<Taz />} />
            <Route path="/Coco" element={<Coco />} />
            <Route path="/Goku" element={<Goku />} />
            <Route path="/Office" element={<Office />} />
            <Route path="/Cocacola" element={<Cocacola />} />
            <Route path="/Inverso" element={<Inverso />} />
            <Route path="/Elimination" element={<Eliminacion />} />
            <Route path="/Museo" element={<Museo />} />
            <Route path="/Potato" element={<Potato />} />
            <Route path="/Cats" element={<Cats />} />
            <Route path="/App" element={<AppT />} />
            <Route path="/publicidad" element={<Marketing />} />
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
