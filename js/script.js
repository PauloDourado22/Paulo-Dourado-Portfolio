// ===== Footer year =====
document.getElementById("year").textContent = new Date().getFullYear();

// ===== Language state =====
// Declared this early because renderProjects() (called from applyLang(),
// further down) needs currentLang to already exist when it picks each
// project's description/linkLabel/note for the active language.
let currentLang = localStorage.getItem("lang") || "en";

// Reads a { en, pt } pair for the current language, falling back to English.
// Plain strings (project titles, tags — identical in both languages) pass
// through untouched, so callers don't need to know which fields differ.
function loc(field) {
  return field && typeof field === "object" ? field[currentLang] || field.en : field;
}

// ===== Projects: data-driven so any project can become the flagship =====
// Screenshots live in assets/screenshots/<project-id>/, one folder per app
// (e.g. assets/screenshots/sf-store/checkout.png), with plain lowercase
// filenames — no spaces or accented characters — so paths stay identical
// between local testing and the GitHub Pages deploy.
// description/linkLabel/note are { en, pt } pairs — see TRANSLATIONS below
// for every other piece of site copy (project data gets its own per-field
// pairs instead of flat i18n keys since each project's copy is unique to it).
const PROJECTS = [
  {
    id: "lofte",
    catalog: "P.01",
    title: "Løfte",
    description: {
      en: "A fitness and personal-training SaaS platform designed and built solo — workout logging, nutrition and step tracking, gamified progress, a trainer/client management system, and Stripe subscriptions.",
      pt: "Uma plataforma SaaS de fitness e personal training, desenhada e construída sozinho — registo de treinos, nutrição e passos, progresso gamificado, um sistema de gestão treinador/cliente, e subscrições Stripe.",
    },
    tags: ["Python", "Flask", "OAuth", "Stripe", "PWA"],
    // Add more shots here (dashboard, logger, mobile view, etc.) and the
    // flagship automatically becomes a slideshow — see mediaMarkup() below.
    images: [
      { src: "assets/screenshots/lofte/landing.png", alt: "Løfte landing page — Keep your løfte" },
      { src: "assets/screenshots/lofte/login.png", alt: "Løfte login page" },
      { src: "assets/screenshots/lofte/dashboard.png", alt: "Løfte dashboard" },
    ],
    linkLabel: { en: "LIVE DEMO ↗", pt: "DEMO AO VIVO ↗" },
    linkHref: "https://lofte-fopx-1dqj.onrender.com",
    note: {
      en: "Source private — exploring turning this into a product.",
      pt: "Código-fonte privado — a explorar transformar isto num produto.",
    },
  },
  {
    id: "fade",
    catalog: "P.02",
    title: "Fade.",
    description: {
      en: "An appointment booking system — customers pick a service, barber, and time slot, and pay a deposit through Stripe. Double-booking is actually prevented, not just discouraged, and payment is confirmed by a verified Stripe webhook, not the browser redirect.",
      pt: "Um sistema de marcação de horários — os clientes escolhem um serviço, barbeiro e horário, e pagam um sinal através do Stripe. A sobreposição de marcações é realmente impedida, não só desencorajada, e o pagamento é confirmado por um webhook verificado da Stripe, não pelo redirecionamento do browser.",
    },
    tags: ["Next.js", "Express", "Stripe API"],
    images: [
      { src: "assets/screenshots/fade/crew-menu.png", alt: "Fade. crew and menu listing with prices" },
      { src: "assets/screenshots/fade/booking.png", alt: "Fade. booking flow — date and time slot picker" },
      { src: "assets/screenshots/fade/confirmation.png", alt: "Fade. booking confirmation screen" },
    ],
    linkLabel: { en: "VIEW ON GITHUB ↗", pt: "VER NO GITHUB ↗" },
    linkHref: "https://github.com/PauloDourado22/Fade.",
    note: null,
  },
  {
    id: "ilda",
    catalog: "P.03",
    title: "ILDA",
    description: {
      en: "A café website with a custom mini-CMS — the owner edits homepage copy, opening hours, and the full menu themselves through an admin panel, no redeploy needed.",
      pt: "Um site de café com um mini-CMS personalizado — o proprietário edita o texto da página inicial, horários e todo o menu através de um painel de administração, sem necessidade de novo deploy.",
    },
    tags: ["Next.js", "Express", "SQLite"],
    images: [
      { src: "assets/screenshots/ilda/landing.png", alt: "ILDA landing page — \"Where you feel like home\"" },
      { src: "assets/screenshots/ilda/menu-about.png", alt: "ILDA's live, owner-editable daily menu, scrolling into the About/Space gallery" },
      { src: "assets/screenshots/ilda/about-visit.png", alt: "ILDA's About section with hours, contact details, and a mock location map" },
    ],
    linkLabel: { en: "VIEW ON GITHUB ↗", pt: "VER NO GITHUB ↗" },
    linkHref: "https://github.com/PauloDourado22/ILDA",
    note: null,
  },
  {
    id: "fairweather",
    catalog: "P.04",
    title: "Fairweather",
    description: {
      en: "A dashboard aggregating weather, air quality, and daylight data from three third-party APIs into one derived 'outdoor activity score' per city.",
      pt: "Um dashboard que agrega dados de meteorologia, qualidade do ar e luz do dia de três APIs externas numa única 'pontuação de atividade ao ar livre' derivada, por cidade.",
    },
    tags: ["Next.js", "Node/Express", "REST API"],
    images: [
      { src: "assets/screenshots/fairweather/dashboard.png", alt: "Fairweather dashboard showing outdoor activity scores for five cities" },
      { src: "assets/screenshots/fairweather/score-tuning.png", alt: "Fairweather's score tuning panel with activity presets and weighting sliders" },
    ],
    linkLabel: { en: "VIEW ON GITHUB ↗", pt: "VER NO GITHUB ↗" },
    linkHref: "https://github.com/PauloDourado22/Fairweather",
    note: null,
  },
];

