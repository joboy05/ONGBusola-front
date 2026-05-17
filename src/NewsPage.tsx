import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

export const newsItems = [
  {
    id: 1,
    title: "Déjeuner de cohésion sociale - Edition 2024",
    date: "17 Décembre 2025",
    img: "/ONGBusola-front/Dejeuner.png",
    desc: "À l’occasion de la célébration de son quatrième anniversaire, BUSOLA ONG a organisé, les 24 et 25 mai 2024, deux journées dédiées à la paix et à la cohésion sociale à Parakou."
  },
  {
    id: 2,
    title: "Mobilisation des zem et conducteurs de Taxi contre la désinformation en période électorale pour préserver la cohésion sociale",
    date: "08 Février 2026",
    img: "/ONGBusola-front/mobilisation.png",
    desc: "Busola ONG, en collaboration avec la Direction Départementale de l’Intérieur et de la Sécurité Publique du Borgou et de l’Alibori, mobilise Zém et conducteurs de taxi pour lutter contre la désinformation en période électorale et renforcer la cohésion sociale."
  },
  {
    id: 3,
    title: "Renforcement de capacités en Plaidoyer et Redevabilité",
    date: "08 Février 2026",
    img: "/ONGBusola-front/news-3.jpg",
    desc: "Du 10 au 12 novembre 2025, l’Hôtel SOUNON SERO de Parakou a accueilli un atelier de renforcement de capacités sur le plaidoyer, organisé par Busola ONG avec l’appui de l’UNFPA Benin et de l'Ambassade des Pays-Bas au Bénin. Cette initiative a réuni vingt-cinq membres de Busola et acteurs de la société civile partenaires..."
  },
  {
    id: 4,
    title: "48H contre le cancer du sein Edition 2025",
    date: "23 Octobre 2025",
    img: "/ONGBusola-front/news-2.jpg",
    desc: "Ce jeudi 23 octobre, la 2ème journée de notre initiative \"48h contre le Cancer du Sein\" a été consacrée à l'extension de notre périmètre d'intervention, en déployant nos équipes au sein d’un deuxieme pole économique majeur de Parakou : Le marché dépôt."
  },
  {
    id: 5,
    title: "Cérémonie de présentation des voeux au CA et aux PTF de Busola",
    date: "20 Février 2026",
    img: "/ONGBusola-front/news-1.jpg",
    desc: "10 Février, Busola ONG a vécu un instant d’exception à l’occasion de sa cérémonie de présentation des vœux à son Président d’Honneur, Monsieur Alain ASSANKPO, ainsi à ses partenaires techniques et financiers locaux, nationaux et internationaux."
  }
];

export default function NewsPage() {
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
              <li className="breadcrumb-item active fw-medium" aria-current="page" style={{ color: '#2764AE', fontSize: '1.05rem' }}>
                Actualités
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-fluid py-5 bg-white">
        <div className="container py-5">
          {/* Section Header */}
          <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "800px" }}>
            <div className="d-flex align-items-center justify-content-center mb-3">
              <span className="text-white text-uppercase px-3 py-1 fw-bold" style={{ backgroundColor: '#27ae60', borderRadius: '4px', fontSize: '0.85rem' }}>
                [ ACTUALITÉS ]
              </span>
            </div>
            <h1 className="display-6 text-uppercase mb-4 fw-bold" style={{ color: '#2764AE' }}>
              Soyez au courant de notre actualités en temps réel
            </h1>
          </div>

          {/* News Grid */}
          <div className="row g-4">
            {newsItems.map((item, i) => (
              <div key={item.id} className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay={`${0.1 + (i % 3) * 0.2}s`}>
                <Link to={`/actualites/${item.id}`} className="text-decoration-none text-dark h-100 d-block">
                  <div className="event-item h-100 p-4 shadow-sm bg-white rounded-4 border transition-all hover-up overflow-hidden">
                    <div className="overflow-hidden rounded-4 mb-4" style={{ height: "220px" }}>
                      <img 
                        className="img-fluid w-100 h-100 transition-all hover-scale" 
                        src={item.img} 
                        style={{ objectFit: "cover" }} 
                        alt={item.title} 
                      />
                    </div>
                    <p className="mb-2 text-tertiary fw-bold small">
                      <i className="fa fa-calendar-alt me-2" style={{ color: '#27ae60' }}></i>
                      {item.date}
                    </p>
                    <h3 className="h5 text-primary fw-bold mb-3" style={{ fontSize: '1.2rem', lineHeight: '1.4' }}>
                      {item.title}
                    </h3>
                    <p className="text-muted small mb-4" style={{ textAlign: 'justify', lineHeight: '1.6' }}>
                      {item.desc}
                    </p>
                    <div className="text-secondary fw-bold small d-inline-flex align-items-center transition-all hover-right">
                      Lire la suite <i className="fa fa-arrow-right ms-2"></i>
                    </div>
                  </div>
                </Link>
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
