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

      {/* Premium Hero Header Banner */}
      <div
        className="container-fluid position-relative d-flex align-items-center justify-content-center text-white py-5 shadow-sm"
        style={{
          minHeight: '500px',
          background: `linear-gradient(135deg, rgba(39, 100, 174, 0.85) 0%, rgba(39, 176, 116, 0.85) 100%), url('about.jpeg') center/cover`,
          paddingTop: '120px',
          paddingBottom: '60px',
          overflow: 'visible'
        }}
      >
        {/* Subtle decorative circles */}
        <div className="position-absolute bg-white rounded-circle" style={{ width: '200px', height: '200px', top: '-100px', left: '-100px', opacity: 0.08 }}></div>
        <div className="position-absolute bg-white rounded-circle" style={{ width: '300px', height: '300px', bottom: '-150px', right: '-150px', opacity: 0.08 }}></div>

        <div className="container text-center position-relative" style={{ zIndex: 2 }}>
          {/* Breadcrumbs */}
          <nav aria-label="breadcrumb" className="mb-3">
            <ol className="breadcrumb justify-content-center mb-0 bg-transparent p-0">
              <li className="breadcrumb-item">
                <Link to="/" className="text-white text-decoration-none opacity-75 hover-opacity-100 fw-medium" style={{ fontSize: '0.95rem' }}>Accueil</Link>
              </li>
              <li className="breadcrumb-item active fw-bold text-warning" aria-current="page" style={{ fontSize: '0.95rem' }}>
                À propos
              </li>
            </ol>
          </nav>

          <h1 className="display-4 fw-black text-uppercase text-white mb-3" style={{ letterSpacing: '2px', textShadow: '0 2px 10px rgba(0,0,0,0.15)' }}>
            À propos
          </h1>
          
          <div className="mx-auto mb-4" style={{ width: '85px', height: '4px', backgroundColor: '#f59f23', borderRadius: '2px' }}></div>

          <p className="lead text-white opacity-95 mx-auto" style={{ maxWidth: '850px', fontSize: '1.15rem', lineHeight: '1.7', textShadow: '0 1px 5px rgba(0,0,0,0.1)' }}>
            Découvrez notre histoire, notre vision et les valeurs qui animent notre engagement au quotidien pour le développement communautaire.
          </p>
        </div>
      </div>

      {/* Contenu de la page */}
      <AboutSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