// order[0] is always whichever project is currently shown as the flagship
let projectOrder = PROJECTS.map((p) => p.id);
const projectById = Object.fromEntries(PROJECTS.map((p) => [p.id, p]));

const flagshipSlot = document.getElementById("flagshipSlot");
const projectGrid = document.getElementById("projectGrid");

function tagsMarkup(tags) {
  return tags.map((t) => `<li>[${t}]</li>`).join("");
}

// Builds the screenshot area for the flagship. Zero images -> the existing
// placeholder. One image -> a single slide, no controls. 2+ images -> a
// stack of slides crossfaded with plain CSS opacity (see .slide in
// style.css) plus a caption bar with prev/next buttons and a counter.
// No animation library involved on purpose — see initFlagshipSlideshow().
function mediaMarkup(images) {
  if (!images || !images.length) {
    return `<div class="flagship-media"><div class="image-placeholder" aria-hidden="true">Screenshot coming soon</div></div>`;
  }
  const slides = images
    .map(
      (img, i) =>
        `<div class="slide${i === 0 ? " is-active" : ""}"><img src="${img.src}" alt="${img.alt}" loading="lazy" /></div>`
    )
    .join("");
  const nav =
    images.length > 1
      ? `<div class="media-nav">
          <span class="media-nav-count">01 / ${String(images.length).padStart(2, "0")}</span>
          <div class="media-nav-btns">
            <button type="button" class="media-nav-btn" data-dir="-1" aria-label="Previous screenshot">←</button>
            <button type="button" class="media-nav-btn" data-dir="1" aria-label="Next screenshot">→</button>
          </div>
        </div>`
      : "";
  return `<div class="flagship-media">${slides}</div>${nav}`;
}

function flagshipMarkup(p) {
  const noteText = loc(p.note);
  const note = noteText ? `<p class="note">${noteText}</p>` : "";
  return `
    <article class="flagship" data-id="${p.id}">
      ${mediaMarkup(p.images)}
      <div class="flagship-body">
        <h2 class="flagship-title">${p.title}</h2>
        <p>${loc(p.description)}</p>
        <ul class="bracket-tags">${tagsMarkup(p.tags)}</ul>
        <a href="${p.linkHref}" target="_blank" rel="noopener" class="btn btn-primary btn-sm">${loc(p.linkLabel)}</a>
        ${note}
      </div>
    </article>`;
}

// Wires the prev/next buttons for whichever project is currently the
// flagship. Called every time renderProjects() runs, since the buttons are
// fresh DOM nodes each time. No-ops if there's no nav bar (0 or 1 images).
function initFlagshipSlideshow() {
  const nav = flagshipSlot.querySelector(".media-nav");
  if (!nav) return;

  const slides = Array.from(flagshipSlot.querySelectorAll(".slide"));
  const countEl = nav.querySelector(".media-nav-count");
  let index = 0;

  function show(next) {
    index = (next + slides.length) % slides.length; // wrap both directions
    slides.forEach((s, n) => s.classList.toggle("is-active", n === index));
    countEl.textContent = `${String(index + 1).padStart(2, "0")} / ${String(slides.length).padStart(2, "0")}`;
  }

  nav.querySelectorAll(".media-nav-btn").forEach((btn) => {
    btn.addEventListener("click", () => show(index + Number(btn.dataset.dir)));
  });
}

