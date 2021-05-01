import React from 'react';
import {
  Link,
} from "react-router-dom";

export const MainScreen = () => {

  return (
    <div>
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <Link className="nav-link active" to="/">Inicio</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/movements">Movimientos</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/account">Cuenta</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/analisis">Analisis</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/services">Servicios</Link>
        </li>
      </ul>
    </div>
  );
};
