import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const resources = [
  {
    title: 'Statuts de l’ONG',
    category: 'Gouvernance',
    description: 'Les statuts officiels qui structurent l’organisation et guident nos prises de décision.',
    file: '/STATUTS.pdf',
    updated: '2024'
  },
  {
    title: 'PEAHS',
    category: 'Protection',
    description: "Politique de protection contre l'exploitation, les abus et le harcèlement sexuel.",
    file: '/PEAHS_Busola_hv3fXKQ.pdf',
    updated: '2025'
  },
  {
    title: 'Règlement intérieur',
    category: 'Ressources humaines',
    description: "Le règlement intérieur de Busola ONG pour un environnement de travail respectueux et inclusif.",
    file: '/Règlement_Interieur_ONG_BUSOLA_1.pdf',
    updated: '2025'
  },
  {
    title: 'Rapport de capitalisation RESPECT',
    category: 'Rapports',
    description: 'Capitalisation des résultats du projet RESPECT et des leçons tirées pour l’impact social.',
    file: '/RAPPORT_DE_CAPITALISATION__RESPECT_BUSOLA2026_VF.pdf',
    updated: '2026'
  }
];

export default function ResourcePage() {
  useEffect(() => {
    if (window.WOW) {
      new window.WOW().init();
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="wrapper">
      <Navbar />

      <div
        className="container-fluid position-relative overflow-hidden"
        style={{
          minHeight: '520px',
          background: `linear-gradient(135deg, rgba(40, 100, 174, 0.9) 0%, rgba(39, 176, 116, 0.85) 100%), url('hero-slider.jpeg') center/cover`,
          paddingTop: '110px',
          paddingBottom: '90px'
        }}
      >
        <div className="position-absolute rounded-circle bg-white opacity-10" style={{ width: '240px', height: '240px', top: '-80px', left: '-80px' }}></div>
        <div className="position-absolute rounded-circle bg-white opacity-10" style={{ width: '320px', height: '320px', bottom: '-120px', right: '-120px' }}></div>

        <div className="container position-relative text-white" style={{ zIndex: 2 }}>
          <nav aria-label="breadcrumb" className="mb-4">
            <ol className="breadcrumb justify-content-center mb-0 bg-transparent p-0">
              <li className="breadcrumb-item">
                <Link to="/" className="text-white text-decoration-none opacity-80 fw-medium" style={{ fontSize: '0.95rem' }}>Accueil</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="/about" className="text-white text-decoration-none opacity-80 fw-medium" style={{ fontSize: '0.95rem' }}>À propos</Link>
              </li>
              <li className="breadcrumb-item active fw-bold text-warning" aria-current="page" style={{ fontSize: '0.95rem' }}>
                Centre de ressources
              </li>
            </ol>
          </nav>

          <div className="row">
            <div className="col-lg-8">
              <span className="text-uppercase fw-bold" style={{ color: 'var(--brand-secondary)', fontSize: '0.85rem', letterSpacing: '2px' }}>
                Centre de ressources
              </span>
              <h1 className="display-5 fw-black text-uppercase mt-3 mb-4" style={{ letterSpacing: '1px', lineHeight: '1.05' }}>
                Tous les documents officiels de Busola ONG
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-white py-5">
        <div className="container py-5">
          <div className="row g-4 mb-5">
            <div className="col-lg-7">
              <div className="row g-3">
                <div className="col-sm-4">
                  <div className="rounded-4 p-3" style={{ background: 'var(--brand-light)', border: '1px solid rgba(40, 100, 174, 0.08)' }}>
                    <div className="text-uppercase fw-bold mb-2" style={{ fontSize: '0.75rem', letterSpacing: '1px', color: 'var(--brand-dark)' }}>
                      Documents
                    </div>
                    <div className="display-6 fw-black" style={{ color: 'var(--brand-dark)' }}>4</div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="rounded-4 p-3" style={{ background: 'var(--brand-light)', border: '1px solid rgba(40, 100, 174, 0.08)' }}>
                    <div className="text-uppercase fw-bold mb-2" style={{ fontSize: '0.75rem', letterSpacing: '1px', color: 'var(--brand-dark)' }}>
                      Catégories
                    </div>
                    <div className="display-6 fw-black" style={{ color: 'var(--brand-dark)' }}>4</div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="rounded-4 p-3" style={{ background: 'var(--brand-light)', border: '1px solid rgba(40, 100, 174, 0.08)' }}>
                    <div className="text-uppercase fw-bold mb-2" style={{ fontSize: '0.75rem', letterSpacing: '1px', color: 'var(--brand-dark)' }}>
                      Format
                    </div>
                    <div className="display-6 fw-black" style={{ color: 'var(--brand-dark)' }}>PDF</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="rounded-4 p-4" style={{ background: 'var(--brand-light)' }}>
                <h5 className="fw-bold mb-3" style={{ color: 'var(--brand-dark)' }}>Pourquoi ce centre ?</h5>
                <ul className="list-unstyled mb-0" style={{ lineHeight: '2', color: 'var(--brand-dark)', opacity: 0.85 }}>
                  <li>• Transparence dans nos actions et nos procédures</li>
                  <li>• Protection et sécurité pour toutes nos équipes</li>
                  <li>• Pilotage clair de nos projets et de nos partenariats</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row align-items-center mb-5">
            <div className="col-lg-7">
              <span className="text-uppercase fw-bold" style={{ color: 'var(--brand-secondary)', fontSize: '0.85rem', letterSpacing: '2px' }}>
                Documents officiels
              </span>
              <h2 className="fw-black mb-3" style={{ fontSize: 'clamp(2.2rem, 4vw, 3rem)', color: 'var(--brand-text)', lineHeight: '1.05' }}>
                Accédez à nos ressources certifiées
              </h2>
              <p className="text-muted" style={{ maxWidth: '700px', lineHeight: '1.8' }}>
                Chaque document est validé par notre équipe de gouvernance. Téléchargez les outils et rapports qui vous permettent de mieux comprendre Busola ONG.
              </p>
            </div>
            <div className="col-lg-5">
              <div className="rounded-4 p-4" style={{ background: 'var(--brand-light)' }}>
                <h5 className="fw-bold mb-3" style={{ color: 'var(--brand-dark)' }}>Comment utiliser les ressources ?</h5>
                <p className="mb-2 text-muted">Cliquez sur « Télécharger » pour ouvrir le document. Vous pouvez ensuite enregistrer ou imprimer chaque PDF.</p>
                <p className="mb-0 text-muted">Tous les documents sont mis à jour régulièrement afin de rester en conformité avec nos engagements.</p>
              </div>
            </div>
          </div>

          <div className="row g-4">
            {resources.map((resource, index) => (
              <div key={index} className="col-md-6 col-xl-3 wow fadeInUp" data-wow-delay={`${0.1 + index * 0.08}s`}>
                <div className="h-100 rounded-4 overflow-hidden shadow-sm" style={{ border: '1px solid rgba(40, 100, 174, 0.08)' }}>
                  <div className="p-4 bg-white h-100 d-flex flex-column">
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <span className="badge rounded-pill text-uppercase fw-bold" style={{ background: 'var(--brand-light)', color: 'var(--brand-dark)', fontSize: '0.75rem', letterSpacing: '0.8px' }}>
                        {resource.category}
                      </span>
                      <span className="text-muted" style={{ fontSize: '0.8rem' }}>{resource.updated}</span>
                    </div>

                    <h3 className="h5 fw-bold mb-3" style={{ color: 'var(--brand-dark)' }}>{resource.title}</h3>
                    <p className="text-muted mb-4" style={{ flexGrow: 1, lineHeight: '1.75' }}>{resource.description}</p>

                    <div className="mt-auto pt-3 border-top" style={{ borderColor: 'rgba(40, 100, 174, 0.08)' }}>
                      <a href={resource.file} target="_blank" rel="noopener noreferrer" className="btn btn-primary w-100 rounded-pill py-3 fw-bold text-white">
                        Télécharger le PDF
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
