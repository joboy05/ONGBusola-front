import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, ChevronLeft, ChevronRight, ZoomIn, Image as ImageIcon, Heart, BookOpen, Users, Star } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

interface GalleryItem {
  id: number;
  title: string;
  category: 'pageda' | 'yes' | 'tedidjo' | 'ngo';
  categoryLabel: string;
  img: string;
  desc: string;
  date: string;
  tag: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Alphabétisation fonctionnelle",
    category: "pageda",
    categoryLabel: "PAGEDA",
    img: "/ONGBusola-front/pageda.png",
    desc: "Cours d'alphabétisation fonctionnelle pour les femmes du Nord-Bénin favorisant leur émancipation économique.",
    date: "Mars 2026",
    tag: "Autonomisation"
  },
  {
    id: 2,
    title: "Sensibilisation et droits SSR",
    category: "tedidjo",
    categoryLabel: "TEDIDJO",
    img: "/ONGBusola-front/tedjido.png",
    desc: "Mobilisation communautaire pour la promotion des Droits en Santé Sexuelle et Reproductive des adolescents.",
    date: "Février 2026",
    tag: "DSSR"
  },
  {
    id: 3,
    title: "Leadership des adolescents",
    category: "yes",
    categoryLabel: "YES",
    img: "/ONGBusola-front/yes.png",
    desc: "Session interactive d'empowerment et de citoyenneté active pour les jeunes filles leaders.",
    date: "Janvier 2026",
    tag: "Jeunesse"
  },
  {
    id: 4,
    title: "Projet RESPECT de terrain",
    category: "tedidjo",
    categoryLabel: "TEDIDJO",
    img: "/ONGBusola-front/projet_respect.png",
    desc: "Atelier de sensibilisation contre les Violences Basées sur le Genre (VBG) et accompagnement.",
    date: "Avril 2026",
    tag: "VBG"
  },
  {
    id: 5,
    title: "Dialogue communautaire",
    category: "ngo",
    categoryLabel: "Vie de l'ONG",
    img: "/ONGBusola-front/about.jpeg",
    desc: "Échanges et co-construction de solutions locales durables avec les leaders et populations à Parakou.",
    date: "Décembre 2025",
    tag: "Immersion"
  },
  {
    id: 6,
    title: "Déjeuner avec les partenaires",
    category: "ngo",
    categoryLabel: "Vie de l'ONG",
    img: "/ONGBusola-front/Dejeuner.png",
    desc: "Rencontre stratégique avec nos partenaires techniques et financiers nationaux et internationaux.",
    date: "Février 2026",
    tag: "Partenariats"
  },
  {
    id: 7,
    title: "Grande mobilisation publique",
    category: "ngo",
    categoryLabel: "Vie de l'ONG",
    img: "/ONGBusola-front/mobilisation.png",
    desc: "Rassemblement de sensibilisation collective des communautés du Borgou sur les enjeux de cohésion.",
    date: "Octobre 2025",
    tag: "Sensibilisation"
  },
  {
    id: 8,
    title: "Cérémonie officielle de vœux",
    category: "ngo",
    categoryLabel: "Vie de l'ONG",
    img: "/ONGBusola-front/news-1.jpg",
    desc: "Moment fort de partage et de bilan avec notre Président d'honneur, Alain Assankpo, et notre CA.",
    date: "Février 2026",
    tag: "Célébration"
  },
  {
    id: 9,
    title: "48h contre le cancer du sein",
    category: "tedidjo",
    categoryLabel: "TEDIDJO",
    img: "/ONGBusola-front/news-2.jpg",
    desc: "Séances de sensibilisation et de dépistage gratuit pour les commerçantes du marché dépôt de Parakou.",
    date: "Octobre 2025",
    tag: "Santé"
  },
  {
    id: 10,
    title: "Atelier Plaidoyer et Redevabilité",
    category: "ngo",
    categoryLabel: "Vie de l'ONG",
    img: "/ONGBusola-front/news-3.jpg",
    desc: "Renforcement des capacités en plaidoyer à l'Hôtel Sounon Sero avec l'appui de l'UNFPA.",
    date: "Novembre 2025",
    tag: "Capacités"
  },
  {
    id: 11,
    title: "Formation professionnelle PAGEDA",
    category: "pageda",
    categoryLabel: "PAGEDA",
    img: "/ONGBusola-front/action-1.jpg",
    desc: "Intégration de cours théoriques d'alphabétisation à la pratique de métiers porteurs locaux.",
    date: "Mars 2026",
    tag: "Formation"
  },
  {
    id: 12,
    title: "Jeunes Ambassadeurs du Changement",
    category: "yes",
    categoryLabel: "YES",
    img: "/ONGBusola-front/action-2.jpg",
    desc: "Regroupement de jeunes ambassadeurs engagés pour le plaidoyer SSR et la justice sociale.",
    date: "Janvier 2026",
    tag: "Plaidoyer"
  },
  {
    id: 13,
    title: "Sensibilisation et écoute VBG",
    category: "tedidjo",
    categoryLabel: "TEDIDJO",
    img: "/ONGBusola-front/action-3.jpg",
    desc: "Écoute attentive et accompagnement psychologique de survivantes de violences domestiques.",
    date: "Décembre 2025",
    tag: "Protection"
  }
];