function cardMarkup(p) {
  return `
    <article class="project-card" data-id="${p.id}" tabindex="0" role="button" aria-label="Feature ${p.title} as the flagship project">
      <span class="project-index">${p.catalog}</span>
      <h3>${p.title}</h3>
      <p>${loc(p.description)}</p>
      <ul class="bracket-tags bracket-tags-sm">${tagsMarkup(p.tags)}</ul>
      <a href="${p.linkHref}" target="_blank" rel="noopener" class="text-link">${loc(p.linkLabel)}</a>
    </article>`;
}

function renderProjects() {
  const [flagshipId, ...cardIds] = projectOrder;
  flagshipSlot.innerHTML = flagshipMarkup(projectById[flagshipId]);
  projectGrid.innerHTML = cardIds.map((id) => cardMarkup(projectById[id])).join("");
  initFlagshipSlideshow();
}

function promoteProject(id) {
  const idx = projectOrder.indexOf(id);
  if (idx <= 0) return; // already the flagship, or unknown id

  // Swap: clicked project becomes the flagship, previous flagship takes its spot
  [projectOrder[0], projectOrder[idx]] = [projectOrder[idx], projectOrder[0]];
  renderProjects();
  attachProjectHandlers();
}

function attachProjectHandlers() {
  projectGrid.querySelectorAll(".project-card").forEach((card) => {
    card.addEventListener("click", (e) => {
      if (e.target.closest("a")) return; // let the GitHub/demo link navigate normally
      promoteProject(card.dataset.id);
    });
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        promoteProject(card.dataset.id);
      }
    });
  });
}

// Rendered once from applyLang() further down (language-switch section)
// instead of here, so the project grid only builds once per load using
// whichever language localStorage already remembers.

// ===== Mobile nav toggle =====
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

// ===== Nav scroll-spy: highlight whichever section is currently in view =====
// (previously "PROJECTS" was hardcoded as .is-active in the HTML and never
// moved; this replaces that with the real current section.)
const navLinkByHash = new Map(
  Array.from(navLinks.querySelectorAll("a")).map((link) => [link.getAttribute("href"), link])
);
const spySections = Array.from(navLinkByHash.keys())
  .map((hash) => document.querySelector(hash))
  .filter(Boolean);

function setActiveNavLink(hash) {
  navLinkByHash.forEach((link, key) => link.classList.toggle("is-active", key === hash));
}

if (spySections.length) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      // Pick the entry closest to the top of the viewport among those
      // currently intersecting, so the highlight matches what's actually
      // being read rather than flickering between overlapping sections.
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (visible.length) {
        setActiveNavLink(`#${visible[0].target.id}`);
      }
    },
    { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
  );
  spySections.forEach((section) => sectionObserver.observe(section));
}

// ===== Theme toggle (dark by default) =====
const root = document.documentElement;
const themeToggle = document.getElementById("themeToggle");

const PALETTE = {
  dark: { point: 0xdee3e8, line: 0xe8a63d },
  light: { point: 0x16181b, line: 0xa66a00 },
};

// Declared here (not down in the particle-field section) because applyTheme()
// below calls recolorFields() immediately on page load, and a const referenced
// before its own declaration line throws a ReferenceError even though the
// function that uses it isn't called until later.
const fieldMaterials = []; // { pointMaterial, lineMaterial } per canvas, so theme toggle can recolor them live

function currentTheme() {
  return root.getAttribute("data-theme") === "light" ? "light" : "dark";
}

function applyTheme(theme) {
  if (theme === "light") root.setAttribute("data-theme", "light");
  else root.removeAttribute("data-theme");
  themeToggle.setAttribute("aria-pressed", theme === "light" ? "true" : "false");
  recolorFields(theme);
}

const savedTheme = localStorage.getItem("theme") || "dark";
applyTheme(savedTheme);

themeToggle.addEventListener("click", () => {
  const next = currentTheme() === "light" ? "dark" : "light";
  localStorage.setItem("theme", next);
  applyTheme(next);
});

