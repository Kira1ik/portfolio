(() => {
  "use strict";
  const EMAIL = "your@email.com"; // ← put your real email here
  const $ = (s, r = document) => r.querySelector(s),
    $$ = (s, r = document) => [...r.querySelectorAll(s)];

  /* ---- data ---- */
  const SKILLS = [
    [
      "code",
      "WEB DEVELOPMENT",
      "Responsive websites and interactive interfaces, focused on structure, functionality and user experience.",
      ["HTML", "CSS", "JavaScript"],
    ],
    [
      "game",
      "PROGRAMMING",
      "Writing code, working with logic, solving problems and creating interactive applications and games.",
      ["Python", "JavaScript", "Pygame"],
    ],
    [
      "design",
      "DESIGN & PROTOTYPING",
      "Creating layouts, planning interfaces and turning concepts into visual prototypes.",
      ["Figma", "UI design", "Wireframes"],
    ],
    [
      "branch",
      "DEVELOPMENT TOOLS",
      "Organising projects, managing code and working with development environments.",
      ["VS Code", "GitHub", "Git"],
    ],
    [
      "doc",
      "DOCUMENTATION",
      "Structured project documentation, testing and explaining technical decisions.",
      ["Reports", "Testing", "Planning"],
    ],
    [
      "spark",
      "AI-ASSISTED WORKFLOW",
      "Using AI tools for brainstorming, research, debugging and code explanations.",
      ["AI tools", "Research", "Debugging"],
    ],
  ];
  const PROJ = [
    [
      "code",
      "KODEBUA",
      "A digital service concept connecting young programmers with affordable programming help. Includes helper profiles, booking and Kodebot.",
      "HTML / CSS / JAVASCRIPT",
    ],
    [
      "game",
      "NORDLYSJEGER",
      "A Pygame arcade project: collect aurora particles, avoid falling ice crystals and build your score.",
      "PYTHON / PYGAME",
    ],
    [
      "spark",
      "EKTE ELLER KI?",
      "A podcast and awareness website about AI, school, social media and the future of work.",
      "HTML / CSS / JAVASCRIPT",
    ],
    [
      "design",
      "BADMINTON BREAK",
      "A school event website presenting a badminton activity, schedule and participation information.",
      "HTML / CSS / FIGMA",
    ],
  ];
  const ic = (n) => `<svg class="ic"><use href="#i-${n}"/></svg>`;
  $("#skillgrid").innerHTML = SKILLS.map(
    (s, i) =>
      `<div class="card skill rv" style="--d:${(i % 3) * 0.12}s"><div class="h">${ic(s[0])}<span>${s[1]}</span></div><p style="margin:0">${s[2]}</p><div class="chips">${s[3].map((c) => `<span class="chip">${c}</span>`).join("")}</div></div>`,
  ).join("");
  $("#projgrid").innerHTML = PROJ.map(
    (p, i) =>
      `<div class="card proj rv" style="--d:${(i % 2) * 0.15}s"><div class="top">${ic(p[0])}<div><div class="lbl" style="font-size:9px">PROJECT / 0${i + 1}</div><h3>${p[1]}</h3></div></div><p>${p[2]}</p><div class="foot"><span class="lbl" style="font-size:9px">${p[3].replace(/ \/ /g, " &nbsp;/&nbsp; ")}</span><button class="open" data-p="${p[1]}">Open</button></div></div>`,
  ).join("");

  /* ---- typing ---- */
  let typed = "Developer.",
    tIdx = 0;
  const tEl = $("#type");
  function typeLoop(word) {
    clearTimeout(typeLoop.t);
    tIdx = 0;
    tEl.textContent = "";
    (function step() {
      tEl.textContent = word.slice(0, ++tIdx);
      if (tIdx < word.length) typeLoop.t = setTimeout(step, 90);
    })();
  }
  typeLoop(typed);

  /* ---- i18n: ВСЕ тексты страницы переводятся по этому словарю (EN → NO) ---- */
  const NO = {
    "JUNIOR FULLSTACK DEVELOPER": "JUNIOR FULLSTACK-UTVIKLER",
    ABOUT: "OM MEG",
    SKILLS: "FERDIGHETER",
    PROJECTS: "PROSJEKTER",
    CONTACT: "KONTAKT",
    "EXPLORE PROJECTS ↗": "SE PROSJEKTER ↗",
    "VIEW CV ↗": "SE CV ↗",
    "A little about me.": "Litt om meg.",
    "A curious mind, a creative approach and a passion for building things with code.":
      "Et nysgjerrig sinn, en kreativ tilnærming og en lidenskap for å bygge ting med kode.",
    "I am an IM1 student at Hamar Katedralskole, studying Information Technology and Media Production. I am particularly interested in web development, programming and the way technology can solve everyday problems.":
      "Jeg er IM1-elev ved Hamar katedralskole og studerer Informasjonsteknologi og Medieproduksjon. Jeg er spesielt interessert i webutvikling, programmering og hvordan teknologi kan løse hverdagslige problemer.",
    "I work with HTML, CSS, JavaScript and Python. I enjoy taking an idea from the first sketch to a working digital product. My experience includes developing websites, interactive applications, games and prototypes.":
      "Jeg jobber med HTML, CSS, JavaScript og Python. Jeg liker å ta en idé fra første skisse til et fungerende digitalt produkt. Erfaringen min inkluderer utvikling av nettsider, interaktive applikasjoner, spill og prototyper.",
    "I enjoy turning ideas into digital experiences.":
      "Jeg liker å gjøre ideer om til digitale opplevelser.",
    "Tools, skills & technology.": "Verktøy, ferdigheter og teknologi.",
    "The technologies and tools I use to turn ideas into working digital projects.":
      "Teknologiene og verktøyene jeg bruker for å gjøre ideer til fungerende digitale prosjekter.",
    "WEB DEVELOPMENT": "WEBUTVIKLING",
    PROGRAMMING: "PROGRAMMERING",
    "DESIGN & PROTOTYPING": "DESIGN OG PROTOTYPING",
    "DEVELOPMENT TOOLS": "UTVIKLINGSVERKTØY",
    DOCUMENTATION: "DOKUMENTASJON",
    "AI-ASSISTED WORKFLOW": "KI-STØTTET ARBEIDSFLYT",
    "Responsive websites and interactive interfaces, focused on structure, functionality and user experience.":
      "Responsive nettsider og interaktive grensesnitt med fokus på struktur, funksjonalitet og brukeropplevelse.",
    "Writing code, working with logic, solving problems and creating interactive applications and games.":
      "Skrive kode, jobbe med logikk, løse problemer og lage interaktive applikasjoner og spill.",
    "Creating layouts, planning interfaces and turning concepts into visual prototypes.":
      "Lage layouter, planlegge grensesnitt og gjøre konsepter om til visuelle prototyper.",
    "Organising projects, managing code and working with development environments.":
      "Organisere prosjekter, administrere kode og jobbe i utviklingsmiljøer.",
    "Structured project documentation, testing and explaining technical decisions.":
      "Strukturert prosjektdokumentasjon, testing og forklaring av tekniske valg.",
    "Using AI tools for brainstorming, research, debugging and code explanations.":
      "Bruke KI-verktøy til idémyldring, research, feilsøking og kodeforklaringer.",
    "UI design": "UI-design",
    Wireframes: "Skisser",
    Reports: "Rapporter",
    Planning: "Planlegging",
    "AI tools": "KI-verktøy",
    Debugging: "Feilsøking",
    Languages: "Språk",
    Russian: "Russisk",
    Ukrainian: "Ukrainsk",
    Norwegian: "Norsk",
    English: "Engelsk",
    Native: "Morsmål",
    Intermediate: "Mellomnivå",
    "What drives me": "Det som driver meg",
    "The direction I want to grow in — and the qualities I bring to each project.":
      "Retningen jeg vil vokse i – og egenskapene jeg tar med inn i hvert prosjekt.",
    "Building things that matter.": "Å bygge ting som betyr noe.",
    "My goal is to grow as a full-stack developer, strengthen my programming skills and build useful digital products. I want to keep learning through real projects, collaboration and practical experience.":
      "Målet mitt er å vokse som fullstack-utvikler, styrke programmeringsferdighetene mine og bygge nyttige digitale produkter. Jeg vil fortsette å lære gjennom ekte prosjekter, samarbeid og praktisk erfaring.",
    "WEB DEVELOPMENT · PROGRAMMING · CONTINUOUS LEARNING":
      "WEBUTVIKLING · PROGRAMMERING · KONTINUERLIG LÆRING",
    "Curious by nature.": "Nysgjerrig av natur.",
    "I enjoy exploring web development, programming, game projects and interface prototyping. I like solving problems, working independently, organising my process and documenting how a project develops.":
      "Jeg liker å utforske webutvikling, programmering, spillprosjekter og prototyping av grensesnitt. Jeg liker å løse problemer, jobbe selvstendig, organisere prosessen min og dokumentere hvordan et prosjekt utvikler seg.",
    "CURIOSITY · PROBLEM-SOLVING · STRUCTURE":
      "NYSGJERRIGHET · PROBLEMLØSNING · STRUKTUR",
    "Selected projects": "Utvalgte prosjekter",
    "A selection of things I have planned, designed and built.":
      "Et utvalg av ting jeg har planlagt, designet og bygget.",
    "A digital service concept connecting young programmers with affordable programming help. Includes helper profiles, booking and Kodebot.":
      "Et digitalt tjenestekonsept som kobler unge programmerere med rimelig programmeringshjelp. Inkluderer hjelperprofiler, booking og Kodebot.",
    "A Pygame arcade project: collect aurora particles, avoid falling ice crystals and build your score.":
      "Et Pygame-arkadeprosjekt: samle nordlyspartikler, unngå fallende iskrystaller og bygg poengsummen din.",
    "A podcast and awareness website about AI, school, social media and the future of work.":
      "En podkast og informasjonsside om KI, skole, sosiale medier og fremtidens arbeidsliv.",
    "A school event website presenting a badminton activity, schedule and participation information.":
      "En nettside for et skolearrangement som presenterer en badmintonaktivitet, timeplan og påmeldingsinformasjon.",
    Open: "Åpne",
    "Have a project in mind?": "Har du et prosjekt i tankene?",
    "Interested in collaboration, new ideas or an opportunity to learn and grow.":
      "Interessert i samarbeid, nye ideer eller en mulighet til å lære og vokse.",
    "LET’S CONNECT": "KONTAKT MEG",
  };
  let lang = "en";
  const norm = (v) => v.replace(/\s+/g, " ").trim(),
    orig = new Map(),
    tn = [];
  const walker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT,
    {
      acceptNode: (n) =>
        !norm(n.nodeValue) ||
        n.parentElement.closest("script,style,#type,#lang,.toast")
          ? NodeFilter.FILTER_SKIP
          : NodeFilter.FILTER_ACCEPT,
    },
  );
  for (let n; (n = walker.nextNode()); ) {
    tn.push(n);
    orig.set(n, n.nodeValue);
  }
  const tr = (v) => {
    const k = norm(v);
    return (
      NO[k] ??
      (/^PROJECT \/ \d+$/.test(k) ? k.replace("PROJECT", "PROSJEKT") : v)
    );
  };
  $("#lang").onclick = () => {
    lang = lang === "en" ? "no" : "en";
    tn.forEach(
      (n) => (n.nodeValue = lang === "no" ? tr(orig.get(n)) : orig.get(n)),
    );
    $("#lang").innerHTML = lang === "en" ? "<b>EN</b> / NO" : "EN / <b>NO</b>";
    document.documentElement.lang = lang === "en" ? "en" : "nb";
    typeLoop(lang === "en" ? "Developer." : "Utvikler.");
  };

  /* ---- reveal on scroll ---- */
  const io = new IntersectionObserver(
    (es) =>
      es.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      }),
    { threshold: 0.12 },
  );
  $$(".rv").forEach((e) => io.observe(e));

  /* ---- scrollspy ---- */
  const links = $$("nav a"),
    secs = links.map((a) => $(a.getAttribute("href")));
  const spy = new IntersectionObserver(
    (es) =>
      es.forEach((e) => {
        if (e.isIntersecting)
          links.forEach((a) =>
            a.classList.toggle(
              "on",
              a.getAttribute("href") === "#" + e.target.id,
            ),
          );
      }),
    { rootMargin: "-45% 0px -50% 0px" },
  );
  secs.forEach((s) => s && spy.observe(s));

  /* ---- cards: 3D tilt + spotlight ---- */
  const fine = matchMedia("(hover:hover)").matches;
  if (fine)
    $$(".card:not(.end)").forEach((c) => {
      c.addEventListener("mousemove", (e) => {
        const r = c.getBoundingClientRect(),
          x = (e.clientX - r.left) / r.width,
          y = (e.clientY - r.top) / r.height;
        c.style.setProperty("--mx", x * 100 + "%");
        c.style.setProperty("--my", y * 100 + "%");
        c.style.setProperty("--ry", ((x - 0.5) * 6).toFixed(2) + "deg");
        c.style.setProperty("--rx", ((0.5 - y) * 6).toFixed(2) + "deg");
      });
      c.addEventListener("mouseleave", () => {
        c.style.setProperty("--rx", "0deg");
        c.style.setProperty("--ry", "0deg");
      });
    });

  /* ---- cursor glow + cat eyes ---- */
  const glow = $("#glow");
  addEventListener("pointermove", (e) => {
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
  });

  /* ---- parallax on stickers/lace ---- */
  let ticking = false;
  addEventListener(
    "scroll",
    () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = scrollY;
        $("#stage .photo").style.transform =
          `translateY(${y * 0.12}px) scale(1.08)`;
        $$(".lace").forEach(
          (l, i) =>
            (l.style.backgroundPositionY = y * 0.04 * (i % 2 ? 1 : -1) + "px"),
        );
        ticking = false;
      });
    },
    { passive: true },
  );

  /* ---- click sparkles ---- */
  const GL = ["🍒", "♪", "♫", "✦", "🖤", "🎀"];
  addEventListener("click", (e) => {
    if (e.target.closest("a,button")) return;
    for (let i = 0; i < 7; i++) {
      const s = document.createElement("span");
      s.className = "spark";
      s.textContent = GL[(Math.random() * GL.length) | 0];
      s.style.left = e.clientX + "px";
      s.style.top = e.clientY + "px";
      s.style.setProperty("--dx", (Math.random() - 0.5) * 160 + "px");
      s.style.setProperty("--dy", -40 - Math.random() * 120 + "px");
      s.style.setProperty("--r", (Math.random() - 0.5) * 120 + "deg");
      document.body.appendChild(s);
      setTimeout(() => s.remove(), 1000);
    }
  });

  /* ---- toast, copy email, magnetic buttons ---- */
  const toast = $("#toast");
  let tt;
  const say = (m) => {
    toast.textContent = m;
    toast.classList.add("show");
    clearTimeout(tt);
    tt = setTimeout(() => toast.classList.remove("show"), 2200);
  };
  $("#mail").onclick = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      say((lang === "no" ? "E-post kopiert ✦ " : "Email copied ✦ ") + EMAIL);
    } catch {
      location.href = "mailto:" + EMAIL;
    }
  };
  $$(".open").forEach(
    (b) =>
      (b.onclick = () =>
        say(
          b.dataset.p +
            (lang === "no" ? " — lenke kommer snart" : " — link coming soon"),
        )),
  );
  if (fine)
    $$(".btn").forEach((b) => {
      b.addEventListener("mousemove", (e) => {
        const r = b.getBoundingClientRect();
        b.style.translate = `${(e.clientX - r.left - r.width / 2) * 0.15}px ${(e.clientY - r.top - r.height / 2) * 0.25 - 3}px`;
      });
      b.addEventListener("mouseleave", () => (b.style.translate = ""));
    });
})();
