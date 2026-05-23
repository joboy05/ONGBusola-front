import React, { useEffect } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const actions = [
  {
    id: 'projet-respect',
    title: 'PROJET RESPECT',
    tag: 'DSSR & VBG',
    img: '/projet_respect.png',
    desc: "Le projet RESPECT est une initiative de promotion des droits en santé sexuelle et reproductive (SSR) des adolescentes et des jeunes, intégrant la prévention des violences basées sur le genre (VBG) et le renforcement de l'engagement communautaire.",
    financement: '3000000.00 Fcfa'
  },
  {
    id: 'tedidjo',
    title: 'TEDIDJO',
    tag: 'DSSR & VBG',
    img: '/tedjido.png',
    desc: "Le projet TEDIDJO est une initiative de développement communautaire visant à améliorer la santé sexuelle et reproductive (SSR) des adolescents et des jeunes, à prévenir les violences basées sur le genre (VBG) et à renforcer l'autonomisation des filles et des jeunes femmes, notamment dans les départements du nord du Bénin.",
    financement: '13000000.00 Fcfa'
  },
  {
    id: 'yes',
    title: 'YES',
    tag: 'Autonomisation des jeunes',
    img: '/yes.png',
    desc: "Le projet YES (Youth Engagement for Sexual and Reproductive Health Rights) est une initiative visant à renforcer l'autonomisation des jeunes, à promouvoir l'accès aux droits en santé sexuelle et reproductive (SSR) et à prévenir les violences basées sur le genre (VBG).",
    financement: '3000000.00 Fcfa'
  },
  {
    id: 'pageda',
    title: 'PAGEDA',
    tag: 'Leadership et Autonomisation',
    img: '/pageda.png',
    desc: "Le Programme PAGEDA a pour objectif de lutter contre la pauvreté par l'Alphabétisation fonctionnelle, en liant les cours à la formation professionnelle, elle s'étend sur 27 communes du Nord Bénin. Ce programme est financé par la Coopération Suisse et vise l'autonomisation de 30 000 apprenants dans le Nord Bénin.",
    financement: '11000000.00 Fcfa'
  }
];

export default function ActionPage() {
  useEffect(() => {
    if (window.WOW) new window.WOW().init();
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
          background: `linear-gradient(135deg, rgba(39, 100, 174, 0.85) 0%, rgba(245, 159, 35, 0.85) 100%), url('action-1.jpg') center/cover`,
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
                Actions menées
              </li>
            </ol>
          </nav>

          <h1 className="display-4 fw-black text-uppercase text-white mb-3" style={{ letterSpacing: '2px', textShadow: '0 2px 10px rgba(0,0,0,0.15)' }}>
            Actions menées
          </h1>
          
          <div className="mx-auto mb-4" style={{ width: '85px', height: '4px', backgroundColor: '#3bb143', borderRadius: '2px' }}></div>

          <p className="lead text-white opacity-95 mx-auto" style={{ maxWidth: '850px', fontSize: '1.15rem', lineHeight: '1.7', textShadow: '0 1px 5px rgba(0,0,0,0.1)' }}>
            Parcourez l'ensemble de nos projets et initiatives sur le terrain pour promouvoir la santé, l'éducation et l'autonomisation au sein des communautés.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-fluid py-5 bg-white">
        <div className="container py-5">
          {/* Header */}
          <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '800px' }}>
            <div className="d-flex align-items-center justify-content-center mb-3">
              <div style={{ height: "1px", background: "#3bb143", width: "40px" }}></div>
              <span className="text-uppercase mx-2 fw-bold" style={{ color: '#3bb143', fontSize: '0.9rem', letterSpacing: '2px' }}>PROJETS</span>
              <div style={{ height: "1px", background: "#3bb143", width: "40px" }}></div>
            </div>
            <h1 className="fw-black mb-4" style={{ lineHeight: 1.2, fontSize: '2.75rem', color: '#111827' }}>
              <span className="text-uppercase fw-black" style={{ color: '#111827', letterSpacing: '-0.5px' }}>Principales</span><br/>
              <span className="text-uppercase fw-black" style={{ color: '#111827', letterSpacing: '-0.5px' }}>Réalisations</span>
            </h1>
          </div>

          {/* Cards Grid */}
          <div className="row g-4 d-flex align-items-stretch mb-5">
            {actions.map((proj, i) => (
              <div key={i} className="col-md-6 col-lg-4 d-flex wow fadeInUp" data-wow-delay={`${0.1 + i * 0.1}s`}>
                <div className="bg-white shadow d-flex flex-column rounded w-100 overflow-hidden" style={{ border: '1px solid #f8f9fa' }}>
                  <div className="position-relative overflow-hidden">
                    <Link to={`/galerie?filter=${proj.id === 'tedidjo' || proj.id === 'projet-respect' ? 'dssr' : proj.id === 'yes' ? 'paix' : 'leadership'}#axis-${proj.id === 'tedidjo' || proj.id === 'projet-respect' ? 'dssr' : proj.id === 'yes' ? 'paix' : 'leadership'}`}>
                      <img className="img-fluid w-100 transition-all hover-scale" src={proj.img} alt={proj.title} style={{ height: '220px', objectFit: 'cover' }} />
                    </Link>
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
                    
                    {/* Financement Info removed as requested */}
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

      <Footer />    </div>
  );
}
