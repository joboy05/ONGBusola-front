import React, { useState, useEffect, useRef } from 'react';

// ─── Animated Counter Hook ────────────────────────────────────────────────────
function useCountUp(target: number, duration = 2000, trigger: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [trigger, target, duration]);
  return count;
}

// ─── Stats Block ──────────────────────────────────────────────────────────────
function StatItem({ value, suffix = '', label, trigger, style, icon }: { value: number; suffix?: string; label: string; trigger: boolean; style?: React.CSSProperties; icon: string }) {
  const count = useCountUp(value, 2000, trigger);
  return (
    <div className="col-6 col-md-3 text-center py-4">
      <div className="p-4 rounded-4 h-100" style={style}>
        <i className={`${icon} mb-3`}></i>
        <h2 className="display-4 fw-bold mb-1">
          {count}{suffix}
        </h2>
        <p className="fw-medium mb-0" style={{ fontSize: '0.95rem' }}>{label}</p>
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function AboutSection() {
  const [historyExpanded, setHistoryExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState<'vision' | 'mission' | 'valeurs'>('vision');
  const [statsVisible, setStatsVisible] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);
  const bannerRef = useRef<HTMLDivElement>(null);

  // Observer pour le compteur de stats
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true); },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  // Observer pour le bandeau "scotch"
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setBannerVisible(true); },
      { threshold: 0.1 }
    );
    if (bannerRef.current) observer.observe(bannerRef.current);
    return () => observer.disconnect();
  }, []);

  const historyFull = `Créée en 2020 à Parakou, l'ONG Busola est le fruit d'un engagement citoyen et associatif porté par des femmes et des jeunes acteurs du développement, convaincus que les réponses aux défis sociaux devaient être locales, inclusives et ancrées dans les communautés.

Les fondateurs et fondatrices, issus d'expériences de terrain en santé communautaire, éducation, prévention des violences et mobilisation sociale, ont constaté un manque de cadres structurés capables de relier droits humains, autonomisation, paix et développement durable.

Face à ce constat, Busola a été créée pour combler ce vide, en proposant une approche intégrée mettant au centre les populations les plus marginalisées. Dès ses débuts, l'organisation s'est donné pour mission de donner une voix aux femmes et aux jeunes, souvent absents ou sous-représentés dans les espaces de concertation et de prise de décision.

Entre 2021 et 2023, l'ONG a piloté les projets TEDIDJO 1, 2 et 3 en partenariat avec CARE Bénin-Togo, touchant des adolescentes, des jeunes et des femmes dans les départements du Borgou et de l'Alibori. En 2025, l'organisation a consolidé ses compétences grâce à l'appui de l'UNFPA et de l'Ambassade des Pays-Bas.`;

  const historyShort = historyFull.substring(0, 350) + '...';

  return (
    <>
      {/* ── 1. NOTRE HISTOIRE ─────────────────────────────────────────────── */}
      <div id="notre-histoire" className="container-fluid py-5 bg-white">
        <div className="container py-4">
          <div className="row g-5 align-items-center">
            {/* Texte */}
            <div className="col-lg-6">
              <h1 className="fw-bold text-primary mb-4 text-uppercase">
                NOTRE HISTOIRE
              </h1>

              <div className="text-muted fs-6 mb-4" style={{ lineHeight: 1.9, textAlign: 'justify' }}>
                {(historyExpanded ? historyFull : historyShort)
                  .split('\n\n')
                  .map((para, i) => <p key={i}>{para}</p>)
                }
              </div>

              <a
                href="#!"
                className="text-primary fw-bold text-decoration-none"
                onClick={(e) => { e.preventDefault(); setHistoryExpanded(!historyExpanded); }}
              >
                {historyExpanded ? 'Réduire' : 'Lire plus'}
              </a>
            </div>

            {/* Image avec forme about-img (découpée aux coins) */}
            <div className="col-lg-6">
              <div className="about-img">
                <img
                  src="/ONGBusola-front/about.jpeg"
                  alt="Équipe Busola sur le terrain"
                  className="img-fluid w-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── 2. CITATION BANNIÈRE ──────────────────────────────────────────── */}
      <div className="container-fluid text-center py-5 bg-white">
        <div className="container py-5 mt-5 mb-5">
          <h1 className="fw-bold text-primary text-uppercase mb-0" style={{ fontSize: '3rem', lineHeight: 1.4 }}>
            LA PAIX COMMENCE<br />
            QUAND LA <span className="text-white bg-primary px-3">VIOLENCE</span> S'ARRèTE
          </h1>
        </div>
      </div>

      {/* ── 3. VISION / MISSION / VALEURS ────────────────────────────────── */}
      <div id="vision-mission" className="container-fluid py-5 bg-white">
        <div className="container py-4">
          {/* Bouton NOTRE PROFIL en haut centré */}
          <div className="text-center mb-5">
            <a href="#notre-histoire" className="btn btn-secondary text-white fw-bold px-5 py-2 text-uppercase" style={{ letterSpacing: '1px', borderRadius: '4px' }}>
              Notre profil
            </a>
          </div>

          <div className="row g-5">
            {/* Colonne gauche : Vision + Mission */}
            <div className="col-lg-6">
              <div className="mb-5">
                <h3 className="fw-bold text-primary text-uppercase mb-3">NOTRE VISION</h3>
                <p className="text-muted" style={{ lineHeight: 1.8 }}>
                  Un Bénin où le potentiel de chaque femme et de chaque jeune est libéré pour bâtir des communautés juste, pacifiques et autonomes.
                </p>
              </div>
              <div>
                <h3 className="fw-bold text-primary text-uppercase mb-3">NOTRE MISSION</h3>
                <p className="text-muted" style={{ lineHeight: 1.8 }}>
                  Renforcer le pouvoir d'agir des <span className="text-primary">communautés</span>, en particulier des <span className="text-primary">femmes et des jeunes</span>, en co-construisant des solutions locales pour la <span className="text-primary">santé</span>, la <span className="text-primary">protection</span>, l'autonomisation et la <span className="text-primary">paix</span>.
                </p>
              </div>
            </div>

            {/* Colonne droite : Valeurs en bloc vert */}
            <div className="col-lg-6">
              <div className="text-white p-4 h-100" style={{ backgroundColor: '#3ab074', borderRadius: '8px' }}>
                <h3 className="fw-bold text-white text-uppercase mb-4">NOS VALEURS</h3>
                <ul className="list-unstyled mb-0">
                  {[
                    { titre: 'DIGNITÉ', desc: ': Placer chaque personne au cœur de l\'action.' },
                    { titre: 'ÉQUITÉ DU GENRE', desc: ': L\'galité comme condition au développement et à la paix.' },
                    { titre: 'PARTENARIAT ET ALLIANCE', desc: ': Ensemble, pour un impact durable.' },
                    { titre: 'EXCELLENCE ET INTÉGRITÉ', desc: ': L\'excellence et la transparence dans toutes nos actions.' },
                  ].map((v, i) => (
                    <li key={i} className="mb-3" style={{ lineHeight: 1.7 }}>
                      <strong>{v.titre}</strong>{v.desc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── 4. NOTRE APPROCHE ─────────────────────────────────────────────── */}
      <div id="notre-approche" className="container-fluid py-5" style={{ backgroundColor: '#1a3d6f' }}>
        <div className="container py-4">
          {/* Bouton NOTRE APPROCHE centré */}
          <div className="text-center mb-5">
            <a href="#" className="btn btn-secondary text-white fw-bold px-5 py-2 text-uppercase" style={{ letterSpacing: '1px', borderRadius: '4px' }}>
              Notre Approche
            </a>
          </div>

          {/* 3 colonnes */}
          <div className="row g-4 text-white text-center">
            {[
              {
                title: 'Proximité et Immersion',
                desc: 'Nos équipes sont sur le terrain, au contact direct des réalités locales avant d\'agir.',
              },
              {
                title: 'Partenariat stratégique',
                desc: 'Nous travaillons en synergie avec les communautés, les autorités locales, les leaders traditionnels et d\'autres organisations. C\'est l\'intelligence collective qui crée les changements les plus profonds.',
              },
              {
                title: 'Renforcement du pouvoir d\'agir',
                desc: 'Notre but ultime est de rendre les communautés autonomes. Chaque projet est conçu pour transférer des compétences et renforcer les capacités locales.',
              },
            ].map((item, i) => (
              <div key={i} className="col-md-4">
                <h5 className="fw-bold text-white mb-3">{item.title}</h5>
                <p className="text-white opacity-75 small" style={{ lineHeight: 1.8 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── 5. AXES D'INTERVENTION ────────────────────────────────────────── */}
      <div id="axes-intervention" style={{ position: 'relative' }}>

        {/* Bandeau défilant vert — sticky + animation déroulement */}
        <style>{`
          @keyframes marqueeScroll {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes unrollTape {
            0%   { transform: scaleX(0); transform-origin: left center; opacity: 0.4; }
            60%  { opacity: 1; }
            100% { transform: scaleX(1); transform-origin: left center; }
          }
        `}</style>
        <div
          ref={bannerRef}
          className="overflow-hidden py-2"
          style={{
            backgroundColor: '#3ab074',
            whiteSpace: 'nowrap',
            position: 'sticky',
            top: '58px',
            zIndex: 100,
            transformOrigin: 'left center',
            transform: bannerVisible ? 'scaleX(1)' : 'scaleX(0)',
            animation: bannerVisible ? 'unrollTape 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards' : 'none',
          }}
          onAnimationEnd={() => setContentVisible(true)}
        >
          <div
            style={{
              display: 'inline-block',
              animation: 'marqueeScroll 30s linear infinite',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '0.9rem',
              letterSpacing: '2px',
              textTransform: 'uppercase',
            }}
          >
            {Array(6).fill('\u00a0\u00a0\u00a0\u00a0\u00a0 Nous privilégions des solutions ancrées dans les réalités locales. Notre approche repose sur l\'écoute, la co-construction et le renforcement des capacités communautaires. ').join('')}
          </div>
          <style>{`
            @keyframes marqueeScroll {
              0%   { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
          `}</style>
        </div>

        {/* Contenu axes — apparaît après le déroulement du scotch */}
        <div
          className="container-fluid py-5 bg-white"
          style={{
            opacity: contentVisible ? 1 : 0,
            transform: contentVisible ? 'translateY(0)' : 'translateY(16px)',
            transition: 'opacity 0.5s ease, transform 0.5s ease',
          }}
        >
          <div className="container py-3">

            {/* Bouton centré */}
            <div className="text-center mb-5">
              <a href="#!" className="btn btn-secondary text-white fw-bold px-5 py-2 text-uppercase" style={{ letterSpacing: '1px', borderRadius: '4px' }}>
                Nos axes d'intervention
              </a>
            </div>

            {/* Grille 2×2 */}
            <div className="row g-4">
              {[
                {
                  img: '/ONGBusola-front/IMG-20251016-WA0099_cK78lYo.jpg',
                  color: '#f59f23',
                  title: 'SANTÉ ET DROITS SEXUELS ET REPRODUCTIFS (SDSR)',
                  desc: 'Garantir l\'accès des adolescent(e)s jeunes et des femmes à une information complète et à des services de santé de qualité pour leur permettre de faire des choix libres et éclairés.',
                  position: 'center center',
                },
                {
                  img: '/ONGBusola-front/axe3.png',
                  color: '#2764AE',
                  title: 'PRÉVENTION ET RÉPONSE AUX VIOLENCES BASÉES SUR LE GENRE (VBG)',
                  desc: 'Mettre en œuvre des programmes de prévention et de lutte contre les VBG, faciliter la prise en charge des survivantes et mener un plaidoyer pour des politiques de tolérance zéro.',
                  position: 'center top',
                },
                {
                  img: '/ONGBusola-front/axe4.png',
                  color: '#3ab074',
                  title: 'LEADERSHIP ET AUTONOMISATION',
                  desc: 'Renforcer l\'indépendance économique des femmes et des filles et promouvoir leur participation active à tous les niveaux de la prise de décision.',
                  position: 'center top',
                },
                {
                  img: '/ONGBusola-front/axe5.png',
                  color: '#f59f23',
                  title: 'PAIX ET JUSTICE CLIMATIQUE',
                  desc: 'Renforcer le dialogue intercommunautaire autour des enjeux climatiques et promouvoir l\'engagement des jeunes et des femmes pour une paix durable et équitable.',
                  position: 'center top',
                },
              ].map((axe, i) => (
                <div key={i} className="col-md-6">
                  <div
                    className="position-relative overflow-hidden"
                    style={{ borderRadius: '8px', height: '260px' }}
                    onMouseEnter={e => {
                      const overlay = e.currentTarget.querySelector('.axe-overlay') as HTMLElement;
                      if (overlay) overlay.style.opacity = '0.92';
                    }}
                    onMouseLeave={e => {
                      const overlay = e.currentTarget.querySelector('.axe-overlay') as HTMLElement;
                      if (overlay) overlay.style.opacity = '0.82';
                    }}
                  >
                    {/* Image bien recadrée */}
                    <img
                      src={axe.img}
                      alt={axe.title}
                      style={{
                        width: '100%',
                        height: '260px',
                        objectFit: 'cover',
                        objectPosition: axe.position,
                        display: 'block',
                        imageRendering: 'auto',
                      }}
                    />
                    {/* Overlay coloré — couvre le bas (45%) */}
                    <div
                      className="axe-overlay position-absolute start-0 w-100"
                      style={{
                        backgroundColor: axe.color,
                        opacity: 0.82,
                        top: '45%',
                        bottom: 0,
                        transition: 'opacity 0.3s ease',
                      }}
                    />
                    {/* Texte sur l'overlay */}
                    <div
                      className="position-absolute w-100 px-4 pb-4"
                      style={{ bottom: 0, left: 0 }}
                    >
                      <h5 className="fw-bold text-white mb-2" style={{ fontSize: '0.9rem', textTransform: 'uppercase', lineHeight: 1.3 }}>{axe.title}</h5>
                      <p className="mb-0 text-white small" style={{ lineHeight: 1.6, opacity: 0.95 }}>{axe.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>



      {/* ── 6. STATISTIQUES ───────────────────────────────────────────────── */}
      <div
        ref={statsRef}
        className="container-fluid py-5"
      >
        <div className="container">
          <div className="text-center mb-4">
            <h2 className="display-6 fw-bold text-primary">Notre impact en chiffres</h2>
            <p className="text-muted opacity-75">Des résultats concrets depuis 2020</p>
          </div>
          <div className="row justify-content-center">
            <StatItem value={15000} suffix="+" label="Bénéficiaires directs" trigger={statsVisible} icon="fa fa-list-check fa-3x text-primary" style={{ backgroundColor: "var(--bs-secondary)", color: "#2764AE" }} />
            <StatItem value={50} suffix="+" label="Projets et actions de terrain" trigger={statsVisible} icon="fa fa-user fa-3x text-secondary" style={{ backgroundColor: "white", color: "#2764AE" }} />
            <StatItem value={30} suffix="+" label="Autorités locales mobilisées" trigger={statsVisible} icon="fa fa-users fa-3x text-primary" style={{ backgroundColor: "var(--bs-secondary)", color: "#2764AE" }} />
            <StatItem value={25} label="Membres actifs" trigger={statsVisible} icon="fa fa-list fa-3x text-secondary" style={{ backgroundColor: "white", color: "#2764AE" }} />
          </div>
        </div>
      </div>

      {/* ── 7. GOUVERNANCE ────────────────────────────────────────────────── */}
      <div id="gouvernance" className="container-fluid py-5 bg-white">
        <div className="container py-4">
          <div className="text-center mb-5">
            <span className="badge bg-primary text-white px-3 py-2 rounded-pill fw-bold text-uppercase mb-3" style={{ letterSpacing: '1px' }}>
              Organisation
            </span>
            <h2 className="display-6 fw-bold text-primary">Notre gouvernance</h2>
            <p className="text-muted mt-2 mx-auto" style={{ maxWidth: '550px' }}>
              Une structure transparente et rigoureuse au service de notre mission.
            </p>
          </div>

          <div className="row g-4 mb-5">
            {[
              {
                icon: 'users',
                title: 'Assemblée Générale',
                desc: 'Organe suprême de décision, garantissant l\'orientation stratégique et la légitimité des choix organisationnels.',
                color: 'var(--bs-primary)',
              },
              {
                icon: 'sitemap',
                title: 'Conseil d\'Administration',
                desc: 'Composé de leaders et d\'experts de haut niveau dans les domaines de la paix, de l\'environnement, du droit, de la santé, de la gestion de projet et des finances.',
                color: 'var(--bs-secondary)',
              },
              {
                icon: 'briefcase',
                title: 'Direction Exécutive',
                desc: 'Organe opérationnel intégrant des compétences en gestion de projet, communication, plaidoyer, redevabilité, coaching, et gestion administrative et financière.',
                color: 'var(--bs-tertiary)',
              },
            ].map((org, i) => (
              <div key={i} className="col-md-4">
                <div className="bg-white rounded-4 shadow-sm p-5 h-100 text-center" style={{ borderBottom: `4px solid ${org.color}` }}>
                  <div
                    className="rounded-circle d-inline-flex align-items-center justify-content-center mb-4"
                    style={{ width: '72px', height: '72px', backgroundColor: org.color + '20' }}
                  >
                    <i className={`fa fa-${org.icon} fa-xl`} style={{ color: org.color }} />
                  </div>
                  <h4 className="fw-bold text-primary mb-3">{org.title}</h4>
                  <p className="text-muted" style={{ lineHeight: 1.8 }}>{org.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* ── Ressources à télécharger ── */}
          <div className="bg-light rounded-4 p-5">
            <div className="row align-items-center">
              <div className="col-lg-6 mb-4 mb-lg-0">
                <h4 className="fw-bold text-primary mb-2">
                  <i className="fa fa-folder-open text-secondary me-2" />
                  Nos ressources
                </h4>
                <p className="text-muted mb-0">
                  Accédez à nos documents officiels : rapport de capitalisation, règlement intérieur et politique de protection.
                </p>
              </div>
              <div className="col-lg-6">
                <div className="d-flex flex-column gap-3">
                  {[
                    { label: 'Rapport de capitalisation RESPECT', file: 'RAPPORT_DE_CAPITALISATION__RESPECT_BUSOLA2026_VF.pdf' },
                    { label: 'Règlement Intérieur ONG Busola', file: 'Règlement_Interieur_ONG_BUSOLA_1.pdf' },
                    { label: 'Politique PEAHS', file: 'PEAHS_Busola_hv3fXKQ.pdf' },
                  ].map((doc, i) => (
                    <a
                      key={i}
                      href="#!"
                      className="d-flex align-items-center gap-3 bg-white rounded-3 p-3 text-decoration-none shadow-sm"
                      style={{ transition: 'transform 0.2s' }}
                      onMouseEnter={e => (e.currentTarget.style.transform = 'translateX(4px)')}
                      onMouseLeave={e => (e.currentTarget.style.transform = 'translateX(0)')}
                    >
                      <div className="bg-primary text-white rounded-2 d-flex align-items-center justify-content-center flex-shrink-0"
                        style={{ width: '40px', height: '40px' }}>
                        <i className="fa fa-file-pdf" />
                      </div>
                      <span className="text-primary fw-medium small">{doc.label}</span>
                      <i className="fa fa-download text-muted ms-auto" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
