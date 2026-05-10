import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

export default function ContactPage() {
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
            CONTACT
          </h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center mb-0 bg-transparent p-0">
              <li className="breadcrumb-item">
                <Link to="/" className="text-decoration-none fw-medium" style={{ color: '#3bb143', fontSize: '1.05rem' }}>Accueil</Link>
              </li>
              <li className="breadcrumb-item active fw-medium" aria-current="page" style={{ color: '#2764AE', fontSize: '1.05rem' }}>
                Contact
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-fluid py-5 bg-white">
        <div className="container py-5">
          <div className="row g-5">
            {/* Left Column: Map and Title */}
            <div className="col-lg-5 wow fadeIn" data-wow-delay="0.1s">
              <div className="d-flex align-items-center mb-3">
                <span className="text-white text-uppercase px-2 py-1 me-3" style={{ fontSize: '0.8rem', letterSpacing: '1px', backgroundColor: '#3bb143' }}>CONTACT</span>
                <div style={{ height: "1px", background: "#3bb143", width: "40px" }}></div>
              </div>
              <h1 className="fw-bold mb-4" style={{ color: '#2764AE', fontSize: '2.5rem', lineHeight: 1.3 }}>
                En cas de besoin, n'hésitez pas à nous contacter.
              </h1>
              
              <div className="w-100 mt-4 overflow-hidden shadow-sm" style={{ height: '350px' }}>
                <iframe 
                  className="w-100 h-100"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  src="https://maps.google.com/maps?q=ONG%20BUSOLA%20Parakou&t=&z=15&ie=UTF8&iwloc=&output=embed"
                ></iframe>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="col-lg-7 wow fadeIn" data-wow-delay="0.3s">
              <h3 className="fw-bold mb-3" style={{ color: '#000' }}>
                Remplissez ce formulaire pour nous envoyer un message.
              </h3>
              <p className="text-muted mb-4" style={{ fontSize: '0.90rem', lineHeight: '1.6' }}>
                Pour des besoin d'assistance, de soutient ou d'orientation; pour faire un don ou avoir plus de renseignement sur les projet et actions de l'organisation, vous avez toutes les informations qu'il vous faut pour entrer en contact avec nous.
              </p>
              
              <form>
                <div className="row g-3">
                  <div className="col-md-6">
                    <input type="text" className="form-control px-3 border" placeholder="Votre Nom" style={{ height: '50px', borderRadius: '0' }} />
                  </div>
                  <div className="col-md-6">
                    <input type="email" className="form-control px-3 border" placeholder="Votre Email" style={{ height: '50px', borderRadius: '0' }} />
                  </div>
                  <div className="col-12">
                    <input type="text" className="form-control px-3 border" placeholder="Objet" style={{ height: '50px', borderRadius: '0' }} />
                  </div>
                  <div className="col-12">
                    <textarea className="form-control px-3 py-3 border" rows={6} placeholder="Message" style={{ borderRadius: '0' }}></textarea>
                  </div>
                  <div className="col-12 mt-4">
                    <button className="btn text-white py-3 px-4" type="submit" style={{ backgroundColor: '#2764AE', borderRadius: '0', fontSize: '1rem' }}>
                      Envoyer le Message
                    </button>
                  </div>
                </div>
              </form>
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
