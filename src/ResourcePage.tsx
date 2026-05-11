import React from 'react';
import Navbar from './Navbar';

const resources = [
  {
    title: 'STATUTS',
    description: 'STATUTS',
    file: '/ONGBusola-front/STATUTS.pdf'
  },
  {
    title: 'PEAHS',
    description: "POLITIQUE DE PROTECTION CONTRE L'EXPLOITATION, LES ABUS ET LE HARCELEMENT SEXUEL (PEAHS)",
    file: '/ONGBusola-front/PEAHS_Busola_hv3fXKQ.pdf'
  },
  {
    title: 'REGLEMENT',
    description: 'REGLEMENT INTERIEUR',
    file: '/ONGBusola-front/Règlement_Interieur_ONG_BUSOLA_1.pdf'
  },
  {
    title: 'Rapport de capitalisation RESPECT_ONG Busola',
    description: '',
    file: '/ONGBusola-front/RAPPORT_DE_CAPITALISATION__RESPECT_BUSOLA2026_VF.pdf'
  }
];

export default function ResourcePage() {
  return (
    <div className="wrapper">
      <Navbar />

      {/* Page Header Banner */}
      <div
        className="container-fluid d-flex flex-column align-items-center justify-content-center"
        style={{
          minHeight: '280px',
          background: `url('/ONGBusola-front/MOTIF%20LOGO-54.png') center/cover`,
          opacity: 0.9,
          position: 'relative',
          paddingTop: '80px',
          paddingBottom: '40px'
        }}
      >

        <div className="text-center position-relative w-100" style={{ zIndex: 1 }}>
          <h1 className="display-4 fw-bold mb-3 text-uppercase" style={{ color: '#2764AE' }}>
            CENTRE DE RESSOURCES
          </h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center mb-0 bg-transparent p-0">
              <li className="breadcrumb-item">
                <a href="/" className="text-decoration-none fw-medium" style={{ color: '#3bb143', fontSize: '1.05rem' }}>Accueil</a>
              </li>
              <li className="breadcrumb-item">
                <a href="/about" className="text-decoration-none fw-medium" style={{ color: '#3bb143', fontSize: '1.05rem' }}>A propos</a>
              </li>
              <li className="breadcrumb-item active fw-medium" aria-current="page" style={{ color: '#2764AE', fontSize: '1.05rem' }}>
                Centre de ressources
              </li>
            </ol>
          </nav>
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

      {/* Footer Newsletter Section*/}
      <div id="newsletter" className="container-fluid py-5 wow fadeIn" data-wow-delay="0.1s" style={{ backgroundColor: '#2764AE' }}>
        <div className="container text-center py-4">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <h1 className="display-6 text-white mb-4 fw-bold">Inscrivez-vous à la Newsletter</h1>
              <form className="position-relative w-100 mb-2">
                <input 
                  className="form-control border-0 w-100 ps-4 pe-5" 
                  type="email" 
                  placeholder="Entrez votre Email" 
                  style={{ height: "60px", borderRadius: 0 }} 
                  required
                />
                <button type="submit" className="btn btn-lg-square shadow-none position-absolute top-0 end-0 mt-2 me-2">
                  <i className="fa fa-paper-plane text-primary fs-4"></i>
                </button>
              </form>
              <p className="mb-0 text-white">N'ayez crainte vous ne reçevrez aucun Spam dans votre boîte mail.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Basic */}
      <footer className="container-fluid footer py-5 mt-auto bg-dark">
        <div className="container">
          <div className="row g-5 py-5">
            <div className="col-lg-3 col-md-6">
              <img className="img-fluid w-75 bg-white p-2 rounded" src="/ONGBusola-front/LOGO HORIZONTAL-02-02.png" alt="Logo Busola" />
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-light mb-4">Liens rapides</h4>
              <a className="btn btn-link" href="/about">Qui sommes-nous?</a>
            </div>
          </div>
          <div className="copyright pt-5 border-top border-secondary">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0 text-white">
                &copy; <a className="fw-semi-bold text-white text-decoration-none" href="#!">ONG BUSOLA</a>, Tous droits réservés.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
