// ===== Footer year =====
document.getElementById("year").textContent = new Date().getFullYear();

// ===== Projects: data-driven so any project can become the flagship =====
const PROJECTS = [
  {
    id: "lofte",
    catalog: "P.01",
    title: "Løfte",
    description:
      "A fitness and personal-training SaaS platform designed and built solo — workout logging, nutrition and step tracking, gamified progress, a trainer/client management system, and Stripe subscriptions.",
    tags: ["Python", "Flask", "OAuth", "Stripe", "PWA"],
    image: "assets/lofte-screenshot.png",
    imageAlt: "Løfte landing page — Keep your løfte",
    linkLabel: "LIVE DEMO ↗",
    linkHref: "https://lofte-fopx-1dqj.onrender.com",
    note: "Source private — exploring turning this into a product.",
  },
  {
    id: "sf-store",
    catalog: "P.02",
    title: "SF_Store",
    description: "A Stripe-powered eCommerce app with product catalog, cart, and checkout.",
    tags: ["Flask", "SQLAlchemy", "Stripe API"],
    image: null,
    linkLabel: "VIEW ON GITHUB ↗",
    linkHref: "https://github.com/PauloDourado22/SF_Store",
    note: null,
  },
  {
    id: "cafe-website",
    catalog: "P.03",
    title: "Cafe-Website",
    description: "A café finder and manager with full CRUD — practicing clean database design and templating.",
    tags: ["Flask", "SQLite", "Jinja2"],
    image: null,
    linkLabel: "VIEW ON GITHUB ↗",
    linkHref: "https://github.com/PauloDourado22/Cafe-Website",
    note: null,
  },
  {
    id: "football-dashboard",
    catalog: "P.04",
    title: "football-dashboard",
    description: "A live sports dashboard pulling real-time standings and fixtures from a third-party REST API.",
    tags: ["Flask", "REST API", "JSON"],
    image: null,
    linkLabel: "VIEW ON GITHUB ↗",
    linkHref: "https://github.com/PauloDourado22/football-dashboard",
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

function flagshipMarkup(p) {
  const media = p.image
    ? `<img src="${p.image}" alt="${p.imageAlt || p.title}" class="project-shot" />`
    : `<div class="image-placeholder" aria-hidden="true">Screenshot coming soon</div>`;
  const note = p.note ? `<p class="note">${p.note}</p>` : "";
  return `
    <article class="flagship" data-id="${p.id}">
      <span class="flagship-tab">${p.catalog} — FLAGSHIP</span>
      <div class="flagship-media">${media}</div>
      <div class="flagship-body">
        <h2 class="flagship-title">${p.title}</h2>
        <p>${p.description}</p>
        <ul class="bracket-tags">${tagsMarkup(p.tags)}</ul>
        <a href="${p.linkHref}" target="_blank" rel="noopener" class="btn btn-primary btn-sm">${p.linkLabel}</a>
        ${note}
      </div>
    </article>`;
}

function cardMarkup(p) {
  return `
    <article class="project-card" data-id="${p.id}" tabindex="0" role="button" aria-label="Feature ${p.title} as the flagship project">
      <span class="project-index">${p.catalog}</span>
      <h3>${p.title}</h3>
      <p>${p.description}</p>
      <ul class="bracket-tags bracket-tags-sm">${tagsMarkup(p.tags)}</ul>
      <a href="${p.linkHref}" target="_blank" rel="noopener" class="text-link">${p.linkLabel}</a>
    </article>`;
}

function renderProjects() {
  const [flagshipId, ...cardIds] = projectOrder;
  flagshipSlot.innerHTML = flagshipMarkup(projectById[flagshipId]);
  projectGrid.innerHTML = cardIds.map((id) => cardMarkup(projectById[id])).join("");
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

renderProjects();
attachProjectHandlers();

// ===== Mobile nav toggle =====
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

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

  const typedEl = document.getElementById("typedText");
  if (typedEl) {
    const full = "FULL-STACK WEB DEVELOPER  /  PYTHON & JAVASCRIPT";
    const obj = { i: 0 };
    gsap.to(obj, {
      i: full.length,
      duration: 2.2,
      ease: "none",
      delay: 0.5,
      onUpdate: () => { typedEl.textContent = full.slice(0, Math.round(obj.i)); },
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
