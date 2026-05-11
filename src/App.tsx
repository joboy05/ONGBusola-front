import React, { useEffect, useState } from 'react';
import { Heart, Users, Handshake, ShieldCheck, MapPin, Phone, Mail, Facebook, Linkedin, Twitter, Youtube, ArrowRight, MessageCircle, Send, X, Menu, ArrowUp, BookOpen, Star, PlusCircle, ChevronDown } from 'lucide-react';
import Navbar from './Navbar';

declare global {
  interface Window {
    $: any;
    jQuery: any;
    WOW: any;
  }
}

// Couleurs institutionnelles de l'ONG Busola
const brandStyles = `
  :root {
    --bs-primary: #2864ae !important;
    --bs-secondary: #f39c12 !important;
    --bs-tertiary: #27ae60 !important;
  }
  .bg-primary { background-color: var(--bs-primary) !important; }
  .text-primary { color: var(--bs-primary) !important; }
  .btn-primary { background-color: var(--bs-primary) !important; border-color: var(--bs-primary) !important; }
  
  .bg-secondary { background-color: var(--bs-secondary) !important; }
  .text-secondary { color: var(--bs-secondary) !important; }
  .btn-secondary { background-color: var(--bs-secondary) !important; border-color: var(--bs-secondary) !important; color: white !important; }
  
  .bg-tertiary { background-color: var(--bs-tertiary) !important; }
  .text-tertiary { color: var(--bs-tertiary) !important; }
  .border-tertiary { border-color: var(--bs-tertiary) !important; }
  .btn-tertiary { background-color: var(--bs-tertiary) !important; border-color: var(--bs-tertiary) !important; color: white !important; }

  .gradient-text {
    background: linear-gradient(45deg, var(--bs-primary), var(--bs-secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }

  .animate-float {
    animation: float 4s ease-in-out infinite;
  }

  @keyframes slowRotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  @keyframes move {
    0%, 100% { transform: translate(0, 0); }
    50% { transform: translate(20px, 20px); }
  }

  .bg-shape {
    position: absolute;
    filter: blur(60px);
    opacity: 0.1;
    z-index: 0;
    pointer-events: none;
  }
`;

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