export default function GalleryPage() {
  const [filter, setFilter] = useState<'all' | 'pageda' | 'yes' | 'tedidjo' | 'ngo'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    if (window.WOW) new window.WOW().init();
    window.scrollTo(0, 0);
  }, []);

  // Filter gallery items
  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  // Handle lightbox navigation
  const handlePrev = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex(prev => (prev !== null && prev > 0) ? prev - 1 : filteredItems.length - 1);
  };

  const handleNext = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex(prev => (prev !== null && prev < filteredItems.length - 1) ? prev + 1 : 0);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'Escape') setLightboxIndex(null);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredItems]);

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
          <h1 className="display-4 fw-bold mb-3 text-uppercase text-primary" style={{ letterSpacing: '2px' }}>
            Galerie d'impact
          </h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center mb-0 bg-transparent p-0">
              <li className="breadcrumb-item">
                <Link to="/" className="text-decoration-none fw-medium" style={{ color: '#3bb143', fontSize: '1.05rem' }}>Accueil</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="/about" className="text-decoration-none fw-medium" style={{ color: '#3bb143', fontSize: '1.05rem' }}>A propos</Link>
              </li>
              <li className="breadcrumb-item active fw-medium text-primary" aria-current="page" style={{ fontSize: '1.05rem' }}>
                Galerie
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Blue Sub-banner */}
      <div className="container-fluid p-0 d-flex position-relative shadow-sm" style={{ backgroundColor: '#2764AE', minHeight: '120px' }}>
        <div className="container d-flex align-items-center justify-content-center text-white text-center px-4" style={{ minHeight: '120px' }}>
          <h5 className="mb-0 fw-bold" style={{ fontSize: '1.35rem', lineHeight: 1.5 }}>
            - Nos actions en images : découvrez l'impact de nos programmes sur le terrain
          </h5>
        </div>
        <div 
          className="d-none d-lg-flex flex-column align-items-center justify-content-center position-absolute end-0 h-100"
          style={{ width: '80px', backgroundColor: '#f59f23', writingMode: 'vertical-lr', transform: 'rotate(180deg)' }}
        >
          <span className="text-white fw-bold" style={{ fontSize: '1rem', letterSpacing: '1px' }}>Découvrez</span>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="container-fluid py-5 bg-white">
        <div className="container py-4">
          
          {/* Header */}
          <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '800px' }}>
            <div className="d-flex align-items-center justify-content-center mb-3">
              <div style={{ height: "1px", background: "#3bb143", width: "40px" }}></div>
              <span className="text-white text-uppercase px-3 py-1 mx-2" style={{ backgroundColor: '#3bb143', fontSize: '0.85rem', fontWeight: 700 }}>IMMERSION VISUELLE</span>
              <div style={{ height: "1px", background: "#3bb143", width: "40px" }}></div>
            </div>
            <h1 className="fw-bold mb-4" style={{ lineHeight: 1.4, fontSize: '2.5rem' }}>
              <span className="text-uppercase text-white px-3 py-2" style={{ backgroundColor: '#2764AE' }}>Notre histoire s'écrit</span><br/>
              <span className="text-uppercase text-white px-3 py-2 mt-2 d-inline-block" style={{ backgroundColor: '#2764AE' }}>au plus près des visages</span>
            </h1>
            <p className="text-muted fs-5 mt-4">
              Explorez les moments marquants de nos projets auprès des filles, des adolescents et des communautés.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="d-flex flex-wrap justify-content-center gap-2 mb-5 wow fadeInUp" data-wow-delay="0.2s">
            {[
              { id: 'all', label: 'Toutes les photos', icon: <ImageIcon size={16} className="me-1" /> },
              { id: 'pageda', label: 'PAGEDA', icon: <BookOpen size={16} className="me-1" /> },
              { id: 'yes', label: 'YES', icon: <Star size={16} className="me-1" /> },
              { id: 'tedidjo', label: 'TEDIDJO & RESPECT', icon: <Heart size={16} className="me-1" /> },
              { id: 'ngo', label: "Vie de l'ONG", icon: <Users size={16} className="me-1" /> },
            ].map(pill => {
              const isActive = filter === pill.id;
              return (
                <button
                  key={pill.id}
                  onClick={() => setFilter(pill.id as any)}
                  className="btn px-4 py-2 d-flex align-items-center fw-bold transition-all shadow-sm"
                  style={{
                    borderRadius: '30px',
                    fontSize: '0.9rem',
                    border: isActive ? 'none' : '1px solid #ddd',
                    backgroundColor: isActive ? 'var(--bs-primary)' : 'white',
                    color: isActive ? 'white' : 'var(--bs-primary)',
                    transform: isActive ? 'scale(1.05)' : 'scale(1)',
                  }}
                >
                  {pill.icon}
                  {pill.label}
                </button>
              );
            })}
          </div>

          {/* Grid Layout */}
          <div className="row g-4 justify-content-center">
            {filteredItems.map((item, idx) => (
              <div 
                key={item.id} 
                className="col-md-6 col-lg-4 mb-4 wow fadeInUp" 
                data-wow-delay={`${0.05 * (idx % 3)}s`}
              >
                <div 
                  className="card border-0 h-100 shadow-sm overflow-hidden position-relative group cursor-pointer"
                  style={{ borderRadius: '15px', border: '1px solid #f0f0f0' }}
                  onClick={() => setLightboxIndex(idx)}
                >
                  {/* Image wrapper */}
                  <div className="position-relative overflow-hidden" style={{ height: '280px' }}>
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      className="w-100 h-100 transition-all duration-500"
                      style={{ objectFit: 'cover' }}
                    />
                    
                    {/* Hover overlay with HSL design */}
                    <div 
                      className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center transition-all duration-300"
                      style={{
                        backgroundColor: 'rgba(39, 100, 174, 0.9)',
                        opacity: 0,
                        zIndex: 2,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.opacity = '1';
                        const img = e.currentTarget.previousElementSibling as HTMLImageElement;
                        if (img) img.style.transform = 'scale(1.1)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.opacity = '0';
                        const img = e.currentTarget.previousElementSibling as HTMLImageElement;
                        if (img) img.style.transform = 'scale(1)';
                      }}
                    >
                      <div 
                        className="rounded-circle d-flex align-items-center justify-content-center bg-white text-primary mb-3 shadow"
                        style={{ width: '55px', height: '55px' }}
                      >
                        <ZoomIn size={24} />
                      </div>
                      <span className="text-white text-uppercase small fw-bold tracking-wider">{item.categoryLabel}</span>
                    </div>

                    {/* Tag badge top-left */}
                    <span 
                      className="position-absolute top-0 start-0 m-3 px-3 py-1 text-white rounded-pill shadow-sm"
                      style={{ 
                        backgroundColor: item.category === 'pageda' ? '#2864ae' : item.category === 'tedidjo' ? '#27ae60' : item.category === 'yes' ? '#f39c12' : '#333', 
                        fontSize: '0.75rem', 
                        fontWeight: 'bold',
                        zIndex: 1
                      }}
                    >
                      {item.tag}
                    </span>
                  </div>

                  {/* Card Info */}
                  <div className="card-body p-4 bg-white d-flex flex-column justify-content-between">
                    <div>
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <small className="text-muted">{item.date}</small>
                        <span className="badge rounded-pill bg-light text-primary px-2.5 py-1" style={{ fontSize: '0.75rem' }}>{item.categoryLabel}</span>
                      </div>
                      <h4 className="fw-bold text-dark text-uppercase mb-2" style={{ fontSize: '1.2rem', color: '#1a1a1a' }}>{item.title}</h4>
                      <p className="text-muted small mb-0" style={{ textAlign: 'justify', lineHeight: '1.5' }}>{item.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {filteredItems.length === 0 && (
              <div className="col-12 text-center py-5">
                <p className="text-muted fs-5">Aucun élément ne correspond à ce filtre.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Lightbox / Modal */}
      {lightboxIndex !== null && (
        <div 
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
            zIndex: 9999,
          }}
          onClick={() => setLightboxIndex(null)}
        >
          {/* Close button */}
          <button 
            className="position-absolute top-0 end-0 m-4 btn text-white rounded-circle p-2 border-0 bg-transparent"
            style={{ zIndex: 10000 }}
            onClick={() => setLightboxIndex(null)}
          >
            <X size={36} />
          </button>

          {/* Left Arrow */}
          <button 
            className="position-absolute start-0 m-3 btn text-white rounded-circle p-3 border-0 bg-dark bg-opacity-50"
            style={{ zIndex: 10000 }}
            onClick={handlePrev}
          >
            <ChevronLeft size={36} />
          </button>

          {/* Right Arrow */}
          <button 
            className="position-absolute end-0 m-3 btn text-white rounded-circle p-3 border-0 bg-dark bg-opacity-50"
            style={{ zIndex: 10000 }}
            onClick={handleNext}
          >
            <ChevronRight size={36} />
          </button>

          {/* Main Content Area */}
          <div 
            className="d-flex flex-column align-items-center justify-content-center p-3 text-center"
            style={{ maxWidth: '90%', maxHeight: '90%' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image container */}
            <div className="position-relative overflow-hidden mb-3" style={{ maxWidth: '100%', maxHeight: '70vh' }}>
              <img 
                src={filteredItems[lightboxIndex].img} 
                alt={filteredItems[lightboxIndex].title} 
                className="img-fluid rounded"
                style={{ objectFit: 'contain', maxHeight: '70vh', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}
              />
            </div>

            {/* Info container */}
            <div className="text-white mt-2" style={{ maxWidth: '650px' }}>
              <span className="badge rounded-pill bg-primary text-uppercase px-3 py-1.5 mb-2" style={{ fontSize: '0.8rem' }}>
                {filteredItems[lightboxIndex].categoryLabel} — {filteredItems[lightboxIndex].tag}
              </span>
              <h3 className="fw-bold text-white mb-2">{filteredItems[lightboxIndex].title}</h3>
              <p className="text-white opacity-75 small mb-0">{filteredItems[lightboxIndex].desc}</p>
              <small className="text-white opacity-50 mt-1 d-block">{filteredItems[lightboxIndex].date}</small>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