// ===== Language switch (EN / PT) =====
// Reusable site copy that isn't project data (see PROJECTS' { en, pt } fields
// above) lives here as flat keys, one object per language. Adding a third
// language later means adding one more key to this object and a matching
// { en, pt, xx } slot per project field — no other code needs to change.
const TRANSLATIONS = {
  en: {
    navAbout: "ABOUT", navProjects: "PROJECTS", navSkills: "SKILLS", navContact: "CONTACT",
    heroSubtext: "Full-stack developer building production web apps (Python, JavaScript, React) — self-taught after 10+ years in business/accounting.",
    heroBtnProjects: "VIEW PROJECTS →", heroBtnContact: "GET IN TOUCH",
    heroStat1: "04 BUILDS SHIPPED", heroStat2: "OPEN TO WORK",
    typedLine: "FULL-STACK WEB DEVELOPER  /  PYTHON, JAVASCRIPT & REACT",
    aboutLabel: "01 / ABOUT", aboutMeta: "ACCOUNTING → CODE",
    aboutLead: "For over a decade I worked in accounting — precise, deadline-driven work that taught me discipline most self-taught developers don't pick up from a bootcamp alone. In 2023 I started teaching myself to code with Harvard's CS50, and haven't stopped building since. Today I design and ship full-stack web applications, from Stripe-powered eCommerce sites to a SaaS platform with real users.",
    timeline3: "100 Days of Code: Python Pro Bootcamp & building Løfte",
    projectsLabel: "02 / FEATURED PROJECTS", projectsMeta: "04 BUILDS",
    skillsLabel: "03 / SKILLS", skillsMeta: "17 ENTRIES",
    skillLangs: "LANGUAGES", skillFrameworks: "FRAMEWORKS & LIBRARIES", skillTools: "TOOLS", skillLearning: "CURRENTLY LEARNING",
    viewCerts: "VIEW CERTIFICATIONS ↓",
    certsLabel: "04 / CERTIFICATIONS", certsMeta: "03 CREDENTIALS", viewCredential: "VIEW CREDENTIAL ↗",
    contactLabel: "05 / CONTACT",
    contactHeadline: "Open to junior full-stack roles and freelance projects.",
    contactSubtext: "Feel free to reach out.",
    backToTop: "BACK TO TOP ↑",
  },
  pt: {
    navAbout: "SOBRE", navProjects: "PROJETOS", navSkills: "COMPETÊNCIAS", navContact: "CONTACTO",
    heroSubtext: "Programador full-stack a construir aplicações web em produção (Python, JavaScript, React) — autodidata depois de mais de 10 anos em contabilidade.",
    heroBtnProjects: "VER PROJETOS →", heroBtnContact: "ENTRAR EM CONTACTO",
    heroStat1: "04 PROJETOS LANÇADOS", heroStat2: "DISPONÍVEL PARA TRABALHAR",
    typedLine: "PROGRAMADOR FULL-STACK  /  PYTHON, JAVASCRIPT & REACT",
    aboutLabel: "01 / SOBRE", aboutMeta: "CONTABILIDADE → CÓDIGO",
    aboutLead: "Durante mais de uma década trabalhei em contabilidade — um trabalho preciso e orientado por prazos que me ensinou uma disciplina que a maioria dos programadores autodidatas não adquire só com um bootcamp. Em 2023 comecei a aprender a programar com o CS50 de Harvard, e não parei de construir desde então. Hoje desenho e lanço aplicações web full-stack, desde lojas online com Stripe a uma plataforma SaaS com utilizadores reais.",
    timeline3: "100 Days of Code: Python Pro Bootcamp e a construir o Løfte",
    projectsLabel: "02 / PROJETOS EM DESTAQUE", projectsMeta: "04 PROJETOS",
    skillsLabel: "03 / COMPETÊNCIAS", skillsMeta: "17 ITENS",
    skillLangs: "LINGUAGENS", skillFrameworks: "FRAMEWORKS E BIBLIOTECAS", skillTools: "FERRAMENTAS", skillLearning: "A APRENDER ATUALMENTE",
    viewCerts: "VER CERTIFICAÇÕES ↓",
    certsLabel: "04 / CERTIFICAÇÕES", certsMeta: "03 CREDENCIAIS", viewCredential: "VER CREDENCIAL ↗",
    contactLabel: "05 / CONTACTO",
    contactHeadline: "Disponível para cargos full-stack júnior e projetos freelance.",
    contactSubtext: "Sinta-se à vontade para entrar em contacto.",
    backToTop: "VOLTAR AO TOPO ↑",
  },
};