function App() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [email, setEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' });
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '', type: '' });
  const [contactStatus, setContactStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' });
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<{ role: 'bot' | 'user', text: string, actions?: { label: string, target: string }[] }[]>([
    { 
      role: 'bot', 
      text: "Bonjour ! Je suis l'assistant de l'ONG Busola. Comment puis-je vous aider aujourd'hui ?",
      actions: [
        { label: "Nos programmes", target: "actions" },
        { label: "L'équipe", target: "team" },
        { label: "Nous soutenir", target: "soutenir" }
      ]
    }
  ]);

  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatMessage.trim()) return;

    const userMsg = chatMessage.trim();
    setChatHistory(prev => [...prev, { role: 'user', text: userMsg }]);
    setChatMessage('');

    setTimeout(() => {
      let botResponse = "Je n'ai pas bien compris votre demande. Pourriez-vous préciser ? Je peux vous renseigner sur nos programmes (PAGEDA, YES, TEDIDJO), notre équipe ou comment nous soutenir.";
      let suggestions: { label: string, target: string }[] = [];

      const input = userMsg.toLowerCase();
      
      if (input.includes('pageda')) {
        botResponse = "Le programme PAGEDA se concentre sur l'autonomisation des femmes par l'alphabétisation fonctionnelle et l'accès aux droits fonciers au Nord-Bénin.";
        suggestions = [{ label: "Voir les programmes", target: "actions" }];
      } else if (input.includes('yes') || input.includes('jeune')) {
        botResponse = "Le projet YES (Youth Empowerment & Sexual Health) accompagne les adolescents et jeunes pour une meilleure santé sexuelle et une citoyenneté active.";
        suggestions = [{ label: "Voir les programmes", target: "actions" }];
      } else if (input.includes('tedidjo') || input.includes('santé')) {
        botResponse = "TEDIDJO est notre initiative phare pour la santé de la reproduction et la lutte contre les violences basées sur le genre (VBG).";
        suggestions = [{ label: "Voir les programmes", target: "actions" }];
      } else if (input.includes('action') || input.includes('programme') || input.includes('fait')) {
        botResponse = "L'ONG Busola mène trois programmes majeurs : PAGEDA (Alphabétisation), YES (Jeunesse) et TEDIDJO (Santé & VBG). Lequel vous intéresse ?";
        suggestions = [{ label: "Tous nos programmes", target: "actions" }];
      } else if (input.includes('equipe') || input.includes('team') || input.includes('membre') || input.includes('directeur')) {
        botResponse = "Notre équipe est dirigée par M. Abouyaïdou MAMA (Directeur Exécutif). Elle compte des experts comme Zoulfath ZIME et Fadel KASSALI.";
        suggestions = [{ label: "Voir l'équipe complète", target: "equipe" }];
      } else if (input.includes('don') || input.includes('aider') || input.includes('soutenir') || input.includes('argent')) {
        botResponse = "Merci pour votre générosité ! Vous pouvez soutenir nos actions via un don ou en devenant partenaire technique/financier.";
        suggestions = [
          { label: "Faire un don", target: "newsletter" },
          { label: "Devenir partenaire", target: "partenaires" }
        ];
      } else if (input.includes('contact') || input.includes('ou') || input.includes('adresse') || input.includes('parakou')) {
        botResponse = "Notre siège est à Parakou, quartier Arafat. Vous pouvez nous écrire à contact@busola.org ou appeler le +229 01 90 44 46 90.";
        suggestions = [{ label: "Nous contacter", target: "footer" }];
      } else if (input.includes('partenaire')) {
        botResponse = "Nous travaillons avec des partenaires de renom tels que l'UNFPA, l'UNICEF, CARE International et l'Ambassade des Pays-Bas.";
        suggestions = [{ label: "Nos partenaires", target: "partenaires" }];
      }

      setChatHistory(prev => [...prev, { role: 'bot', text: botResponse, actions: suggestions }]);
    }, 800);
  };

  const handleQuickAction = (target: string) => {
    const section = document.getElementById(target);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    } else {
      if (target === 'actions') window.scrollTo({ top: 1200, behavior: 'smooth' });
      if (target === 'team') window.scrollTo({ top: 4000, behavior: 'smooth' });
      if (target === 'soutenir') window.scrollTo({ top: 3500, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const initJS = () => {
      // Hide Spinner
      const spinner = document.getElementById('spinner');
      if (spinner) {
        spinner.classList.remove('show');
      }

      // Initialize WOW.js
      if (window.WOW) {
        new window.WOW().init();
      }

      // Initialize Owl Carousel for Header
      if (window.$ && window.$(".header-carousel").length) {
        window.$(".header-carousel").owlCarousel({
          animateOut: 'fadeOut',
          animateIn: 'fadeIn',
          items: 1,
          autoplay: true,
          smartSpeed: 1500,
          dots: false,
          loop: true,
          nav: true,
          mouseDrag: false,
          touchDrag: false,
          navText: [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
          ]
        });
      }

      // Initialize Owl Carousel for Testimonials
      if (window.$ && window.$(".testimonial-carousel").length) {
        window.$(".testimonial-carousel").owlCarousel({
          items: 1,
          autoplay: true,
          smartSpeed: 1000,
          animateIn: 'fadeIn',
          animateOut: 'fadeOut',
          dots: false,
          loop: true,
          nav: true,
          navText: [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
          ]
        });
      }
    };

    const timer = setTimeout(initJS, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    try {
      const response = await fetch('http:/localhost:5000/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (response.ok) {
        setNewsletterStatus({ type: 'success', message: data.message });
        setEmail('');
      } else {
        setNewsletterStatus({ type: 'error', message: data.message });
      }
    } catch (error) {
      setNewsletterStatus({ type: 'error', message: 'Erreur de connexion au serveur.' });
    }

    // Reset status after 5 seconds
    setTimeout(() => setNewsletterStatus({ type: null, message: '' }), 5000);
  };

  const handleContactSubmit = async (e: React.FormEvent, type: string) => {
    e.preventDefault();
    const dataToSend = { ...formData, type };

    try {
      const response = await fetch('http:/localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataToSend),
      });

      const data = await response.json();
      if (response.ok) {
        setContactStatus({ type: 'success', message: data.message });
        setFormData({ name: '', email: '', subject: '', message: '', type: '' });
      } else {
        setContactStatus({ type: 'error', message: data.message });
      }
    } catch (error) {
      setContactStatus({ type: 'error', message: 'Erreur de connexion au serveur.' });
    }

    setTimeout(() => setContactStatus({ type: null, message: '' }), 5000);
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const team: TeamMember[] = [
    {
      name: "Zoulfath ZIME ",
      role: "Chargé de Communauté ",
      photo: "team-1.jpg",
      description: ""
    },
    {
      name: "Fadel KASSALI",
      role: "Assistant Projet",
      photo: "team-2.jpg",
      email: "kassalifadel4@gmail.com",
      description: ""
    },
    {
      name: "Abouyaïdou MAMA",
      role: "Directeur Exécutif",
      photo: "team-3.jpg",
      email: "mamaabouyaidou22@gmail.com",
      description: "MAMA Abouyaïdou est doctorant en relations internationales à l’Université de Parakou (Bénin), spécialisé en sécurité internationale, cohésion sociale et prévention du terrorisme au Sahel. Fort de plus de huit années d’expérience, il a coordonné et supervisé des projets communautaires majeurs financés par des partenaires internationaux tels que l’UNICEF, l’Union européenne et CARE International. Coordonnateur et Directeur exécutif de l’ONG Busola, il œuvre dans les domaines de la paix, des VBG, du développement rural et de la santé sexuelle et reproductive. Assistant de recherche et enseignant universitaire, il est certifié par le Peace Operations Training Institute des Nations Unies. Sa vision est de transformer la recherche en action pour une paix durable et inclusive."
    },
    {
      name: "BOUKO Chabi Dramane",
      role: "Président du Conseil de Surveillance",
      photo: "team-4.jpeg",
      description: ""
    },
    {
      name: "Alain ASSANKPON",
      role: "Président d'honneur",
      photo: "team-5.jpeg",
      description: ""
    },
    {
      name: "Sybgath SANNI",
      role: "Présidente du Conseil d’Administration",
      photo: "team-6.jpg",
      description: "Pionnière de la naissance de l'ONG BUSOLA, est une figure remarquable, dotée d'un esprit brillant, d'un talent indéniable et d'un esprit innovant. En tant qu'entrepreneuse émérite, elle a fondé plusieurs entreprises prospères telles que BUSOLA BUILDINGS SARL, SUPERMARCHÉ CHANCE GLORY et le restaurant AFRICAN'S DELICES by SYB. En tant que gestionnaire de projets de formation, Sybgath se spécialise dans le domaine du Droit à la Santé Sexuelle et Reproductive (DSSR) ainsi que dans les..."
    }
  ];

  return (
    <div className="wrapper">
      <style>{brandStyles}</style>
      {/* Spinner is in index.html */}

      {/* Navbar */}
      <Navbar />

      {/* Banner Section */}
      <div id="accueil" className="container-fluid top p-0 wow fadeIn" data-wow-delay="0.1s" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>

        {/* Hero Slider */}
        <div className="owl-carousel header-carousel py-5">
          <div className="container py-5">
            <div className="row g-5 align-items-center">
              <div className="col-lg-8">
                <div className="carousel-text">
                  <h1 className="display-1 text-uppercase text-primary mb-3" style={{ fontWeight: 300 }}>
                    LE <span style={{ fontWeight: "bold" }}>POUVOIR D'AGIR</span> <br /> aU COEUR DE <br /> CHaQUE <span style={{ fontWeight: "bold" }}>COMMUNaUTE</span>
                  </h1>
                  <p className="mb-5 fs-5">
                    Depuis 2020, L'ONG Busola oeuvre aux côtés des femmes et des jeunes du Nord-Bénin pour construire un avenir de dignité, d'égalité et de paix à travers une approche intégrée et des patenariats solides favorisant l'autonomie, la santé, la citoyenneté active et la cohésion sociale.
                  </p>
                  <div className="d-flex">
                    <a className="btn btn-secondary text-white fw-bold text-uppercase rounded-1 py-2 px-4 me-3" href="#!">Soutenez nous</a>
                    <a className="btn btn-tertiary text-white rounded-1 py-2 fw-bold text-uppercase px-4" href="#!">Découvrez nos actions</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 p-0 text-center">
                <img className="w-100 shadow-lg" style={{ borderRadius: "50%", border: "10px solid white" }} src="hero-slider.jpeg" alt="Busola" />
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* About Section - Balanced Magazine Design */}
      <div id="apropos" className="container-fluid py-5 bg-white" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
        <div className="container py-5">
          <div className="row g-5">
            {/* Left Column: Image + Values (Tablet only) */}
            <div className="col-lg-5 col-md-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="position-relative mb-5">
                <div className="rounded-5 shadow-sm overflow-hidden" style={{ height: "550px", position: "relative" }}>
                  <img src="about.jpeg" className="w-100 h-100" style={{ objectFit: 'cover' }} alt="L'équipe Busola" />
                  {/* Compact & Impactful Stats Badge */}
                  <div className="position-absolute bottom-0 end-0 m-4 shadow-lg" style={{ zIndex: 10 }}>
                    <div className="bg-white rounded-4 d-flex align-items-center p-3" style={{ borderLeft: "8px solid var(--bs-primary)", minWidth: "180px" }}>
                      <div className="me-3 d-flex align-items-center justify-content-center bg-light rounded-circle" style={{ width: "45px", height: "45px" }}>
                        <Users className="text-primary" size={22} />
                      </div>
                      <div>
                        <h4 className="fw-black mb-0 text-secondary" style={{ fontSize: "1.4rem", letterSpacing: "-0.5px" }}>15 000+</h4>
                        <p className="mb-0 text-primary opacity-75 fw-bold" style={{ fontSize: "0.7rem", textTransform: 'uppercase' }}>Bénéficiaires</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Values Grid - Visible ONLY on Tablet/Mobile */}
              <div id="valeurs-mobile" className="row g-4 d-lg-none">
                {[
                  { icon: <Heart className="text-primary" size={28} />, title: 'Dignité', desc: 'Chaque personne au cœur de l\'action' },
                  { icon: <Users className="text-primary" size={28} />, title: 'Équité de Genre', desc: 'L\'égalité comme condition à la paix' },
                  { icon: <Handshake className="text-primary" size={28} />, title: 'Partenariat', desc: 'Ensemble pour un impact durable' },
                  { icon: <ShieldCheck className="text-primary" size={28} />, title: 'Intégrité', desc: 'Transparence & redevabilité' }
                ].map((val, idx) => (
                  <div key={idx} className="col-sm-6">
                    <div className="p-4 rounded-4 h-100 border bg-light shadow-sm">
                      <div className="d-flex align-items-center mb-3">
                        <div className="me-3">{val.icon}</div>
                        <h5 className="fw-bold mb-0">{val.title}</h5>
                      </div>
                      <p className="mb-0 text-muted">{val.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Narrative Text + Values (Desktop) */}
            <div className="col-lg-7 col-md-6 wow fadeIn" data-wow-delay="0.3s">
              <div className="ps-lg-5">
                <div className="position-relative mb-5">
                  <div className="position-absolute" style={{ top: "-25px", left: "20px", zIndex: 2 }}>
                    <span className="badge bg-tertiary text-white px-4 py-2 fw-bold text-uppercase" style={{ borderRadius: "4px", fontSize: "0.85rem", letterSpacing: "1px" }}>Qui sommes-nous ?</span>
                  </div>
                  <div className="bg-primary p-5 rounded-4 shadow-lg d-flex align-items-center justify-content-between" style={{ borderLeft: "10px solid var(--bs-secondary)" }}>
                    <h2 className="fw-black mb-0 text-uppercase" style={{ fontSize: "3rem", color: "#fff", fontWeight: "900" }}>ONG BUSOLA</h2>
                    <img src="logo-hands.png" className="img-fluid d-none d-lg-block" style={{ maxHeight: "100px", filter: "brightness(0) invert(1)" }} alt="Logo" />
                  </div>
                </div>

                <div className="text-muted fs-5 mb-5" style={{ textAlign: 'justify', lineHeight: '1.8' }}>
                  <p className="mb-4">
                    Créée en <span className="text-primary fw-bold">2020 à Parakou</span>, l’ONG Busola est le fruit d’un engagement citoyen et associatif porté par des femmes et des jeunes acteurs du développement, convaincus que les réponses aux défis sociaux devaient être locales, inclusives et ancrées dans les communautés.
                  </p>
                  <p className="mb-4">
                    Les fondateurs et fondatrices, issus d’expériences de terrain en santé communautaire, éducation, prévention des violences et mobilisation sociale, ont constaté un manque de cadres structurés capables de relier droits humains, autonomisation, paix et développement durable.
                  </p>
                </div>

                {/* Values Grid - Visible ONLY on Desktop */}
                <div id="valeurs-desktop" className="row g-4 mb-5 d-none d-lg-flex">
                  {[
                    { icon: <Heart className="text-primary" size={32} />, title: 'Dignité', desc: 'Chaque personne au cœur de l\'action' },
                    { icon: <Users className="text-primary" size={32} />, title: 'Équité de Genre', desc: 'L\'égalité comme condition à la paix' },
                    { icon: <Handshake className="text-primary" size={32} />, title: 'Partenariat', desc: 'Ensemble pour un impact durable' },
                    { icon: <ShieldCheck className="text-primary" size={32} />, title: 'Intégrité', desc: 'Transparence & redevabilité' }
                  ].map((val, idx) => (
                    <div key={idx} className="col-sm-6">
                      <div className="p-4 rounded-4 border bg-white h-100 shadow-sm transition-all hover-up border-light">
                        <div className="d-flex align-items-center mb-3">
                          <div className="rounded-circle p-3 me-3 bg-light d-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px' }}>
                            {val.icon}
                          </div>
                          <h5 className="fw-bold mb-0">{val.title}</h5>
                        </div>
                        <p className="mb-0 text-muted">{val.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="d-flex align-items-center">
                  <a href="#!" className="btn btn-primary rounded-pill px-5 py-3 fw-bold shadow-lg transition-all hover-up me-4">
                    Notre histoire <ArrowRight size={20} className="ms-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Principales Actions Menées (Programmes) */}
      <div id="actions" className="container-fluid py-5 bg-white position-relative overflow-hidden" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
        
        {/* Animated Background Shapes */}
        <div className="bg-shape bg-primary rounded-circle" style={{ width: '400px', height: '400px', top: '-100px', left: '-100px', animation: 'move 10s infinite alternate' }}></div>
        <div className="bg-shape bg-secondary rounded-circle" style={{ width: '300px', height: '300px', bottom: '10%', right: '-50px', animation: 'move 12s infinite alternate-reverse' }}></div>
        <div className="bg-shape bg-tertiary" style={{ width: '500px', height: '500px', top: '20%', right: '10%', animation: 'slowRotate 20s linear infinite' }}></div>

        <div className="container py-5 position-relative" style={{ zIndex: 1 }}>
          <div className="d-flex justify-content-between align-items-end mb-5 wow fadeIn" data-wow-delay="0.1s">
            <div>
              <p className="text-primary fw-bold mb-2 small tracking-widest">• NOS PROGRAMMES</p>
              <h1 className="display-5 mb-0 fw-bold">Principales actions <span className="text-primary" style={{ fontStyle: 'italic', fontFamily: 'serif' }}>menées</span></h1>
              <div style={{ width: '60px', height: '4px', background: 'var(--bs-secondary)', marginTop: '15px' }}></div>
            </div>
            <a href="#!" className="btn btn-outline-primary rounded-pill px-4 py-2 d-none d-md-block fw-bold">
              Voir tous les programmes <i className="fa fa-arrow-right ms-2"></i>
            </a>
          </div>

          <div className="row g-4">
            {/* Programme 1 - PAGEDA */}
            <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
              <div className="card border shadow-sm rounded-4 overflow-hidden h-100 transition-all hover-up">
                <div className="position-relative" style={{ height: '220px', overflow: 'hidden' }}>
                  <img src="action-1.jpg" className="img-fluid w-100 h-100 transition-all hover-scale" style={{ objectFit: 'cover' }} alt="PAGEDA" />
                  <span className="badge position-absolute top-0 start-0 m-3 bg-primary text-white text-uppercase small px-3 py-2 rounded-pill" style={{ fontSize: '10px', letterSpacing: '1px', zIndex: 2 }}>Autonomisation</span>
                </div>
                <div className="card-body p-4 bg-white border-top border-4 border-primary">
                  <div className="mb-3">
                    <BookOpen className="text-primary" size={32} />
                  </div>
                  <h4 className="fw-bold mb-3" style={{ color: '#1a1a1a' }}>PAGEDA — Alphabétisation fonctionnelle</h4>
                  <p className="text-muted small mb-4" style={{ textAlign: 'justify', lineHeight: '1.6' }}>
                    Programme de lutte contre la pauvreté par l’alphabétisation fonctionnelle liée à la formation professionnelle. 27 communes couvertes, financement Coopération Suisse.
                  </p>
                  <div className="d-flex flex-wrap gap-2 mb-4">
                    <span className="badge bg-white text-primary px-3 py-2 rounded-pill fw-normal border">30 000 apprenants</span>
                    <span className="badge bg-white text-primary px-3 py-2 rounded-pill fw-normal border">Nord-Bénin</span>
                  </div>
                  <a href="#!" className="text-primary fw-bold text-decoration-none small hover-right d-inline-flex align-items-center">
                    En savoir plus <ArrowRight size={16} className="ms-2" />
                  </a>
                </div>
              </div>
            </div>

            {/* Programme 2 - YES */}
            <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
              <div className="card border shadow-sm rounded-4 overflow-hidden h-100 transition-all hover-up">
                <div className="position-relative" style={{ height: '220px', overflow: 'hidden' }}>
                  <img src="action-2.jpg" className="img-fluid w-100 h-100 transition-all hover-scale" style={{ objectFit: 'cover' }} alt="YES" />
                  <span className="badge position-absolute top-0 start-0 m-3 bg-secondary text-white text-uppercase small px-3 py-2 rounded-pill" style={{ fontSize: '10px', letterSpacing: '1px', zIndex: 2 }}>Jeunesse</span>
                </div>
                <div className="card-body p-4 bg-white border-top border-4 border-secondary">
                  <div className="mb-3">
                    <Star className="text-secondary" size={32} />
                  </div>
                  <h4 className="fw-bold mb-3" style={{ color: '#1a1a1a' }}>YES — Youth Engagement for SRH Rights</h4>
                  <p className="text-muted small mb-4" style={{ textAlign: 'justify', lineHeight: '1.6' }}>
                    Initiative renforçant l’autonomisation des jeunes, promouvant l’accès aux droits en santé sexuelle et reproductive et prévenant les violences basées sur le genre.
                  </p>
                  <div className="d-flex flex-wrap gap-2 mb-4">
                    <span className="badge bg-white text-secondary px-3 py-2 rounded-pill fw-normal border">DSSR</span>
                    <span className="badge bg-white text-secondary px-3 py-2 rounded-pill fw-normal border">VBG</span>
                  </div>
                  <a href="#!" className="text-secondary fw-bold text-decoration-none small hover-right d-inline-flex align-items-center">
                    En savoir plus <ArrowRight size={16} className="ms-2" />
                  </a>
                </div>
              </div>
            </div>

            {/* Programme 3 - TEDIDJO */}
            <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
              <div className="card border shadow-sm rounded-4 overflow-hidden h-100 transition-all hover-up">
                <div className="position-relative" style={{ height: '220px', overflow: 'hidden' }}>
                  <img src="action-3.jpg" className="img-fluid w-100 h-100 transition-all hover-scale" style={{ objectFit: 'cover' }} alt="TEDIDJO" />
                  <span className="badge position-absolute top-0 start-0 m-3 bg-tertiary text-white text-uppercase small px-3 py-2 rounded-pill" style={{ fontSize: '10px', letterSpacing: '1px', zIndex: 2 }}>DSSR & VBG</span>
                </div>
                <div className="card-body p-4 bg-white border-top border-4 border-tertiary">
                  <div className="mb-3">
                    <Heart className="text-tertiary" size={32} />
                  </div>
                  <h4 className="fw-bold mb-3" style={{ color: '#1a1a1a' }}>TEDIDJO — Santé reproductive & protection</h4>
                  <p className="text-muted small mb-4" style={{ textAlign: 'justify', lineHeight: '1.6' }}>
                    Amélioration de la santé sexuelle et reproductive des adolescents, prévention des VBG et renforcement de l’autonomisation des filles — Borgou & Alibori.
                  </p>
                  <div className="d-flex flex-wrap gap-2 mb-4">
                    <span className="badge bg-white text-tertiary px-3 py-2 rounded-pill fw-normal border">CARE Bénin</span>
                    <span className="badge bg-white text-tertiary px-3 py-2 rounded-pill fw-normal border">Borgou</span>
                  </div>
                  <a href="#!" className="text-tertiary fw-bold text-decoration-none small hover-right d-inline-flex align-items-center">
                    En savoir plus <ArrowRight size={16} className="ms-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="container-fluid p-0 text-center py-5 bannere wow fadeInUp" data-wow-delay="0.1s" style={{ minHeight: "500px", display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h1 className="text-uppercase text-primary display-1 fw-bold px-3">
          LE SILENCE PROTèGE <br /> <span className="text-white bg-primary px-1">L'aGRESSEUR</span>. <br className="d-md-none" /> NOTRE aCTION <br /> PROTèGE <span className="text-white bg-primary px-1">La VICTIME</span>
        </h1>
      </div>
      {/* Partenaires */}
      <div id="partenaires" className="container-fluid mt-0 pt-5 pb-5 partenaire wow fadeIn">
        <div className="container">
          <div className="d-flex justify-content-center mb-5">
            <span className="bg-secondary px-4 py-2 text-white fw-bold rounded-pill shadow-sm">Nos partenaires</span>
          </div>
          <div className="row align-items-center justify-content-center">
            {[
              'unfpa.png', 'unicef.png', 'unicri.svg', 
              'logo-uk.jpg', 'canada.png', 'logo-suisse.png', 
              'logo-mdm.png', 'logo-care.png', 'engender.png', 
              'roajelf.jpeg', 'sianson.png', 'barika.jpg', 'wendia.jpg'
            ].map((img, i) => (
              <div key={i} className="col-4 col-md-3 col-lg-2 p-3 text-center">
                <img src={`${img}`} className="img-fluid transition-all" 
                     style={{ maxHeight: "120px", objectFit: "contain" }} 
                     onMouseOver={e => { e.currentTarget.style.transform = 'scale(1.1)'; }}
                     onMouseOut={e => { e.currentTarget.style.transform = 'scale(1)'; }}
                     alt="partner" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Crossed Bands Section - Animated Paint Roll (X-Cross) */}
      <div className="container-fluid overflow-hidden position-relative my-5" style={{ height: "400px", display: "flex", alignItems: "center" }}>
        {/* Orange Band - Roll from Left */}
        <a href="#newsletter" className="position-absolute bg-secondary text-white py-4 shadow animate-roll-left text-decoration-none wow slideInLeft" 
             style={{ top: "50%", marginTop: "-50px", zIndex: 1, whiteSpace: "nowrap", cursor: "pointer" }}>
          <marquee behavior="scroll" direction="left" scrollamount="7" style={{ fontSize: "32px", fontWeight: "900" }}>
            <span className="me-5">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
              <span key={i} className="text-uppercase mx-3">S'INSCRIRE A NOTRE NEWSLETTER</span>
            ))}
          </marquee>
        </a>
        {/* Green Band - Roll from Right */}
        <a href="#newsletter" className="position-absolute bg-tertiary text-white py-4 shadow animate-roll-right text-decoration-none wow slideInRight" 
             style={{ top: "50%", marginTop: "-50px", zIndex: 2, whiteSpace: "nowrap", cursor: "pointer" }}>
          <marquee behavior="scroll" direction="right" scrollamount="9" style={{ fontSize: "32px", fontWeight: "900" }}>
            <span className="me-5">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
              <span key={i} className="text-uppercase mx-3">S'INSCRIRE A NOTRE NEWSLETTER</span>
            ))}
          </marquee>
        </a>
      </div>

      {/* NOS ACTUALITÉS */}
      <div id="actualites" className="container-fluid py-5 bg-white" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
        <div className="container">
          <div className="text-center mx-auto mb-5 wow fadeIn" data-wow-delay="0.1s" style={{ maxWidth: "800px" }}>
            <p className="section-title fw-semi-bold text-center text-white px-3"><span className="bg-tertiary p-1">Actualités</span></p>
            <h1 className="display-6 text-uppercase text-primary mb-4">Soyez au courant de notre actualités en temps réel.</h1>
          </div>
          <div className="row g-4">
            <div className="col-md-4 wow fadeIn" data-wow-delay="0.1s">
              <div className="event-item h-100 p-4 shadow-sm bg-white rounded-4 border transition-all hover-up overflow-hidden">
                <div className="overflow-hidden rounded-4 mb-4" style={{ height: "220px" }}>
                  <img className="img-fluid w-100 h-100 transition-all hover-scale" src="news-1.jpg" style={{ objectFit: "cover" }} alt="Actualité Busola" />
                </div>
                <p className="mb-2 text-tertiary fw-bold small"><i className="fa fa-calendar-alt me-2"></i>20 Février 2026</p>
                <h3 className="h5 text-primary fw-bold mb-3">Cérémonie de présentation des voeux au CA et aux PTF de Busola</h3>
                <p className="text-muted small mb-4">10 Février, Busola ONG a vécu un instant d’exception à l’occasion de sa cérémonie de présentation des vœux à son Président d’Honneur, Monsieur Alain ASSANKPO, ainsi à ses partenaires techniques et financiers locaux, nationaux et internationaux.</p>
                <a href="#!" className="text-secondary fw-bold small text-decoration-none hover-right">Lire la suite <i className="fa fa-arrow-right ms-1"></i></a>
              </div>
            </div>
            <div className="col-md-4 wow fadeIn" data-wow-delay="0.3s">
              <div className="event-item h-100 p-4 shadow-sm bg-white rounded-4 border transition-all hover-up overflow-hidden">
                <div className="overflow-hidden rounded-4 mb-4" style={{ height: "220px" }}>
                  <img className="img-fluid w-100 h-100 transition-all hover-scale" src="news-2.jpg" style={{ objectFit: "cover" }} alt="Actualité Busola" />
                </div>
                <p className="mb-2 text-tertiary fw-bold small"><i className="fa fa-calendar-alt me-2"></i>8 Février 2026</p>
                <h3 className="h5 text-primary fw-bold mb-3">48H contre le cancer du sein Edition 2025</h3>
                <p className="text-muted small mb-4">Ce jeudi 23 octobre, la 2ème journée de notre initiative "48h contre le Cancer du Sein" a été consacrée à l'extension de notre périmètre d'intervention, en déployant nos équipes au sein d’un deuxieme pole économique majeur de Parakou : Le marché dépôt</p>
                <a href="#!" className="text-secondary fw-bold small text-decoration-none hover-right">Lire la suite <i className="fa fa-arrow-right ms-1"></i></a>
              </div>
            </div>
            <div className="col-md-4 wow fadeIn" data-wow-delay="0.5s">
              <div className="event-item h-100 p-4 shadow-sm bg-white rounded-4 border transition-all hover-up overflow-hidden">
                <div className="overflow-hidden rounded-4 mb-4" style={{ height: "220px" }}>
                  <img className="img-fluid w-100 h-100 transition-all hover-scale" src="news-3.jpg" style={{ objectFit: "cover" }} alt="Actualité Busola" />
                </div>
                <p className="mb-2 text-tertiary fw-bold small"><i className="fa fa-calendar-alt me-2"></i>8 Février 2026</p>
                <h3 className="h5 text-primary fw-bold mb-3">Renforcement de capacités en Plaidoyer et Redevabilité</h3>
                <p className="text-muted small mb-4">Du 10 au 12 novembre 2025, l’Hôtel SOUNON SERO de Parakou a accueilli un atelier de renforcement de capacités sur le plaidoyer, organisé par Busola ONG avec l’appui de l’UNFPA Benin et de l'Ambassade des Pays-Bas au Bénin.</p>
                <a href="#!" className="text-secondary fw-bold small text-decoration-none hover-right">Lire la suite <i className="fa fa-arrow-right ms-1"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>







      {/* Team Section - Modern Redesign */}
      <div id="equipe" className="container-fluid py-5 bg-white">
        <div className="container py-5">
          <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "800px" }}>
            <span className="text-primary fw-bold text-uppercase tracking-widest">• NOTRE CAPITAL HUMAIN</span>
            <h1 className="display-4 fw-black text-dark mb-4">L'ÉQUIPE <span className="text-primary">BUSOLA</span></h1>
            <p className="text-muted fs-5">Des hommes et des femmes d'exception engagés pour la dignité et l'égalité au Nord-Bénin.</p>
          </div>
          <div className="row g-4">
            {team.map((m, i) => (
              <div key={i} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${0.1 * (i + 1)}s`}>
                <div className="team-item position-relative rounded-5 overflow-hidden shadow-sm bg-light h-100 transition-all hover-up cursor-pointer" 
                     onClick={() => setSelectedMember(m)}>
                  <div className="overflow-hidden" style={{ height: '400px' }}>
                    <img className="img-fluid w-100 h-100 transition-all hover-scale" 
                         src={m.photo} 
                         style={{ objectFit: 'cover' }} 
                         alt={m.name} />
                  </div>
                  <div className="p-4 text-center">
                    <h4 className="fw-bold mb-1 text-dark">{m.name}</h4>
                    <p className="text-primary mb-0 fw-bold small text-uppercase tracking-wider">{m.role}</p>
                    <div className="mt-3 pt-3 border-top d-flex justify-content-center gap-2">
                       <span className="text-muted small">Voir le profil <ArrowRight size={14} className="ms-1" /></span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials - Premium Layout */}
      <div className="container-fluid py-5 bg-light" id="temoignages">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div className="col-lg-5 wow fadeInLeft" data-wow-delay="0.1s">
              <span className="text-primary fw-bold text-uppercase tracking-widest">• IMPACT RÉEL</span>
              <h1 className="display-4 fw-black text-dark mb-4">ILS NOUS <br /><span className="text-primary">FONT CONFIANCE</span></h1>
              <p className="text-muted fs-5 mb-4">La voix de nos bénéficiaires et partenaires est notre plus belle récompense et notre moteur au quotidien.</p>
              <div className="d-flex align-items-center">
                <div className="d-flex me-3">
                  {[1,2,3,4,5].map(s => <Star key={s} size={20} fill="var(--bs-secondary)" stroke="none" />)}
                </div>
                <span className="fw-bold text-dark">Excellent</span>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="owl-carousel testimonial-carousel position-relative wow fadeInRight" data-wow-delay="0.3s">
                {[
                  { 
                    text: "Grâce à l’ONG Busola, j’ai pu participer à des ateliers de formation où les femmes et les jeunes étaient pleinement impliqués. C'est inspirant de voir une organisation aussi engagée pour notre autonomisation.",
                    name: "Makou Menadèle Murielle",
                    role: "Bénéficiaire du programme YES",
                    photo: "testimony1.jpg"
                  },
                  { 
                    text: "L'approche de Busola en matière de redevabilité et de plaidoyer est un exemple à suivre pour les organisations de la société civile au Bénin.",
                    name: "Dr. Koffi A.",
                    role: "Partenaire Technique",
                    photo: "testimony1.jpg"
                  }
                ].map((t, i) => (
                  <div key={i} className="testimonial-item p-5 bg-white rounded-5 shadow-sm mx-2">
                    <p className="fs-5 text-muted mb-4 italic leading-relaxed" style={{ fontStyle: 'italic' }}>"{t.text}"</p>
                    <div className="d-flex align-items-center">
                      <img className="rounded-circle me-3" src={t.photo} style={{ width: '60px', height: '60px', objectFit: 'cover' }} alt="" />
                      <div>
                        <h6 className="fw-bold mb-0 text-dark">{t.name}</h6>
                        <small className="text-primary fw-bold">{t.role}</small>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* CTA & Social Section Consolidated */}
      <div className="container-fluid p-0 bg-light">
        <div className="row g-0">
          <div className="col-md-4 bg-tertiary text-white p-5 wow fadeIn" data-wow-delay="0.1s">
            <h2 className="text-white text-uppercase mb-3">Devenir <span className="text-white bg-primary px-2">Partenaire</span></h2>
            <p className="small mb-4">Collaborons pour démultiplier notre impact social au Nord-Bénin.</p>
            <a className="btn btn-light text-primary fw-bold rounded-pill px-4" href="#!" data-bs-toggle="modal" data-bs-target="#partenariatModal">NOUS CONTACTER</a>
          </div>
          <div className="col-md-4 bg-primary text-white p-5 wow fadeIn" data-wow-delay="0.2s">
            <h2 className="text-white text-uppercase mb-3">Devenir <span className="text-white bg-secondary px-2">Membre</span></h2>
            <p className="small mb-4">Rejoignez une équipe dynamique et engagée pour le changement.</p>
            <a className="btn btn-light text-primary fw-bold rounded-pill px-4" href="#!" data-bs-toggle="modal" data-bs-target="#benevolatModal">JE M'ENGAGE</a>
          </div>
          <div className="col-md-4 bg-secondary text-white p-5 wow fadeIn" data-wow-delay="0.3s">
            <h2 className="text-white text-uppercase mb-3">Soutenir <span className="text-white bg-primary px-2">Busola</span></h2>
            <p className="small mb-4">Chaque don compte pour financer nos projets de terrain.</p>
            <a className="btn btn-light text-primary fw-bold rounded-pill px-4" href="#!">FAIRE UN DON</a>
          </div>
        </div>

        <div className="container py-5 mt-5">
          <div className="row g-5 align-items-center">
            <div className="col-lg-5 wow fadeInLeft" data-wow-delay="0.1s">
              <span className="text-primary fw-bold text-uppercase tracking-widest">• COMMUNAUTÉ</span>
              <h1 className="display-4 fw-black text-dark mb-4">RESTEZ <br /><span className="text-primary">BRANCHÉS !</span></h1>
              <p className="text-muted fs-5 mb-5">Suivez nos victoires et nos prochains défis au quotidien sur nos plateformes numériques.</p>
              
              <div className="d-flex gap-3">
                {[
                  { icon: <Facebook />, color: '#1877F2', url: 'https://www.facebook.com/profile.php?id=100064788966440' },
                  { icon: <Linkedin />, color: '#0A66C2', url: 'https://www.linkedin.com/company/ong-busola/' },
                  { icon: <Twitter />, color: '#1DA1F2', url: '#' },
                  { icon: <Star />, color: '#E4405F', url: '#' }
                ].map((social, i) => (
                  <a key={i} href={social.url} className="btn btn-square rounded-circle shadow-lg p-0 d-flex align-items-center justify-content-center transition-all hover-up" 
                     style={{ backgroundColor: social.color, color: 'white', width: '60px', height: '60px' }}>
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
            <div className="col-lg-7 wow fadeInRight" data-wow-delay="0.3s">
              <div className="row g-3">
                <div className="col-6 mt-5">
                  <div className="rounded-5 overflow-hidden shadow-sm mb-3" style={{ height: '250px' }}>
                    <img src="project-1.jpg" className="w-100 h-100 object-fit-cover" alt="" />
                  </div>
                  <div className="rounded-5 overflow-hidden shadow-sm" style={{ height: '180px' }}>
                    <img src="project-2.jpg" className="w-100 h-100 object-fit-cover" alt="" />
                  </div>
                </div>
                <div className="col-6">
                  <div className="rounded-5 overflow-hidden shadow-sm mb-3" style={{ height: '180px' }}>
                    <img src="project-3.jpg" className="w-100 h-100 object-fit-cover" alt="" />
                  </div>
                  <div className="rounded-5 overflow-hidden shadow-sm" style={{ height: '250px' }}>
                    <img src="news-3.jpg" className="w-100 h-100 object-fit-cover" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    {/* Footer Original */}
      {/* Footer - Final Professional Design */}
      <footer id="footer" className="container-fluid footer py-5 bg-dark wow fadeIn" data-wow-delay="0.1s" style={{ borderTop: '8px solid var(--bs-secondary)' }}>
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-4 col-md-6">
              <div className="mb-4">
                <img className="img-fluid w-75" src="logo.png" style={{ filter: "brightness(0) invert(1)" }} alt="Logo Busola" />
              </div>
              <p className="text-white-50 fs-6 mb-4 leading-relaxed">
                Depuis 2020, nous œuvrons aux côtés des femmes et des jeunes du Nord-Bénin pour construire un avenir de dignité, d'égalité et de paix.
              </p>
              <div className="d-flex pt-2">
                {[
                  { icon: <Facebook size={20} />, url: 'https://www.facebook.com/profile.php?id=100064788966440' },
                  { icon: <Linkedin size={20} />, url: 'https://www.linkedin.com/company/ong-busola/' },
                  { icon: <Twitter size={20} />, url: '#' },
                  { icon: <Youtube size={20} />, url: '#' }
                ].map((s, i) => (
                  <a key={i} className="btn btn-square btn-outline-light rounded-circle me-2 d-flex align-items-center justify-content-center transition-all hover-up" 
                     href={s.url} style={{ width: '45px', height: '45px' }}>
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-white fw-bold mb-4">Contact Rapide</h4>
              <p className="mb-3 d-flex align-items-start"><MapPin className="me-3 text-secondary" size={20} /> <span>Parakou, Quartier Arafat, <br />République du Bénin</span></p>
              <p className="mb-3 d-flex align-items-center"><Phone className="me-3 text-secondary" size={20} /> +229 01 90 44 46 90</p>
              <p className="mb-3 d-flex align-items-center"><Mail className="me-3 text-secondary" size={20} /> ongbusola@gmail.com</p>
            </div>
            <div className="col-lg-2 col-md-6">
              <h4 className="text-white fw-bold mb-4">Navigation</h4>
              <a className="btn btn-link text-white-50 text-decoration-none mb-2" href="#apropos">À Propos</a>
              <a className="btn btn-link text-white-50 text-decoration-none mb-2" href="#actions">Nos Actions</a>
              <a className="btn btn-link text-white-50 text-decoration-none mb-2" href="#equipe">Notre Équipe</a>
              <a className="btn btn-link text-white-50 text-decoration-none mb-2" href="#actualites">Actualités</a>
              <a className="btn btn-link text-white-50 text-decoration-none" href="#contact">Contact</a>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-white fw-bold mb-4">Newsletter</h4>
              <p className="text-white-50 small mb-4">Restez informé de nos impacts mensuels en vous inscrivant.</p>
              
              {newsletterStatus.type && (
                <div className={`alert alert-${newsletterStatus.type === 'success' ? 'success' : 'danger'} p-2 small mb-3`}>
                  {newsletterStatus.message}
                </div>
              )}

              <form onSubmit={handleNewsletterSubmit} className="position-relative w-100">
                <input 
                  className="form-control bg-transparent border-light w-100 py-3 ps-4 pe-5 text-white" 
                  type="email" 
                  placeholder="Votre email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2 rounded-pill">S'inscrire</button>
              </form>
            </div>
          </div>
        </div>
        <div className="container py-4 border-top border-secondary">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              <span className="text-white-50 small">© {new Date().getFullYear()} <span className="text-secondary fw-bold">ONG BUSOLA</span>. Tous droits réservés.</span>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <div className="footer-menu small">
                <a href="#!" className="text-white-50 text-decoration-none me-3">Confidentialité</a>
                <a href="#!" className="text-white-50 text-decoration-none me-3">Mentions Légales</a>
                <a href="#!" className="text-white-50 text-decoration-none">Cookies</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <a href="#accueil" className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top shadow-lg transition-all hover-up d-flex align-items-center justify-content-center position-fixed bottom-0 end-0 m-4" 
         style={{ width: '55px', height: '55px', zIndex: 99 }}>
        <ArrowUp size={24} />
      </a>


      {/* Modals for Partenariat and Benevolat */}
      <div className="modal fade" id="partenariatModal" tabIndex={-1}>
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Demande de partenariat</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" onClick={() => setContactStatus({ type: null, message: '' })}></button>
            </div>
            <form onSubmit={(e) => handleContactSubmit(e, 'partenariat')}>
              <div className="modal-body">
                {contactStatus.type && (
                  <div className={`alert alert-${contactStatus.type === 'success' ? 'success' : 'danger'} mb-3`}>
                    {contactStatus.message}
                  </div>
                )}
                <div className="mb-3">
                  <label className="form-label">Type de partenariat</label>
                  <select 
                    className="form-select" 
                    value={formData.subject} 
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                  >
                    <option value="">Sélectionner</option>
                    <option value="Financier">Financier</option>
                    <option value="Technique">Technique</option>
                    <option value="Médiatique">Médiatique</option>
                  </select>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Nom complet</label>
                    <input 
                      className="form-control" 
                      value={formData.name} 
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required 
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Email</label>
                    <input 
                      type="email" 
                      className="form-control" 
                      value={formData.email} 
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required 
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea 
                    className="form-control" 
                    rows={4} 
                    value={formData.message} 
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  ></textarea>
                </div>
              </div>
              <div className="modal-footer">
                <button type="submit" className="btn btn-secondary">Envoyer</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="modal fade" id="benevolatModal" tabIndex={-1}>
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Demande de Bénévolat</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" onClick={() => setContactStatus({ type: null, message: '' })}></button>
            </div>
            <form onSubmit={(e) => handleContactSubmit(e, 'benevolat')}>
              <div className="modal-body">
                {contactStatus.type && (
                  <div className={`alert alert-${contactStatus.type === 'success' ? 'success' : 'danger'} mb-3`}>
                    {contactStatus.message}
                  </div>
                )}
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Nom complet</label>
                    <input 
                      className="form-control" 
                      value={formData.name} 
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required 
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Email</label>
                    <input 
                      type="email" 
                      className="form-control" 
                      value={formData.email} 
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required 
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">Compétences / Domaine d'intérêt</label>
                  <input 
                    className="form-control" 
                    value={formData.subject} 
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required 
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Message de motivation</label>
                  <textarea 
                    className="form-control" 
                    rows={4} 
                    value={formData.message} 
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  ></textarea>
                </div>
              </div>
              <div className="modal-footer">
                <button type="submit" className="btn btn-secondary">S'engager</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Member Modal (React state based) */}
      {selectedMember && (
        <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{selectedMember.name}</h5>
                <button type="button" className="btn-close" onClick={() => setSelectedMember(null)}></button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-4"><img src={selectedMember.photo} className="img-fluid rounded" alt={selectedMember.name} /></div>
                  <div className="col-md-8">
                    <h4 className="text-primary">{selectedMember.role}</h4>
                    <p className="mt-3">{selectedMember.description || "Pas de description disponible."}</p>
                    {selectedMember.email && <p><strong>Email:</strong> {selectedMember.email}</p>}
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary" onClick={() => setSelectedMember(null)}>Fermer</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating Chatbot */}
      <div className="position-fixed bottom-0 end-0 m-4" style={{ zIndex: 1050 }}>
        {!isChatOpen && (
          <button 
            className="btn btn-primary rounded-circle shadow-lg p-0 d-flex align-items-center justify-content-center transition-all hover-up" 
            style={{ width: '65px', height: '65px' }}
            onClick={() => setIsChatOpen(true)}
          >
            <MessageCircle size={32} />
          </button>
        )}

        {isChatOpen && (
          <div className="card shadow-lg border-0 rounded-4 overflow-hidden wow fadeInUp" style={{ width: '380px', maxHeight: '550px' }}>
            <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center p-4 border-0">
              <div className="d-flex align-items-center">
                <div className="bg-white rounded-circle p-1 me-2 shadow-sm" style={{ width: '40px', height: '40px' }}>
                  <img src="logo.png" className="img-fluid" alt="Bot" />
                </div>
                <div>
                  <h6 className="mb-0 fw-bold">Assistant Busola</h6>
                  <small className="opacity-75" style={{ fontSize: '0.7rem' }}>En ligne • Prêt à vous aider</small>
                </div>
              </div>
              <button className="btn-close btn-close-white shadow-none" onClick={() => setIsChatOpen(false)}></button>
            </div>
            <div className="card-body p-4 overflow-auto" style={{ height: '350px', backgroundColor: '#fcfcfc' }}>
              {chatHistory.map((chat, idx) => (
                <div key={idx} className={`d-flex mb-4 ${chat.role === 'user' ? 'justify-content-end' : 'justify-content-start'}`}>
                  {chat.role === 'bot' && (
                    <div className="bg-white rounded-circle p-1 me-2 shadow-sm d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: '35px', height: '35px' }}>
                      <img src="logo.png" className="img-fluid" alt="Bot" />
                    </div>
                  )}
                  <div 
                    className={`p-3 rounded-4 shadow-sm ${chat.role === 'user' ? 'bg-primary text-white' : 'bg-white text-dark'}`}
                    style={{ maxWidth: '85%', fontSize: '0.9rem' }}
                  >
                    {chat.text}
                    {chat.actions && (
                      <div className="mt-2 d-flex flex-wrap gap-2">
                        {chat.actions.map((act, i) => (
                          <button 
                            key={i} 
                            onClick={() => handleQuickAction(act.target)}
                            className={`btn btn-sm rounded-pill py-1 px-3 ${chat.role === 'user' ? 'btn-light text-primary' : 'btn-outline-primary'}`}
                            style={{ fontSize: '0.75rem' }}
                          >
                            {act.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="card-footer bg-white border-0 p-4">
              <form onSubmit={handleChatSubmit} className="d-flex">
                <input 
                  type="text" 
                  className="form-control rounded-pill border-0 bg-light px-4 py-2" 
                  style={{ fontSize: '0.9rem' }}
                  placeholder="Posez votre question..."
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                />
                <button type="submit" className="btn btn-primary rounded-circle ms-3 p-0 d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: '45px', height: '45px' }}>
                  <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
