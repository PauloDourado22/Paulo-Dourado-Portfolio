// ===== Footer year =====
document.getElementById("year").textContent = new Date().getFullYear();

// ===== Language state =====
// Read once here; applyLang() (language-switch section) applies it on load,
// which also renders the Featured Projects in that language.
let currentLang = localStorage.getItem("lang") || "en";

// ===== Featured Projects =====
// Two tiers, both rendered from PROJECTS: the `flagship: true` project (Løfte)
// as a ledger + contact sheet, the rest as three joined cards. Every image is
// a <button> that opens the shared #fp-lb <dialog> lightbox on that shot.
//
// Images live in assets/screenshots/<project-id>/ as WebP (full size + a
// -1600 version for srcset). A card's `crop` is a 4:3 detail cut from one of
// its full screenshots; `opens` is the index of that screenshot, so tapping
// the crop opens the lightbox on the shot it came from.
//
// Cards carry `links` (live demo first, then GitHub as `secondary`); the
// flagship keeps a single `link` since its source is private.
//
// `phones` (Løfte only) holds portrait phone captures for the ≤700px swipe
// row. Until those exist it's empty, and the row falls back to the desktop
// shots in landscape frames (see .fp-phones--wide in style.css).
const SHOTS = "assets/screenshots/";
const PROJECTS = [
  {
    id: "lofte", cat: "P.01", flagship: true, title: "Løfte",
    desc: {
      en: "A fitness and personal-training SaaS platform designed and built solo — workout logging, nutrition and step tracking, gamified progress, a trainer/client management system, and Stripe subscriptions.",
      pt: "Uma plataforma SaaS de fitness e personal training, desenhada e construída sozinho — registo de treinos, nutrição e passos, progresso gamificado, um sistema de gestão treinador/cliente, e subscrições Stripe.",
    },
    tags: ["Python", "Flask", "OAuth", "Stripe", "PWA"],
    link: { href: "https://lofte-fopx-1dqj.onrender.com", label: { en: "LIVE DEMO", pt: "DEMO AO VIVO" } },
    note: {
      en: "Source private — exploring turning this into a product.",
      pt: "Código-fonte privado — a explorar transformar isto num produto.",
    },
    shots: [
      { src: SHOTS + "lofte/landing.webp", sm: SHOTS + "lofte/landing-1600.webp", w: 3156, h: 1684, alt: { en: "Løfte landing page — Keep your løfte", pt: "Página inicial do Løfte — Keep your løfte" } },
      { src: SHOTS + "lofte/login.webp", sm: SHOTS + "lofte/login-1600.webp", w: 3156, h: 1684, alt: { en: "Løfte login page", pt: "Página de início de sessão do Løfte" } },
      { src: SHOTS + "lofte/dashboard.webp", sm: SHOTS + "lofte/dashboard-1600.webp", w: 3340, h: 1778, alt: { en: "Løfte dashboard", pt: "Painel do Løfte" } },
    ],
    phones: [
      { src: SHOTS + "lofte/lofte-m-landing.webp", w: 780, h: 1688, alt: { en: "Løfte landing page on a phone", pt: "Página inicial do Løfte no telemóvel" } },
      { src: SHOTS + "lofte/lofte-m-login.webp", w: 780, h: 1688, alt: { en: "Løfte login on a phone", pt: "Início de sessão do Løfte no telemóvel" } },
      { src: SHOTS + "lofte/lofte-m-dashboard.webp", w: 780, h: 1688, alt: { en: "Løfte dashboard on a phone", pt: "Painel do Løfte no telemóvel" } },
    ],
  },
  {
    id: "fade", cat: "P.02", title: "Fade.",
    desc: {
      en: "An appointment booking system — customers pick a service, barber, and time slot, and pay a deposit through Stripe. Double-booking is actually prevented, not just discouraged, and payment is confirmed by a verified Stripe webhook, not the browser redirect.",
      pt: "Um sistema de marcação de horários — os clientes escolhem um serviço, barbeiro e horário, e pagam um sinal através do Stripe. A sobreposição de marcações é realmente impedida, não só desencorajada, e o pagamento é confirmado por um webhook verificado da Stripe, não pelo redirecionamento do browser.",
    },
    tags: ["Next.js", "Express", "Stripe API"],
    links: [
      { href: "https://fade-nu.vercel.app", label: { en: "LIVE DEMO", pt: "DEMO AO VIVO" } },
      { href: "https://github.com/PauloDourado22/Fade.", label: { en: "VIEW ON GITHUB", pt: "VER NO GITHUB" }, secondary: true },
    ],
    crop: { src: SHOTS + "fade/crop.webp", w: 1200, h: 900, opens: 0, alt: { en: "Fade. landing page — \"Great hair, zero wait.\"", pt: "Página inicial do Fade. — \"Great hair, zero wait.\"" } },
    shots: [
      { src: SHOTS + "fade/crew-menu.webp", sm: SHOTS + "fade/crew-menu-1600.webp", w: 3156, h: 1684, alt: { en: "Fade. crew and menu listing with prices", pt: "Equipa e menu de serviços do Fade., com preços" } },
      { src: SHOTS + "fade/booking.webp", sm: SHOTS + "fade/booking-1600.webp", w: 3156, h: 1684, alt: { en: "Fade. booking flow — date and time slot picker", pt: "Marcação no Fade. — seletor de data e horário" } },
      { src: SHOTS + "fade/confirmation.webp", sm: SHOTS + "fade/confirmation-1600.webp", w: 3156, h: 1684, alt: { en: "Fade. booking confirmation screen", pt: "Ecrã de confirmação de marcação do Fade." } },
    ],
  },
  {
    id: "ilda", cat: "P.03", title: "ILDA",
    desc: {
      en: "A café website with a custom mini-CMS — the owner edits homepage copy, opening hours, and the full menu themselves through an admin panel, no redeploy needed.",
      pt: "Um site de café com um mini-CMS personalizado — o proprietário edita o texto da página inicial, horários e todo o menu através de um painel de administração, sem necessidade de novo deploy.",
    },
    tags: ["Next.js", "Express", "SQLite"],
    links: [
      { href: "https://ilda-ruby.vercel.app", label: { en: "LIVE DEMO", pt: "DEMO AO VIVO" } },
      { href: "https://github.com/PauloDourado22/ILDA", label: { en: "VIEW ON GITHUB", pt: "VER NO GITHUB" }, secondary: true },
    ],
    crop: { src: SHOTS + "ilda/crop.webp", w: 1200, h: 900, opens: 0, alt: { en: "ILDA landing page — \"Where you feel like home\"", pt: "Página inicial da ILDA — \"Where you feel like home\"" } },
    shots: [
      { src: SHOTS + "ilda/landing.webp", sm: SHOTS + "ilda/landing-1600.webp", w: 3156, h: 1684, alt: { en: "ILDA landing page — \"Where you feel like home\"", pt: "Página inicial da ILDA — \"Where you feel like home\"" } },
      { src: SHOTS + "ilda/menu-about.webp", sm: SHOTS + "ilda/menu-about-1600.webp", w: 3156, h: 1684, alt: { en: "ILDA's live, owner-editable daily menu, scrolling into the About/Space gallery", pt: "Menu do dia da ILDA, editável pelo proprietário, a seguir para a galeria do espaço" } },
      { src: SHOTS + "ilda/about-visit.webp", sm: SHOTS + "ilda/about-visit-1600.webp", w: 3156, h: 1684, alt: { en: "ILDA's About section with hours, contact details, and a mock location map", pt: "Secção Sobre da ILDA com horários, contactos e um mapa de exemplo" } },
    ],
  },
  {
    id: "fairweather", cat: "P.04", title: "Fairweather",
    desc: {
      en: "A dashboard aggregating weather, air quality, and daylight data from three third-party APIs into one derived 'outdoor activity score' per city.",
      pt: "Um dashboard que agrega dados de meteorologia, qualidade do ar e luz do dia de três APIs externas numa única 'pontuação de atividade ao ar livre' derivada, por cidade.",
    },
    tags: ["Next.js", "Node/Express", "REST API"],
    links: [
      { href: "https://fairweather-pi.vercel.app", label: { en: "LIVE DEMO", pt: "DEMO AO VIVO" } },
      { href: "https://github.com/PauloDourado22/Fairweather", label: { en: "VIEW ON GITHUB", pt: "VER NO GITHUB" }, secondary: true },
    ],
    crop: { src: SHOTS + "fairweather/crop.webp", w: 1200, h: 900, opens: 0, alt: { en: "Fairweather city score cards", pt: "Cartões de pontuação por cidade do Fairweather" } },
    shots: [
      { src: SHOTS + "fairweather/dashboard.webp", sm: SHOTS + "fairweather/dashboard-1600.webp", w: 3344, h: 1774, alt: { en: "Fairweather dashboard showing outdoor activity scores for five cities", pt: "Dashboard do Fairweather com pontuações de atividade ao ar livre para cinco cidades" } },
      { src: SHOTS + "fairweather/score-tuning.webp", sm: SHOTS + "fairweather/score-tuning-1600.webp", w: 3342, h: 1770, alt: { en: "Fairweather's score tuning panel with activity presets and weighting sliders", pt: "Painel de ajuste da pontuação do Fairweather, com predefinições e pesos" } },
    ],
  },
];

