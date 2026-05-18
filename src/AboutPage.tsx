import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AboutSection from './AboutSection';
import Navbar from './Navbar';
import Footer from './Footer';

export default function AboutPage() {
  useEffect(() => {
    if (window.WOW) new window.WOW().init();
    window.scrollTo(0, 0);
  }, []);

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
                <Link to="/" className="text-white text-decoration-none">Accueil</Link>
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
      <Footer />
    </div>
  );
}
