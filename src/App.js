import React from 'react';
import './Styles.scss';
import PrincipalRouter from './Router/PrincipalRouter.js';

export default function App() {
  return (
    <div className="layout">
      <PrincipalRouter />
    </div>
  );
}