const FP_UI = {
  en: { open: "Open screenshot", close: "Close", prev: "Previous screenshot", next: "Next screenshot" },
  pt: { open: "Abrir captura de ecrã", close: "Fechar", prev: "Captura anterior", next: "Captura seguinte" },
};
let fpLang = "en";
const fpT = (v, lang = fpLang) => (typeof v === "string" ? v : v[lang] ?? v.en);
// Escapes anything interpolated into HTML strings below.
const fpEsc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const fpPad = (n) => String(n).padStart(2, "0");
const FP_CORNERS = ["tl", "tr", "bl", "br"].map((c) => `<span class="fp-corner fp-corner--${c}"></span>`).join("");

function fpImg(img, sizes) {
  const srcset = img.sm ? ` srcset="${img.sm} 1600w, ${img.src} ${img.w}w" sizes="${sizes}"` : "";
  return `<img src="${img.src}"${srcset} width="${img.w}" height="${img.h}" alt="${fpEsc(fpT(img.alt))}" loading="lazy" decoding="async">`;
}
function fpShot(p, set, i, img, cls, sizes, extra = "") {
  const label = `${FP_UI[fpLang].open}: ${fpT(img.alt)}`;
  return `<button type="button" class="fp-shot ${cls}" data-fp="${p.id}" data-set="${set}" data-i="${i}" aria-label="${fpEsc(label)}">${fpImg(img, sizes)}${extra}</button>`;
}
const fpTags = (tags) => `<ul class="fp-tags">${tags.map((t) => `<li>[${fpEsc(t)}]</li>`).join("")}</ul>`;