const langSwitch = document.getElementById("langSwitch");
const langToggle = document.getElementById("langToggle");
const langMenu   = document.getElementById("langMenu");
const langCode   = document.getElementById("langCode");
const i18nEls    = document.querySelectorAll("[data-i18n]");
const typedEl    = document.getElementById("typedText");
// Marks "hasn't finished its first type yet" before applyLang()'s initial
// call below, so that call skips writing the typed line directly — otherwise
// it'd flash the full string an instant before initReveals()'s typewriter
// animation resets and re-types it once GSAP loads from its CDN tag.
if (typedEl) typedEl.dataset.typing = "true";

function applyLang(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  langCode.textContent = lang.toUpperCase();
  langMenu.querySelectorAll("[data-lang]").forEach(b =>
    b.setAttribute("aria-selected", b.dataset.lang === lang ? "true" : "false"));
  localStorage.setItem("lang", lang);
  i18nEls.forEach((el) => {
    const key = el.dataset.i18n;
    if (TRANSLATIONS[lang][key] !== undefined) el.textContent = TRANSLATIONS[lang][key];
  });
  // Only overwrites the typed hero line directly (no re-typing animation)
  // once the initial typewriter has already run — see initReveals() for the
  // one-time animated version on page load.
  if (typedEl && !typedEl.dataset.typing) typedEl.textContent = TRANSLATIONS[lang].typedLine;
  renderProjects();
  attachProjectHandlers();
}

function setLangMenu(open) {
  langMenu.hidden = !open;
  langSwitch.classList.toggle("open", open);
  langToggle.setAttribute("aria-expanded", open ? "true" : "false");
}

applyLang(currentLang);

langToggle.addEventListener("click", () => setLangMenu(langMenu.hidden));
langMenu.addEventListener("click", e => {
  const btn = e.target.closest("[data-lang]");
  if (!btn) return;
  applyLang(btn.dataset.lang);
  setLangMenu(false);
});
document.addEventListener("click", e => {
  if (!langSwitch.contains(e.target)) setLangMenu(false);
});
document.addEventListener("keydown", e => {
  if (e.key === "Escape") setLangMenu(false);
});

// ===== Particle field background (hero + contact canvases) =====
// Lightweight constellation effect: points drift, nearby points connect with
// a line, and the cursor gently repels points near it. Runs once THREE and
// GSAP have loaded from the CDN tags in index.html.

function recolorFields(theme) {
  const { point, line } = PALETTE[theme];
  fieldMaterials.forEach(({ pointMaterial, lineMaterial }) => {
    pointMaterial.color.setHex(point);
    lineMaterial.color.setHex(line);
  });
}

