import React from 'react';
import AboutSection from './AboutSection';
import Navbar from './Navbar';

export default function AboutPage() {
  return (
    <div className="wrapper">
      {/* Navbar */}
      <Navbar />

      {/* Page Header Banner */}
      <div
        className="container-fluid d-flex align-items-center justify-content-center text-white"
        style={{
          minHeight: '220px',
          background: '#2764AE',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Cercles décoratifs */}
        <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: '200px', height: '200px', borderRadius: '50%', border: '35px solid rgba(255,255,255,0.06)' }} />
        <div style={{ position: 'absolute', bottom: '-60px', left: '-60px', width: '250px', height: '250px', borderRadius: '50%', border: '35px solid rgba(255,255,255,0.06)' }} />

        <div className="text-center position-relative">
          <nav aria-label="breadcrumb" className="mb-2">
            <ol className="breadcrumb justify-content-center mb-0" style={{ opacity: 0.8 }}>
              <li className="breadcrumb-item">
                <a href="/" className="text-white text-decoration-none">Accueil</a>
              </li>
              <li className="breadcrumb-item active text-secondary fw-bold" aria-current="page">
                À propos
              </li>
            </ol>
          </nav>
          <h1 className="display-4 fw-bold mb-0 text-uppercase" style={{ letterSpacing: '2px' }}>
            À <span className="text-secondary">Propos</span>
          </h1>
        </div>
      </div>

      {/* Contenu de la page */}
      <AboutSection />

      {/* Footer */}
      <footer className="container-fluid footer py-5">
        <div className="container">
          <div className="row g-5 py-5">
            <div className="col-lg-3 col-md-6">
              <div className="row g-2">
                <div className="col-12">
                  <img className="img-fluid w-75" src="/LOGO VERTICAL-02-02.svg" alt="Logo Busola" />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-light mb-4">Liens rapides</h4>
              <a className="btn btn-link" href="/about">Qui sommes-nous?</a>
              <a className="btn btn-link" href="#!">Nous contacter</a>
              <a className="btn btn-link" href="#!">Nos actions</a>
              <a className="btn btn-link" href="#!">Politique de confidentialité</a>
              <a className="btn btn-link" href="#!">Conditions d'utilisations</a>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-light mb-4">Horraires</h4>
              <p className="mb-1">Lundi - Vendredi</p>
              <h6 className="text-light">09h:00 - 18h:30</h6>
              <p className="mb-1">Samedi &amp; Dimanche</p>
              <h6 className="text-light">Fermé</h6>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-light mb-4">Contactez-nous</h4>
              <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>Qtier Arafat, non loin de Marie rose, Parakou, République du Bénin</p>
              <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+229 01 90 44 46 90</p>
              <p className="mb-2"><i className="fa fa-envelope me-3"></i>ongbusola@gmail.com</p>
              <div className="d-flex pt-3">
                <a className="btn btn-square btn-primary me-2" target="_blank" href="https://www.facebook.com/profile.php?id=100064788966440">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a className="btn btn-square btn-primary me-2" target="_blank" href="https://www.linkedin.com/company/ong-busola/">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="copyright pt-5">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                &copy; <a className="fw-semi-bold" href="#!">ONG BUSOLA</a>, Tous droits réservé.
              </div>
              <div className="col-md-6 text-center text-md-end">
                Designed By <a className="fw-semi-bold" href="#!">Kyge006</a>. Distributed by <a className="fw-semi-bold" href="#!">UTC-SERVICES</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