function fpFlagship(p) {
  const rest = p.shots.slice(1).map((s, k) =>
    fpShot(p, "shots", k + 1, s, "", "(max-width: 960px) 45vw, 354px", `<span class="fp-num">${fpPad(k + 2)}</span>`)).join("");
  // Mobile row: phone captures if we have them, otherwise the desktop shots.
  const hasPhones = p.phones && p.phones.length > 0;
  const rowSet = hasPhones ? "phones" : "shots";
  const rowImgs = p[rowSet];
  const row = rowImgs.map((s, k) =>
    `<div class="fp-phone">${fpShot(p, rowSet, k, s, "fp-shot--phone", hasPhones ? "250px" : "340px")}</div>`).join("");
  return `
  <article class="fp-flag" aria-labelledby="fp-${p.id}">
    <header class="fp-flag__head">
      <span class="fp-cat">${p.cat}</span>
      <h3 class="fp-flag__title" id="fp-${p.id}">${fpEsc(p.title)}</h3>
      <p class="fp-flag__desc">${fpEsc(fpT(p.desc))}</p>
    </header>
    <div class="fp-flag__media">
      <div class="fp-sheet">
        <div class="fp-sheet__lead">${FP_CORNERS}${fpShot(p, "shots", 0, p.shots[0], "", "(max-width: 960px) 92vw, 720px", '<span class="fp-num">01</span>')}</div>
        ${rest}
      </div>
      <div class="fp-phones${hasPhones ? "" : " fp-phones--wide"}" data-fp-swipe>${row}</div>
      <div class="fp-bar" data-fp-bar aria-hidden="true">${rowImgs.map(() => "<span></span>").join("")}</div>
    </div>
    <ul class="fp-ledger">
      <li>${fpTags(p.tags)}</li>
      ${p.note ? `<li class="fp-note">${fpEsc(fpT(p.note))}</li>` : ""}
      <li><a class="fp-btn" href="${p.link.href}" target="_blank" rel="noopener">${fpEsc(fpT(p.link.label))} <span aria-hidden="true">↗</span></a></li>
    </ul>
  </article>`;
}

