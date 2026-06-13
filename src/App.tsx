import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Users, Handshake, ShieldCheck, MapPin, Phone, Mail, Facebook, Linkedin, Twitter, Youtube, ArrowRight, MessageCircle, Send, X, Menu, ArrowUp, BookOpen, Star, PlusCircle, ChevronDown, Quote } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import { staticNewsItems } from './NewsPage';
import { staticActions } from './ActionPage';
import { galleryItems } from './galleryData';
import { groupItemsBySection } from './galleryUtils';

declare global {
  interface Window {
    $: any;
    jQuery: any;
    WOW: any;
  }
}

// ── Interface pour les news/actions ──
interface DynamicItem {
  id: string | number;
  _id?: string;
  title: string;
  tag: string;
  img: string;
  desc: string;
  date?: string;
  category?: string;
  isGallery?: boolean;
}

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
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '', type: '' });
  const [contactStatus, setContactStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' });
  const [latestNews, setLatestNews] = useState<any[]>([]);
  const [latestActions, setLatestActions] = useState<any[]>([]);
  const [latestTestimonials, setLatestTestimonials] = useState<any[]>([]);
  const [loadingContent, setLoadingContent] = useState(true);

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
    const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

    // 1. Fetch News
    const fetchNews = async () => {
      try {
        const res = await fetch(`${API_URL}/api/news`);
        if (!res.ok) throw new Error('API unavailable');
        const data = await res.json();
        const normalized = data.map((item: any) => ({
          ...item,
          id: item._id,
          date: new Date(item.date || item.createdAt).toLocaleDateString('fr-FR', {
            day: '2-digit', month: 'long', year: 'numeric'
          }),
          img: item.image || '/optimized/news-1.webp',
          desc: item.content || item.summary || ''
        }));
        setLatestNews([...normalized, ...staticNewsItems].slice(0, 3));
      } catch (error) {
        setLatestNews(staticNewsItems.slice(0, 3));
      }
    };

    // 2. Fetch Actions
    const fetchActions = async () => {
      try {
        // Prepare Gallery Actions
        const groupedGallery = groupItemsBySection(galleryItems);
        const galleryActions = Array.from(groupedGallery.entries()).map(([sectionName, items]) => ({
          id: sectionName,
          title: sectionName,
          tag: items[0].categoryLabel,
          img: items[0].img,
          desc: items[0].desc.split('. (Image')[0].replace("Photo prise lors de l'activité: ", ""),
          isGallery: true,
          category: items[0].category
        }));

        const res = await fetch(`${API_URL}/api/actions`);
        let combined: any[] = [];
        if (res.ok) {
          const data = await res.json();
          const normalizedActions = data.map((item: any) => ({
            id: item._id,
            title: item.title,
            tag: item.category || 'Non catégorisé',
            img: (item.images && item.images.length > 0) ? item.images[0] : '/optimized/action-1.webp',
            desc: item.description || ''
          }));
          combined = [...normalizedActions, ...galleryActions];
        } else {
          combined = [...staticActions, ...galleryActions];
        }
        setLatestActions(combined.slice(0, 3));
      } catch (error) {
        setLatestActions(staticActions.slice(0, 3));
      }
    };

    // 3. Fetch Testimonials
    const fetchTestimonials = async () => {
      try {
        const res = await fetch(`${API_URL}/api/testimonials`);
        if (!res.ok) throw new Error('API unavailable');
        const data = await res.json();
        const homeTestimonials = data.filter((t: any) => t.showOnHome && !t.archived);
        const merged = [...homeTestimonials, ...staticTestimonialsFallback];
        setLatestTestimonials(merged.slice(0, 3));
      } catch (error) {
        setLatestTestimonials(staticTestimonialsFallback.slice(0, 3));
      }
    };

    Promise.all([fetchNews(), fetchActions(), fetchTestimonials()]).finally(() => setLoadingContent(false));
  }, []);

  const staticTestimonialsFallback = [
    {
      name: 'Makou Menadèle Murielle',
      role: 'Bénéficiaire du programme YES',
      message: "Grâce à l'ONG Busola, j'ai pu participer à des ateliers de formation où les femmes et les jeunes étaient pleinement impliqués. J'ai renforcé mes compétences en Plaidoyer, Redevabilité et Fake News. J'ai gagné en confiance et compris que notre voix peut réellement contribuer au changement dans notre communauté.",
      image: "/optimized/testimony1.webp",
      rating: 5
    },
    {
      name: 'Fadilatou Bani',
      role: 'Bénéficiaire du programme PAGEDA',
      message: "L'accompagnement de Busola a été un véritable tremplin pour moi. J'ai pu acquérir des compétences concrètes grâce au programme d'alphabétisation fonctionnelle. Aujourd'hui, je gère ma propre activité de façon plus autonome et je participe activement aux décisions dans mon foyer.",
      image: "/optimized/team-1.webp",
      rating: 5
    }
  ];

  useEffect(() => {
    if (!loadingContent) {
      const spinner = document.getElementById('spinner');
      if (spinner) {
        spinner.classList.remove('show');
      }
      if (window.WOW) {
        new window.WOW().init();
      }
    }
  }, [loadingContent]);

  useEffect(() => {
    const initJS = () => {
      // Initialize WOW.js if not already done by loadingContent
      if (window.WOW && !loadingContent) {
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

  useEffect(() => {
    if (latestTestimonials.length > 0) {
      const timer = setTimeout(() => {
        if (window.$ && window.$(".testimonial-carousel").length) {
          const $carousel = window.$(".testimonial-carousel");
          if ($carousel.data('owl.carousel')) {
            $carousel.owlCarousel('destroy');
            $carousel.removeClass('owl-loaded owl-drag owl-responsive');
          }
          $carousel.owlCarousel({
            items: 1,
            autoplay: true,
            smartSpeed: 1000,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut',
            dots: false,
            loop: latestTestimonials.length > 1,
            nav: true,
            navText: [
              '<i class="bi bi-chevron-left"></i>',
              '<i class="bi bi-chevron-right"></i>'
            ]
          });
        }
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [latestTestimonials]);


  const handleContactSubmit = async (e: React.FormEvent, type: string) => {
    e.preventDefault();
    const dataToSend = { ...formData, type };

    try {
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const response = await fetch(`${API_URL}/api/contact`, {
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
      photo: "/optimized/team-1.webp",
      description: ""
    },
    {
      name: "Fadel KASSALI",
      role: "Assistant Projet",
      photo: "/optimized/team-2.webp",
      email: "kassalifadel4@gmail.com",
      description: ""
    },
    {
      name: "Abouyaïdou MAMA",
      role: "Directeur Exécutif",
      photo: "/optimized/team-3.webp",
      email: "mamaabouyaidou22@gmail.com",
      description: "MAMA Abouyaïdou est doctorant en relations internationales à l’Université de Parakou (Bénin), spécialisé en sécurité internationale, cohésion sociale et prévention du terrorisme au Sahel. Fort de plus de huit années d’expérience, il a coordonné et supervisé des projets communautaires majeurs financés par des partenaires internationaux tels que l’UNICEF, l’Union européenne et CARE International. Coordonnateur et Directeur exécutif de l’ONG Busola, il œuvre dans les domaines de la paix, des VBG, du développement rural et de la santé sexuelle et reproductive. Assistant de recherche et enseignant universitaire, il est certifié par le Peace Operations Training Institute des Nations Unies. Sa vision est de transformer la recherche en action pour une paix durable et inclusive."
    },
    {
      name: "BOUKO Chabi Dramane",
      role: "Président du Conseil de Surveillance",
      photo: "/optimized/team-4.webp",
      description: ""
    },
    {
      name: "Alain ASSANKPON",
      role: "Président d'honneur",
      photo: "/optimized/team-5.webp",
      description: ""
    },
    {
      name: "Sybgath SANNI",
      role: "Présidente du Conseil d’Administration",
      photo: "/optimized/team-6.webp",
      description: "Pionnière de la naissance de l'ONG BUSOLA, est une figure remarquable, dotée d'un esprit brillant, d'un talent indéniable et d'un esprit innovant. En tant qu'entrepreneuse émérite, elle a fondé plusieurs entreprises prospères telles que BUSOLA BUILDINGS SARL, SUPERMARCHÉ CHANCE GLORY et le restaurant AFRICAN'S DELICES by SYB. En tant que gestionnaire de projets de formation, Sybgath se spécialise dans le domaine du Droit à la Santé Sexuelle et Reproductive (DSSR) ainsi que dans les..."
    }
  ];

  return (
    <div className="wrapper">
      
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
                    LE <span style={{ fontWeight: "bold" }}>POUVOIR D'AGIR</span> <br /> AU COEUR DE <br /> CHAQUE <span style={{ fontWeight: "bold" }}>COMMUNAUTÉ</span>
                  </h1>
                  <p className="mb-5 fs-5">
                    Depuis 2020, L'ONG Busola oeuvre aux côtés des femmes et des jeunes du Nord-Bénin pour construire un avenir de dignité, d'égalité et de paix à travers une approche intégrée et des patenariats solides favorisant l'autonomie, la santé, la citoyenneté active et la cohésion sociale.
                  </p>
                  <div className="d-flex">
                    <Link className="btn btn-secondary text-white fw-bold text-uppercase rounded-1 py-2 px-4 me-3" to="/soutenir">Soutenez nous</Link>
                    <a className="btn btn-tertiary text-white rounded-1 py-2 fw-bold text-uppercase px-4" href="#!">Découvrez nos actions</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 p-0 text-center">
                <img className="w-100 shadow-lg" style={{ borderRadius: "50%", border: "10px solid white" }} src="/optimized/hero-slider.webp" alt="Busola"  loading="eager" decoding="async" />
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


      {/* About Section - Balanced Magazine Design */}
      <div id="apropos" className="container-fluid py-5 bg-white" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
        <div className="container py-5">
          <div className="row g-5">
            {/* Left Column: Image + Values (Tablet only) */}
            <div className="col-lg-5 wow fadeIn mb-5 mb-lg-0" data-wow-delay="0.1s">
              <div className="position-relative mb-5">
                <div className="rounded-5 shadow-sm overflow-hidden" style={{ height: "550px", position: "relative" }}>
                  <img src="/optimized/about.webp" className="w-100 h-100" style={{ objectFit: 'cover' }} alt="L'équipe Busola"  loading="lazy" decoding="async" />
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

            </div>

            {/* Right Column: Narrative Text + Values (Desktop) */}
            <div className="col-lg-7 wow fadeIn" data-wow-delay="0.3s">
              <div className="ps-lg-5">
                <div className="position-relative mb-5">
                  <div className="position-absolute" style={{ top: "-25px", left: "20px", zIndex: 2 }}>
                    <span className="badge bg-tertiary text-white px-4 py-2 fw-bold text-uppercase" style={{ borderRadius: "4px", fontSize: "0.85rem", letterSpacing: "1px" }}>Qui sommes-nous ?</span>
                  </div>
                  <div className="bg-primary p-5 rounded-4 shadow-lg d-flex align-items-center justify-content-between" style={{ borderLeft: "10px solid var(--bs-secondary)" }}>
                    <h2 className="fw-black mb-0 text-uppercase" style={{ fontSize: "3rem", color: "#fff", fontWeight: "900" }}>ONG BUSOLA</h2>
                    <img src="logo-hands.png" className="img-fluid d-none d-lg-block" style={{ maxHeight: "100px", filter: "brightness(0) invert(1)" }} alt="Logo"  loading="lazy" decoding="async" />
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


                <div className="d-flex align-items-center">
                  <a href="#!" className="btn btn-primary rounded-pill px-5 py-3 fw-bold shadow-lg transition-all hover-up me-4">
                    Notre histoire <ArrowRight size={20} className="ms-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Unified Values Grid - Full Width */}
          <div className="row g-4 mt-5 wow fadeInUp" data-wow-delay="0.5s">
            {[
              { icon: <Heart className="text-primary" size={32} />, title: 'Dignité', desc: 'Chaque personne au cœur de l\'action' },
              { icon: <Users className="text-primary" size={32} />, title: 'Équité de Genre', desc: 'L\'égalité comme condition à la paix' },
              { icon: <Handshake className="text-primary" size={32} />, title: 'Partenariat', desc: 'Ensemble pour un impact durable' },
              { icon: <ShieldCheck className="text-primary" size={32} />, title: 'Intégrité', desc: 'Transparence & redevabilité' }
            ].map((val, idx) => (
              <div key={idx} className="col-lg-3 col-md-6">
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
        </div>
      </div>

      {/* Principales Actions Menées (Programmes) */}
      <div id="actions" className="container-fluid py-5 bg-white position-relative overflow-hidden" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
        
        {/* Subtle Animated Background Shapes */}
        <div className="position-absolute bg-primary rounded-circle" style={{ width: '600px', height: '600px', top: '-20%', left: '-10%', filter: 'blur(120px)', opacity: 0.08, animation: 'move 15s infinite alternate', zIndex: 0 }}></div>
        <div className="position-absolute bg-secondary rounded-circle" style={{ width: '500px', height: '500px', bottom: '-10%', right: '-5%', filter: 'blur(120px)', opacity: 0.08, animation: 'move 20s infinite alternate-reverse', zIndex: 0 }}></div>
        <div className="position-absolute bg-tertiary rounded-circle" style={{ width: '400px', height: '400px', top: '30%', right: '20%', filter: 'blur(120px)', opacity: 0.08, animation: 'slowRotate 25s linear infinite', zIndex: 0 }}></div>

        <div className="container py-5 position-relative" style={{ zIndex: 1 }}>
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end mb-5 wow fadeIn" data-wow-delay="0.1s">
            <div className="mb-4 mb-md-0">
              <div className="d-flex align-items-center mb-3">
                <span className="text-uppercase me-2 fw-bold" style={{ color: 'var(--brand-tertiary)', fontSize: '0.9rem', letterSpacing: '2px' }}>NOS PROGRAMMES</span>
                <div style={{ height: "1px", background: "var(--brand-tertiary)", width: "40px" }}></div>
              </div>
              <h1 className="fw-bold mb-0" style={{ lineHeight: 1.4, fontSize: '2.5rem' }}>
                <span className="gradient-ice fw-black" style={{ letterSpacing: '-0.5px' }}>Principales actions</span><br/>
                <span className="text-uppercase fw-black" style={{ color: 'var(--brand-text)', letterSpacing: '-0.5px' }}>Menées</span>
              </h1>
            </div>
            <a href="#!" className="btn btn-outline-primary rounded-pill px-4 py-2 d-none d-md-block fw-bold">
              Voir tous les programmes <ArrowRight size={16} className="ms-2" />
            </a>
          </div>

          <div className="row g-4">
            {latestActions.map((action, i) => {
              const detailLink = action.isGallery 
                ? `/galerie/album/${encodeURIComponent(action.id)}`
                : `/actions/${action.id}`;
              
              const galleryShortcut = action.isGallery
                ? `/galerie/${action.category}`
                : `/galerie?filter=${action.id === 'tedidjo' || action.id === 'projet-respect' ? 'dssr' : action.id === 'yes' ? 'paix' : 'leadership'}`;

              return (
                <div key={action.id} className="col-lg-4 wow fadeInUp" data-wow-delay={`${0.1 + i * 0.2}s`}>
                  <div className="card border rounded-0 overflow-hidden h-100 transition-all hover-up" style={{ borderColor: '#eaeaea' }}>
                    <div className="position-relative" style={{ height: '220px', overflow: 'hidden' }}>
                      <img src={action.img} className="img-fluid w-100 h-100 transition-all hover-scale" style={{ objectFit: 'cover' }} alt={action.title}  loading="lazy" decoding="async" />
                      <span className="badge position-absolute top-0 start-0 m-3 bg-primary text-white text-uppercase small px-3 py-2 rounded-pill" style={{ fontSize: '10px', letterSpacing: '1px', zIndex: 2 }}>
                        {action.tag}
                      </span>
                    </div>
                    <div className="card-body p-4 bg-white">
                      <div className="mb-3">
                        <BookOpen className="text-primary" size={28} />
                      </div>
                      <h5 className="fw-bold mb-3 text-dark">{action.title}</h5>
                      <p className="text-muted small mb-4" style={{ textAlign: 'justify', lineHeight: '1.6' }}>
                        {action.desc.length > 160 ? action.desc.slice(0, 160) + '...' : action.desc}
                      </p>
                      <Link to={detailLink} className="text-primary fw-bold text-decoration-none small d-inline-flex align-items-center">
                        En savoir plus <ArrowRight size={16} className="ms-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>


      {/* Partenaires */}
      <div id="partenaires" className="container-fluid mt-0 pt-5 pb-5 partenaire wow fadeIn">
        <div className="container">
          <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '800px' }}>
            <div className="d-flex align-items-center justify-content-center mb-3">
              <div style={{ height: "1px", background: "var(--brand-tertiary)", width: "40px" }}></div>
              <span className="text-uppercase mx-2 fw-bold" style={{ color: 'var(--brand-tertiary)', fontSize: '0.9rem', letterSpacing: '2px' }}>NOS PARTENAIRES</span>
              <div style={{ height: "1px", background: "var(--brand-tertiary)", width: "40px" }}></div>
            </div>
            <h1 className="fw-black mb-4" style={{ lineHeight: 1.2, fontSize: '2.75rem', color: 'var(--brand-text)' }}>
              <span className="text-uppercase fw-black" style={{ color: 'var(--brand-text)', letterSpacing: '-0.5px' }}>Ensemble, pour</span><br/>
              <span className="text-uppercase fw-black" style={{ color: 'var(--brand-text)', letterSpacing: '-0.5px' }}>un impact durable</span>
            </h1>
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
            <div className="d-flex align-items-center justify-content-center mb-3">
              <div style={{ height: "1px", background: "var(--brand-tertiary)", width: "40px" }}></div>
              <span className="text-uppercase mx-2 fw-bold" style={{ color: 'var(--brand-tertiary)', fontSize: '0.9rem', letterSpacing: '2px' }}>ACTUALITÉS</span>
              <div style={{ height: "1px", background: "var(--brand-tertiary)", width: "40px" }}></div>
            </div>
            <h1 className="fw-black mb-4" style={{ lineHeight: 1.2, fontSize: '2.75rem', color: 'var(--brand-text)' }}>
              <span className="text-uppercase fw-black" style={{ color: 'var(--brand-text)', letterSpacing: '-0.5px' }}>Soyez au courant de</span><br/>
              <span className="text-uppercase fw-black" style={{ color: 'var(--brand-text)', letterSpacing: '-0.5px' }}>Notre actualité en temps réel.</span>
            </h1>
          </div>
          <div className="row g-4">
            {latestNews.map((news, i) => (
              <div key={news.id} className="col-md-4 wow fadeIn" data-wow-delay={`${0.1 + i * 0.2}s`}>
                <div className="event-item h-100 p-4 shadow-sm bg-white rounded-4 border transition-all hover-up overflow-hidden">
                  <div className="overflow-hidden rounded-4 mb-4" style={{ height: "220px" }}>
                    <img className="img-fluid w-100 h-100 transition-all hover-scale" src={news.img} style={{ objectFit: "cover" }} alt={news.title}  loading="lazy" decoding="async" />
                  </div>
                  <p className="mb-2 text-tertiary fw-bold small"><i className="fa fa-calendar-alt me-2"></i>{news.date}</p>
                  <h3 className="h5 text-primary fw-bold mb-3">{news.title}</h3>
                  <p className="text-muted small mb-4">
                    {news.desc.length > 200 ? news.desc.slice(0, 200) + '...' : news.desc}
                  </p>
                  <Link to={`/actualites/${news.id}`} className="text-secondary fw-bold small text-decoration-none hover-right">
                    Lire la suite <i className="fa fa-arrow-right ms-1"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>







      {/* Team Section - Design from Team Page */}
      <div id="equipe" className="container-fluid py-5 bg-white">
        <div className="container py-5">
          <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "800px" }}>
            <div className="d-flex align-items-center justify-content-center mb-3">
              <div style={{ height: "1px", background: "var(--brand-tertiary)", width: "40px" }}></div>
              <span className="text-uppercase mx-2 fw-bold" style={{ color: 'var(--brand-tertiary)', fontSize: '0.9rem', letterSpacing: '2px' }}>NOTRE CAPITAL HUMAIN</span>
              <div style={{ height: "1px", background: "var(--brand-tertiary)", width: "40px" }}></div>
            </div>
            <h1 className="fw-black mb-4" style={{ lineHeight: 1.2, fontSize: '2.75rem', color: 'var(--brand-text)' }}>
              <span className="text-uppercase fw-black" style={{ color: 'var(--brand-text)', letterSpacing: '-0.5px' }}>L'Équipe</span><br/>
              <span className="text-uppercase fw-black" style={{ color: 'var(--brand-text)', letterSpacing: '-0.5px' }}>Busola</span>
            </h1>
            <p className="text-muted fs-5 mt-4">Des hommes et des femmes d'exception engagés pour la dignité et l'égalité au Nord-Bénin.</p>
          </div>
          <div className="row g-4 justify-content-center">
            {team.map((m, i) => (
              <div key={i} className="col-md-6 col-lg-4 mb-4 wow fadeInUp" data-wow-delay={`${0.1 * (i + 1)}s`}>
                <div className="team-item bg-white h-100 d-flex flex-column shadow-sm" style={{ border: '1px solid #f0f0f0' }}>
                  <div className="d-flex" style={{ height: '350px' }}>
                    {/* Img Container */}
                    <div className="w-100 position-relative overflow-hidden cursor-pointer" onClick={() => setSelectedMember(m)}>
                      <img className="img-fluid w-100 h-100 transition-all hover-scale" src={m.photo} style={{ objectFit: 'cover', objectPosition: 'top center' }} alt={m.name}  loading="lazy" decoding="async" />
                    </div>
                    {/* Social Container Beige */}
                    <div className="d-flex flex-column justify-content-end align-items-center py-4 flex-shrink-0" style={{ width: '60px', backgroundColor: '#fcf8ec' }}>
                      <a className="btn btn-primary btn-sm btn-square rounded-0 mb-3" href="#!"><i className="fab fa-facebook-f"></i></a>
                      <a className="btn btn-primary btn-sm btn-square rounded-0" href="#!"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                  </div>
                  {/* Name and Role Section */}
                  <div className="p-4 bg-white d-flex flex-column justify-content-center cursor-pointer" style={{ minHeight: '120px' }} onClick={() => setSelectedMember(m)}>
                    <h5 className="text-primary fw-bold mb-2" style={{ fontSize: '1.2rem' }}>{m.name}</h5>
                    <p className="text-secondary fw-bold mb-0" style={{ fontSize: '0.85rem', textTransform: 'uppercase' }}>{m.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials - Carousel */}
      <div className="container-fluid py-5 bg-light" id="temoignages">
        <div className="container py-5">
          <div className="text-center mx-auto mb-4 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '800px' }}>
            <div className="d-flex align-items-center justify-content-center mb-3">
              <div style={{ height: "1px", background: "var(--brand-tertiary)", width: "40px" }}></div>
              <span className="text-uppercase mx-2 fw-bold" style={{ color: 'var(--brand-tertiary)', fontSize: '0.9rem', letterSpacing: '2px' }}>IMPACT RÉEL</span>
              <div style={{ height: "1px", background: "var(--brand-tertiary)", width: "40px" }}></div>
            </div>
            <h1 className="fw-black mb-4" style={{ lineHeight: 1.2, fontSize: '2.75rem', color: 'var(--brand-text)' }}>
              <span className="text-uppercase fw-black" style={{ color: 'var(--brand-text)', letterSpacing: '-0.5px' }}>Ils nous</span><br/>
              <span className="text-uppercase fw-black" style={{ color: 'var(--brand-text)', letterSpacing: '-0.5px' }}>font confiance</span>
            </h1>
            <p className="text-muted fs-5 mb-0">La voix de nos bénéficiaires et partenaires est notre plus belle récompense et notre moteur au quotidien.</p>
          </div>

          <div className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.1s" style={{ minHeight: '400px' }}>
            {latestTestimonials.map((t, index) => (
              <div key={t._id || index} className="testimonial-item">
                <div className="row g-5 align-items-center">
                  <div className="col-lg-5">
                    <div className="testimonial-img position-relative rounded-4 overflow-hidden shadow-sm" style={{ background: '#e2e8f0' }}>
                      <img 
                        className="img-fluid w-100" 
                        src={t.image || "/optimized/testimony1.webp"} 
                        alt={t.name} 
                        style={{ height: "400px", objectFit: "cover", objectPosition: "top" }}  
                        loading={index === 0 ? "eager" : "lazy"} 
                        decoding="async" 
                      />
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <div className="testimonial-title">
                       <div className="d-flex mb-3">
                         {[...Array(t.rating || 5)].map((_, i) => <Star key={i} size={20} fill="#f89d2a" stroke="none" />)}
                       </div>
                       <p className="text-muted mb-4 fs-5">
                          {t.message}
                       </p>
                       <div className="d-flex align-items-center mt-4">
                          <div className="bg-secondary d-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px' }}>
                             <Quote size={30} className="text-white" />
                          </div>
                          <div className="ms-4">
                             <h5 className="text-primary mb-1">{t.name}</h5>
                             <span className="text-secondary fw-bold text-uppercase" style={{ fontSize: '0.85rem' }}>{t.role}</span>
                          </div>
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
            <Link className="btn btn-light text-primary fw-bold rounded-pill px-4" to="/soutenir">FAIRE UN DON</Link>
          </div>
        </div>

        <div className="container py-5 mt-5">
          <div className="row g-5 align-items-center">
            <div className="col-lg-5 wow fadeInLeft" data-wow-delay="0.1s">
              <div className="d-flex align-items-center mb-3">
                <span className="text-uppercase me-2 fw-bold" style={{ color: 'var(--brand-tertiary)', fontSize: '0.9rem', letterSpacing: '2px' }}>COMMUNAUTÉ</span>
                <div style={{ height: "1px", background: "var(--brand-tertiary)", width: "40px" }}></div>
              </div>
              <h1 className="fw-black mb-4" style={{ lineHeight: 1.2, fontSize: '2.75rem', color: 'var(--brand-text)' }}>
                <span className="text-uppercase fw-black" style={{ color: 'var(--brand-text)', letterSpacing: '-0.5px' }}>Restez</span><br/>
                <span className="text-uppercase fw-black" style={{ color: 'var(--brand-text)', letterSpacing: '-0.5px' }}>Branchés !</span>
              </h1>
              <p className="text-muted fs-5 mb-5 mt-4">Suivez nos victoires et nos prochains défis au quotidien sur nos plateformes numériques.</p>
              
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
                  <Link to="/galerie?filter=paix" className="d-block rounded-5 overflow-hidden shadow-sm mb-3 position-relative transition-all hover-scale" style={{ height: '250px' }}>
                    <img src="/optimized/project-1.webp" className="w-100 h-100 object-fit-cover" alt=""  loading="lazy" decoding="async" />
                    <div className="position-absolute bottom-0 start-0 w-100 p-2" style={{ background: 'linear-gradient(transparent, rgba(0,0,0,0.7))' }}>
                      <span className="text-white small fw-bold"><i className="fa fa-image me-1"></i> Voir plus</span>
                    </div>
                  </Link>
                  <Link to="/galerie?filter=leadership" className="d-block rounded-5 overflow-hidden shadow-sm position-relative transition-all hover-scale" style={{ height: '180px' }}>
                    <img src="/optimized/project-2.webp" className="w-100 h-100 object-fit-cover" alt=""  loading="lazy" decoding="async" />
                    <div className="position-absolute bottom-0 start-0 w-100 p-2" style={{ background: 'linear-gradient(transparent, rgba(0,0,0,0.7))' }}>
                      <span className="text-white small fw-bold"><i className="fa fa-image me-1"></i> Voir plus</span>
                    </div>
                  </Link>
                </div>
                <div className="col-6">
                  <Link to="/galerie?filter=dssr" className="d-block rounded-5 overflow-hidden shadow-sm mb-3 position-relative transition-all hover-scale" style={{ height: '180px' }}>
                    <img src="/optimized/project-3.webp" className="w-100 h-100 object-fit-cover" alt=""  loading="lazy" decoding="async" />
                    <div className="position-absolute bottom-0 start-0 w-100 p-2" style={{ background: 'linear-gradient(transparent, rgba(0,0,0,0.7))' }}>
                      <span className="text-white small fw-bold"><i className="fa fa-image me-1"></i> Voir plus</span>
                    </div>
                  </Link>
                  <Link to="/galerie?filter=paix" className="d-block rounded-5 overflow-hidden shadow-sm position-relative transition-all hover-scale" style={{ height: '250px' }}>
                    <img src="/optimized/news-3.webp" className="w-100 h-100 object-fit-cover" alt=""  loading="lazy" decoding="async" />
                    <div className="position-absolute bottom-0 start-0 w-100 p-2" style={{ background: 'linear-gradient(transparent, rgba(0,0,0,0.7))' }}>
                      <span className="text-white small fw-bold"><i className="fa fa-image me-1"></i> Voir plus</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    {/* Footer Original */}
      <Footer />
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
                  <div className="col-md-4"><img src={selectedMember.photo} className="img-fluid rounded" alt={selectedMember.name}  loading="lazy" decoding="async" /></div>
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

      {/* Global Chatbot handles floating widget on all pages */}
    </div>
  );
}

export default App;
