import React, { useState } from 'react';
import Navbar from './Navbar';

interface TeamMember {
  name: string;
  role: string;
  description: string;
  photo: string;
  email?: string;
  contact?: string;
  facebook?: string;
  linkedin?: string;
  twitter?: string;
}

export default function TeamPage() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const team: TeamMember[] = [
    {
      name: "Sybgath SANNI",
      role: "Présidente du Conseil d’Administration",
      photo: "/ONGBusola-front/pca.png",
      description: "Pionnière de la naissance de l'ONG BUSOLA, est une figure remarquable, dotée d'un esprit brillant, d'un talent indéniable et d'un esprit innovant. En tant qu'entrepreneuse émérite, elle a fondé plusieurs entreprises prospères telles que BUSOLA BUILDINGS SARL, SUPERMARCHÉ CHANCE GLORY et le restaurant AFRICAN'S DELICES by SYB. En tant que gestionnaire de projets de formation, Sybgath se spécialise dans le domaine du Droit à la Santé Sexuelle et Reproductive (DSSR) ainsi que dans les..."
    },
    {
      name: "Alain ASSANKPON",
      role: "Président d'honneur",
      photo: "/ONGBusola-front/ph.png",
      description: ""
    },
    {
      name: "BOUKO Chabi Dramane",
      role: "Président du Conseil de Surveillance",
      photo: "/ONGBusola-front/pcs.png",
      description: ""
    },
    {
      name: "Abouyaïdou MAMA",
      role: "Directeur Exécutif",
      photo: "/ONGBusola-front/de.png",
      email: "mamaabouyaidou22@gmail.com",
      description: "MAMA Abouyaïdou est doctorant en relations internationales à l’Université de Parakou (Bénin), spécialisé en sécurité internationale, cohésion sociale et prévention du terrorisme au Sahel. Fort de plus de huit années d’expérience, il a coordonné et supervisé des projets communautaires majeurs financés par des partenaires internationaux tels que l’UNICEF, l’Union européenne et CARE International. Coordonnateur et Directeur exécutif de l’ONG Busola, il œuvre dans les domaines de la paix, des VBG, du développement rural et de la santé sexuelle et reproductive. Assistant de recherche et enseignant universitaire, il est certifié par le Peace Operations Training Institute des Nations Unies. Sa vision est de transformer la recherche en action pour une paix durable et inclusive."
    },
    {
      name: "Fadel KASSALI",
      role: "Assistant Projet",
      photo: "/ONGBusola-front/ap.png",
      email: "kassalifadel4@gmail.com",
      description: ""
    },
    {
      name: "Zoulfath ZIME ",
      role: "Chargé de Communauté ",
      photo: "/ONGBusola-front/cc.png",
      description: ""
    }
  ];

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
        <div className="text-center position-relative z-1" style={{ marginTop: '20px' }}>
          <h1 className="display-4 fw-bold mb-3 text-uppercase text-primary" style={{ letterSpacing: '1px' }}>
            La force de frappe
          </h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item">
                <a href="/" className="text-decoration-none fw-medium" style={{ color: '#3ab074' }}>Accueil</a>
              </li>
              <li className="breadcrumb-item">
                <a href="/about" className="text-decoration-none fw-medium" style={{ color: '#3ab074' }}>A propos</a>
              </li>
              <li className="breadcrumb-item active fw-medium" style={{ color: '#3ab074' }} aria-current="page">
                Notre équipe
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Blue Sub-banner */}
      <div className="container-fluid p-0 d-flex position-relative shadow-sm" style={{ backgroundColor: '#2764AE', minHeight: '120px' }}>
        <div className="container d-flex align-items-center justify-content-center text-white text-center px-4" style={{ minHeight: '120px' }}>
          <h5 className="mb-0 fw-bold" style={{ fontSize: '1.25rem', lineHeight: 1.5 }}>
             - Contribuer a l'émergence des dynamiques du développement communautaire
          </h5>
        </div>
        <div 
          className="d-none d-lg-flex flex-column align-items-center justify-content-center position-absolute end-0 h-100"
          style={{ width: '80px', backgroundColor: '#f59f23', writingMode: 'vertical-lr', transform: 'rotate(180deg)' }}
        >
          <span className="text-white fw-bold" style={{ fontSize: '1rem', letterSpacing: '1px' }}>Découvrez</span>
        </div>
      </div>

      {/* Team Content */}
      <div className="container-fluid py-5 bg-white">
        <div className="container py-5">
          <div className="text-center mx-auto mb-5 p-3">
            <div className="d-flex align-items-center justify-content-center mb-4">
              <div style={{ height: "1px", background: "#3ab074", width: "40px" }}></div>
              <span className="text-white text-uppercase px-3 py-1 mx-2" style={{ backgroundColor: '#3ab074', fontSize: '0.85rem' }}>La Team Busola</span>
              <div style={{ height: "1px", background: "#3ab074", width: "40px" }}></div>
            </div>

            <h1 className="fw-bold mb-5" style={{ lineHeight: 1.4, fontSize: '2.5rem' }}>
              <span className="text-uppercase text-white px-3 py-2" style={{ backgroundColor: '#2764AE' }}>Découvrez la force de frappe de</span><br/>
              <span className="text-uppercase text-white px-3 py-2 mt-2 d-inline-block" style={{ backgroundColor: '#2764AE' }}>Busola ONG</span>
            </h1>
          </div>
          
          <div className="row g-4 justify-content-center">
            {team.map((m, i) => (
              <div key={i} className="col-md-6 col-lg-4 mb-4">
                <div className="team-item bg-white h-100 d-flex flex-column shadow-sm" style={{ border: '1px solid #f0f0f0' }}>
                  <div className="d-flex" style={{ height: '350px' }}>
                    {/* Img Container */}
                    <div className="w-100 position-relative overflow-hidden">
                      <img className="img-fluid w-100 h-100" src={m.photo} style={{ objectFit: 'cover', objectPosition: 'top center' }} alt={m.name} />
                    </div>
                    {/* Social Container Beige */}
                    <div className="d-flex flex-column justify-content-end align-items-center py-4 flex-shrink-0" style={{ width: '60px', backgroundColor: '#fcf8ec' }}>
                      <a className="btn btn-primary btn-sm btn-square rounded-0 mb-3" href="#!"><i className="fab fa-facebook-f"></i></a>
                      <a className="btn btn-primary btn-sm btn-square rounded-0" href="#!"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                  </div>
                  {/* Name and Role Section */}
                  <div className="p-4 bg-white d-flex flex-column justify-content-center" style={{ minHeight: '120px' }}>
                    <h5 className="text-primary fw-bold mb-2" style={{ fontSize: '1.2rem' }}>{m.name}</h5>
                    <p className="text-secondary fw-bold mb-0" style={{ fontSize: '0.85rem', textTransform: 'uppercase' }}>{m.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="container-fluid footer py-5 mt-auto">
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
              <h4 className="text-light mb-4">Horaires</h4>
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
