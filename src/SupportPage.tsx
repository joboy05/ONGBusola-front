import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Handshake, Users, ShieldCheck, Mail, ArrowRight } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function SupportPage() {
  const [activeTab, setActiveTab] = useState<'don' | 'benevole' | 'partenaire'>('don');
  
  useEffect(() => {
    if (window.WOW) {
      new window.WOW().init();
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="wrapper">
      <Navbar />

      {/* Page Header Banner */}
      <div
        className="container-fluid d-flex flex-column align-items-center justify-content-center"
        style={{
          minHeight: '280px',
          background: `url('/motif-logo.png') center/cover`,
          opacity: 0.9,
          position: 'relative',
          paddingTop: '80px',
          paddingBottom: '40px'
        }}
      >
        <div className="text-center position-relative w-100" style={{ zIndex: 1 }}>
          <h1 className="display-4 fw-bold mb-3 text-uppercase" style={{ color: '#2764AE' }}>
            NOUS SOUTENIR
          </h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center mb-0 bg-transparent p-0">
              <li className="breadcrumb-item">
                <Link to="/" className="text-decoration-none fw-medium" style={{ color: '#3bb143', fontSize: '1.05rem' }}>Accueil</Link>
              </li>
              <li className="breadcrumb-item active fw-medium" aria-current="page" style={{ color: '#2764AE', fontSize: '1.05rem' }}>
                Soutenir Busola
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Intro Section */}
      <div className="container py-5 bg-white text-center">
        <h2 className="display-6 fw-bold mb-4" style={{ color: '#2764AE' }}>
          Ensemble, créons un impact durable
        </h2>
        <p className="fs-5 text-muted mx-auto" style={{ maxWidth: '800px', lineHeight: '1.8' }}>
          Les actions de l'ONG Busola au Nord-Bénin reposent sur la solidarité de nos soutiens et de nos partenaires. Que vous souhaitiez faire un don ponctuel, offrir votre temps ou nouer un partenariat stratégique, chaque contribution nous aide à avancer vers plus de dignité et d'égalité.
        </p>
      </div>

      {/* Toggles */}
      <div className="container pb-5">
        <div className="d-flex justify-content-center flex-wrap gap-3 mb-5">
          <button 
            className={`btn px-5 py-3 rounded-pill fw-bold fs-5 shadow-sm transition-all ${activeTab === 'don' ? 'btn-primary text-white' : 'btn-outline-primary'}`}
            onClick={() => setActiveTab('don')}
          >
            <Heart className="me-2" size={24} /> Faire un don
          </button>
          <button 
            className={`btn px-5 py-3 rounded-pill fw-bold fs-5 shadow-sm transition-all ${activeTab === 'benevole' ? 'btn-secondary text-white' : 'btn-outline-secondary'}`}
            onClick={() => setActiveTab('benevole')}
          >
            <Users className="me-2" size={24} /> Devenir bénévole
          </button>
          <button 
            className={`btn px-5 py-3 rounded-pill fw-bold fs-5 shadow-sm transition-all ${activeTab === 'partenaire' ? 'btn-tertiary text-white' : 'btn-outline-tertiary'}`}
            onClick={() => setActiveTab('partenaire')}
          >
            <Handshake className="me-2" size={24} /> Devenir partenaire
          </button>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-10">
            {/* OBTENTION DON */}
            {activeTab === 'don' && (
              <div className="bg-light p-5 rounded-5 shadow-sm animate-fade-in border" style={{ borderColor: 'rgba(40,100,174,0.1)' }}>
                <div className="row g-5 align-items-center">
                  <div className="col-md-6">
                    <img src="/action-3.jpg" className="img-fluid rounded-4 shadow" alt="Impact du don" style={{ objectFit: 'cover', height: '100%', minHeight: '350px' }} />
                  </div>
                  <div className="col-md-6">
                    <h3 className="fw-bold mb-4" style={{ color: '#2764AE' }}>Soutenez nos actions sur le terrain</h3>
                    <p className="text-muted mb-4" style={{ textAlign: 'justify' }}>
                      Votre don aide directement des jeunes filles à rester à l'école, des femmes à accéder à l'alphabétisation, et des communautés à prévenir les violences basées sur le genre.
                    </p>
                    <div className="d-flex align-items-center mb-3">
                      <ShieldCheck size={28} className="text-tertiary me-3" />
                      <span className="fw-semi-bold">Paiement 100% sécurisé et transparent</span>
                    </div>
                    <div className="d-flex align-items-center mb-4">
                      <Heart size={28} className="text-secondary me-3" />
                      <span className="fw-semi-bold">Rapport d'impact partagé chaque année</span>
                    </div>
                    
                    <a href="mailto:contact@busola.org?subject=Soutien%20Financier" className="btn btn-primary btn-lg w-100 rounded-pill py-3 fw-bold shadow">
                      Contactez-nous pour aider <ArrowRight className="ms-2" size={20} />
                    </a>
                  </div>
                </div>
              </div>
            )}

            {/* BENEVOLAT */}
            {activeTab === 'benevole' && (
              <div className="bg-light p-5 rounded-5 shadow-sm animate-fade-in border" style={{ borderColor: 'rgba(243,156,18,0.1)' }}>
                <div className="row g-5 align-items-center">
                  <div className="col-md-6 order-md-2">
                    <img src="/team-1.jpg" className="img-fluid rounded-4 shadow" alt="Bénévolat" style={{ objectFit: 'cover', height: '100%', minHeight: '350px' }} />
                  </div>
                  <div className="col-md-6 order-md-1">
                    <h3 className="fw-bold mb-4" style={{ color: '#f39c12' }}>Rejoignez notre équipe d'action</h3>
                    <p className="text-muted mb-4" style={{ textAlign: 'justify' }}>
                      Vous êtes développeur, communicant, spécialiste de la santé, formateur ou simplement désireux d'agir pour les droits humains ? Busola cherche des profils engagés et dynamiques.
                    </p>
                    <ul className="list-unstyled text-muted mb-4">
                      <li className="mb-2"><i className="fa fa-check text-secondary me-2"></i>Missions de terrain et plaidoyer</li>
                      <li className="mb-2"><i className="fa fa-check text-secondary me-2"></i>Actions de communication & événements</li>
                      <li className="mb-2"><i className="fa fa-check text-secondary me-2"></i>Expertise technique (Santé, Droit)</li>
                    </ul>
                    <a href="mailto:contact@busola.org?subject=Candidature%20de%20Bénévolat" className="btn btn-secondary btn-lg w-100 text-white rounded-pill py-3 fw-bold shadow">
                      Soumettre mon profil <Mail className="ms-2" size={20} />
                    </a>
                  </div>
                </div>
              </div>
            )}

            {/* PARTENARIAT */}
            {activeTab === 'partenaire' && (
              <div className="bg-light p-5 rounded-5 shadow-sm animate-fade-in border" style={{ borderColor: 'rgba(39,174,96,0.1)' }}>
                <div className="row g-5 align-items-center">
                  <div className="col-md-6">
                    <div className="row g-2 justify-content-center">
                      {['unfpa.png', 'unicef.png', 'canada.png', 'logo-uk.jpg'].map((p, i) => (
                        <div className="col-6" key={i}>
                          <div className="bg-white p-3 rounded-4 shadow-sm h-100 d-flex align-items-center justify-content-center">
                            <img src={`/${p}`} className="img-fluid" style={{ maxHeight: '80px', objectFit: 'contain' }} alt="Partner" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <h3 className="fw-bold mb-4" style={{ color: '#27ae60' }}>Inscrivez votre RSE dans l'action</h3>
                    <p className="text-muted mb-4" style={{ textAlign: 'justify' }}>
                      Les fondations, entreprises et ambassades sont les piliers de notre croissance. Nous développons des projets sur mesure garantissant un suivi exigeant des indicateurs techniques et financiers.
                    </p>
                    <p className="text-muted mb-4">
                      Nous proposons un partenariat :<br/>
                      <strong>► Financier</strong> (Financement direct de projets)<br/>
                      <strong>► Technique</strong> (Appui et échange de compétences)<br/>
                      <strong>► Médiatique</strong> (Visibilité mutuelle et campagnes)
                    </p>
                    <a href="mailto:contact@busola.org?subject=Proposition%20de%20Partenariat" className="btn btn-tertiary text-white btn-lg w-100 rounded-pill py-3 fw-bold shadow">
                      Discutons-en ensemble <Handshake className="ms-2" size={20} />
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
