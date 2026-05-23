import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

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

  useEffect(() => {
    if (window.WOW) new window.WOW().init();
    window.scrollTo(0, 0);
  }, []);

  const team: TeamMember[] = [
    {
      name: "Sybgath SANNI",
      role: "Présidente du Conseil d’Administration",
      photo: "/pca.png",
      description: "Pionnière de la naissance de l'ONG BUSOLA, est une figure remarquable, dotée d'un esprit brillant, d'un talent indéniable et d'un esprit innovant. En tant qu'entrepreneuse émérite, elle a fondé plusieurs entreprises prospères telles que BUSOLA BUILDINGS SARL, SUPERMARCHÉ CHANCE GLORY et le restaurant AFRICAN'S DELICES by SYB. En tant que gestionnaire de projets de formation, Sybgath se spécialise dans le domaine du Droit à la Santé Sexuelle et Reproductive (DSSR) ainsi que dans les..."
    },
    {
      name: "Alain ASSANKPON",
      role: "Président d'honneur",
      photo: "/ph.png",
      description: ""
    },
    {
      name: "BOUKO Chabi Dramane",
      role: "Président du Conseil de Surveillance",
      photo: "/pcs.png",
      description: ""
    },
    {
      name: "Abouyaïdou MAMA",
      role: "Directeur Exécutif",
      photo: "/de.png",
      email: "mamaabouyaidou22@gmail.com",
      description: "MAMA Abouyaïdou est doctorant en relations internationales à l’Université de Parakou (Bénin), spécialisé en sécurité internationale, cohésion sociale et prévention du terrorisme au Sahel. Fort de plus de huit années d’expérience, il a coordonné et supervisé des projets communautaires majeurs financés par des partenaires internationaux tels que l’UNICEF, l’Union européenne et CARE International. Coordonnateur et Directeur exécutif de l’ONG Busola, il œuvre dans les domaines de la paix, des VBG, du développement rural et de la santé sexuelle et reproductive. Assistant de recherche et enseignant universitaire, il est certifié par le Peace Operations Training Institute des Nations Unies. Sa vision est de transformer la recherche en action pour une paix durable et inclusive."
    },
    {
      name: "Fadel KASSALI",
      role: "Assistant Projet",
      photo: "/ap.png",
      email: "kassalifadel4@gmail.com",
      description: ""
    },
    {
      name: "Zoulfath ZIME ",
      role: "Chargé de Communauté ",
      photo: "/cc.png",
      description: ""
    }
  ];

  return (
    <div className="wrapper">
      <Navbar />

      {/* Premium Hero Header Banner */}
      <div
        className="container-fluid position-relative d-flex align-items-center justify-content-center text-white py-5 shadow-sm"
        style={{
          minHeight: '500px',
          background: `linear-gradient(135deg, rgba(39, 100, 174, 0.85) 0%, rgba(245, 159, 35, 0.85) 100%), url('team-3.jpg') center/cover`,
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
                Notre équipe
              </li>
            </ol>
          </nav>

          <h1 className="display-4 fw-black text-uppercase text-white mb-3" style={{ letterSpacing: '2px', textShadow: '0 2px 10px rgba(0,0,0,0.15)' }}>
            Notre équipe
          </h1>
          
          <div className="mx-auto mb-4" style={{ width: '85px', height: '4px', backgroundColor: '#3bb143', borderRadius: '2px' }}></div>

          <p className="lead text-white opacity-95 mx-auto" style={{ maxWidth: '850px', fontSize: '1.15rem', lineHeight: '1.7', textShadow: '0 1px 5px rgba(0,0,0,0.1)' }}>
            Rencontrez les personnes engagées et passionnées qui travaillent chaque jour pour la réalisation des objectifs de l'ONG Busola.
          </p>
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
          <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '800px' }}>
            <div className="d-flex align-items-center justify-content-center mb-3">
              <div style={{ height: "1px", background: "#3bb143", width: "40px" }}></div>
              <span className="text-uppercase mx-2 fw-bold" style={{ color: '#3bb143', fontSize: '0.9rem', letterSpacing: '2px' }}>LA TEAM BUSOLA</span>
              <div style={{ height: "1px", background: "#3bb143", width: "40px" }}></div>
            </div>
            <h1 className="fw-black mb-4" style={{ lineHeight: 1.2, fontSize: '2.75rem', color: '#111827' }}>
              <span className="text-uppercase fw-black" style={{ color: '#111827', letterSpacing: '-0.5px' }}>Découvrez la force de frappe de</span><br/>
              <span className="text-uppercase fw-black" style={{ color: '#111827', letterSpacing: '-0.5px' }}>Busola ONG</span>
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

      <Footer />    </div>
  );
}
