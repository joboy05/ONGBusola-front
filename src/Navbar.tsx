import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isAbout = pathname === '/about';

  return (
    <div className="nav-bar bg-primary p-0 sticky-top shadow-sm">
      <nav className="navbar navbar-expand-lg bg-primary navbar-dark py-lg-0 container-fluid px-3 px-lg-5">
        <Link to="/" className="navbar-brand m-0">
          <img width="170" height="50" src="/LOGO HORIZONTAL-02-02.png" alt="Logo" />
        </Link>
        <button type="button" className="navbar-toggler me-0" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav align-items-center">
            <Link to="/" className={`nav-item nav-link ${!isAbout ? 'active' : ''}`}>Accueil</Link>

            <div className="nav-item dropdown">
              <Link
                to="/about"
                className={`nav-link dropdown-toggle ${isAbout ? 'active' : ''}`}
                data-bs-toggle="dropdown"
                onClick={(e) => {
                  if (window.innerWidth >= 992) {
                    navigate('/about');
                  }
                }}
              >
                A propos
              </Link>
              <div className="dropdown-menu border-0 m-0">
                <Link to="/about" className="dropdown-item d-lg-none">Aller à la page A propos</Link>
                <Link to="/team" className="dropdown-item">LA TEAM</Link>
                <Link to="/about#vision-mission" className="dropdown-item">GALERIE</Link>
                <Link to="/ressources" className="dropdown-item">CENTRE DE RESSOURCES</Link>
              </div>
            </div>

            <Link to="/actions" className="nav-item nav-link">Nos actions</Link>
            <a href="#!" className="nav-item nav-link">Nos actualités</a>
            <a href="#!" className="nav-item nav-link">Contact</a>
          </div>
          <div className="ms-auto d-none d-lg-flex">
            <a className="btn btn-secondary m-1 px-3 text-white fw-bold" href="#!" style={{ borderRadius: '7px' }}>Nous soutenir</a>
          </div>
        </div>
      </nav>
    </div>
  );
}