function fpCard(p) {
  return `
  <article class="fp-card" aria-labelledby="fp-${p.id}">
    ${fpShot(p, "shots", p.crop.opens ?? 0, p.crop, "fp-shot--crop", "(max-width: 700px) 310px, (max-width: 960px) 340px, 384px")}
    <div class="fp-card__head"><h3 class="fp-card__title" id="fp-${p.id}">${fpEsc(p.title)}</h3><span class="fp-cat">${p.cat}</span></div>
    <p class="fp-card__desc">${fpEsc(fpT(p.desc))}</p>
    ${fpTags(p.tags)}
    <div class="fp-links">
      ${p.links.map((l) => l.secondary
        ? `<a class="fp-link fp-link--secondary" href="${l.href}" target="_blank" rel="noopener"><span>${fpEsc(fpT(l.label))}</span><span aria-hidden="true">↗</span></a>`
        : `<a class="fp-btn fp-btn--ghost" href="${l.href}" target="_blank" rel="noopener"><span>${fpEsc(fpT(l.label))}</span><span aria-hidden="true">↗</span></a>`).join("")}
    </div>
  </article>`;
}

// Keeps each swipe row's segmented bar (and the active frame) in sync with
// its scroll position. Listeners bind once per row element.
function fpInitSwipes() {
  document.querySelectorAll("[data-fp-swipe]").forEach((row) => {
    const bar = row.nextElementSibling?.matches("[data-fp-bar]") ? row.nextElementSibling : null;
    const update = () => {
      const items = [...row.children];
      // Skip while the row is hidden (display:none at wider breakpoints):
      // its widths read as 0 and would mark the LAST item active.
      if (!items.length || row.clientWidth === 0) return;
      const step = items[1] ? items[1].offsetLeft - items[0].offsetLeft : 1;
      let i = Math.round(row.scrollLeft / step);
      if (row.scrollLeft + row.clientWidth >= row.scrollWidth - 2) i = items.length - 1;
      i = Math.max(0, Math.min(items.length - 1, i));
      items.forEach((el, k) => el.classList.toggle("is-active", k === i));
      bar?.querySelectorAll("span").forEach((s, k) => s.classList.toggle("is-active", k === i));
    };
    if (!row.dataset.fpBound) {
      row.dataset.fpBound = "1";
      let raf = 0;
      row.addEventListener("scroll", () => { if (!raf) raf = requestAnimationFrame(() => { raf = 0; update(); }); }, { passive: true });
    }
    update();
  });
}
// A row can go from hidden to visible on resize/rotate (e.g. crossing 700px),
// so re-sync the bars then too.
let fpResizeRaf = 0;
window.addEventListener("resize", () => {
  if (!fpResizeRaf) fpResizeRaf = requestAnimationFrame(() => { fpResizeRaf = 0; fpInitSwipes(); });
});

// Called from applyLang() (language-switch section) on load and on every
// language change, so both tiers and the lightbox labels follow EN/PT.
function renderProjects(lang = fpLang) {
  fpLang = FP_UI[lang] ? lang : "en";
  const flag = PROJECTS.find((p) => p.flagship);
  const rest = PROJECTS.filter((p) => !p.flagship);
  document.getElementById("fp-flagship").innerHTML = fpFlagship(flag);
  document.getElementById("fp-cards").innerHTML = rest.map(fpCard).join("");
  document.getElementById("fp-cards-bar").innerHTML = rest.map(() => "<span></span>").join("");
  document.getElementById("fp-range").textContent = `${rest[0].cat} — ${rest[rest.length - 1].cat}`;
  const ui = FP_UI[fpLang];
  fpLb.querySelector("[data-lb-close]").setAttribute("aria-label", ui.close);
  fpLb.querySelector("[data-lb-prev]").setAttribute("aria-label", ui.prev);
  fpLb.querySelector("[data-lb-next]").setAttribute("aria-label", ui.next);
  fpInitSwipes();
}

