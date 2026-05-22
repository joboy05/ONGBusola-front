import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import Footer from './Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [contactStatus, setContactStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (window.WOW) new window.WOW().init();
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setContactStatus({ type: 'error', message: 'Veuillez remplir tous les champs obligatoires.' });
      return;
    }

    setIsSubmitting(true);
    try {
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'contact',
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'Message depuis le site web',
          message: formData.message
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setContactStatus({ type: 'success', message: data.message || 'Votre message a été envoyé avec succès !' });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setContactStatus({ type: 'error', message: data.message || 'Une erreur est survenue lors de l\'envoi.' });
      }
    } catch (error) {
      setContactStatus({ type: 'error', message: 'Erreur de connexion au serveur.' });
    } finally {
      setIsSubmitting(false);
    }

    setTimeout(() => setContactStatus({ type: null, message: '' }), 5000);
  };

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
            CONTACT
          </h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center mb-0 bg-transparent p-0">
              <li className="breadcrumb-item">
                <Link to="/" className="text-decoration-none fw-medium" style={{ color: '#3bb143', fontSize: '1.05rem' }}>Accueil</Link>
              </li>
              <li className="breadcrumb-item active fw-medium" aria-current="page" style={{ color: '#2764AE', fontSize: '1.05rem' }}>
                Contact
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-fluid py-5 bg-white">
        <div className="container py-5">
          <div className="row g-5">
            {/* Left Column: Map and Title */}
            <div className="col-lg-5 wow fadeIn" data-wow-delay="0.1s">
              <div className="d-flex align-items-center mb-3">
                <span className="text-white text-uppercase px-2 py-1 me-3" style={{ fontSize: '0.8rem', letterSpacing: '1px', backgroundColor: '#3bb143' }}>CONTACT</span>
                <div style={{ height: "1px", background: "#3bb143", width: "40px" }}></div>
              </div>
              <h1 className="fw-bold mb-4" style={{ color: '#2764AE', fontSize: '2.5rem', lineHeight: 1.3 }}>
                En cas de besoin, n'hésitez pas à nous contacter.
              </h1>
              
              <div className="w-100 mt-4 overflow-hidden shadow-sm" style={{ height: '350px' }}>
                <iframe 
                  className="w-100 h-100"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  src="https://maps.google.com/maps?q=ONG%20BUSOLA%20Parakou&t=&z=15&ie=UTF8&iwloc=&output=embed"
                ></iframe>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="col-lg-7 wow fadeIn" data-wow-delay="0.3s">
              <h3 className="fw-bold mb-3" style={{ color: '#000' }}>
                Remplissez ce formulaire pour nous envoyer un message.
              </h3>
              <p className="text-muted mb-4" style={{ fontSize: '0.90rem', lineHeight: '1.6' }}>
                Pour des besoin d'assistance, de soutient ou d'orientation; pour faire un don ou avoir plus de renseignement sur les projet et actions de l'organisation, vous avez toutes les informations qu'il vous faut pour entrer en contact avec nous.
              </p>
              
              {contactStatus.type && (
                <div className={`alert alert-${contactStatus.type === 'success' ? 'success' : 'danger'} mb-4`} role="alert">
                  {contactStatus.message}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <input 
                      type="text" 
                      className="form-control px-3 border" 
                      placeholder="Votre Nom" 
                      style={{ height: '50px', borderRadius: '0' }} 
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input 
                      type="email" 
                      className="form-control px-3 border" 
                      placeholder="Votre Email" 
                      style={{ height: '50px', borderRadius: '0' }} 
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div className="col-12">
                    <input 
                      type="text" 
                      className="form-control px-3 border" 
                      placeholder="Objet" 
                      style={{ height: '50px', borderRadius: '0' }} 
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    />
                  </div>
                  <div className="col-12">
                    <textarea 
                      className="form-control px-3 py-3 border" 
                      rows={6} 
                      placeholder="Message" 
                      style={{ borderRadius: '0' }}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    ></textarea>
                  </div>
                  <div className="col-12 mt-4">
                    <button 
                      className="btn text-white py-3 px-4" 
                      type="submit" 
                      style={{ backgroundColor: '#2764AE', borderRadius: '0', fontSize: '1rem' }}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Envoi en cours...' : 'Envoyer le Message'}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
