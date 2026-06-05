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

const cond = "'Barlow Condensed', sans-serif";
const serif = "'Poppins', sans-serif";
const cobalt = '#2864ae';
const gold = '#f39c12';
const green = '#27b074';

export default function ActionPage() {
  useEffect(() => {
    if (window.WOW) new window.WOW().init();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="wrapper" style={{ fontFamily: cond }}>
      <Navbar />

      {/* ── HERO ── */}
      <div
        className="container-fluid position-relative d-flex align-items-center justify-content-center text-white"
        style={{
          minHeight: '100vh',
          background: `linear-gradient(135deg, rgba(40,100,174,0.92) 0%, rgba(30,75,131,0.92) 100%), url('/action-1.jpg') center/cover no-repeat`,
          paddingTop: '80px',
          paddingBottom: '60px',
        }}
      >
        {/* Motif background */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url('/logo-hands.png')`,
          backgroundSize: '200px',
          backgroundRepeat: 'repeat',
          opacity: 0.04,
          pointerEvents: 'none'
        }} />

        <div className="container text-center position-relative" style={{ zIndex: 2 }}>
          <nav aria-label="breadcrumb" className="mb-3">
            <ol className="breadcrumb justify-content-center mb-0 bg-transparent p-0">
              <li className="breadcrumb-item">
                <Link to="/" className="text-white text-decoration-none opacity-75 fw-medium" style={{ fontSize: '0.95rem' }}>Accueil</Link>
              </li>
              <li className="breadcrumb-item active fw-bold" style={{ color: gold, fontSize: '0.95rem' }} aria-current="page">
                Nos actions
              </li>
            </ol>
          </nav>

          {/* Label */}
          <div className="d-flex align-items-center justify-content-center mb-3">
            <div style={{ height: '2px', width: '40px', background: gold }} />
            <span className="text-uppercase mx-3 fw-bold" style={{ color: gold, fontSize: '0.85rem', letterSpacing: '3px' }}>Ce que nous faisons</span>
            <div style={{ height: '2px', width: '40px', background: gold }} />
          </div>

          <h1 style={{
            fontFamily: cond,
            fontSize: 'clamp(3.5rem, 9vw, 7rem)',
            fontWeight: 900,
            textTransform: 'uppercase',
            lineHeight: 0.9,
            letterSpacing: '-2px',
            color: '#fff',
            marginBottom: '32px'
          }}>
            NOS ACTIONS
          </h1>

          <p className="mx-auto" style={{
            fontFamily: serif,
            maxWidth: '700px',
            fontSize: '1.1rem',
            lineHeight: '1.75',
            color: 'rgba(255,255,255,0.88)',
            fontStyle: 'italic'
          }}>
            Nous ne voyons pas des bénéficiaires — nous voyons des actrices et acteurs du changement.
          </p>

          {/* Scroll cue */}
          <div className="mt-5" style={{ opacity: 0.6 }}>
            <div style={{ width: '1px', height: '60px', background: 'rgba(255,255,255,0.5)', margin: '0 auto' }} />
          </div>
        </div>
      </div>

      {/* ── STEP 1: ÉDUQUER ── */}
      <div className="container-fluid p-0" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <div className="row g-0 flex-grow-1" style={{ minHeight: '100vh' }}>
          {/* Text Column */}
          <div
            className="col-lg-6 d-flex flex-column justify-content-center"
            style={{ padding: 'clamp(48px,7vh,80px) clamp(32px,6vw,80px)', background: '#fff' }}
          >
            <div className="position-relative mb-4">
              <span
                className="position-absolute"
                style={{
                  fontFamily: cond,
                  fontSize: 'clamp(80px,12vw,130px)',
                  fontWeight: 900,
                  color: 'rgba(40,100,174,0.06)',
                  top: '-40px',
                  left: '-10px',
                  zIndex: 0,
                  lineHeight: 1
                }}
              >01</span>
              <div className="position-relative" style={{ zIndex: 1 }}>
                <div className="d-flex align-items-center gap-2 mb-2">
                  <div style={{ width: '32px', height: '2px', background: cobalt }} />
                  <span className="text-uppercase fw-bold" style={{ color: cobalt, fontSize: '0.8rem', letterSpacing: '2px' }}>
                    Première Étape
                  </span>
                </div>
                <h2 style={{ fontFamily: cond, fontSize: 'clamp(2.5rem,5vw,4rem)', fontWeight: 900, textTransform: 'uppercase', color: '#0d1b2a', lineHeight: 0.95, letterSpacing: '-1px' }}>
                  ÉDUQUER<br />
                  <span style={{ color: cobalt }}>pour libérer l'esprit</span>
                </h2>
              </div>
            </div>

            <p className="text-muted mb-4" style={{ fontFamily: serif, fontSize: '1rem', lineHeight: '1.85', textAlign: 'justify' }}>
              Le changement commence par le savoir. Avant d'agir, il faut comprendre. Dans les écoles, les ateliers ou au sein des communautés, nous ouvrons des espaces de dialogue pour briser les tabous et donner les clés de la connaissance. Nous parlons de santé, de droits, de respect, de citoyenneté.
            </p>

            <ul className="list-unstyled d-flex flex-column m-0">
              {[
                "Causeries sur la Santé Sexuelle et Reproductive (DSSR)",
                "Ateliers sur la dignité et l'hygiène menstruelle",
                "Sessions d'alphabétisation fonctionnelle pour les femmes adultes",
                "Formation des jeunes aux enjeux de la citoyenneté numérique",
                "Éducation Complète à la Sexualité (ECS) en milieu scolaire"
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="d-flex align-items-start gap-3 py-3"
                  style={{ borderBottom: `1px solid rgba(40,100,174,0.1)` }}
                >
                  <span style={{ color: cobalt, fontWeight: 900, fontSize: '1.1rem', lineHeight: 1.2, flexShrink: 0 }}>→</span>
                  <span style={{ fontFamily: serif, color: '#2d3748', fontSize: '0.95rem', lineHeight: 1.5 }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image Column */}
          <div
            className="col-lg-6"
            style={{
              minHeight: '50vh',
              background: `url('/action-1.jpg') center/cover no-repeat`
            }}
          />
        </div>
      </div>

      {/* ── STEP 2: PROTÉGER ── */}
      <div className="container-fluid p-0" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <div className="row g-0 flex-grow-1" style={{ minHeight: '100vh' }}>
          {/* Image Column (left on desktop) */}
          <div
            className="col-lg-6 order-lg-1 order-2"
            style={{
              minHeight: '50vh',
              background: `url('/action-2.jpg') center/cover no-repeat`
            }}
          />

          {/* Text Column */}
          <div
            className="col-lg-6 order-lg-2 order-1 d-flex flex-column justify-content-center"
            style={{ padding: 'clamp(48px,7vh,80px) clamp(32px,6vw,80px)', background: '#f8f9fc' }}
          >
            <div className="position-relative mb-4">
              <span
                className="position-absolute"
                style={{
                  fontFamily: cond,
                  fontSize: 'clamp(80px,12vw,130px)',
                  fontWeight: 900,
                  color: 'rgba(40,100,174,0.06)',
                  top: '-40px',
                  left: '-10px',
                  zIndex: 0,
                  lineHeight: 1
                }}
              >02</span>
              <div className="position-relative" style={{ zIndex: 1 }}>
                <div className="d-flex align-items-center gap-2 mb-2">
                  <div style={{ width: '32px', height: '2px', background: gold }} />
                  <span className="text-uppercase fw-bold" style={{ color: gold, fontSize: '0.8rem', letterSpacing: '2px' }}>
                    Deuxième Étape
                  </span>
                </div>
                <h2 style={{ fontFamily: cond, fontSize: 'clamp(2.5rem,5vw,4rem)', fontWeight: 900, textTransform: 'uppercase', color: '#0d1b2a', lineHeight: 0.95, letterSpacing: '-1px' }}>
                  PROTÉGER<br />
                  <span style={{ color: gold }}>pour garantir la sécurité</span>
                </h2>
              </div>
            </div>

            <p className="text-muted mb-4" style={{ fontFamily: serif, fontSize: '1rem', lineHeight: '1.85', textAlign: 'justify' }}>
              L'épanouissement est impossible sans la sécurité. Notre mission est de construire un environnement protecteur. Nous luttons contre les VBG en transformant les mentalités à la racine, en engageant les leaders communautaires et en créant des ponts de confiance pour que chaque victime sache où trouver de l'aide.
            </p>

            <ul className="list-unstyled d-flex flex-column m-0">
              {[
                "Dialogue avec les leaders religieux pour la transformation des normes sociales",
                "Création de mécanismes d'alerte et référencement pour les survivantes",
                "Plaidoyer pour l'ouverture permanente des CIPEC-VBG les week-ends",
                "Médiation et prévention des conflits communautaires",
                "Campagne digitale — 16 jours d'activisme contre les VBG"
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="d-flex align-items-start gap-3 py-3"
                  style={{ borderBottom: `1px solid rgba(243,156,18,0.15)` }}
                >
                  <span style={{ color: gold, fontWeight: 900, fontSize: '1.1rem', lineHeight: 1.2, flexShrink: 0 }}>→</span>
                  <span style={{ fontFamily: serif, color: '#2d3748', fontSize: '0.95rem', lineHeight: 1.5 }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ── STEP 3: AUTONOMISER ── */}
      <div className="container-fluid p-0" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <div className="row g-0 flex-grow-1" style={{ minHeight: '100vh' }}>
          {/* Text Column */}
          <div
            className="col-lg-6 d-flex flex-column justify-content-center"
            style={{ padding: 'clamp(48px,7vh,80px) clamp(32px,6vw,80px)', background: '#fff' }}
          >
            <div className="position-relative mb-4">
              <span
                className="position-absolute"
                style={{
                  fontFamily: cond,
                  fontSize: 'clamp(80px,12vw,130px)',
                  fontWeight: 900,
                  color: 'rgba(39,176,116,0.07)',
                  top: '-40px',
                  left: '-10px',
                  zIndex: 0,
                  lineHeight: 1
                }}
              >03</span>
              <div className="position-relative" style={{ zIndex: 1 }}>
                <div className="d-flex align-items-center gap-2 mb-2">
                  <div style={{ width: '32px', height: '2px', background: green }} />
                  <span className="text-uppercase fw-bold" style={{ color: green, fontSize: '0.8rem', letterSpacing: '2px' }}>
                    Troisième Étape
                  </span>
                </div>
                <h2 style={{ fontFamily: cond, fontSize: 'clamp(2.5rem,5vw,4rem)', fontWeight: 900, textTransform: 'uppercase', color: '#0d1b2a', lineHeight: 0.95, letterSpacing: '-1px' }}>
                  AUTONOMISER<br />
                  <span style={{ color: green }}>pour bâtir l'avenir</span>
                </h2>
              </div>
            </div>

            <p className="text-muted mb-4" style={{ fontFamily: serif, fontSize: '1rem', lineHeight: '1.85', textAlign: 'justify' }}>
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
                  className="d-flex align-items-start gap-3 py-3"
                  style={{ borderBottom: `1px solid rgba(39,176,116,0.15)` }}
                >
                  <span style={{ color: green, fontWeight: 900, fontSize: '1.1rem', lineHeight: 1.2, flexShrink: 0 }}>→</span>
                  <span style={{ fontFamily: serif, color: '#2d3748', fontSize: '0.95rem', lineHeight: 1.5 }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image Column */}
          <div
            className="col-lg-6"
            style={{
              minHeight: '50vh',
              background: `url('/action-3.jpg') center/cover no-repeat`
            }}
          />
        </div>
      </div>

      {/* ── PROJETS SECTION ── */}
      <div
        className="container-fluid py-5"
        style={{
          background: '#f4f6f9',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Decorative hands motif background */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url('/logo-hands.png')`,
          backgroundSize: '160px',
          backgroundRepeat: 'repeat',
          opacity: 0.03,
          pointerEvents: 'none'
        }} />

        <div className="container py-4 position-relative" style={{ zIndex: 1 }}>
          <div className="text-center mx-auto mb-5" style={{ maxWidth: '800px' }}>
            <div className="d-flex align-items-center justify-content-center mb-3">
              <div style={{ height: '2px', width: '40px', background: cobalt }} />
              <span className="text-uppercase mx-3 fw-bold" style={{ color: cobalt, fontSize: '0.85rem', letterSpacing: '2px' }}>Principales réalisations</span>
              <div style={{ height: '2px', width: '40px', background: cobalt }} />
            </div>
            <h2 style={{ fontFamily: cond, fontSize: 'clamp(2.2rem,5vw,3.5rem)', fontWeight: 900, textTransform: 'uppercase', color: '#0d1b2a', letterSpacing: '-1px' }}>
              Nos grands projets menés
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="row g-4 d-flex align-items-stretch mb-4">
            {actions.map((proj, i) => (
              <div key={i} className="col-md-6 col-lg-3 d-flex wow fadeInUp" data-wow-delay={`${0.1 + i * 0.1}s`}>
                <div className="bg-white d-flex flex-column rounded-3 w-100 overflow-hidden" style={{ boxShadow: '0 4px 24px rgba(40,100,174,0.1)', border: '1px solid rgba(40,100,174,0.08)' }}>
                  <div className="position-relative overflow-hidden">
                    <Link to={`/galerie?filter=${proj.id === 'tedidjo' || proj.id === 'projet-respect' ? 'dssr' : proj.id === 'yes' ? 'paix' : 'leadership'}#axis-${proj.id === 'tedidjo' || proj.id === 'projet-respect' ? 'dssr' : proj.id === 'yes' ? 'paix' : 'leadership'}`}>
                      <img className="img-fluid w-100" src={proj.img} alt={proj.title} style={{ height: '200px', objectFit: 'cover', transition: 'transform .4s ease' }}
                        onMouseOver={e => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.05)'; }}
                        onMouseOut={e => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)'; }}
                      />
                    </Link>
                    <span
                      className="px-3 py-1 position-absolute top-0 end-0 fw-bold"
                      style={{ background: cobalt, color: '#fff', fontSize: '0.78rem', letterSpacing: '0.5px' }}
                    >
                      {proj.tag}
                    </span>
                  </div>

                  <div className="p-4 d-flex flex-column flex-grow-1">
                    <h3 className="h6 fw-bold text-uppercase mb-3" style={{ color: cobalt, fontFamily: cond, letterSpacing: '0.5px' }}>{proj.title}</h3>
                    <p className="text-muted flex-grow-1" style={{ fontFamily: serif, fontSize: '0.9rem', lineHeight: '1.6', textAlign: 'justify' }}>
                      {proj.desc}
                    </p>
                  </div>

                  <Link
                    to={`/actions/${proj.id}`}
                    className="d-flex align-items-center justify-content-center gap-2 py-3 text-decoration-none fw-bold"
                    style={{ background: cobalt, color: '#fff', fontSize: '0.9rem', fontFamily: cond, letterSpacing: '0.5px', transition: 'background .2s' }}
                    onMouseOver={e => { (e.currentTarget as HTMLAnchorElement).style.background = '#1e4b83'; }}
                    onMouseOut={e => { (e.currentTarget as HTMLAnchorElement).style.background = cobalt; }}
                  >
                    <Plus size={16} /> En savoir plus
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── UNE VIE TRANSFORMÉE (Testimony) ── */}
      <section
        className="container-fluid py-0"
        style={{
          background: `linear-gradient(135deg, ${cobalt} 0%, #1e4b83 60%, #27b074 100%)`,
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Motif overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url('/logo-hands.png')`,
          backgroundSize: '180px',
          backgroundRepeat: 'repeat',
          opacity: 0.07,
          pointerEvents: 'none'
        }} />

        <div className="container position-relative py-5" style={{ zIndex: 1 }}>
          <div className="text-center mb-5">
            <div className="d-flex align-items-center justify-content-center mb-3">
              <div style={{ height: '2px', width: '40px', background: 'rgba(255,255,255,0.5)' }} />
              <span className="text-uppercase mx-3 fw-bold" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.85rem', letterSpacing: '2px' }}>Impact humain</span>
              <div style={{ height: '2px', width: '40px', background: 'rgba(255,255,255,0.5)' }} />
            </div>
            <h2 style={{ fontFamily: cond, fontSize: 'clamp(2.5rem,5vw,4rem)', fontWeight: 900, textTransform: 'uppercase', color: '#fff', letterSpacing: '-1px', lineHeight: 0.95 }}>
              Une vie transformée
            </h2>
          </div>

          {/* Testimony card */}
          <div
            className="row g-0 mx-auto wow fadeInUp"
            data-wow-delay="0.2s"
            style={{
              maxWidth: '900px',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 30px 80px rgba(10,20,50,0.35)',
              border: '1px solid rgba(255,255,255,0.15)'
            }}
          >
            {/* Photo card */}
            <div
              className="col-md-4 d-flex flex-column align-items-center justify-content-center text-center text-white"
              style={{
                background: 'rgba(0,0,0,0.3)',
                backdropFilter: 'blur(10px)',
                padding: '48px 32px',
                borderRight: '1px solid rgba(255,255,255,0.1)'
              }}
            >
              <div
                className="overflow-hidden mb-4 shadow"
                style={{
                  width: '110px',
                  height: '110px',
                  borderRadius: '50%',
                  border: `3px solid ${gold}`,
                  flexShrink: 0
                }}
              >
                <img
                  src="/testimony1.jpg"
                  alt="Mariam"
                  className="w-100 h-100"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <h4 className="fw-bold mb-1" style={{ fontSize: '1.25rem', color: '#fff', fontFamily: cond }}>Mariam, 24 ans</h4>
              <span className="fw-bold text-uppercase d-block mb-1" style={{ fontSize: '0.72rem', letterSpacing: '1px', color: gold }}>
                Bénéficiaire TEDIDJO 2
              </span>
              <span style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.6)' }}>
                Karimama, Nord-Bénin
              </span>
            </div>

            {/* Quote card */}
            <div
              className="col-md-8 d-flex flex-column justify-content-center position-relative"
              style={{ background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(8px)', padding: '48px' }}
            >
              <span
                className="position-absolute"
                style={{
                  fontFamily: cond,
                  fontSize: '120px',
                  fontWeight: 900,
                  color: 'rgba(243,156,18,0.2)',
                  top: '-10px',
                  left: '20px',
                  lineHeight: 1,
                  pointerEvents: 'none',
                  userSelect: 'none'
                }}
              >"</span>

              <p
                className="m-0 position-relative"
                style={{
                  fontFamily: serif,
                  fontSize: '1.05rem',
                  lineHeight: '1.85',
                  fontStyle: 'italic',
                  color: 'rgba(255,255,255,0.92)',
                  textAlign: 'justify',
                  zIndex: 1
                }}
              >
                Quand nous avons rencontré Mariam, elle était déscolarisée et sans perspective. Grâce à nos sessions d'{' '}
                <b style={{ fontStyle: 'normal', color: '#fff' }}>éducation</b>, elle a repris confiance en elle et compris ses droits fondamentaux. Intégrée dans un espace{' '}
                <b style={{ fontStyle: 'normal', color: gold }}>protégé</b>, elle a pu parler des violences qu'elle subissait et bénéficier d'un accompagnement juridique. Aujourd'hui, grâce à une formation en couture et gestion, elle est{' '}
                <b style={{ fontStyle: 'normal', color: '#6ee7b7' }}>autonome</b>. Elle a monté sa propre petite activité et est devenue une source d'inspiration pour les autres jeunes filles de son quartier. Son histoire, c'est la raison d'être de notre action.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        @media (max-width: 991px) {
          .action-step-row { flex-direction: column !important; }
          .action-step-img { min-height: 45vw !important; }
        }
      `}</style>
    </div>
  );
}