// ----- Lightbox -----
const fpLb = document.getElementById("fp-lb");
const fpTrack = fpLb.querySelector("[data-lb-track]");
let fpCount = 0, fpTrigger = null;
const fpIndex = () => Math.round(fpTrack.scrollLeft / Math.max(1, fpTrack.clientWidth));
function fpLbUpdate() {
  const i = fpIndex();
  fpLb.querySelector("[data-lb-i]").textContent = fpPad(i + 1);
  fpLb.querySelector("[data-lb-prev]").disabled = i <= 0;
  fpLb.querySelector("[data-lb-next]").disabled = i >= fpCount - 1;
}
function fpLbGo(d) {
  const i = Math.max(0, Math.min(fpCount - 1, fpIndex() + d));
  fpTrack.scrollTo({ left: i * fpTrack.clientWidth }); // CSS scroll-behavior handles smoothing / reduced motion
}
function fpOpen(p, set, i, trigger) {
  const imgs = p[set];
  fpCount = imgs.length; fpTrigger = trigger;
  fpLb.querySelector("[data-lb-cat]").textContent = p.cat;
  fpLb.querySelector("[data-lb-name]").textContent = p.title;
  fpLb.querySelector("[data-lb-n]").textContent = fpPad(imgs.length);
  fpTrack.innerHTML = imgs.map((img) =>
    `<li class="fp-lb__slide"><img src="${img.src}" width="${img.w}" height="${img.h}" alt="${fpEsc(fpT(img.alt))}" decoding="async"></li>`).join("");
  fpLb.showModal();
  fpTrack.scrollTo({ left: i * fpTrack.clientWidth, behavior: "instant" });
  fpLbUpdate();
}

document.addEventListener("click", (e) => {
  const b = e.target.closest(".fp-shot");
  if (!b) return;
  const p = PROJECTS.find((x) => x.id === b.dataset.fp);
  if (p) fpOpen(p, b.dataset.set, Number(b.dataset.i), b);
});
fpLb.querySelector("[data-lb-close]").addEventListener("click", () => fpLb.close());
fpLb.querySelector("[data-lb-prev]").addEventListener("click", () => fpLbGo(-1));
fpLb.querySelector("[data-lb-next]").addEventListener("click", () => fpLbGo(1));
fpLb.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") { e.preventDefault(); fpLbGo(-1); }
  if (e.key === "ArrowRight") { e.preventDefault(); fpLbGo(1); }
});
fpLb.addEventListener("click", (e) => { // tap outside the image closes
  if (e.target === fpLb || e.target.classList.contains("fp-lb__slide")) fpLb.close();
});
fpTrack.addEventListener("scroll", () => requestAnimationFrame(fpLbUpdate), { passive: true });
fpLb.addEventListener("close", () => { fpTrack.innerHTML = ""; fpTrigger?.focus(); });

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
    heroSubtext: "Full-stack developer shipping production web apps in Python, JavaScript, and React — four real projects, one already live with real users.",
    heroBtnProjects: "VIEW PROJECTS →", heroBtnContact: "GET IN TOUCH",
    heroStat1: "04 BUILDS SHIPPED", heroStat2: "OPEN TO WORK",
    typedLine: "FULL-STACK WEB DEVELOPER  /  PYTHON, JAVASCRIPT & REACT",
    aboutLabel: "01 / ABOUT", aboutMeta: "BUILT TO SHIP",
    aboutLead: "I design and build full-stack web applications — from Stripe-powered booking systems to a SaaS platform with real users. My focus is shipping things that actually hold up: clean data models, APIs that behave under real use, interfaces people don't have to think about. Before this, I spent over a decade in accounting — mostly relevant now for the part where deadlines don't scare me.",
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
    heroSubtext: "Programador full-stack a lançar aplicações web em produção em Python, JavaScript e React — quatro projetos reais, um já em produção com utilizadores reais.",
    heroBtnProjects: "VER PROJETOS →", heroBtnContact: "ENTRAR EM CONTACTO",
    heroStat1: "04 PROJETOS LANÇADOS", heroStat2: "DISPONÍVEL PARA TRABALHAR",
    typedLine: "PROGRAMADOR FULL-STACK  /  PYTHON, JAVASCRIPT & REACT",
    aboutLabel: "01 / SOBRE", aboutMeta: "CONSTRUÍDO PARA LANÇAR",
    aboutLead: "Desenho e construo aplicações web full-stack — desde sistemas de marcação com Stripe a uma plataforma SaaS com utilizadores reais. O meu foco é construir coisas que realmente aguentam: modelos de dados limpos, APIs que se comportam bem em uso real, interfaces em que as pessoas nem pensam. Antes disto, passei mais de uma década em contabilidade — hoje relevante sobretudo pela parte em que prazos não me assustam.",
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
  renderProjects(lang);
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
