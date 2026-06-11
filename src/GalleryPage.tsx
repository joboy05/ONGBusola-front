import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { X, ChevronLeft, ChevronRight, ZoomIn, Image as ImageIcon, Heart, BookOpen, Users, Star } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

import { galleryItems, GalleryItem } from './galleryData';

function optimizedGalleryImage(src: string, size: 'thumbs' | 'large') {
  if (!src.startsWith('/gallery/')) return src;

  const filename = src.split('/').pop();
  if (!filename) return src;

  const basename = filename.replace(/\.[^.]+$/, '');
  return '/optimized/gallery/' + size + '/' + basename + '.webp';
}

export default function GalleryPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialFilter = (searchParams.get('filter') as any) || 'all';
  const [filter, setFilter] = useState<'all' | 'dssr' | 'paix' | 'leadership'>(initialFilter);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    if (window.WOW) new window.WOW().init();
    window.scrollTo(0, 0);
  }, []);

  // Sync state with URL parameters when it changes externally
  useEffect(() => {
    const f = searchParams.get('filter') || 'all';
    if (['all', 'dssr', 'paix', 'leadership'].includes(f)) {
      setFilter(f as any);
    }
    
    // Auto-open photo if photoId is in URL
    const photoId = searchParams.get('photoId');
    if (photoId) {
      const idNum = parseInt(photoId, 10);
      const globalIdx = galleryItems.findIndex(i => i.id === idNum);
      if (globalIdx !== -1) {
        setLightboxIndex(globalIdx);
      }
    }
  }, [searchParams]);

  // Update URL search parameters when changing filter
  const handleFilterChange = (newFilter: typeof filter) => {
    setFilter(newFilter);
    if (newFilter === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ filter: newFilter });
    }
  };

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

      {/* Premium Hero Header Banner */}
      <div
        className="container-fluid position-relative d-flex align-items-center justify-content-center text-white py-5 shadow-sm"
        style={{
          minHeight: '500px',
          background: `linear-gradient(135deg, rgba(39, 100, 174, 0.85) 0%, rgba(39, 176, 116, 0.85) 100%), url('/optimized/cta-2.webp') center/cover`,
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
                Galerie d'impact
              </li>
            </ol>
          </nav>

          <h1 className="display-4 fw-black text-uppercase text-white mb-3" style={{ letterSpacing: '2px', textShadow: '0 2px 10px rgba(0,0,0,0.15)' }}>
            Galerie d'impact
          </h1>
          
          <div className="mx-auto mb-4" style={{ width: '85px', height: '4px', backgroundColor: 'var(--brand-secondary)', borderRadius: '2px' }}></div>

          <p className="lead text-white opacity-95 mx-auto" style={{ maxWidth: '850px', fontSize: '1.15rem', lineHeight: '1.7', textShadow: '0 1px 5px rgba(0,0,0,0.1)' }}>
            Découvrez nos actions sur le terrain à travers nos réalisations en images. Visualisez l'impact concret de nos projets YES, TEDIDJO et PAGEDA au sein des communautés.
          </p>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="container-fluid py-5 bg-white">
        <div className="container py-4">
          
          {/* Header */}
          <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '800px' }}>
            <div className="d-flex align-items-center justify-content-center mb-3">
              <div style={{ height: "1px", background: "var(--brand-tertiary)", width: "40px" }}></div>
              <span className="text-uppercase mx-2 fw-bold" style={{ color: 'var(--brand-tertiary)', fontSize: '0.9rem', letterSpacing: '2px' }}>IMMERSION VISUELLE</span>
              <div style={{ height: "1px", background: "var(--brand-tertiary)", width: "40px" }}></div>
            </div>
            <h1 className="fw-black mb-4" style={{ lineHeight: 1.2, fontSize: '2.75rem', color: 'var(--brand-text)' }}>
              <span className="text-uppercase fw-black" style={{ color: 'var(--brand-text)', letterSpacing: '-0.5px' }}>Notre histoire s'écrit</span><br/>
              <span className="text-uppercase fw-black" style={{ color: 'var(--brand-text)', letterSpacing: '-0.5px' }}>au plus près des visages</span>
            </h1>
            <p className="text-muted fs-5 mt-4">
              Explorez les moments marquants de nos projets auprès des filles, des adolescents et des communautés.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="d-flex flex-wrap justify-content-center gap-2 mb-5 wow fadeInUp" data-wow-delay="0.2s">
            {[
              { id: 'all', label: 'Toutes les photos', icon: <ImageIcon size={16} className="me-1" /> },
              { id: 'dssr', label: 'DSSR et VBG', icon: <Heart size={16} className="me-1" /> },
              { id: 'paix', label: 'Paix et Cohésion Sociale', icon: <Users size={16} className="me-1" /> },
              { id: 'leadership', label: 'Leadership et Autonomisation', icon: <Star size={16} className="me-1" /> }
            ].map(pill => {
              const isActive = filter === pill.id;
              return (
                <button
                  key={pill.id}
                  onClick={() => handleFilterChange(pill.id as any)}
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

          {/* Grouped Categories Layout */}
          <div className="wow fadeInUp" data-wow-delay="0.3s">
            {[
              { id: 'dssr', label: 'DSSR et VBG', desc: 'Activités de prise en charge, sensibilisation à la santé de reproduction et lutte contre les VBG.', color: '#e74c3c', icon: <Heart size={24} className="text-danger" /> },
              { id: 'paix', label: 'Paix et Cohésion Sociale', desc: 'Moments forts autour du vivre-ensemble et de la cohésion sociale.', color: '#3498db', icon: <Users size={24} className="text-info" /> },
              { id: 'leadership', label: 'Leadership et Autonomisation', desc: 'Alphabétisation, formation professionnelle et vie de l’organisation.', color: '#f39c12', icon: <Star size={24} className="text-warning" /> }
            ]
              .filter(cat => filter === 'all' || filter === cat.id)
              .map(cat => {
                const catItems = galleryItems.filter(item => item.category === cat.id);
                if (catItems.length === 0) return null;

                const sections = Array.from(new Set(catItems.map(item => item.section)));

                return (
                  <div key={cat.id} className="mb-5 pb-4" id={`axis-${cat.id}`}>
                    {/* Category Header */}
                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-4 p-3 rounded-3" style={{ borderLeft: `6px solid ${cat.color}`, backgroundColor: '#fcfcfc' }}>
                      <div className="d-flex align-items-center gap-3">
                        <div className="p-2 bg-white rounded-circle shadow-sm">{cat.icon}</div>
                        <div>
                          <h3 className="fw-bold mb-1 text-dark" style={{ fontSize: '1.4rem' }}>{cat.label}</h3>
                          <p className="text-muted small mb-0">{cat.desc}</p>
                        </div>
                      </div>
                      <span className="badge rounded-pill mt-2 mt-md-0 px-3 py-2 fw-bold" style={{ backgroundColor: cat.color, color: 'white', fontSize: '0.85rem' }}>
                        {catItems.length} {catItems.length > 1 ? 'photos' : 'photo'}
                      </span>
                    </div>

                    {/* Sections Loop */}
                    {sections.map(sec => {
                      const secItems = catItems.filter(item => item.section === sec);
                      return (
                        <div key={sec} className="mb-4">
                          <h4 className="fw-bold mb-3 text-secondary border-bottom pb-2" style={{ fontSize: '1.1rem' }}>{sec}</h4>
                          <div className="row g-4">
                            {secItems.map(item => {
                              // Find global index in currently filtered items list for lightbox navigation
                              const globalIdx = filteredItems.findIndex(i => i.id === item.id);
                              return (
                                <div key={item.id} className="col-md-6 col-lg-4 mb-4">
                                  <div 
                                    className="card border-0 h-100 shadow-sm overflow-hidden position-relative group cursor-pointer"
                                    style={{ borderRadius: '15px', border: '1px solid #f0f0f0' }}
                                    onClick={() => setLightboxIndex(globalIdx)}
                                  >
                                    {/* Image wrapper */}
                                    <div className="position-relative overflow-hidden" style={{ height: '280px' }}>
                                      <img 
                                        src={optimizedGalleryImage(item.img, 'thumbs')} 
                                        alt={item.title} 
                                        className="w-100 h-100 transition-all duration-500"
                                        style={{ objectFit: 'cover' }}
                                        loading="lazy"
                                        decoding="async"
                                      />
                                      
                                      {/* Hover overlay */}
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
                                        <span className="text-white text-uppercase small fw-bold tracking-wider text-center px-2">{item.categoryLabel}</span>
                                      </div>

                                      {/* Tag badge top-left */}
                                      <span 
                                        className="position-absolute top-0 start-0 m-3 px-3 py-1 text-white rounded-pill shadow-sm"
                                        style={{ 
                                          backgroundColor: cat.color, 
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
                                        </div>
                                        <h4 className="fw-bold text-dark text-uppercase mb-2" style={{ fontSize: '1.2rem', color: '#1a1a1a' }}>{item.title}</h4>
                                        <p className="text-muted small mb-0" style={{ textAlign: 'justify', lineHeight: '1.5' }}>{item.desc}</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                );
              })}

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
                src={optimizedGalleryImage(filteredItems[lightboxIndex].img, 'large')} 
                alt={filteredItems[lightboxIndex].title} 
                className="img-fluid rounded"
                style={{ objectFit: 'contain', maxHeight: '70vh', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}
                decoding="async"
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
