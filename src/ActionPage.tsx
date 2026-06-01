import React, { useEffect } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import { Plus } from 'lucide-react';

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

const sans = "'Barlow Condensed', sans-serif";
const serif = "'Cormorant Garamond', serif";

export default function ActionPage() {
  useEffect(() => {
    if (window.WOW) new window.WOW().init();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="wrapper" style={{ fontFamily: sans }}>
      <Navbar />

      {/* Premium Hero Header Banner */}
      <div
        className="container-fluid position-relative d-flex align-items-center justify-content-center text-white py-5 shadow-sm"
        style={{
          minHeight: '500px',
          background: `linear-gradient(135deg, rgba(14, 42, 92, 0.9) 0%, rgba(26, 63, 128, 0.85) 100%), url('/action-1.jpg') center/cover`,
          paddingTop: '120px',
          paddingBottom: '60px',
          overflow: 'visible'
        }}
      >
        {/* Subtle decorative circles */}
        <div className="position-absolute bg-white rounded-circle" style={{ width: '200px', height: '200px', top: '-100px', left: '-100px', opacity: 0.05 }}></div>
        <div className="position-absolute bg-white rounded-circle" style={{ width: '300px', height: '300px', bottom: '-150px', right: '-150px', opacity: 0.05 }}></div>

        <div className="container text-center position-relative" style={{ zIndex: 2 }}>
          {/* Breadcrumbs */}
          <nav aria-label="breadcrumb" className="mb-3">
            <ol className="breadcrumb justify-content-center mb-0 bg-transparent p-0">
              <li className="breadcrumb-item">
                <Link to="/" className="text-white text-decoration-none opacity-75 hover-opacity-100 fw-medium" style={{ fontSize: '0.95rem' }}>Accueil</Link>
              </li>
              <li className="breadcrumb-item active fw-bold text-warning" aria-current="page" style={{ fontSize: '0.95rem' }}>
                Nos actions
              </li>
            </ol>
          </nav>

          <h1 className="display-3 fw-black text-uppercase text-white mb-3" style={{ letterSpacing: '2px', textShadow: '0 2px 10px rgba(0,0,0,0.15)', fontSize: 'clamp(2.8rem, 6.5vw, 4.8rem)' }}>
            NOS ACTIONS
          </h1>
          
          <div className="mx-auto mb-4" style={{ width: '85px', height: '4px', backgroundColor: 'var(--brand-secondary)', borderRadius: '2px' }}></div>

          <p className="lead text-white opacity-95 mx-auto" style={{ maxWidth: '850px', fontSize: '1.25rem', lineHeight: '1.7', textShadow: '0 1px 5px rgba(0,0,0,0.1)' }}>
            Transformer le potentiel en puissance. Nous ne voyons pas des bénéficiaires — nous voyons des actrices et acteurs du changement.
          </p>
        </div>
      </div>

      {/* ── THE 3 STEPS OF ACTION SECTION (Éduquer, Protéger, Autonomiser) ── */}
      {/* 100% Full screen split layouts faithful to the mockup */}
      <div className="container-fluid p-0 bg-white" style={{ overflow: 'hidden' }}>
        
        {/* Step 1: Éduquer */}
        <div className="row g-0 align-items-stretch" style={{ borderBottom: '1px solid rgba(14, 42, 92, 0.1)' }}>
          {/* Text Column */}
          <div 
            className="col-lg-6 d-flex flex-column justify-content-center"
            style={{ 
              padding: '6% 8%', 
              backgroundColor: '#fff' 
            }}
          >
            <div className="position-relative mb-4">
              <span 
                className="position-absolute" 
                style={{ 
                  fontFamily: sans,
                  fontSize: '130px', 
                  fontWeight: 900, 
                  color: 'rgba(39, 100, 174, 0.08)', 
                  top: '-60px', 
                  left: '-10px',
                  zIndex: 0,
                  lineHeight: '1'
                }}
              >
                01
              </span>
              <div className="position-relative" style={{ zIndex: 1 }}>
                <span className="text-uppercase fw-bold" style={{ color: 'var(--brand-primary)', fontSize: '0.85rem', letterSpacing: '2px' }}>
                  Première Étape
                </span>
                <h3 className="fw-black text-uppercase mt-2 mb-0" style={{ fontSize: '2.8rem', color: 'var(--brand-dark)', letterSpacing: '-0.5px', lineHeight: '1.1' }}>
                  ÉDUQUER<br/>pour libérer l'esprit
                </h3>
              </div>
            </div>

            <p className="text-muted mb-4" style={{ fontSize: '1.05rem', lineHeight: '1.85', textAlign: 'justify' }}>
              Le changement commence par le savoir. Avant d'agir, il faut comprendre. Dans les écoles, les ateliers ou au sein des communautés, nous ouvrons des espaces de dialogue pour briser les tabous et donner les clés de la connaissance. Nous parlons de santé, de droits, de respect, de citoyenneté.
            </p>
            
            <ul className="list-unstyled d-flex flex-column m-0">
              {[
                "Causeries sur la Santé Sexuelle et Reproductive (DSSR)",
                "Ateliers sur la dignité menstruelle et l'hygiène menstruelle",
                "Sessions d'alphabétisation fonctionnelle pour les femmes adultes",
                "Formation des jeunes aux enjeux de la citoyenneté numérique",
                "Éducation Complète à la Sexualité (ECS) en milieu scolaire"
              ].map((item, idx) => (
                <li 
                  key={idx} 
                  className="d-flex align-items-center gap-3 py-3"
                  style={{ borderBottom: '1px solid rgba(14, 42, 92, 0.08)' }}
                >
                  <span className="fw-bold" style={{ color: 'var(--brand-secondary)', fontSize: '1.2rem' }}>→</span>
                  <span className="text-dark fw-medium" style={{ fontSize: '0.98rem' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image Column */}
          <div 
            className="col-lg-6"
            style={{ 
              minHeight: '520px',
              background: "url('/action-1.jpg') center/cover no-repeat"
            }}
          ></div>
        </div>

        {/* Step 2: Protéger */}
        <div className="row g-0 align-items-stretch" style={{ borderBottom: '1px solid rgba(14, 42, 92, 0.1)' }}>
          {/* Image Column (Order first on desktop) */}
          <div 
            className="col-lg-6 order-lg-1 order-2"
            style={{ 
              minHeight: '520px',
              background: "url('/action-2.jpg') center/cover no-repeat"
            }}
          ></div>

          {/* Text Column (Order second on desktop) */}
          <div 
            className="col-lg-6 order-lg-2 order-1 d-flex flex-column justify-content-center"
            style={{ 
              padding: '6% 8%', 
              backgroundColor: 'var(--brand-light)' 
            }}
          >
            <div className="position-relative mb-4">
              <span 
                className="position-absolute" 
                style={{ 
                  fontFamily: sans,
                  fontSize: '130px', 
                  fontWeight: 900, 
                  color: 'rgba(245, 159, 35, 0.08)', 
                  top: '-60px', 
                  left: '-10px',
                  zIndex: 0,
                  lineHeight: '1'
                }}
              >
                02
              </span>
              <div className="position-relative" style={{ zIndex: 1 }}>
                <span className="text-uppercase fw-bold" style={{ color: 'var(--brand-secondary)', fontSize: '0.85rem', letterSpacing: '2px' }}>
                  Deuxième Étape
                </span>
                <h3 className="fw-black text-uppercase mt-2 mb-0" style={{ fontSize: '2.8rem', color: 'var(--brand-dark)', letterSpacing: '-0.5px', lineHeight: '1.1' }}>
                  PROTÉGER<br/>pour garantir la sécurité
                </h3>
              </div>
            </div>

            <p className="text-muted mb-4" style={{ fontSize: '1.05rem', lineHeight: '1.85', textAlign: 'justify' }}>
              L'épanouissement est impossible sans la sécurité. Notre mission est de construire un environnement protecteur. Nous luttons contre les VBG en transformant les mentalités à la racine, en engageant les leaders communautaires et en créant des ponts de confiance pour que chaque victime sache où trouver de l'aide.
            </p>
            
            <ul className="list-unstyled d-flex flex-column m-0">
              {[
                "Dialogue avec les leaders religieux pour la transformation des normes sociales",
                "Création de mécanismes d'alerte et référencement pour les survivantes",
                "Plaidoyer pour l'ouverture permanente des CIPEC-VBG les week-ends",
                "Médiation et prévention des conflits communautaires",
                "Campagne digitale — 16 jours d'activisme contre les VBG numériques"
              ].map((item, idx) => (
                <li 
                  key={idx} 
                  className="d-flex align-items-center gap-3 py-3"
                  style={{ borderBottom: '1px solid rgba(14, 42, 92, 0.08)' }}
                >
                  <span className="fw-bold" style={{ color: 'var(--brand-secondary)', fontSize: '1.2rem' }}>→</span>
                  <span className="text-dark fw-medium" style={{ fontSize: '0.98rem' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Step 3: Autonomiser */}
        <div className="row g-0 align-items-stretch" style={{ borderBottom: '1px solid rgba(14, 42, 92, 0.1)' }}>
          {/* Text Column */}
          <div 
            className="col-lg-6 d-flex flex-column justify-content-center"
            style={{ 
              padding: '6% 8%', 
              backgroundColor: '#fff' 
            }}
          >
            <div className="position-relative mb-4">
              <span 
                className="position-absolute" 
                style={{ 
                  fontFamily: sans,
                  fontSize: '130px', 
                  fontWeight: 900, 
                  color: 'rgba(59, 177, 67, 0.08)', 
                  top: '-60px', 
                  left: '-10px',
                  zIndex: 0,
                  lineHeight: '1'
                }}
              >
                03
              </span>
              <div className="position-relative" style={{ zIndex: 1 }}>
                <span className="text-uppercase fw-bold" style={{ color: 'var(--brand-tertiary)', fontSize: '0.85rem', letterSpacing: '2px' }}>
                  Troisième Étape
                </span>
                <h3 className="fw-black text-uppercase mt-2 mb-0" style={{ fontSize: '2.8rem', color: 'var(--brand-dark)', letterSpacing: '-0.5px', lineHeight: '1.1' }}>
                  AUTONOMISER<br/>pour bâtir l'avenir
                </h3>
              </div>
            </div>

            <p className="text-muted mb-4" style={{ fontSize: '1.05rem', lineHeight: '1.85', textAlign: 'justify' }}>
              La véritable liberté est économique. Notre action vise à donner aux femmes et aux jeunes les outils pour construire leur propre indépendance. De la formation professionnelle à l'agro-écologie, nous soutenons des initiatives qui génèrent des revenus, renforcent la sécurité alimentaire et respectent l'environnement.
            </p>
            
            <ul className="list-unstyled d-flex flex-column m-0">
              {[
                "Formation aux AGR et remise de kits matériels pour les femmes vulnérables",
                "Formation pratique en techniques de pépinière et agro-écologie",
                "Appui au leadership et à la participation à la vie publique",
                "Bootcamp de renforcement des capacités des jeunes catalyseurs",
                "Théâtre communautaire comme outil de plaidoyer et sensibilisation"
              ].map((item, idx) => (
                <li 
                  key={idx} 
                  className="d-flex align-items-center gap-3 py-3"
                  style={{ borderBottom: '1px solid rgba(14, 42, 92, 0.08)' }}
                >
                  <span className="fw-bold" style={{ color: 'var(--brand-secondary)', fontSize: '1.2rem' }}>→</span>
                  <span className="text-dark fw-medium" style={{ fontSize: '0.98rem' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image Column */}
          <div 
            className="col-lg-6"
            style={{ 
              minHeight: '520px',
              background: "url('/action-3.jpg') center/cover no-repeat"
            }}
          ></div>
        </div>

      </div>

      {/* Main Content: active projects realizaitons */}
      <div className="container-fluid py-5 bg-white">
        <div className="container py-5">
          {/* Header */}
          <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '800px' }}>
            <span className="text-uppercase fw-bold" style={{ color: 'var(--brand-primary)', fontSize: '0.9rem', letterSpacing: '2px', display: 'block', marginBottom: '8px' }}>
              PRINCIPALES RÉALISATIONS
            </span>
            <h2 className="fw-black text-uppercase text-dark mb-3" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.5px' }}>
              Nos grands projets menés
            </h2>
            <div className="mx-auto" style={{ width: '60px', height: '3px', backgroundColor: 'var(--brand-secondary)' }}></div>
          </div>

          {/* Cards Grid */}
          <div className="row g-4 d-flex align-items-stretch mb-4">
            {actions.map((proj, i) => (
              <div key={i} className="col-md-6 col-lg-4 d-flex wow fadeInUp" data-wow-delay={`${0.1 + i * 0.1}s`}>
                <div className="bg-white shadow d-flex flex-column rounded w-100 overflow-hidden" style={{ border: '1px solid #f8f9fa' }}>
                  <div className="position-relative overflow-hidden">
                    <Link to={`/galerie?filter=${proj.id === 'tedidjo' || proj.id === 'projet-respect' ? 'dssr' : proj.id === 'yes' ? 'paix' : 'leadership'}#axis-${proj.id === 'tedidjo' || proj.id === 'projet-respect' ? 'dssr' : proj.id === 'yes' ? 'paix' : 'leadership'}`}>
                      <img className="img-fluid w-100 transition-all hover-scale" src={proj.img} alt={proj.title} style={{ height: '220px', objectFit: 'cover' }} />
                    </Link>
                    <span 
                      className="px-3 py-1 position-absolute top-0 end-0 text-white fw-bold" 
                      style={{ backgroundColor: 'var(--brand-secondary)', fontSize: '0.85rem' }}
                    >
                      {proj.tag}
                    </span>
                  </div>
                  
                  {/* Content block */}
                  <div className="p-4 d-flex flex-column flex-grow-1">
                    <h3 className="h5 fw-bold text-uppercase mb-3" style={{ color: 'var(--brand-text)', fontFamily: sans }}>{proj.title}</h3>
                    <p className="text-muted flex-grow-1" style={{ fontSize: '0.93rem', lineHeight: '1.6', textAlign: 'justify' }}>
                      {proj.desc}
                    </p>
                  </div>
                  
                  {/* En savoir plus Button */}
                  <Link to={`/actions/${proj.id}`} className="btn text-white w-100 border-0 rounded-0 py-3 d-flex align-items-center justify-content-center gap-2" style={{ backgroundColor: 'var(--brand-primary)', fontSize: '0.95rem', fontWeight: 'bold' }}>
                    <Plus size={16} /> En savoir plus
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── HUMAN IMPACT / TESTIMONY SECTION (Mariam's story) ── */}
      {/* Implemented inside a centered box of var(--cobalt) as defined in legacy style.css */}
      <section className="container-fluid py-5" style={{ background: 'var(--brand-light)' }}>
        <div className="container py-4">
          <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '800px' }}>
            <span className="text-uppercase fw-bold" style={{ color: 'var(--brand-tertiary)', fontSize: '0.9rem', letterSpacing: '2px', display: 'block', marginBottom: '8px' }}>
              IMPACT HUMAIN
            </span>
            <h2 className="fw-black text-uppercase text-dark mb-3" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.5px' }}>
              Une vie transformée
            </h2>
            <div className="mx-auto" style={{ width: '60px', height: '3px', backgroundColor: 'var(--brand-tertiary)' }}></div>
          </div>

          <div 
            className="row g-0 mx-auto wow fadeInUp" 
            data-wow-delay="0.2s"
            style={{ 
              maxWidth: '950px', 
              backgroundColor: 'var(--brand-dark)', 
              borderRadius: '8px', 
              overflow: 'hidden',
              boxShadow: '0 20px 50px rgba(14, 42, 92, 0.18)'
            }}
          >
            {/* Left face card (300px on desktop) */}
            <div 
              className="col-md-4 d-flex flex-column align-items-center justify-content-center text-center text-white" 
              style={{ 
                background: 'linear-gradient(180deg, #1A3F80 0%, var(--brand-dark) 100%)',
                padding: '48px 32px'
              }}
            >
              <div 
                className="overflow-hidden mb-3 shadow"
                style={{ 
                  width: '100px', 
                  height: '100px', 
                  borderRadius: '50%', 
                  border: '3px solid var(--brand-secondary)'
                }}
              >
                <img 
                  src="/testimony1.jpg" 
                  alt="Mariam" 
                  className="w-100 h-100 object-fit-cover"
                />
              </div>
              <h4 className="fw-bold mb-1" style={{ fontSize: '1.25rem', color: '#fff', fontFamily: sans }}>Mariam, 24 ans</h4>
              <span className="text-warning fw-bold text-uppercase" style={{ fontSize: '0.75rem', letterSpacing: '1px' }}>
                Bénéficiaire TEDIDJO 2
              </span>
              <span className="text-white opacity-50" style={{ fontSize: '0.75rem' }}>
                Karimama, Nord-Bénin
              </span>
            </div>

            {/* Right quote card */}
            <div className="col-md-8 text-white d-flex flex-column justify-content-center position-relative" style={{ padding: '48px' }}>
              <span 
                className="position-absolute" 
                style={{ 
                  fontFamily: sans,
                  fontSize: '110px', 
                  fontWeight: 900, 
                  color: 'rgba(245, 159, 35, 0.15)', 
                  top: '-15px', 
                  left: '20px',
                  lineHeight: '1',
                  pointerEvents: 'none'
                }}
              >
                "
              </span>
              
              <p 
                className="m-0 position-relative" 
                style={{ 
                  fontFamily: serif, 
                  fontSize: '1.28rem', 
                  lineHeight: '1.8', 
                  fontStyle: 'italic',
                  color: 'rgba(255, 255, 255, 0.9)',
                  textAlign: 'justify',
                  zIndex: 1
                }}
              >
                Quand nous avons rencontré Mariam, elle était déscolarisée et sans perspective. Grâce à nos sessions d'
                <b style={{ fontStyle: 'normal', color: 'var(--brand-secondary)' }}>éducation</b>, elle a repris confiance en elle et compris ses droits fondamentaux. Intégrée dans un espace <b style={{ fontStyle: 'normal', color: 'var(--brand-tertiary)' }}>protégé</b>, elle a pu parler des violences qu'elle subissait et bénéficier d'un accompagnement juridique. Aujourd'hui, grâce à une formation en couture et gestion, elle est <b style={{ fontStyle: 'normal', color: 'var(--brand-primary)' }}>autonome</b>. Elle a monté sa propre petite activité et est devenue une source d'inspiration pour les autres jeunes filles de son quartier. Son histoire, c'est la raison d'être de notre action.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
