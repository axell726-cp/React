/*import React from 'react';
import Contador from './Contador';

function App() {
  return (
    <div className="App">
        <h1>Práctica: Manejo de Eventos en React</h1>
        <Contador />
    </div>
  );
}

export default App;*/

import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Inicio from './Inicio';
import AcercaDe from './AcercaDe';
import Contacto from './Contacto';
import Usuarios from './Usuarios';
import Categoria from './Categoria';
import Libro from './Libro';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">Inicio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">Acerca de</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contacto</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/usuarios">Usuarios</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/categorias">Categorías</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/libros">Libros</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>


      <Routes>
        <Route path='/' exact Component={Inicio} />
        <Route path='/about' Component={AcercaDe} />
        <Route path='/contact' Component={Contacto} />
        <Route path='/usuarios' Component={Usuarios} />
        <Route path='/categorias' Component={Categoria} />
        <Route path='/libros' Component={Libro} />
      </Routes>
    </Router>
  );
}

export default App;