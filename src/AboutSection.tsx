import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLandmark, faSearch, faHandshake, faBolt, faRocket } from '@fortawesome/free-solid-svg-icons';
import { 
  HeartPulse, 
  Scale, 
  GraduationCap, 
  Handshake, 
  TrendingUp, 
  Megaphone,
  FileText,
  BookOpen,
  Home,
  Lightbulb,
  Target,
  Heart,
  Building,
  Sprout,
  Mountain,
  Trees,
  Users
} from 'lucide-react';

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

// ─── Shared design tokens (True colors of the site) ─────────────────────────
const cobalt = '#2864ae'; // Primary Blue
const cobaltMid = '#205295';
const cobaltBright = '#2864ae';
const gold = '#f39c12'; // Secondary Gold/Orange
const goldWarm = '#f59f23';
const goldPale = '#f8f2e2';
const sable = '#f8f9fa';
const cream = '#ffffff';
const muted = '#555555';
const border = 'rgba(40, 100, 174, 0.1)';
const serif = '"Cormorant Garamond", Georgia, serif';
const cond = '"Barlow Condensed", "Arial Black", Impact, sans-serif';
const sans = '"Inter", system-ui, sans-serif';

export default function AboutSection() {
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);
  const count1 = useCountUp(15000, 2000, statsVisible);
  const count2 = useCountUp(50, 2000, statsVisible);
  const count3 = useCountUp(30, 2000, statsVisible);
  const count4 = useCountUp(25, 2000, statsVisible);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true); },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  // ── Styles ──────────────────────────────────────────────────────────────────
  const labelStyle: React.CSSProperties = {
    display: 'flex', alignItems: 'center', gap: '12px',
    fontSize: '10.5px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase',
    color: cobaltBright, marginBottom: '14px', fontFamily: sans,
  };
  const labelBeforeStyle: React.CSSProperties = {
    content: "''", width: '32px', height: '2px', background: gold,
    display: 'inline-block', flexShrink: 0,
  };

  return (
    <>
      {/* ── 1. NOTRE HISTOIRE ────────────────────────────────────────────────── */}
      <section style={{ padding: 'clamp(64px,8vh,110px) clamp(1.5rem,5vw,3rem)', background: cream, fontFamily: sans }}>
        <div style={{ maxWidth: '1260px', margin: 'auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}
               className="story-layout-responsive">

            {/* Image */}
            <div style={{ aspectRatio: '4/3', background: sable, borderRadius: '4px', border: `1px solid ${border}`, overflow: 'hidden' }}>
              <img
                src="/about.jpeg"
                alt="Équipe Busola"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>

            {/* Texte */}
            <div>
              <div style={labelStyle}>
                <span style={labelBeforeStyle}></span>
                Notre origine
              </div>
              <h2 style={{ fontFamily: serif, fontSize: 'clamp(32px,4vw,48px)', fontWeight: 700, color: cobalt, lineHeight: 1.2, marginBottom: '20px' }}>
                Notre histoire : une conviction née à Parakou
              </h2>
              <p style={{ fontSize: '16px', color: muted, lineHeight: 1.85, marginBottom: '20px' }}>
                L'ONG Busola n'est pas née d'un concept, mais d'un constat. Fondée en mars 2020 par des acteurs du développement social profondément attachés au Nord-Bénin, notre organisation est une réponse citoyenne aux défis rencontrés par les femmes et les jeunes de nos communautés.
              </p>
              <p style={{ fontSize: '16px', color: muted, lineHeight: 1.85, marginBottom: '20px' }}>
                Le nom <strong>« Busola »</strong>, la boussole en yoruba, incarne notre vocation : guider, orienter et accompagner chaque individu vers un avenir où il a le plein pouvoir d'agir. Nous sommes une organisation née du terrain, pour le terrain, enregistrée sous le numéro <strong>2020-4/016/PDB/SG/SAG</strong>.
              </p>
              <p style={{ fontSize: '16px', color: muted, lineHeight: 1.85, marginBottom: '28px' }}>
                En 5 ans d'existence, nous avons prouvé qu'une ONG jeune, locale et engagée peut porter des projets à impact réel, mobiliser des partenaires de confiance et transformer des vies concrètes dans les communes les plus éloignées du Bénin.
              </p>

              {/* Stats mini */}
              <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
                {[
                  { n: '2020', label: 'Année de création', suffix: '' },
                  { n: '5', suffix: 'ans', label: "d'impact continu" },
                  { n: '9', label: 'projets en 2025', suffix: '' },
                ].map((s, i) => (
                  <div key={i}>
                    <div style={{ fontFamily: cond, fontSize: '42px', fontWeight: 900, color: cobalt, lineHeight: 1 }}>
                      {s.n}{s.suffix && <span style={{ fontSize: '24px' }}>{s.suffix}</span>}
                    </div>
                    <div style={{ fontSize: '13px', color: muted, marginTop: '4px' }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SLOGAN SECTION ────────────────────────────────────────────────────── */}
      <section style={{ padding: 'clamp(60px,8vh,100px) clamp(1.5rem,5vw,3rem)', background: sable, fontFamily: sans }}>
        <div style={{
          maxWidth: '900px',
          margin: 'auto',
          background: 'linear-gradient(160deg, #2864ae 0%, #205295 50%, #2864ae 100%)',
          borderRadius: '24px',
          border: '1px solid rgba(255,255,255,.08)',
          padding: 'clamp(50px,8vh,90px) clamp(30px,5vw,60px)',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 20px 60px rgba(10,20,50,.35)'
        }}>
          {/* Subtle glow */}
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(40,100,174,.12) 0%, transparent 70%)', pointerEvents: 'none' }}></div>

          <h2 style={{
            fontFamily: cond,
            fontSize: 'clamp(36px, 5.5vw, 60px)',
            fontWeight: 900,
            fontStyle: 'italic',
            textTransform: 'uppercase',
            color: '#ffffff',
            lineHeight: 1.1,
            letterSpacing: '-1px',
            marginBottom: '20px',
            position: 'relative',
            zIndex: 1
          }}>
            LA PAIX COMMENCE<br />
            QUAND LA <span style={{
              color: goldWarm,
              fontStyle: 'italic'
            }}>VIOLENCE</span> S'ARRÊTE
          </h2>

          <p style={{ color: 'rgba(255,255,255,.6)', fontSize: '15px', lineHeight: 1.7, maxWidth: '500px', margin: '0 auto 32px', position: 'relative', zIndex: 1 }}>
            Depuis 2020, ONG BUSOLA œuvre aux côtés des femmes et des jeunes du Nord-Bénin pour construire un avenir de dignité et d'égalité.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap', position: 'relative', zIndex: 1 }}>
            <span 
              style={{
                background: gold,
                color: '#ffffff',
                padding: '14px 36px',
                borderRadius: '50px',
                fontWeight: 700,
                fontSize: '14px',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                boxShadow: '0 4px 16px rgba(243, 156, 18, 0.3)',
                display: 'inline-block',
                cursor: 'pointer',
                transition: 'all 0.25s ease'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 24px rgba(243, 156, 18, 0.5)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(243, 156, 18, 0.3)';
              }}
            >
              Notre Profil
            </span>
          </div>
        </div>
      </section>

      {/* ── SECTIONS STRATÉGIQUES ET OPÉRATIONNELLES (Axes, Projets, Terrain, Partenaires) ── */}
      
      {/* Section 1: Nos axes stratégiques */}
      <section style={{ padding: '80px 0', background: '#faf9f6', fontFamily: sans }}>
        <div className="container">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: '800px' }}>
            <span className="text-uppercase fw-bold" style={{ color: '#f59f23', fontSize: '0.9rem', letterSpacing: '2px', display: 'block', marginBottom: '8px' }}>
              CE QUE NOUS FAISONS
            </span>
            <h2 style={{ fontFamily: cond, fontSize: 'clamp(2.2rem, 4vw, 3rem)', fontWeight: 900, textTransform: 'uppercase', color: '#111827', marginBottom: '16px', letterSpacing: '-0.5px' }}>
              Nos axes stratégiques
            </h2>
            <p className="text-muted" style={{ fontSize: '1.05rem', lineHeight: '1.6' }}>
              Cinq domaines d'intervention complémentaires pour un impact durable sur les communautés du nord-Bénin.
            </p>
          </div>

          <div className="row g-4 justify-content-center">
            {[
              {
                title: "Santé Sexuelle & Reproductive",
                desc: "Éducation complète à la sexualité, prévention des grossesses précoces, IST/VIH, accès aux services de santé adaptés pour les adolescentes et jeunes femmes de 10 à 24 ans.",
                icon: <HeartPulse size={24} style={{ color: '#2764AE' }} />,
                bg: 'rgba(39, 100, 174, 0.08)',
                borderColor: '#2764AE'
              },
              {
                title: "Lutte contre les VBG",
                desc: "Sensibilisation, collecte de données, plaidoyer pour l'ouverture des centres CIPEC-VBG, formation des acteurs communautaires et leaders religieux.",
                icon: <Scale size={24} style={{ color: '#f59f23' }} />,
                bg: 'rgba(245, 159, 35, 0.08)',
                borderColor: '#f59f23'
              },
              {
                title: "Alphabétisation & Éducation",
                desc: "Gestion de centres d'alphabétisation en langues locales (Yom, Dendi, Fulfuldé, Lopka) pour l'autonomisation des adultes dans les communes rurales.",
                icon: <GraduationCap size={24} style={{ color: '#3bb143' }} />,
                bg: 'rgba(59, 177, 67, 0.08)',
                borderColor: '#3bb143'
              },
              {
                title: "Cohésion Sociale & Paix",
                desc: "Cadres de dialogue communautaire et intergénérationnel, prévention de la radicalisation et promotion du vivre-ensemble pacifique.",
                icon: <Handshake size={24} style={{ color: '#2764AE' }} />,
                bg: 'rgba(39, 100, 174, 0.08)',
                borderColor: '#2764AE'
              },
              {
                title: "Autonomisation Économique",
                desc: "Formations aux activités génératrices de revenus (AGR), techniques de pépinière, gestion financière de base et accès aux micro-crédits.",
                icon: <TrendingUp size={24} style={{ color: '#f59f23' }} />,
                bg: 'rgba(245, 159, 35, 0.08)',
                borderColor: '#f59f23'
              },
              {
                title: "Plaidoyer & Communication",
                desc: "Campagnes digitales, téléfilms éducatifs, théâtre communautaire, formation en plaidoyer pour amplifier la voix des sans-voix.",
                icon: <Megaphone size={24} style={{ color: '#3bb143' }} />,
                bg: 'rgba(59, 177, 67, 0.08)',
                borderColor: '#3bb143'
              }
            ].map((axe, i) => (
              <div key={i} className="col-lg-4 col-md-6">
                <div 
                  className="h-100 p-4 bg-white border shadow-sm transition-all"
                  style={{ 
                    borderRadius: '20px', 
                    borderTop: `5px solid ${axe.borderColor}`,
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.08)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 .125rem .25rem rgba(0,0,0,.075)';
                  }}
                >
                  <div className="d-flex align-items-center justify-content-center rounded-circle mb-4"
                       style={{ width: '56px', height: '56px', backgroundColor: axe.bg }}>
                    {axe.icon}
                  </div>
                  <h4 style={{ fontFamily: cond, fontSize: '1.4rem', fontWeight: 800, color: '#111827', marginBottom: '12px' }}>
                    {axe.title}
                  </h4>
                  <p className="text-muted mb-0" style={{ fontSize: '0.92rem', lineHeight: '1.6', textAlign: 'justify' }}>
                    {axe.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Projets en cours */}
      <section style={{ padding: '80px 0', background: '#ffffff', fontFamily: sans }}>
        <div className="container">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: '800px' }}>
            <span className="text-uppercase fw-bold" style={{ color: '#f59f23', fontSize: '0.9rem', letterSpacing: '2px', display: 'block', marginBottom: '8px' }}>
              NOS INTERVENTIONS ACTUELLES
            </span>
            <h2 style={{ fontFamily: cond, fontSize: 'clamp(2.2rem, 4vw, 3rem)', fontWeight: 900, textTransform: 'uppercase', color: '#111827', marginBottom: '16px', letterSpacing: '-0.5px' }}>
              Projets en cours
            </h2>
            <p className="text-muted" style={{ fontSize: '1.05rem', lineHeight: '1.6' }}>
              Des initiatives financées par des partenaires de confiance et par nos propres ressources pour maximiser l'impact sur le terrain.
            </p>
          </div>

          <div className="row g-4">
            {[
              {
                title: "Programme RESPECT - Année 4",
                desc: "Accroître la jouissance des droits de santé pour les adolescentes et jeunes femmes (10-24 ans). Données VBG, plaidoyer, téléfilm éducatif, ouverture CIPEC-VBG.",
                partner: "Médecins du Monde / ROAJELF Bénin",
                headerBg: '#2764AE',
                themeColor: '#2764AE',
                icon: <FileText size={20} className="text-white" />
              },
              {
                title: "PAGEDA II - Alphabétisation",
                desc: "Renforcement de l'éducation non formelle dans la commune de Copargo. Reprise des cours, dotation en matériels pédagogiques, évaluation finale avec 100% de réussite.",
                partner: "SIA N'SON ONG / Coopération Suisse",
                headerBg: '#f59f23',
                themeColor: '#f59f23',
                icon: <BookOpen size={20} className="text-white" />
              },
              {
                title: "TEDIDJO 3 - \"Baani Gordo\"",
                desc: "Espaces sûrs pour 1500 adolescentes à Nikki et Karimama. Santé reproductive, prévention VBG, leadership féminin. Durée : Août 2025 – Juillet 2026.",
                partner: "CARE Bénin/Togo / FJSI",
                headerBg: '#3bb143',
                themeColor: '#3bb143',
                icon: <Home size={20} className="text-white" />
              },
              {
                title: "Projet YES - Phase 3",
                desc: "Bootcamp de 50 jeunes à Karigui et Fadama, théâtre communautaire, réseau d'ambassadeurs DSSR pour lutter contre les mariages précoces à Karimama.",
                partner: "UNFPA Bénin / CARE Bénin-Togo",
                headerBg: '#2764AE',
                themeColor: '#2764AE',
                icon: <Lightbulb size={20} className="text-white" />
              },
              {
                title: "Grant UNFPA 2025",
                desc: "Renforcement institutionnel : formation en plaidoyer/lobbying, lutte contre les Fake News, création d'une cellule de veille numérique interne.",
                partner: "UNFPA / Ambassade des Pays-Bas",
                headerBg: '#f59f23',
                themeColor: '#f59f23',
                icon: <Target size={20} className="text-white" />
              },
              {
                title: "48H contre le Cancer du Sein",
                desc: "2ème édition : 350 femmes sensibilisées aux marchés Arzeke et Dépôt, 96 femmes orientées vers les centres de dépistage en octobre 2025.",
                partner: "Initiative sur fonds propres - ONG BUSOLA",
                headerBg: '#3bb143',
                themeColor: '#3bb143',
                icon: <Heart size={20} className="text-white" />
              }
            ].map((proj, i) => (
              <div key={i} className="col-lg-4 col-md-6">
                <div 
                  className="h-100 bg-white border shadow-sm transition-all overflow-hidden"
                  style={{ 
                    borderRadius: '20px',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.08)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 .125rem .25rem rgba(0,0,0,.075)';
                  }}
                >
                  <div 
                    className="p-3 d-flex align-items-center gap-3 text-white"
                    style={{ backgroundColor: proj.headerBg }}
                  >
                    <div className="d-flex align-items-center justify-content-center rounded bg-white bg-opacity-20"
                         style={{ width: '38px', height: '38px' }}>
                      {proj.icon}
                    </div>
                    <h5 className="mb-0 fw-bold" style={{ fontFamily: cond, fontSize: '1.15rem', letterSpacing: '0.3px', textTransform: 'uppercase' }}>
                      {proj.title}
                    </h5>
                  </div>
                  <div className="p-4 flex-grow-1 d-flex flex-column justify-content-between">
                    <p className="text-muted mb-4" style={{ fontSize: '0.92rem', lineHeight: '1.6', textAlign: 'justify' }}>
                      {proj.desc}
                    </p>
                    <div className="pt-3 border-top d-flex align-items-center gap-2" style={{ borderColor: 'rgba(0,0,0,0.06)' }}>
                      <Handshake size={16} style={{ color: proj.themeColor }} />
                      <span className="fw-bold" style={{ fontSize: '0.82rem', color: proj.themeColor }}>
                        {proj.partner}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Sur le terrain au Bénin */}
      <section style={{ padding: '80px 0', background: '#faf9f6', fontFamily: sans }}>
        <div className="container">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: '800px' }}>
            <span className="text-uppercase fw-bold" style={{ color: '#f59f23', fontSize: '0.9rem', letterSpacing: '2px', display: 'block', marginBottom: '8px' }}>
              ZONE D'INTERVENTION
            </span>
            <h2 style={{ fontFamily: cond, fontSize: 'clamp(2.2rem, 4vw, 3rem)', fontWeight: 900, textTransform: 'uppercase', color: '#111827', marginBottom: '16px', letterSpacing: '-0.5px' }}>
              Sur le terrain au Bénin
            </h2>
            <p className="text-muted" style={{ fontSize: '1.05rem', lineHeight: '1.6' }}>
              L'ONG BUSOLA intervient principalement dans quatre départements du nord du Bénin, avec un ancrage particulier dans les communes de Parakou, Karimama, Copargo et Nikki.
            </p>
          </div>

          <div className="row g-4 mb-5">
            {[
              {
                name: "Borgou",
                sub: "Siège social - Parakou",
                icon: <Building size={32} style={{ color: '#2764AE' }} />,
                bg: 'rgba(39, 100, 174, 0.08)',
                borderColor: '#2764AE'
              },
              {
                name: "Alibori",
                sub: "Commune de Karimama",
                icon: <Sprout size={32} style={{ color: '#f59f23' }} />,
                bg: 'rgba(245, 159, 35, 0.08)',
                borderColor: '#f59f23'
              },
              {
                name: "Atacora",
                sub: "Commune de Copargo",
                icon: <Mountain size={32} style={{ color: '#3bb143' }} />,
                bg: 'rgba(59, 177, 67, 0.08)',
                borderColor: '#3bb143'
              },
              {
                name: "Donga",
                sub: "Communes rurales",
                icon: <Trees size={32} style={{ color: '#2764AE' }} />,
                bg: 'rgba(39, 100, 174, 0.08)',
                borderColor: '#2764AE'
              }
            ].map((d, i) => (
              <div key={i} className="col-lg-3 col-sm-6">
                <div 
                  className="p-4 text-center bg-white border h-100 transition-all"
                  style={{ 
                    borderRadius: '20px',
                    borderColor: 'rgba(0,0,0,0.06)',
                    borderTop: `5px solid ${d.borderColor}`,
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.08)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 .125rem .25rem rgba(0,0,0,.075)';
                  }}
                >
                  <div className="d-flex align-items-center justify-content-center rounded-circle mx-auto mb-3"
                       style={{ width: '64px', height: '64px', backgroundColor: d.bg }}>
                    {d.icon}
                  </div>
                  <h4 className="fw-bold mb-1" style={{ fontFamily: cond, fontSize: '1.4rem', textTransform: 'uppercase', letterSpacing: '0.5px', color: '#111827' }}>
                    {d.name}
                  </h4>
                  <span className="text-muted" style={{ fontSize: '0.85rem' }}>
                    {d.sub}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Communautés d'intervention box */}
          <div 
            className="p-5 bg-white border shadow-sm"
            style={{ borderRadius: '24px' }}
          >
            <div className="row g-4 align-items-center">
              <div className="col-lg-7">
                <h3 style={{ fontFamily: cond, fontSize: '1.8rem', fontWeight: 900, textTransform: 'uppercase', color: '#2764AE', marginBottom: '16px' }}>
                  Nos communautés d'intervention
                </h3>
                <p className="text-muted mb-0" style={{ fontSize: '0.95rem', lineHeight: '1.7', textAlign: 'justify' }}>
                  Nous travaillons au cœur des villages les plus reculés, là où les services de base sont insuffisants et où les jeunes filles sont les plus vulnérables aux violences et aux mariages précoces. Nos équipes de bénévoles, formées et accompagnées, constituent le premier point de contact avec les communautés de Karimama-centre, Kompa, Birni-Lafia, Karigui, Fakara et Nikki.
                </p>
              </div>
              <div className="col-lg-5">
                <div className="d-flex flex-wrap gap-2 justify-content-lg-end">
                  {[
                    { name: "Karimama-centre", bg: '#2764AE' },
                    { name: "Kompa", bg: '#2764AE' },
                    { name: "Birni-Lafia", bg: '#f59f23' },
                    { name: "Karigui", bg: '#f59f23' },
                    { name: "Copargo", bg: '#3bb143' },
                    { name: "Nikki", bg: '#3bb143' },
                    { name: "Fakara", bg: '#2764AE' },
                    { name: "Fadama", bg: '#f59f23' },
                    { name: "Parakou", bg: '#3bb143' }
                  ].map((c, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-2 text-white fw-bold shadow-sm transition-all"
                      style={{ 
                        backgroundColor: c.bg, 
                        borderRadius: '10px', 
                        fontSize: '0.82rem',
                        letterSpacing: '0.3px',
                        cursor: 'default'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.05)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                    >
                      {c.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Green Rolling Band */}
      <div 
        className="container-fluid bg-tertiary text-white py-3 overflow-hidden shadow-sm"
        style={{ whiteSpace: 'nowrap', zIndex: 5 }}
      >
        <marquee behavior="scroll" direction="left" scrollamount="6" style={{ fontSize: '1.05rem', fontWeight: 'bold', letterSpacing: '0.5px' }}>
          {[1, 2, 3, 4].map(i => (
            <span key={i} className="mx-5 text-uppercase">
              L'ONG BUSOLA EST UNE ORGANISATION STRUCTURÉE, DOTÉE DE PROCÉDURES CLAIRES QUI GARANTISSENT UNE GESTION RIGOUREUSE ET REDEVABLE.
            </span>
          ))}
        </marquee>
      </div>

      {/* Section 4: Ils nous font confiance */}
      <section style={{ padding: '80px 0', background: '#ffffff', fontFamily: sans }}>
        <div className="container">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: '800px' }}>
            <span className="text-uppercase fw-bold" style={{ color: '#f59f23', fontSize: '0.9rem', letterSpacing: '2px', display: 'block', marginBottom: '8px' }}>
              NOS PARTENAIRES
            </span>
            <h2 style={{ fontFamily: cond, fontSize: 'clamp(2.2rem, 4vw, 3rem)', fontWeight: 900, textTransform: 'uppercase', color: '#111827', marginBottom: '16px', letterSpacing: '-0.5px' }}>
              Ils nous font confiance
            </h2>
            <p className="text-muted" style={{ fontSize: '1.05rem', lineHeight: '1.6' }}>
              Des organisations nationales et internationales s'associent à BUSOLA pour amplifier l'impact de nos actions sur le terrain.
            </p>
          </div>

          <div className="d-flex flex-wrap gap-3 justify-content-center align-items-center">
            {[
              { name: "CARE Bénin/Togo", logo: "/logo-care.png" },
              { name: "Médecins du Monde", logo: "/logo-mdm.png" },
              { name: "UNFPA Bénin", logo: "/unfpa.png" },
              { name: "Coopération Suisse", logo: "/logo-suisse.png" },
              { name: "SIA N'SON ONG", logo: "/sianson.png" },
              { name: "ROAJELF Bénin", logo: "/roajelf.jpeg" },
              { name: "Ambassade du Canada", logo: "/canada.png" },
              { name: "Royaume-Uni", logo: "/logo-uk.jpg" },
              { name: "UNICEF", logo: "/unicef.png" },
              { name: "Ambassade des Pays-Bas", logo: null, color: '#2764AE' },
              { name: "Vie et Environnement", logo: null, color: '#f59f23' },
              { name: "FJSI International", logo: null, color: '#3bb143' },
              { name: "DDISP Borgou-Alibori", logo: null, color: '#2764AE' }
            ].map((p, i) => (
              <div 
                key={i}
                className="px-4 py-3 bg-white border shadow-sm transition-all d-flex align-items-center justify-content-center"
                style={{ 
                  borderRadius: '15px',
                  cursor: 'pointer',
                  borderColor: 'rgba(0,0,0,0.05)',
                  minHeight: '80px',
                  minWidth: '180px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.08)';
                  e.currentTarget.style.borderColor = 'rgba(39, 100, 174, 0.15)';
                  const img = e.currentTarget.querySelector('img');
                  if (img) img.style.filter = 'grayscale(0%) opacity(1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 .125rem .25rem rgba(0,0,0,.075)';
                  e.currentTarget.style.borderColor = 'rgba(0,0,0,0.05)';
                  const img = e.currentTarget.querySelector('img');
                  if (img) img.style.filter = 'grayscale(100%) opacity(0.7)';
                }}
              >
                {p.logo ? (
                  <img 
                    src={p.logo} 
                    alt={p.name} 
                    style={{ 
                      maxHeight: '45px', 
                      maxWidth: '140px', 
                      objectFit: 'contain',
                      filter: 'grayscale(100%) opacity(0.7)',
                      transition: 'all 0.3s ease'
                    }} 
                  />
                ) : (
                  <div className="d-flex align-items-center gap-2">
                    <div className="rounded-circle" style={{ width: '8px', height: '8px', backgroundColor: p.color || '#f59f23' }}></div>
                    <span className="fw-bold text-dark" style={{ fontSize: '0.9rem' }}>
                      {p.name}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 2. VISION & MISSION ──────────────────────────────────────────────── */}
      <section style={{ background: sable, fontFamily: sans }}>
        <div style={{ maxWidth: '1260px', margin: 'auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px', background: border }} className="story-layout-responsive">
            {/* Vision */}
            <div style={{ background: cream, padding: '48px 40px' }}>
              <div style={labelStyle}><span style={labelBeforeStyle}></span>Notre cap</div>
              <h3 style={{ fontFamily: cond, fontSize: '32px', fontWeight: 900, textTransform: 'uppercase', color: cobalt, marginBottom: '16px', letterSpacing: '-0.5px' }}>Notre Vision</h3>
              <p style={{ fontSize: '15px', color: muted, lineHeight: 1.85 }}>
                Un Bénin où le potentiel de chaque femme et de chaque jeune est libéré pour bâtir des communautés justes, pacifiques et autonomes.
              </p>
            </div>
            {/* Mission */}
            <div style={{ background: '#27ae60', padding: '48px 40px' }}>
              <div style={{ ...labelStyle, color: 'rgba(255,255,255,.85)' }}>
                <span style={{ ...labelBeforeStyle, background: '#ffffff' }}></span>Notre engagement
              </div>
              <h3 style={{ fontFamily: cond, fontSize: '32px', fontWeight: 900, textTransform: 'uppercase', color: '#fff', marginBottom: '16px', letterSpacing: '-0.5px' }}>Notre Mission</h3>
              <p style={{ fontSize: '15px', color: 'rgba(255,255,255,.9)', lineHeight: 1.85 }}>
                Renforcer le pouvoir d'agir des communautés, en particulier des femmes et des jeunes, en co-construisant des solutions locales pour la santé, la protection, l'autonomisation et la paix.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. NOS VALEURS ───────────────────────────────────────────────────── */}
      <section style={{ padding: 'clamp(64px,8vh,110px) clamp(1.5rem,5vw,3rem)', background: cream, fontFamily: sans }}>
        <div style={{ maxWidth: '1260px', margin: 'auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '0' }}>
            <div style={{ ...labelStyle, justifyContent: 'center' }}>
              <span style={labelBeforeStyle}></span>Ce qui nous anime<span style={labelBeforeStyle}></span>
            </div>
            <h2 style={{ fontFamily: cond, fontSize: 'clamp(38px,5vw,62px)', fontWeight: 900, lineHeight: .95, textTransform: 'uppercase', letterSpacing: '-1px', color: cobalt, marginBottom: '0' }}>
              NOS VALEURS
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 0, marginTop: '56px' }}
               className="valeurs-grid-responsive">
            {[
              { icon: faLandmark, titre: 'Dignité', desc: "Placer chaque personne au cœur de l'action, sans exception." },
              { icon: faSearch, titre: 'Intégrité', desc: "Agir avec transparence et redevabilité envers nos partenaires et bénéficiaires." },
              { icon: faHandshake, titre: 'Collaboration', desc: "Ensemble, pour un impact durable et une intelligence collective." },
              { icon: faBolt, titre: 'Engagement', desc: "Être une force audacieuse pour la justice et l'égalité de genre." },
              { icon: faRocket, titre: 'Autonomisation', desc: "Libérer les potentiels, inspirer et transmettre pour un avenir durable.", last: true },
            ].map((v, i) => (
              <div key={i} style={{
                padding: '40px 24px', textAlign: 'center',
                borderRight: v.last ? 'none' : `1px solid ${border}`,
                borderTop: `3px solid ${goldWarm}`,
              }}>
                <div style={{ fontSize: '28px', marginBottom: '16px', color: goldWarm }}>
                  <FontAwesomeIcon icon={v.icon} />
                </div>
                <h4 style={{ fontFamily: cond, fontSize: '16px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '.5px', color: cobalt, marginBottom: '8px' }}>{v.titre}</h4>
                <p style={{ fontSize: '12.5px', color: muted, lineHeight: 1.6 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. NOTRE APPROCHE ────────────────────────────────────────────────── */}
      <section style={{ padding: 'clamp(64px,8vh,110px) clamp(1.5rem,5vw,3rem)', background: sable, fontFamily: sans }}>
        <div style={{ maxWidth: '1260px', margin: 'auto' }}>
          <div style={labelStyle}><span style={labelBeforeStyle}></span>Méthodologie</div>
          <h2 style={{ fontFamily: cond, fontSize: 'clamp(38px,5vw,62px)', fontWeight: 900, lineHeight: .95, textTransform: 'uppercase', letterSpacing: '-1px', color: cobalt, marginBottom: '16px' }}>
            NOTRE APPROCHE :<br />FAIRE « AVEC »,<br />PAS « POUR »
          </h2>
          <p style={{ fontSize: '17px', color: muted, lineHeight: 1.8, maxWidth: '620px', marginBottom: '48px' }}>
            Nous ne croyons pas aux solutions importées. Notre approche est celle de l'ingénierie du développement social, fondée sur l'écoute et la co-construction.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginTop: '52px' }}
               className="approach-grid-responsive">
            {[
              {
                n: '01', title: 'Proximité & Immersion',
                desc: "Nos équipes sont sur le terrain, au contact direct des réalités, pour comprendre les dynamiques locales avant d'agir. Pas de solution venue d'ailleurs — chaque intervention naît du dialogue avec la communauté."
              },
              {
                n: '02', title: 'Partenariat Stratégique',
                desc: "Nous travaillons en synergie avec les communautés, les autorités locales, les leaders traditionnels et d'autres organisations. C'est l'intelligence collective qui crée les changements les plus profonds."
              },
              {
                n: '03', title: "Renforcement du Pouvoir d'Agir",
                desc: "Notre but ultime est de rendre les communautés autonomes. Chaque projet est conçu pour transférer des compétences et renforcer les capacités locales pour une pérennité des actions."
              },
            ].map((c, i) => (
              <div key={i} style={{ padding: '36px 28px', background: cream, border: `1px solid ${border}`, borderRadius: '2px', borderTop: `3px solid ${cobalt}` }}>
                <div style={{ fontFamily: cond, fontSize: '48px', fontWeight: 900, color: 'rgba(40,100,174,.08)', lineHeight: 1, marginBottom: '12px' }}>{c.n}</div>
                <h3 style={{ fontFamily: cond, fontSize: '22px', fontWeight: 800, textTransform: 'uppercase', color: cobalt, marginBottom: '12px', letterSpacing: '0.3px' }}>{c.title}</h3>
                <p style={{ fontSize: '14px', color: muted, lineHeight: 1.75 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. IMPACT EN CHIFFRES ─────────────────────────────────────────────── */}
      <section style={{ padding: '80px 0', background: '#ffffff', fontFamily: sans }}>
        <div className="container">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: '800px' }}>
            <span className="text-uppercase fw-bold" style={{ color: '#f59f23', fontSize: '0.9rem', letterSpacing: '2px', display: 'block', marginBottom: '8px' }}>
              DES RÉSULTATS CONCRETS DEPUIS 2020
            </span>
            <h2 style={{ fontFamily: cond, fontSize: 'clamp(2.2rem, 4vw, 3rem)', fontWeight: 900, textTransform: 'uppercase', color: '#111827', marginBottom: '16px', letterSpacing: '-0.5px' }}>
              NOTRE IMPACT<br /><span style={{ color: '#f59f23' }}>EN QUELQUES CHIFFRES</span>
            </h2>
          </div>

          <div className="row g-4">
            {[
              { n: count1, suffix: '+', label: 'Bénéficiaires directs', sub: 'depuis 2020', icon: <FileText size={32} style={{ color: '#f59f23' }} />, bg: 'rgba(245, 159, 35, 0.1)', borderColor: '#f59f23' },
              { n: count2, suffix: '+', label: 'Projets et actions de terrain', sub: 'interventions', icon: <HeartPulse size={32} style={{ color: '#2764AE' }} />, bg: 'rgba(39, 100, 174, 0.1)', borderColor: '#2764AE' },
              { n: count3, suffix: '+', label: 'Autorités locales mobilisées', sub: 'partenaires', icon: <Users size={32} style={{ color: '#f59f23' }} />, bg: 'rgba(245, 159, 35, 0.1)', borderColor: '#f59f23' },
              { n: count4, suffix: '', label: 'Membres actifs', sub: 'équipe engagée', icon: <FileText size={32} style={{ color: '#2764AE' }} />, bg: 'rgba(39, 100, 174, 0.1)', borderColor: '#2764AE' },
            ].map((item, i) => (
              <div key={i} className="col-lg-3 col-md-6">
                <div 
                  className="p-4 text-center bg-white border h-100 transition-all"
                  style={{ 
                    borderRadius: '20px',
                    borderColor: 'rgba(0,0,0,0.06)',
                    borderTop: `5px solid ${item.borderColor}`,
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.08)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 .125rem .25rem rgba(0,0,0,.075)';
                  }}
                >
                  <div className="d-flex align-items-center justify-content-center rounded-circle mx-auto mb-3"
                       style={{ width: '64px', height: '64px', backgroundColor: item.bg }}>
                    {item.icon}
                  </div>
                  <h3 className="fw-bold mb-2" style={{ fontFamily: cond, fontSize: '2.5rem', color: '#111827', lineHeight: 1 }}>
                    {item.n}{item.suffix}
                  </h3>
                  <h4 className="fw-bold mb-1" style={{ fontFamily: cond, fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '0.5px', color: '#111827' }}>
                    {item.label}
                  </h4>
                  <span className="text-muted" style={{ fontSize: '0.9rem' }}>
                    {item.sub}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. GOUVERNANCE ────────────────────────────────────────────────────── */}
      <section style={{ padding: 'clamp(64px,8vh,110px) clamp(1.5rem,5vw,3rem)', background: cream, fontFamily: sans }}>
        <div style={{ maxWidth: '1260px', margin: 'auto' }}>
          <div style={labelStyle}><span style={labelBeforeStyle}></span>Structure</div>
          <h2 style={{ fontFamily: cond, fontSize: 'clamp(38px,5vw,62px)', fontWeight: 900, lineHeight: .95, textTransform: 'uppercase', letterSpacing: '-1px', color: cobalt, marginBottom: '16px' }}>
            GOUVERNANCE<br />& TRANSPARENCE
          </h2>
          <p style={{ fontSize: '17px', color: muted, lineHeight: 1.8, maxWidth: '620px', marginBottom: '52px' }}>
            Une gouvernance solide, une gestion rigoureuse et redevable. Nous croyons que la confiance se bâtit sur la transparence.
          </p>

          {/* Org chart */}
          <div style={{ maxWidth: '600px', margin: '0 auto 64px' }}>
            {/* AG */}
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 0 }}>
              <div style={{ background: cobalt, color: '#fff', padding: '16px 28px', borderRadius: '2px', textAlign: 'center', minWidth: '220px' }}>
                <b style={{ display: 'block', fontFamily: cond, fontSize: '15px', fontWeight: 800, letterSpacing: '.3px' }}>Assemblée Générale</b>
                <small style={{ fontSize: '11px', color: 'rgba(255,255,255,.6)' }}>Organe suprême de décision</small>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ width: '1px', height: '32px', background: border }}></div>
            </div>
            {/* CA */}
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 0 }}>
              <div style={{ background: cobalt, color: '#fff', padding: '16px 28px', borderRadius: '2px', textAlign: 'center', minWidth: '280px' }}>
                <b style={{ display: 'block', fontFamily: cond, fontSize: '15px', fontWeight: 800, letterSpacing: '.3px' }}>Conseil d'Administration</b>
                <small style={{ fontSize: '11px', color: 'rgba(255,255,255,.6)' }}>Vision stratégique · Présidente : SANNI Sybgath</small>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ width: '1px', height: '32px', background: border }}></div>
            </div>
            {/* Direction */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ background: sable, color: cobalt, padding: '16px 28px', borderRadius: '2px', textAlign: 'center', minWidth: '220px', border: `1px solid ${border}` }}>
                <b style={{ display: 'block', fontFamily: cond, fontSize: '15px', fontWeight: 800, letterSpacing: '.3px', color: cobalt }}>Direction Exécutive</b>
                <small style={{ fontSize: '11px', color: muted }}>Mise en œuvre opérationnelle</small>
              </div>
            </div>
          </div>


        </div>
      </section>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 960px) {
          .story-layout-responsive { grid-template-columns: 1fr !important; }
          .valeurs-grid-responsive { grid-template-columns: 1fr 1fr 1fr !important; }
          .approach-grid-responsive { grid-template-columns: 1fr !important; }
          .impact-grid-responsive { grid-template-columns: 1fr 1fr !important; }
          .docs-grid-responsive { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .valeurs-grid-responsive { grid-template-columns: 1fr 1fr !important; }
          .impact-grid-responsive { grid-template-columns: 1fr !important; }
          .docs-grid-responsive { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
