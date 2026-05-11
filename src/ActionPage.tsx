import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const actions = [
  {
    id: 'projet-respect',
    title: 'PROJET RESPECT',
    tag: 'DSSR & VBG',
    img: '/ONGBusola-front/projet_respect.png',
    desc: "Le projet RESPECT est une initiative de promotion des droits en santé sexuelle et reproductive (SSR) des adolescentes et des jeunes, intégrant la prévention des violences basées sur le genre (VBG) et le renforcement de l'engagement communautaire.",
    financement: '3000000.00 Fcfa'
  },
  {
    id: 'tedidjo',
    title: 'TEDIDJO',
    tag: 'DSSR & VBG',
    img: '/ONGBusola-front/tedjido.png',
    desc: "Le projet TEDIDJO est une initiative de développement communautaire visant à améliorer la santé sexuelle et reproductive (SSR) des adolescents et des jeunes, à prévenir les violences basées sur le genre (VBG) et à renforcer l'autonomisation des filles et des jeunes femmes, notamment dans les départements du nord du Bénin.",
    financement: '13000000.00 Fcfa'
  },
  {
    id: 'yes',
    title: 'YES',
    tag: 'Autonomisation des jeunes',
    img: '/ONGBusola-front/yes.png',
    desc: "Le projet YES (Youth Engagement for Sexual and Reproductive Health Rights) est une initiative visant à renforcer l'autonomisation des jeunes, à promouvoir l'accès aux droits en santé sexuelle et reproductive (SSR) et à prévenir les violences basées sur le genre (VBG).",
    financement: '3000000.00 Fcfa'
  },
  {
    id: 'pageda',
    title: 'PAGEDA',
    tag: 'Leadership et Autonomisation',
    img: '/ONGBusola-front/pageda.png',
    desc: "Le Programme PAGEDA a pour objectif de lutter contre la pauvreté par l'Alphabétisation fonctionnelle, en liant les cours à la formation professionnelle, elle s'étend sur 27 communes du Nord Bénin. Ce programme est financé par la Coopération Suisse et vise l'autonomisation de 30 000 apprenants dans le Nord Bénin.",
    financement: '11000000.00 Fcfa'
  }
];

export default function ActionPage() {
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
            ACTIONS MENÉES
          </h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center mb-0 bg-transparent p-0">
              <li className="breadcrumb-item">
                <a href="/" className="text-decoration-none fw-medium" style={{ color: '#3bb143', fontSize: '1.05rem' }}>Accueil</a>
              </li>
              <li className="breadcrumb-item active fw-medium" aria-current="page" style={{ color: '#2764AE', fontSize: '1.05rem' }}>
                Actions
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-fluid py-5 bg-white">
        <div className="container py-5">
          {/* Header */}
          <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="d-flex align-items-center justify-content-center mb-3">
              <div className="flex-grow-1" style={{ height: "2px", background: "var(--bs-tertiary)", maxWidth: "50px" }}></div>
              <span className="bg-tertiary text-white text-uppercase p-1 mx-3" style={{ fontSize: '0.9rem', letterSpacing: '1px' }}>PROJETS</span>
              <div className="flex-grow-1" style={{ height: "2px", background: "var(--bs-tertiary)", maxWidth: "50px" }}></div>
            </div>
            <h1 className="display-5 text-uppercase fw-bold text-white px-4 py-2" style={{ backgroundColor: '#2764AE', display: 'inline-block' }}>
              PRINCIPALES RÉALISATIONS
            </h1>
          </div>

          {/* Cards Grid */}
          <div className="row g-4 d-flex align-items-stretch mb-5">
            {actions.map((proj, i) => (
              <div key={i} className="col-md-6 col-lg-4 d-flex wow fadeInUp" data-wow-delay={`${0.1 + i * 0.1}s`}>
                <div className="bg-white shadow d-flex flex-column rounded w-100 overflow-hidden" style={{ border: '1px solid #f8f9fa' }}>
                  <div className="position-relative">
                    <img className="img-fluid w-100" src={proj.img} alt={proj.title} style={{ height: '220px', objectFit: 'cover' }} />
                    <span 
                      className="px-3 py-1 position-absolute top-0 end-0 text-white" 
                      style={{ backgroundColor: '#f59f23', fontSize: '0.85rem' }}
                    >
                      {proj.tag}
                    </span>
                  </div>
                  
                  {/* Content block */}
                  <div className="p-4 d-flex flex-column flex-grow-1">
                    <h3 className="h4 fw-bold text-uppercase mb-3" style={{ color: '#000' }}>{proj.title}</h3>
                    <p className="text-muted flex-grow-1" style={{ fontSize: '0.95rem', lineHeight: '1.5' }}>
                      {proj.desc}
                    </p>
                    
                    {/* Financement Info */}
                    <div className="text-center mt-3 pt-3">
                      <h6 className="fw-bold text-dark mb-1" style={{ fontSize: '0.9rem' }}>Financement</h6>
                      <p className="text-muted mb-0" style={{ fontSize: '0.95rem' }}>{proj.financement}</p>
                    </div>
                  </div>
                  
                  {/* En savoir plus Button */}
                  <Link to={`/actions/${proj.id}`} className="btn text-white w-100 border-0 rounded-0 py-3" style={{ backgroundColor: '#2764AE' }}>
                    <i className="fa fa-plus me-2"></i> En savoir plus
                  </Link>
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
