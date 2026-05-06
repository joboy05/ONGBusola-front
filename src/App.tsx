import React, { useEffect, useState } from 'react';

declare global {
  interface Window {
    $: any;
    jQuery: any;
    WOW: any;
  }
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

  const team: TeamMember[] = [
    {
      name: "Zoulfath ZIME ",
      role: "Chargé de Communauté ",
      photo: "/NS1_8838_p9dGDR5.jpg",
      description: ""
    },
    {
      name: "Fadel KASSALI",
      role: "Assistant Projet",
      photo: "/Fadel_QL0iHKL.jpg",
      email: "kassalifadel4@gmail.com",
      description: ""
    },
    {
      name: "Abouyaïdou MAMA",
      role: "Directeur Exécutif",
      photo: "/IMG_8826a_uSwjVqX.jpg",
      email: "mamaabouyaidou22@gmail.com",
      description: "MAMA Abouyaïdou est doctorant en relations internationales à l’Université de Parakou (Bénin), spécialisé en sécurité internationale, cohésion sociale et prévention du terrorisme au Sahel. Fort de plus de huit années d’expérience, il a coordonné et supervisé des projets communautaires majeurs financés par des partenaires internationaux tels que l’UNICEF, l’Union européenne et CARE International. Coordonnateur et Directeur exécutif de l’ONG Busola, il œuvre dans les domaines de la paix, des VBG, du développement rural et de la santé sexuelle et reproductive. Assistant de recherche et enseignant universitaire, il est certifié par le Peace Operations Training Institute des Nations Unies. Sa vision est de transformer la recherche en action pour une paix durable et inclusive."
    },
    {
      name: "BOUKO Chabi Dramane",
      role: "Président du Conseil de Surveillance",
      photo: "/WhatsApp_Image_2026-02-11_at_13.24.20.jpeg",
      description: ""
    },
    {
      name: "Alain ASSANKPON",
      role: "Président d'honneur",
      photo: "/IMG_9787_1tS0sWp.JPG.jpeg",
      description: ""
    },
    {
      name: "Sybgath SANNI",
      role: "Présidente du Conseil d’Administration",
      photo: "/pca.jpg",
      description: "Pionnière de la naissance de l'ONG BUSOLA, est une figure remarquable, dotée d'un esprit brillant, d'un talent indéniable et d'un esprit innovant. En tant qu'entrepreneuse émérite, elle a fondé plusieurs entreprises prospères telles que BUSOLA BUILDINGS SARL, SUPERMARCHÉ CHANCE GLORY et le restaurant AFRICAN'S DELICES by SYB. En tant que gestionnaire de projets de formation, Sybgath se spécialise dans le domaine du Droit à la Santé Sexuelle et Reproductive (DSSR) ainsi que dans les..."
    }
  ];

  return (
    <div className="wrapper">
      {/* Spinner is in index.html */}

      {/* Navbar fixed */}
      <div className="nav-bar bg-primary p-0 sticky-top shadow-sm">
        <nav className="navbar navbar-expand-lg bg-primary navbar-dark py-lg-0 container-fluid px-3 px-lg-5">
          <a href="/" className="navbar-brand m-0">
            <img width="170" height="50" src="/LOGO HORIZONTAL-02-02.png" alt="Logo" />
          </a>
          <button type="button" className="navbar-toggler me-0" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
          </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav align-items-center">
                <a href="/" className="nav-item nav-link active">Accueil</a>
                <div className="nav-item dropdown">
                  <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">A propos</a>
                  <div className="dropdown-menu border-0 m-0">
                    <a href="#" className="dropdown-item">Qui sommes nous?</a>
                    <a href="#" className="dropdown-item">Notre Vision</a>
                    <a href="#" className="dropdown-item">Nos Valeurs</a>
                  </div>
                </div>
                <a href="#" className="nav-item nav-link">Nos actions</a>
                <a href="#" className="nav-item nav-link">Nos actualités</a>
                <a href="#" className="nav-item nav-link">Contact</a>
              </div>
              <div className="ms-auto d-none d-lg-flex">
                <a className="btn btn-secondary m-1 px-3 text-white fw-bold" href="#!" style={{ borderRadius: "7px" }}>Nous soutenir</a>
              </div>
            </div>
        </nav>
      </div>

      {/* Banner Section */}
      <div className="container-fluid top p-0 wow fadeIn" data-wow-delay="0.1s">

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
                <img className="w-100 shadow-lg" style={{ borderRadius: "50%", border: "10px solid white" }} src="/IMG_8938.jpeg" alt="Busola" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="d-none d-lg-flex justify-content-center" style={{ marginTop: "-25px", position: "relative", zIndex: 10 }}>
        <a className="btn btn-secondary text-uppercase text-white fw-bold px-4 py-2" href="#!" style={{ borderRadius: "7px" }}>Nos actualités</a>
      </div>

      <div className="container-fluid p-0 text-center py-5 bannere wow fadeOut" style={{ height: "400px" }}>
        <h1 className="text-uppercase text-primary display-1 fw-bold">
          LE SILENCE PROTèGE <br />L'aGRESSEUR. NOTRE aCTION <br /> PROTèGE <span className="text-white bg-primary">La VICTIME</span>
        </h1>
      </div>
      {/* Partenaires */}
      <div className="container-fluid mt-5 pt-5 pb-0 partenaire wow fadeIn">
        <div className="container">
          <div className="d-none d-lg-flex justify-content-start mb-4">
            <a className="btn btn-secondary m-1 px-3 text-white fw-bold" href="#!" style={{ borderRadius: "7px" }}>Nos partenaires</a>
          </div>
          <div className="row align-items-center justify-content-center">
            {[
              'UNFPA.png', 'UNICEF-logoquake.png', 'logo_unicri.svg', 
              'ROYAUME UNI LOGO.jpg', 'Canada.png', 'Logo Suisse.png', 
              'MdM logo.png', 'logo-care.png', 'engender.png', 
              'ROAJELF.jpeg', 'sianson.png', 'Barika.jpg', 'wendia.jpg'
            ].map((img, i) => (
              <div key={i} className="col-4 col-md-3 col-lg-2 p-3 text-center">
                <img src={`/${img}`} className="img-fluid" style={{ maxHeight: "80px", objectFit: "contain" }} alt="partner" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Crossed Bands Section - Animated Paint Roll (X-Cross) */}
      <div className="container-fluid overflow-hidden position-relative my-5" style={{ height: "200px", display: "flex", alignItems: "center" }}>
        {/* Orange Band - Roll from Left */}
        <div className="position-absolute w-100 bg-secondary text-white py-3 shadow animate-roll-left" 
             style={{ top: "50%", marginTop: "-40px", left: "0", zIndex: 1, whiteSpace: "nowrap" }}>
          <marquee behavior="scroll" direction="left" scrollamount="7" style={{ fontSize: "28px", fontWeight: "900" }}>
            {[1, 2, 3, 4, 5, 6].map(i => (
              <span key={i} className="text-uppercase mx-5">S'INSCRIRE A NOTRE NEWSLETTER</span>
            ))}
          </marquee>
        </div>
        {/* Green Band - Roll from Right */}
        <div className="position-absolute w-100 bg-tertiary text-white py-3 shadow animate-roll-right" 
             style={{ top: "50%", marginTop: "-40px", left: "0", zIndex: 2, whiteSpace: "nowrap" }}>
          <marquee behavior="scroll" direction="right" scrollamount="9" style={{ fontSize: "28px", fontWeight: "900" }}>
            {[1, 2, 3, 4, 5, 6].map(i => (
              <span key={i} className="text-uppercase mx-5">S'INSCRIRE A NOTRE NEWSLETTER</span>
            ))}
          </marquee>
        </div>
      </div>

      {/* About Section - New Design */}
      <div className="container-fluid py-5 bg-white">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            {/* Left Image Column */}
            <div className="col-lg-5 wow fadeIn" data-wow-delay="0.1s">
              <div className="position-relative">
                <img 
                  className="img-fluid w-100 rounded-5 shadow-lg" 
                  src="/IMG_8938.jpeg" 
                  alt="About Busola" 
                  style={{ objectFit: "cover", height: "600px", backgroundColor: "#eef4ff" }} 
                />
                <div className="position-absolute bottom-0 end-0 bg-white p-4 m-4 rounded-4 shadow" style={{ minWidth: "180px" }}>
                  <h3 className="text-primary fw-bold mb-0">15 000+</h3>
                  <p className="text-muted mb-0 small">Bénéficiaires directs</p>
                </div>
              </div>
            </div>

            {/* Right Content Column */}
            <div className="col-lg-7 wow fadeIn" data-wow-delay="0.3s">
              <div className="ps-lg-5">
                {/* Section Title - Modern Premium Style */}
                <div className="mb-5 position-relative pt-4">
                  <div className="position-absolute top-0 start-0 bg-tertiary text-white px-4 py-2 fw-bold text-uppercase shadow" 
                       style={{ transform: "rotate(-3deg)", zIndex: 2, letterSpacing: "2px", borderRadius: "4px" }}>
                    Qui somme nous ?
                  </div>
                  <div className="bg-primary p-4 ps-5 shadow-lg position-relative overflow-hidden" 
                       style={{ borderLeft: "12px solid var(--bs-secondary)", borderRadius: "8px" }}>
                    {/* Decorative background element - Hands holding globe icon (silver version, no text) */}
                    <div className="position-absolute end-0 bottom-0 opacity-20" style={{ transform: "translate(15%, 15%)", width: "180px", height: "150px", overflow: "hidden" }}>
                      <img src="/LOGO VERTICAL-02-02.svg" style={{ width: "100%", marginTop: "-10px" }} alt="" />
                    </div>
                    <h1 className="display-4 text-white fw-black text-uppercase mb-0" style={{ letterSpacing: "4px", fontWeight: "900" }}>
                      ONG BUSOLA
                    </h1>
                  </div>
                </div>
                
                <p className="text-muted mb-4 fs-5 lh-base">
                  Créée en 2020 à Parakou, l’ONG Busola est le fruit d’un engagement citoyen porté par des femmes et des jeunes acteurs du développement, convaincus que les réponses aux défis sociaux devaient être locales, inclusives et ancrées dans les communautés.
                </p>
                <p className="text-muted mb-5 fs-5 lh-base">
                  Nos fondateurs, issus d’expériences en santé communautaire, éducation, prévention des violences et mobilisation sociale, ont constaté l’absence de cadres structurés articulant droits humains, autonomisation, paix et développement durable.
                </p>

                {/* Values Grid */}
                <div className="row g-4 mb-5">
                  {[
                    { icon: 'hand-holding-heart', color: '#ffc107', title: 'Dignité', desc: 'Chaque personne au cœur de l\'action' },
                    { icon: 'users', color: '#0dcaf0', title: 'Équité de Genre', desc: 'L\'égalité comme condition à la paix' },
                    { icon: 'link', color: '#198754', title: 'Partenariat', desc: 'Ensemble pour un impact durable' },
                    { icon: 'shield-check', color: '#fd7e14', title: 'Intégrité', desc: 'Transparence & redevabilité' }
                  ].map((val, idx) => (
                    <div key={idx} className="col-sm-6">
                      <div className="d-flex align-items-start p-3 rounded-4" style={{ backgroundColor: "#f8faff" }}>
                        <div className="rounded-3 p-2 me-3 d-flex align-items-center justify-content-center" style={{ backgroundColor: "white", boxShadow: "0 4px 10px rgba(0,0,0,0.05)" }}>
                          <i className={`fa fa-${val.icon} fs-4`} style={{ color: val.color }}></i>
                        </div>
                        <div>
                          <h6 className="fw-bold mb-1">{val.title}</h6>
                          <small className="text-muted d-block" style={{ fontSize: "0.85rem" }}>{val.desc}</small>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <a href="#" className="btn btn-primary rounded-3 px-4 py-3 fw-bold d-inline-flex align-items-center shadow">
                  En savoir plus <i className="fa fa-arrow-right ms-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Strategic Axes (RE-ENABLED) */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="text-center py-5">
            <div className="d-flex align-items-center justify-content-center mb-3">
              <div className="flex-grow-1" style={{ height: "2px", background: "var(--bs-tertiary)", maxWidth: "100px" }}></div>
              <span className="bg-tertiary text-white text-uppercase fw-bold p-2 mx-3">Que prônons-nous ?</span>
              <div className="flex-grow-1" style={{ height: "2px", background: "var(--bs-tertiary)", maxWidth: "100px" }}></div>
            </div>
            <h1 className="display-5 mb-4">
              <span className="text-uppercase text-white bg-primary px-4 py-2 shadow-sm" style={{ display: "inline-block" }}>Nos axes stratégiques d'intervention</span>
            </h1>
          </div>
          <div className="row g-5">
            <div className="col-md-4">
              <div className="bg-primary p-5 h-100 text-white rounded">
                <h1 className="text-white mb-4">Sur quoi agissons-nous?</h1>
                <p className="fs-5">Nous oeuvrons pour garantir la dignité, renforcer le pouvoir d’agir et ouvrir des opportunités aux femmes, aux jeunes et aux communautés.</p>
              </div>
            </div>
            <div className="col-md-8">
              <div className="row g-4">
                {[
                  { icon: 'droplet', title: 'Santé et Droits Sexuels et Reproductifs (SDSR)', desc: 'Garantir l\'accès des adolescent(e)s jeunes et des femmes à une information complète et à des services de santé de qualité...' },
                  { icon: 'hospital', title: 'Prévention et réponse aux Violences Basées sur le Genre (VBG)', desc: 'Mettre en œuvre des programmes de prévention et de lutte contre les VBG...' },
                  { icon: 'hands-holding-child', title: 'Leadership, éducation et autonomisation', desc: 'Renforcer l\'indépendance économique des femmes et des filles...' },
                  { icon: 'bowl-food', title: 'Paix, cohésion sociale et citoyenneté', desc: 'Créer des espaces de dialogue intercommunautaire, renforcer le vivre-ensemble...' }
                ].map((axe, i) => (
                  <div key={i} className="col-sm-6">
                    <div className="service-item h-100 p-4 shadow-sm bg-white rounded border-start border-4 border-secondary">
                      <div className="btn-square bg-light mb-3"><i className={`fa fa-${axe.icon} fa-2x text-secondary`}></i></div>
                      <h3 className="h5 text-primary">{axe.title}</h3>
                      <p className="mb-0">{axe.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Projects */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5">
            <div className="d-flex align-items-center justify-content-center mb-3">
              <div className="flex-grow-1" style={{ height: "2px", background: "var(--bs-tertiary)", maxWidth: "100px" }}></div>
              <span className="bg-tertiary text-white text-uppercase fw-bold p-2 mx-3">Actions</span>
              <div className="flex-grow-1" style={{ height: "2px", background: "var(--bs-tertiary)", maxWidth: "100px" }}></div>
            </div>
            <h1 className="display-5">
              <span className="text-uppercase text-white bg-primary fw-bold px-4 py-2 shadow-sm" style={{ display: "inline-block" }}>Principales actions menées</span>
            </h1>
          </div>
          <div className="row g-4">
            {[
              { title: 'PAGEDA', tag: 'Leadership et Autonomisation', img: '/IMG_3463_yZbdIV5.JPG', desc: 'Le Programme PAGEDA a pour objectif de lutter contre la pauvreté par l\'Alphabétisation fonctionnelle...' },
              { title: 'YES', tag: 'Autonomisation des jeunes', img: '/IMG-20250926-WA0023_M0UP60m.jpg', desc: 'Le projet YES (Youth Engagement for Sexual and Reproductive Health Rights) vise à renforcer l’autonomisation des jeunes...' },
              { title: 'TEDIDJO', tag: 'DSSR & VBG', img: '/IMG-20251016-WA0099_cK78lYo.jpg', desc: 'Le projet TEDIDJO améliore la SSR des adolescents et prévient les VBG dans le nord du Bénin.' }
            ].map((proj, i) => (
              <div key={i} className="col-md-6 col-lg-4">
                <div className="donation-item h-100 p-4 shadow-sm rounded">
                  <div className="position-relative mb-4">
                    <img className="img-fluid w-100" src={proj.img} alt={proj.title} />
                    <span className="btn btn-sm btn-secondary px-3 position-absolute top-0 end-0">{proj.tag}</span>
                  </div>
                  <h3 className="h4 text-primary">{proj.title}</h3>
                  <p>{proj.desc}</p>
                  <a className="btn btn-primary w-100" href="#!"><i className="fa fa-plus me-2"></i>En savoir plus</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* NOS ACTUALITÉS */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5 wow fadeIn" data-wow-delay="0.1s" style={{ maxWidth: "800px" }}>
            <p className="section-title fw-semi-bold text-center text-white px-3"><span className="bg-tertiary p-1">Actualités</span></p>
            <h1 className="display-6 text-uppercase text-primary mb-4">Soyez au courant de notre actualités en temps réel.</h1>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.1s">
              <div className="event-item h-100 p-4 shadow-sm bg-white rounded">
                <img className="img-fluid w-100 mb-4" src="/BUSOLA_39.jpg.jpeg" alt="Actualité Busola" />
                <p className="mb-1 text-tertiary"><i className="fa fa-calendar-alt me-2"></i>20 Février 2026</p>
                <h3 className="h5 text-primary">Cérémonie de présentation des voeux au CA et aux PTF de Busola</h3>
                <p className="small">10 Février, Busola ONG a vécu un instant d’exception à l’occasion de sa cérémonie de présentation des vœux à son Président d’Honneur, Monsieur Alain ASSANKPO, ainsi qu’à ses partenaires techniques et financiers locaux, nationaux et internationaux.</p>
                <a href="#!" className="text-secondary fw-bold small">Lire la suite...</a>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.3s">
              <div className="event-item h-100 p-4 shadow-sm bg-white rounded">
                <img className="img-fluid w-100 mb-4" src="/571270432_1263128095856811_5608146033344449618_n.jpg" alt="Actualité Busola" />
                <p className="mb-1 text-tertiary"><i className="fa fa-calendar-alt me-2"></i>8 Février 2026</p>
                <h3 className="h5 text-primary">48H contre le cancer du sein Edition 2025</h3>
                <p className="small">Ce jeudi 23 octobre, la 2ème journée de notre initiative "48h contre le Cancer du Sein" a été consacrée à l'extension de notre périmètre d'intervention, en déployant nos équipes au sein d’un deuxieme pole économique majeur de Parakou : Le marché dépôt</p>
                <a href="#!" className="text-secondary fw-bold small">Lire la suite...</a>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.5s">
              <div className="event-item h-100 p-4 shadow-sm bg-white rounded">
                <img className="img-fluid w-100 mb-4" src="/IMG_8811.jpg" alt="Actualité Busola" />
                <p className="mb-1 text-tertiary"><i className="fa fa-calendar-alt me-2"></i>8 Février 2026</p>
                <h3 className="h5 text-primary">Renforcement de capacités en Plaidoyer et Redevabilité</h3>
                <p className="small">Du 10 au 12 novembre 2025, l’Hôtel SOUNON SERO de Parakou a accueilli un atelier de renforcement de capacités sur le plaidoyer, organisé par Busola ONG avec l’appui de l’UNFPA Benin et de l'Ambassade des Pays-Bas au Bénin.</p>
                <a href="#!" className="text-secondary fw-bold small">Lire la suite...</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5">
            <p className="section-title fw-semi-bold text-center text-primary px-3"><span className="text-white bg-tertiary p-1">L'équipe</span></p>
            <h1 className="display-6"><span className="text-uppercase text-white bg-primary p-2">Découvrez la team Busola</span></h1>
          </div>
          <div className="row g-4">
            {team.map((m, i) => (
              <div key={i} className="col-md-6 col-lg-4">
                <div className="team-item d-flex h-100 p-4 shadow-sm bg-white rounded cursor-pointer" onClick={() => setSelectedMember(m)}>
                  <div className="team-detail pe-4">
                    <img className="img-fluid mb-4" src={m.photo} style={{ width: '100%', height: '250px', objectFit: 'cover' }} alt={m.name} />
                    <h3 className="h5">{m.name}</h3>
                    <span className="text-primary">{m.role}</span>
                  </div>
                  <div className="team-social bg-light d-flex flex-column justify-content-center flex-shrink-0 p-4">
                    <a className="btn btn-square btn-primary my-2" href="#"><i className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-square btn-primary my-2" href="#"><i className="fab fa-linkedin-in"></i></a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="container-fluid py-5 bg-light">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-3">
              <h1 className="display-6 text-primary">Témoignages</h1>
            </div>
            <div className="col-lg-9">
              <div className="owl-carousel testimonial-carousel">
                {[1, 2].map((_, i) => (
                  <div key={i} className="testimonial-item p-4">
                    <div className="row align-items-center">
                      <div className="col-md-6">
                        <img className="img-fluid rounded" src="/testimoner 1.jpg" alt="testimony" />
                      </div>
                      <div className="col-md-6">
                        <div className="mb-2"><i className="fa fa-star text-primary"></i><i className="fa fa-star text-primary"></i><i className="fa fa-star text-primary"></i><i className="fa fa-star text-primary"></i><i className="fa fa-star text-primary"></i></div>
                        <p className="fs-5">Grâce à l’ONG Busola, j’ai pu participer à des ateliers de formation où les femmes et les jeunes étaient pleinement impliqués...</p>
                        <h5 className="mb-0 text-primary">Makou Menadèle Murielle</h5>
                        <span className="text-secondary">Bénéficiaire d'un programme de formation</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Grid */}
      <div className="container-fluid p-0">
        <div className="container-fluid p-0 row m-0">
          <div className="col-md-4 bg-secondary p-5 wow fadeIn" data-wow-delay="0.1s">
            <a className="btn btn-primary text-uppercase fw-bold m-1 px-3 me-3 mb-4" href="#!" style={{ borderRadius: "7px" }}>Nous soutenir</a>
            <h1 className="text-white display-1 mb-4">COMMENT <br /><span className="text-secondary bg-white mb-3">SOUTENIR</span><br />BUSOLA</h1>
          </div>
          <div className="col-md-4 bg-primary line-height-3 text-white text-center p-5 wow fadeIn" data-wow-delay="0.1s">
            <h1 className="text-secondary display-1 text-uppercase mb-4">Faire un <br /><span className="text-secondary bg-white">DON</span></h1>
            <p>Votre soutien financier, même modeste, est un levier puissant, pour nos actions sur le terrain.</p>
            <a className="btn btn-light text-secondary text-uppercase fw-bold m-1 px-3 me-3" href="#!" style={{ borderRadius: "7px" }}>Je donne</a>
          </div>
          <div className="col-md-4 p-0 wow fadeIn" data-wow-delay="0.1s" style={{ background: "url('/IMG_0966.jpeg') center/cover", minHeight: "300px" }}></div>
          <div className="col-md-4 bg-tertiary line-height-3 text-white text-center p-5 wow fadeIn" data-wow-delay="0.1s">
            <h1 className="text-primary text-uppercase mb-4">DEVENIR <br /><span className="text-primary bg-white">Partenaire</span></h1>
            <p>Vous êtes une entreprise, une fondation, une institution? Collaborons pour démultiplier notre impact.</p>
            <a className="btn btn-light text-secondary text-uppercase fw-bold m-1 px-3 me-3" href="#!" data-bs-toggle="modal" data-bs-target="#partenariatModal" style={{ borderRadius: "7px" }}>Nous contacter</a>
          </div>
          <div className="col-md-4 p-0 wow fadeIn" data-wow-delay="0.1s" style={{ background: "url('/IMG-2025.jpeg') center/cover", minHeight: "300px" }}></div>
          <div className="col-md-4 bg-primary line-height-3 text-white text-center p-5 wow fadeIn" data-wow-delay="0.1s">
            <h1 className="text-white text-uppercase mb-4">DEVENIR <br /><span className="text-white bg-secondary">MEMBRE</span></h1>
            <p>Vous êtes une entreprise, une fondation, une institution? Collaborons pour démultiplier notre impact.</p>
            <a className="btn btn-light text-secondary text-uppercase fw-bold m-1 px-3 me-3" href="#!" data-bs-toggle="modal" data-bs-target="#benevolatModal" style={{ borderRadius: "7px" }}>Je m'engage</a>
          </div>
        </div>
      </div>



      {/* Nous soutenir button */}
      <div className="d-none d-lg-flex justify-content-center" style={{ marginTop: "-40px" }}>
        <a className="btn btn-primary text-uppercase m-1 px-3 me-3" href="#!" style={{ borderRadius: "7px" }}>Nous soutenir</a>
      </div>

      {/* Share Section */}
      <div className="container-fluid py-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container text-center" style={{ maxWidth: "800px", margin: "40px auto" }}>
          <h1 className="display-6 text-uppercase text-primary mb-4">S'ENGaGER <br /> c'est aussi partager</h1>
          <div className="d-flex align-items-center justify-content-center p-3">
            <a className="btn btn-square rounded-circle btn-secondary me-4 p-4 text-white" target="_blank" href="https://www.facebook.com/profile.php?id=100064788966440"><i className="fab fa-facebook-f"></i></a>
            <a className="btn btn-square rounded-circle btn-secondary me-4 p-4 text-white" target="_blank" href="https://www.twitter.com/"><i className="fab fa-twitter"></i></a>
            <a className="btn btn-square rounded-circle btn-secondary me-4 p-4 text-white" target="_blank" href="https://www.linkedin.com/company/ong-busola/"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>


      {/* Transition Image Foot - 600px */}
      <div className="container-fluid p-0 wow fadeIn" style={{ background: "url('/foot.jpeg') center/cover", height: "600px" }} data-wow-delay="0.1s"></div>

      {/* Newsletter */}
      <div className="container-fluid bg-primary py-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <h1 className="display-6 text-white mb-4">Inscrivez-vous à la Newsletter</h1>
              <div className="position-relative w-100 mb-2">
                <input className="form-control border-0 w-100 ps-4 pe-5" type="text" placeholder="Entrez votre Email" style={{ height: "60px" }} />
                <button type="button" className="btn btn-lg-square shadow-none position-absolute top-0 end-0 mt-2 me-2"><i className="fa fa-paper-plane text-primary fs-4"></i></button>
              </div>
              <p className="mb-0 text-white">N'ayez crainte vous ne reçevrez aucun Spam dans votre boîte mail.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container">
          <div className="row g-5 py-5">
            {/* Logo */}
            <div className="col-lg-3 col-md-6">
              <div className="row g-2">
                <div className="col-12">
                  <img className="img-fluid w-75" src="/LOGO VERTICAL-02-02.svg" alt="Logo Busola" />
                </div>
              </div>
            </div>

            {/* Liens rapides */}
            <div className="col-lg-3 col-md-6">
              <h4 className="text-light mb-4">Liens rapides</h4>
              <a className="btn btn-link" href="#">Qui sommes-nous?</a>
              <a className="btn btn-link" href="#">Nous contacter</a>
              <a className="btn btn-link" href="#">Nos actions</a>
              <a className="btn btn-link" href="#">Politique de confidentialité</a>
              <a className="btn btn-link" href="#">Conditions d'utilisations</a>
            </div>

            {/* Horaires */}
            <div className="col-lg-3 col-md-6">
              <h4 className="text-light mb-4">Horraires</h4>
              <p className="mb-1">Lundi - Vendredi</p>
              <h6 className="text-light">09h:00 - 18h:30</h6>
              <p className="mb-1">Samedi &amp; Dimanche</p>
              <h6 className="text-light">Fermé</h6>
            </div>

            {/* Contact */}
            <div className="col-lg-3 col-md-6">
              <h4 className="text-light mb-4">Contactez-nous</h4>
              <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>Qtier Arafat, non loin de Marie rose, Parakou, République du Bénin</p>
              <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+229 01 90 44 46 90</p>
              <p className="mb-2"><i className="fa fa-envelope me-3"></i>ongbusola@gmail.com</p>
              <div className="d-flex pt-3">
                <a className="btn btn-square btn-primary me-2" target="_blank" href="https://www.facebook.com/profile.php?id=100064788966440">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a className="btn btn-square btn-primary me-2" target="_blank" href="https://www.linkedin.com/company/ong-busola/">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="copyright pt-5">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                &copy; <a className="fw-semi-bold" href="#!">ONG BUSOLA</a>, Tous droits réservé.
              </div>
              <div className="col-md-6 text-center text-md-end">
                Designed By <a className="fw-semi-bold" href="#">Kyge006</a>. Distributed by <a className="fw-semi-bold" href="#">UTC-SERVICES</a>
              </div>
            </div>
          </div>
        </div>
      </footer>


      {/* Modals for Partenariat and Benevolat */}
      <div className="modal fade" id="partenariatModal" tabIndex={-1}>
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Demande de partenariat</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              {/* Simplifed Form for UI parity */}
              <div className="mb-3">
                <label className="form-label">Type de partenariat</label>
                <select className="form-select"><option>Sélectionner</option></select>
              </div>
              <div className="row">
                <div className="col-md-6 mb-3"><label className="form-label">Nom</label><input className="form-control" /></div>
                <div className="col-md-6 mb-3"><label className="form-label">Email</label><input className="form-control" /></div>
              </div>
              <div className="mb-3"><label className="form-label">Message</label><textarea className="form-control" rows={4}></textarea></div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary">Envoyer</button>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="benevolatModal" tabIndex={-1}>
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Demande de Bénévolat</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-md-6 mb-3"><label className="form-label">Nom</label><input className="form-control" /></div>
                <div className="col-md-6 mb-3"><label className="form-label">Compétences</label><input className="form-control" /></div>
              </div>
              <div className="mb-3"><label className="form-label">Message</label><textarea className="form-control" rows={4}></textarea></div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary">S'engager</button>
            </div>
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
    </div>
  );
}

export default App;
