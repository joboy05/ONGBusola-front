import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const resources = [
  {
    title: 'STATUTS',
    description: 'STATUTS',
    file: '/STATUTS.pdf'
  },
  {
    title: 'PEAHS',
    description: "POLITIQUE DE PROTECTION CONTRE L'EXPLOITATION, LES ABUS ET LE HARCELEMENT SEXUEL (PEAHS)",
    file: '/PEAHS_Busola_hv3fXKQ.pdf'
  },
  {
    title: 'REGLEMENT',
    description: 'REGLEMENT INTERIEUR',
    file: '/Règlement_Interieur_ONG_BUSOLA_1.pdf'
  },
  {
    title: 'Rapport de capitalisation RESPECT_ONG Busola',
    description: '',
    file: '/RAPPORT_DE_CAPITALISATION__RESPECT_BUSOLA2026_VF.pdf'
  }
];

export default function ResourcePage() {
  useEffect(() => {
    // Initialize WOW.js
    if (window.WOW) {
      new window.WOW().init();
    }
    // Scroll to top on load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="wrapper">
      <Navbar />

      {/* Premium Hero Header Banner */}
      <div
        className="container-fluid position-relative d-flex align-items-center justify-content-center text-white py-5 shadow-sm"
        style={{
          minHeight: '500px',
          background: `linear-gradient(135deg, rgba(39, 100, 174, 0.85) 0%, rgba(39, 176, 116, 0.85) 100%), url('hero-slider.jpeg') center/cover`,
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
              <li className="breadcrumb-item">
                <Link to="/about" className="text-white text-decoration-none opacity-75 hover-opacity-100 fw-medium" style={{ fontSize: '0.95rem' }}>À propos</Link>
              </li>
              <li className="breadcrumb-item active fw-bold text-warning" aria-current="page" style={{ fontSize: '0.95rem' }}>
                Centre de ressources
              </li>
            </ol>
          </nav>

          <h1 className="display-4 fw-black text-uppercase text-white mb-3" style={{ letterSpacing: '2px', textShadow: '0 2px 10px rgba(0,0,0,0.15)' }}>
            Centre de ressources
          </h1>
          
          <div className="mx-auto mb-4" style={{ width: '85px', height: '4px', backgroundColor: '#f59f23', borderRadius: '2px' }}></div>

          <p className="lead text-white opacity-95 mx-auto" style={{ maxWidth: '850px', fontSize: '1.15rem', lineHeight: '1.7', textShadow: '0 1px 5px rgba(0,0,0,0.1)' }}>
            Accédez à notre base documentaire, nos rapports d'activités, politiques et règlements pour tout savoir sur notre fonctionnement.
          </p>
        </div>
      </div>

      {/* Blue Sub-banner directly acting as the page header */}
      <div className="container-fluid p-0 d-flex position-relative shadow-sm" style={{ backgroundColor: '#2764AE', minHeight: '120px' }}>
        <div className="container d-flex align-items-center justify-content-center text-white text-center px-4" style={{ minHeight: '120px' }}>
          <h5 className="mb-0 fw-bold text-white" style={{ fontSize: '1.4rem', lineHeight: 1.5 }}>
            Vous trouverez ici toute la documentation sur les projets de Busola ONG.
          </h5>
        </div>
        <div 
          className="d-none d-lg-flex flex-column align-items-center justify-content-center position-absolute end-0 h-100"
          style={{ width: '80px', backgroundColor: '#f59f23', writingMode: 'vertical-lr', transform: 'rotate(180deg)' }}
        >
          <span className="text-white fw-bold" style={{ fontSize: '1rem', letterSpacing: '1px' }}>Téléchargez</span>
        </div>
      </div>

      {/* Resources Content */}
      <div className="container-fluid py-5 bg-white" style={{ minHeight: '50vh' }}>
        <div className="container py-5">
          {/* Section Header */}
          <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '800px' }}>
            <div className="d-flex align-items-center justify-content-center mb-3">
              <div style={{ height: "1px", background: "#3bb143", width: "40px" }}></div>
              <span className="text-uppercase mx-2 fw-bold" style={{ color: '#3bb143', fontSize: '0.9rem', letterSpacing: '2px' }}>DOCUMENTS OFFICIELS</span>
              <div style={{ height: "1px", background: "#3bb143", width: "40px" }}></div>
            </div>
            <h1 className="fw-black mb-4" style={{ lineHeight: 1.2, fontSize: '2.75rem', color: '#111827' }}>
              <span className="text-uppercase fw-black" style={{ color: '#111827', letterSpacing: '-0.5px' }}>Rapports et</span><br/>
              <span className="text-uppercase fw-black" style={{ color: '#111827', letterSpacing: '-0.5px' }}>Ressources Clés</span>
            </h1>
          </div>
          
          <div className="row g-5">
            {resources.map((res, i) => (
              <div key={i} className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay={`${0.1 + i * 0.1}s`}>
                <div className="d-flex flex-column h-100 p-3">
                  {/* Icon */}
                  <div className="mb-4">
                    <div 
                      className="d-inline-flex align-items-center justify-content-center rounded" 
                      style={{ width: '70px', height: '70px', backgroundColor: '#f8f2e2ff' }}
                    >
                      <i className="fa fa-file fa-2x" style={{ color: '#f59f23' }}></i>
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h4 className="fw-bold text-dark mb-2" style={{ fontSize: '1.4rem' }}>{res.title}</h4>
                  
                  {/* Subtitle */}
                  <div style={{ minHeight: '40px' }}>
                    {res.description && (
                      <p className="mb-3" style={{ fontSize: '0.95rem', textTransform: 'uppercase', lineHeight: 1.5, color: '#555' }}>
                        {res.description}
                      </p>
                    )}
                  </div>
                  
                  {/* Download Link */}
                  <div className="mt-4 d-flex align-items-center w-100">
                    <a href={res.file} target="_blank" rel="noopener noreferrer" className="text-decoration-none d-flex align-items-center fw-bold flex-shrink-0" style={{ fontSize: '0.95rem' }}>
                      <i className="fa fa-download me-2" style={{ color: '#f59f23', fontSize: '1.3rem' }}></i>
                      <span style={{ color: '#2764AE', textTransform: 'uppercase' }}>Télécharger</span>
                    </a>
                    {/* Blue line matching screenshot */}
                    <div className="ms-2 flex-grow-1" style={{ height: '1px', backgroundColor: '#2764AE', opacity: 0.8 }}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />    </div>
  );
}