function initParticleFields() {
  const THREE = window.THREE;
  const canvases = [
    { id: "cv-hero", count: 190, pointOpacity: 0.75, lineOpacity: 0.13 },
    { id: "cv-contact", count: 130, pointOpacity: 0.5, lineOpacity: 0.1 },
  ];
  const { point, line } = PALETTE[currentTheme()];
  const updaters = [];

  canvases.forEach(({ id, count, pointOpacity, lineOpacity }) => {
    const canvas = document.getElementById(id);
    if (!canvas) return;
    const parent = canvas.parentElement;
    const w = parent.clientWidth;
    const h = parent.clientHeight;
    if (!w || !h) return;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    renderer.setSize(w, h, false);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, w / h, 0.1, 200);
    camera.position.set(0, 0, 16);

    const aspect = w / h;
    const span = { x: Math.max(20, 30 * aspect), y: 22, z: 8 };
    const N = count;
    const p = new Float32Array(N * 3);
    const v = new Float32Array(N * 3);
    const home = new Float32Array(N * 3);
    for (let i = 0; i < N; i++) {
      p[i * 3] = home[i * 3] = (Math.random() - 0.5) * span.x;
      p[i * 3 + 1] = home[i * 3 + 1] = (Math.random() - 0.5) * span.y;
      p[i * 3 + 2] = home[i * 3 + 2] = (Math.random() - 0.5) * span.z;
      v[i * 3] = (Math.random() - 0.5) * 0.012;
      v[i * 3 + 1] = (Math.random() - 0.5) * 0.012;
    }

    const pointMaterial = new THREE.PointsMaterial({ color: point, size: 0.1, transparent: true, opacity: pointOpacity });
    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute("position", new THREE.BufferAttribute(p, 3));
    scene.add(new THREE.Points(pGeo, pointMaterial));

    const maxSeg = 800;
    const lPos = new Float32Array(maxSeg * 6);
    const lGeo = new THREE.BufferGeometry();
    lGeo.setAttribute("position", new THREE.BufferAttribute(lPos, 3));
    const lineMaterial = new THREE.LineBasicMaterial({ color: line, transparent: true, opacity: lineOpacity });
    scene.add(new THREE.LineSegments(lGeo, lineMaterial));

    fieldMaterials.push({ pointMaterial, lineMaterial });

    let mx = 999, my = 999;
    parent.addEventListener("mousemove", (e) => {
      const r = canvas.getBoundingClientRect();
      const vw = ((e.clientX - r.left) / r.width) * 2 - 1;
      const vh = -(((e.clientY - r.top) / r.height) * 2 - 1);
      const hh = Math.tan(((camera.fov * Math.PI) / 180) / 2) * camera.position.z;
      mx = vw * hh * camera.aspect;
      my = vh * hh;
    });
    parent.addEventListener("mouseleave", () => { mx = 999; my = 999; });

    const maxD2 = 4.4 * 4.4;
    const rep2 = 25;

    updaters.push(() => {
      for (let i = 0; i < N; i++) {
        const ix = i * 3;
        const dx = p[ix] - mx, dy = p[ix + 1] - my;
        const d2 = dx * dx + dy * dy;
        if (d2 < rep2 && d2 > 0.01) {
          const d = Math.sqrt(d2);
          const fmag = (1 - d / 5) * 0.45;
          p[ix] += (dx / d) * fmag;
          p[ix + 1] += (dy / d) * fmag;
        }
        p[ix] += v[ix] + (home[ix] - p[ix]) * 0.01;
        p[ix + 1] += v[ix + 1] + (home[ix + 1] - p[ix + 1]) * 0.01;
      }
      let s = 0;
      for (let i = 0; i < N && s < maxSeg; i++) {
        for (let j = i + 1; j < N && s < maxSeg; j++) {
          const dx = p[i * 3] - p[j * 3], dy = p[i * 3 + 1] - p[j * 3 + 1], dz = p[i * 3 + 2] - p[j * 3 + 2];
          if (dx * dx + dy * dy + dz * dz < maxD2) {
            lPos.set([p[i * 3], p[i * 3 + 1], p[i * 3 + 2], p[j * 3], p[j * 3 + 1], p[j * 3 + 2]], s * 6);
            s++;
          }
        }
      }
      lGeo.setDrawRange(0, s * 2);
      lGeo.attributes.position.needsUpdate = true;
      pGeo.attributes.position.needsUpdate = true;
      renderer.render(scene, camera);
    });

    window.addEventListener("resize", () => {
      const nw = parent.clientWidth, nh = parent.clientHeight;
      if (!nw || !nh) return;
      renderer.setSize(nw, nh, false);
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
    });
  });

  let raf = 0;
  const loop = () => {
    updaters.forEach((fn) => fn());
    raf = requestAnimationFrame(loop);
  };
  raf = requestAnimationFrame(loop);
}

// ===== GSAP reveals + typewriter =====
function initReveals() {
  const gsap = window.gsap;

  document.querySelectorAll("[data-line]").forEach((el, i) => {
    gsap.from(el, { yPercent: 105, duration: 1.3, ease: "power4.out", delay: 0.2 + i * 0.14 });
  });

  document.querySelectorAll("[data-anim='hero']").forEach((wrap) => {
    gsap.from(wrap.children, { y: 36, opacity: 0, duration: 1.1, stagger: 0.12, ease: "power3.out", delay: 0.5 });
  });

  if (typedEl) {
    // dataset.typing flags "animation in progress" so applyLang() (see the
    // language-switch section above) knows not to overwrite a mid-type
    // string if someone switches languages in the first ~2 seconds on page
    // load — it just waits for this animation to finish and leaves the
    // completed line to reflect whichever language is active by then.
    typedEl.dataset.typing = "true";
    const full = TRANSLATIONS[currentLang].typedLine;
    const obj = { i: 0 };
    gsap.to(obj, {
      i: full.length,
      duration: 2.2,
      ease: "none",
      delay: 0.5,
      onUpdate: () => { typedEl.textContent = full.slice(0, Math.round(obj.i)); },
      onComplete: () => {
        delete typedEl.dataset.typing;
        typedEl.textContent = TRANSLATIONS[currentLang].typedLine;
      },
    });
  }
}

// ===== Boot: wait for CDN libs, then start motion =====
(function waitForLibs() {
  if (window.THREE && window.gsap) {
    initParticleFields();
    initReveals();
  } else {
    setTimeout(waitForLibs, 100);
  }
})();
