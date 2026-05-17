import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Navbar from './Navbar';
import { newsItems } from './NewsPage';

export default function NewsDetailPage() {
  const { id } = useParams<{ id: string }>();
  const newsId = id ? parseInt(id) : null;
  const item = newsItems.find(n => n.id === newsId);

  useEffect(() => {
    if (window.WOW) {
      new window.WOW().init();
    }
    window.scrollTo(0, 0);
  }, []);

  if (!item) {
    return <Navigate to="/actualites" />;
  }

  return (
    <div className="wrapper">
      <Navbar />

      {/* Page Header Banner */}
      <div
        className="container-fluid d-flex flex-column align-items-center justify-content-center"
        style={{
          minHeight: '280px',
          background: `url('/ONGBusola-front/motif-logo.png') center/cover`,
          opacity: 0.9,
          position: 'relative',
          paddingTop: '80px',
          paddingBottom: '40px'
        }}
      >
        <div className="text-center position-relative w-100" style={{ zIndex: 1 }}>
          <h1 className="display-4 fw-bold mb-3 text-uppercase" style={{ color: '#2764AE' }}>
            ACTUALITÉS
          </h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center mb-0 bg-transparent p-0">
              <li className="breadcrumb-item">
                <Link to="/" className="text-decoration-none fw-medium" style={{ color: '#3bb143', fontSize: '1.05rem' }}>Accueil</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="/actualites" className="text-decoration-none fw-medium" style={{ color: '#3bb143', fontSize: '1.05rem' }}>Actualités</Link>
              </li>
              <li className="breadcrumb-item active fw-medium" aria-current="page" style={{ color: '#2764AE', fontSize: '1.05rem' }}>
                Détails
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-fluid py-5 bg-white">
        <div className="container py-5">
          <div className="row g-5">
            {/* Article Content */}
            <div className="col-lg-8 wow fadeInUp" data-wow-delay="0.1s">
              <div className="mb-4 overflow-hidden rounded-4 shadow-sm" style={{ maxHeight: '500px' }}>
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="img-fluid w-100" 
                  style={{ objectFit: 'cover' }} 
                />
              </div>
              <p className="mb-3 text-tertiary fw-bold">
                <i className="fa fa-calendar-alt me-2" style={{ color: '#27ae60' }}></i>
                {item.date}
              </p>
              <h1 className="display-6 fw-bold mb-4" style={{ color: '#2764AE' }}>{item.title}</h1>
              <div className="text-muted" style={{ lineHeight: '1.8', textAlign: 'justify', fontSize: '1.1rem' }}>
                {item.desc}
                <br /><br />
                {/* Placeholder for more content if available */}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </div>
              
              <div className="mt-5 pt-4 border-top">
                <Link to="/actualites" className="btn btn-primary px-4 py-2 rounded-pill">
                  <i className="fa fa-arrow-left me-2"></i> Retour aux actualités
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
              <div className="p-4 bg-light rounded-4 shadow-sm">
                <h4 className="fw-bold mb-4" style={{ color: '#2764AE' }}>Dernières Actualités</h4>
                {newsItems.filter(n => n.id !== item.id).slice(0, 3).map(other => (
                  <div key={other.id} className="mb-4 border-bottom pb-3">
                    <p className="small text-muted mb-1">{other.date}</p>
                    <Link to={`/actualites/${other.id}`} className="text-decoration-none text-dark fw-bold h6 d-block mb-0 hover-text-primary">
                      {other.title}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
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
              <img className="img-fluid w-75 bg-white p-2 rounded" src="/ONGBusola-front/logo.png" alt="Logo Busola" />
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-light mb-4">Liens rapides</h4>
              <Link className="btn btn-link" to="/about">Qui sommes-nous?</Link>
              <Link className="btn btn-link" to="/contact">Nous contacter</Link>
              <Link className="btn btn-link" to="/actions">Nos actions</Link>
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
