import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { X, ChevronLeft, ChevronRight, Image as ImageIcon, Heart, BookOpen, Users, Star } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

interface Project {
  _id: string;
  title: string;
  description: string;
  coverImage: string;
  color: string;
}

interface Action {
  _id: string;
  title: string;
  description: string;
  images: string[];
  project?: string;
}

export default function GalleryPage() {
  const { category } = useParams<{ category: string }>();
  const [projects, setProjects] = useState<Project[]>([]);
  const [actions, setActions] = useState<Action[]>([]);
  const [loading, setLoading] = useState(true);
  const [lightboxIndex, setLightboxIndex] = useState<{actionId: string, imgIdx: number} | null>(null);
  const navigate = useNavigate();

  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [projRes, actRes] = await Promise.all([
          fetch(`${API_URL}/api/projects`),
          fetch(`${API_URL}/api/actions`)
        ]);
        const projData = await projRes.json();
        const actData = await actRes.json();
        setProjects(projData);
        setActions(actData);
      } catch (error) {
        console.error("Failed to fetch gallery data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    window.scrollTo(0, 0);
    if (window.WOW) new window.WOW().init();
  }, []);

  const selectedProject = category ? projects.find(p => p._id === category || p.title.toLowerCase().includes(category.toLowerCase())) : null;
  const filteredActions = selectedProject 
    ? actions.filter(a => a.project === selectedProject._id)
    : [];

  const handlePrev = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!lightboxIndex) return;
    const action = actions.find(a => a._id === lightboxIndex.actionId);
    if (!action) return;
    const newIdx = lightboxIndex.imgIdx > 0 ? lightboxIndex.imgIdx - 1 : action.images.length - 1;
    setLightboxIndex({ ...lightboxIndex, imgIdx: newIdx });
  };

  const handleNext = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!lightboxIndex) return;
    const action = actions.find(a => a._id === lightboxIndex.actionId);
    if (!action) return;
    const newIdx = lightboxIndex.imgIdx < action.images.length - 1 ? lightboxIndex.imgIdx + 1 : 0;
    setLightboxIndex({ ...lightboxIndex, imgIdx: newIdx });
  };

  return (
    <div className="wrapper">
      <Navbar />

      <div
        className="container-fluid position-relative d-flex align-items-center justify-content-center text-white py-5 shadow-sm"
        style={{
          minHeight: '400px',
          background: `linear-gradient(135deg, rgba(39, 100, 174, 0.85) 0%, rgba(39, 176, 116, 0.85) 100%), url('/optimized/cta-2.webp') center/cover`,
          paddingTop: '120px',
          paddingBottom: '60px',
        }}
      >
        <div className="container text-center position-relative" style={{ zIndex: 2 }}>
          <nav aria-label="breadcrumb" className="mb-3">
            <ol className="breadcrumb justify-content-center mb-0 bg-transparent p-0">
              <li className="breadcrumb-item"><Link to="/" className="text-white text-decoration-none opacity-75 fw-medium">Accueil</Link></li>
              <li className="breadcrumb-item active fw-bold text-warning" aria-current="page">Galerie d'impact</li>
            </ol>
          </nav>
          <h1 className="display-4 fw-black text-uppercase text-white mb-3">Galerie d'impact</h1>
          <div className="mx-auto mb-4" style={{ width: '85px', height: '4px', backgroundColor: 'var(--brand-secondary)', borderRadius: '2px' }}></div>
          <p className="lead text-white opacity-95 mx-auto" style={{ maxWidth: '850px' }}>
            Visualisez l'impact concret de nos projets au sein des communautés à travers nos archives photographiques.
          </p>
        </div>
      </div>

      <div className="container-fluid py-5 bg-white">
        <div className="container py-4">
          {!category ? (
            <>
              <div className="text-center mx-auto mb-5 wow fadeInUp" style={{ maxWidth: '800px' }}>
                <h2 className="fw-black mb-4 text-uppercase">Nos Piliers d'Intervention</h2>
                <p className="text-muted fs-5">Choisissez un domaine pour explorer les albums photos associés.</p>
              </div>
              <div className="row g-4 justify-content-center">
                {loading ? (
                  <div className="text-center py-5">Chargement des projets...</div>
                ) : projects.map(proj => (
                  <div key={proj._id} className="col-md-6 col-lg-4">
                    <div className="card shadow-sm overflow-hidden cursor-pointer h-100 border-0" onClick={() => navigate(`/galerie/${proj._id}`)}>
                      <div style={{ height: '240px', overflow: 'hidden' }}>
                        <img src={proj.coverImage} alt={proj.title} className="w-100 h-100 object-cover transition-all hover-scale" />
                      </div>
                      <div className="card-body text-center">
                        <h4 className="fw-bold mb-2" style={{ color: proj.color }}>{proj.title}</h4>
                        <p className="small text-muted mb-3 line-clamp-2">{proj.description}</p>
                        <button className="btn btn-primary rounded-pill px-4">Voir les albums</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="wow fadeInUp">
              <div className="d-flex align-items-center gap-3 mb-5 p-4 rounded-4 shadow-sm" style={{ backgroundColor: '#f8fafc', borderLeft: `8px solid ${selectedProject?.color || 'var(--brand-primary)'}` }}>
                <div>
                  <h2 className="fw-black text-uppercase mb-1">{selectedProject?.title || "Projet"}</h2>
                  <p className="text-muted mb-0">{selectedProject?.description}</p>
                </div>
                <Link to="/galerie" className="ms-auto btn btn-outline-secondary rounded-pill">Retour</Link>
              </div>

              {filteredActions.length === 0 ? (
                <div className="text-center py-5">
                  <p className="text-muted fs-5">Aucun album photo disponible pour ce projet actuellement.</p>
                </div>
              ) : (
                <div className="row g-4">
                  {filteredActions.map(action => (
                    <div key={action._id} className="col-md-6 col-lg-4">
                      <Link to={`/galerie/album/${action._id}`} className="card border-0 h-100 shadow-sm overflow-hidden text-decoration-none group">
                        <div className="position-relative" style={{ height: '260px' }}>
                          <img src={action.images[0] || '/optimized/cta-2.webp'} alt={action.title} className="w-100 h-100 object-cover" />
                          <div className="position-absolute bottom-0 start-0 w-100 p-3 bg-gradient-dark-top text-white">
                            <h5 className="fw-bold mb-0">{action.title}</h5>
                            <small className="opacity-75">{action.images.length} photos</small>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
