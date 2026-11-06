(() => {
  "use strict";

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const canHover = window.matchMedia(
    "(hover: hover) and (pointer: fine)",
  ).matches;

  if (reduced) document.documentElement.style.scrollBehavior = "auto";

  const css = document.createElement("style");
  css.textContent = `
    /* --- entrance / reveal --- */
    .reveal, .enter {
      opacity: 0;
      transform: translateY(26px);
      transition:
        opacity .9s cubic-bezier(.22, 1, .36, 1),
        transform .9s cubic-bezier(.22, 1, .36, 1);
      transition-delay: var(--d, 0ms);
    }
    .reveal.in, .enter.in {
      opacity: 1;
      transform: none;
    }

    /* --- header state --- */
    header {
      transition: background .45s ease, box-shadow .45s ease;
    }
    header.scrolled {
      background: rgba(45, 24, 58, .92);
      box-shadow: 0 14px 34px -14px rgba(0, 0, 0, .7);
    }

    /* --- reading progress --- */
    .progress {
      position: fixed;
      top: 76px;
      left: 0;
      height: 2px;
      width: 0;
      background: linear-gradient(90deg, #6f5a7d, #b59bc6 45%, #d4bfe3);
      box-shadow: 0 0 12px rgba(181, 155, 198, .55);
      z-index: 60;
      pointer-events: none;
      transition: width .12s linear;
    }

    /* --- magnetic buttons --- */
    .magnet {
      transition: translate .35s cubic-bezier(.22, 1, .36, 1);
      will-change: translate;
    }

    /* --- language pill --- */
    .pill {
      cursor: pointer;
      user-select: none;
      transition: background .25s ease, transform .25s ease;
    }
    .pill:hover {
      background: rgba(61, 38, 76, 1);
    }
    .pill:focus-visible {
      outline: 2px solid var(--p2);
      outline-offset: 2px;
    }
    .pill .lang-opt {
      padding: 0 3px;
      opacity: .55;
      display: inline-block;
      transition: opacity .25s ease, color .25s ease;
    }
    .pill .lang-opt.active {
      opacity: 1;
      color: #d4bfe3;
      font-weight: 600;
    }
    .pill .lang-sep {
      opacity: .35;
      padding: 0 1px;
    }

    /* --- language switch fade --- */
    body.lang-switching {
      animation: langFade .28s ease;
    }
    @keyframes langFade {
      0%   { opacity: 1; }
      45%  { opacity: .72; }
      100% { opacity: 1; }
    }
  `;
  document.head.appendChild(css);

  const I18N = {
    ABOUT: "OM MEG",
    SKILLS: "FERDIGHETER",
    PROJECTS: "PROSJEKTER",
    CONTACT: "KONTAKT",

    "JUNIOR FULLSTACK DEVELOPER": "JUNIOR FULLSTACK-UTVIKLER",

    "Developer.": "Utvikler.",
    "EXPLORE PROJECTS ↗": "UTFORSK PROSJEKTER ↗",
    "VIEW CV ↗": "SE CV ↗",

    "A little about me.": "Litt om meg.",
    "A curious mind, a creative approach and a passion for building things with code.":
      "Et nysgjerrig sinn, en kreativ tilnærming og en lidenskap for å bygge ting med kode.",
    "I am an IM1 student at Hamar Katedralskole, studying Information Technology and Media Production. I am particularly interested in web development, programming and the way technology can solve everyday problems.":
      "Jeg er en IM1-elev ved Hamar Katedralskole, og studerer informasjonsteknologi og medieproduksjon. Jeg er spesielt interessert i webutvikling, programmering og hvordan teknologi kan løse hverdagslige problemer.",
    "I work with HTML, CSS, JavaScript and Python. I enjoy taking an idea from the first sketch to a working digital product. My experience includes developing websites, interactive applications, games and prototypes.":
      "Jeg jobber med HTML, CSS, JavaScript og Python. Jeg liker å ta en idé fra første skisse til et fungerende digitalt produkt. Min erfaring inkluderer å utvikle nettsider, interaktive applikasjoner, spill og prototyper.",
    "I enjoy turning ideas into digital experiences.":
      "Jeg liker å gjøre ideer om til digitale opplevelser.",

    "Tools, skills & technology.": "Verktøy, ferdigheter og teknologi.",
    "The technologies and tools I use to turn ideas into working digital projects.":
      "Teknologiene og verktøyene jeg bruker for å gjøre ideer om til fungerende digitale prosjekter.",
    "WEB DEVELOPMENT": "WEBUTVIKLING",
    "Responsive websites and interactive interfaces, focused on structure, functionality and user experience.":
      "Responsive nettsider og interaktive grensesnitt, med fokus på struktur, funksjonalitet og brukeropplevelse.",
    PROGRAMMING: "PROGRAMMERING",
    "Writing code, working with logic, solving problems and creating interactive applications and games.":
      "Skrive kode, jobbe med logikk, løse problemer og lage interaktive applikasjoner og spill.",
    "DESIGN & PROTOTYPING": "DESIGN OG PROTOTYPING",
    "Creating layouts, planning interfaces and turning concepts into visual prototypes.":
      "Lage layout, planlegge grensesnitt og gjøre konsepter om til visuelle prototyper.",
    "DEVELOPMENT TOOLS": "UTVIKLINGSVERKTØY",
    "Organising projects, managing code and working with development environments.":
      "Organisere prosjekter, administrere kode og jobbe med utviklingsmiljøer.",
    DOCUMENTATION: "DOKUMENTASJON",
    "Structured project documentation, testing and explaining technical decisions.":
      "Strukturert prosjektdokumentasjon, testing og forklaring av tekniske beslutninger.",
    "AI-ASSISTED WORKFLOW": "AI-ASSISTERT ARBEIDSFLYT",
    "Using AI tools for brainstorming, research, debugging and code explanations.":
      "Bruke AI-verktøy til idémyldring, research, feilsøking og kodeforklaringer.",

    Languages: "Språk",
    Russian: "Russisk",
    Native: "Morsmål",
    Ukrainian: "Ukrainsk",
    Norwegian: "Norsk",
    Intermediate: "Middels",
    English: "Engelsk",

    "What drives me": "Hva som driver meg",
    "The direction I want to grow in — and the qualities I bring to each project.":
      "Retningen jeg vil vokse i — og egenskapene jeg tar med meg til hvert prosjekt.",
    "Building things that matter.": "Å bygge ting som betyr noe.",
    "My goal is to grow as a full-stack developer, strengthen my programming skills and build useful digital products. I want to keep learning through real projects, collaboration and practical experience.":
      "Målet mitt er å vokse som full-stack-utvikler, styrke programmeringsferdighetene mine og bygge nyttige digitale produkter. Jeg vil fortsette å lære gjennom ekte prosjekter, samarbeid og praktisk erfaring.",
    "Web development": "Webutvikling",
    Programming: "Programmering",
    "Continuous learning": "Kontinuerlig læring",
    "Curious by nature.": "Nysgjerrig av natur.",
    "I enjoy exploring web development, programming, game projects and interface prototyping. I like solving problems, working independently, organising my process and documenting how a project develops.":
      "Jeg liker å utforske webutvikling, programmering, spillprosjekter og grensesnittprototyping. Jeg liker å løse problemer, jobbe selvstendig, organisere prosessen min og dokumentere hvordan et prosjekt utvikler seg.",
    Curiosity: "Nysgjerrighet",
    "Problem-solving": "Problemløsning",
    Structure: "Struktur",

    "Selected projects": "Utvalgte prosjekter",
    "A selection of things I have planned, designed and built.":
      "Et utvalg av ting jeg har planlagt, designet og bygget.",
    "PROJECT / 01": "PROSJEKT / 01",
    "A digital service concept that connects young programmers with affordable programming help. Includes helper profiles, easy session booking and Kodebot, a built-in assistant that answers quick questions. The interface was prototyped in Figma and built with HTML, CSS and JavaScript.":
      "Et digitalt tjenestekonsept som kobler unge programmerere med rimelig programmeringshjelp. Inkluderer hjelperprofiler, enkel booking av økter og Kodebot, en innebygd assistent som svarer på raske spørsmål. Grensesnittet ble prototypet i Figma og bygget med HTML, CSS og JavaScript.",
    "Open ↗": "Åpne ↗",
    "PROJECT / 02": "PROSJEKT / 02",
    "A Pygame arcade project: collect aurora particles, avoid falling ice crystals and build your score. The game focuses on fast reactions, simple controls and a calm northern-lights atmosphere, and it is written in Python.":
      "Et Pygame-arkadeprosjekt: samle nordlys-partikler, unngå fallende iskrystaller og bygg poengsummen din. Spillet fokuserer på raske reaksjoner, enkle kontroller og en rolig nordlysatmosfære, og det er skrevet i Python.",
    "PROJECT / 03": "PROSJEKT / 03",
    "A podcast and awareness website about AI, school, social media and the future of work. It presents episodes and topics in a clear structure and encourages visitors to question what is real and what is generated.":
      "En podcast- og bevisstgjøringsside om KI, skole, sosiale medier og fremtidens arbeidsliv. Den presenterer episoder og temaer i en klar struktur og oppfordrer besøkende til å stille spørsmål ved hva som er ekte og hva som er generert.",
    "PROJECT / 04": "PROSJEKT / 04",
    "A school event website presenting a badminton activity, schedule and participation information. Designed to be clear and quick to read, with a simple layout that works for both students and organisers.":
      "En nettside for et skolearrangement som presenterer en badmintonaktivitet, timeplan og informasjon om deltakelse. Designet for å være klar og rask å lese, med et enkelt oppsett som fungerer for både elever og arrangører.",

    "Have a project in mind?": "Har du et prosjekt i tankene?",
    "Interested in collaboration, new ideas or an opportunity to learn and grow.":
      "Interessert i samarbeid, nye ideer eller en mulighet til å lære og vokse.",
    "LET'S CONNECT": "TA KONTAKT",
  };

  const normalize = (s) => s.replace(/\s+/g, " ").trim();

  const originals = new Map();
  let textNodes = [];
  let currentLang = "en";

  const collectText = () => {
    const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode(node) {
          if (!node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
          if (
            node.parentElement?.closest("script, style, noscript, svg, .pill")
          ) {
            return NodeFilter.FILTER_REJECT;
          }
          return NodeFilter.FILTER_ACCEPT;
        },
      },
    );

    textNodes = [];
    let n;
    while ((n = walker.nextNode())) {
      textNodes.push(n);
      originals.set(n, n.nodeValue);
    }
  };

  const applyLanguage = (lang) => {
    textNodes.forEach((node) => {
      const original = originals.get(node);
      if (original == null) return;

      if (lang === "en") {
        node.nodeValue = original;
        return;
      }

      const key = normalize(original);
      const translation = I18N[key];
      if (translation === undefined) {
        node.nodeValue = original;
        return;
      }

      const leading = original.match(/^\s*/)[0];
      const trailing = original.match(/\s*$/)[0];
      node.nodeValue = leading + translation + trailing;
    });

    document.documentElement.lang = lang;
    document.title =
      lang === "no"
        ? "Zhanna — Junior Fullstack-utvikler"
        : "Zhanna — Junior Fullstack Developer";

    renderPill(lang);

    document.body.classList.remove("lang-switching");
    void document.body.offsetWidth;
    document.body.classList.add("lang-switching");

    try {
      localStorage.setItem("zhanna-lang", lang);
    } catch {
    }
  };

  const pill = $(".pill");

  const renderPill = (lang) => {
    if (!pill) return;
    const isNo = lang === "no";
    pill.innerHTML = `
      <span class="lang-opt${!isNo ? " active" : ""}" data-lang="en">EN</span>
      <span class="lang-sep">/</span>
      <span class="lang-opt${isNo ? " active" : ""}" data-lang="no">NO</span>
    `;
    pill.setAttribute("role", "button");
    pill.setAttribute("tabindex", "0");
    pill.setAttribute(
      "aria-label",
      isNo ? "Bytt til engelsk" : "Switch to Norwegian",
    );
  };

  if (pill) {
    pill.addEventListener("click", (e) => {
      const opt = e.target.closest("[data-lang]");
      if (opt) {
        const target = opt.dataset.lang;
        if (target === currentLang) return;
        currentLang = target;
        applyLanguage(target);
        return;
      }
      const next = currentLang === "en" ? "no" : "en";
      currentLang = next;
      applyLanguage(next);
    });

    pill.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        const next = currentLang === "en" ? "no" : "en";
        currentLang = next;
        applyLanguage(next);
      }
    });
  }

  collectText();

  let savedLang = null;
  try {
    savedLang = localStorage.getItem("zhanna-lang");
  } catch {
    /* ignore */
  }

  const browserLang = (navigator.language || "").toLowerCase();
  const initialLang =
    savedLang === "no" || savedLang === "en"
      ? savedLang
      : browserLang.startsWith("no") ||
          browserLang.startsWith("nb") ||
          browserLang.startsWith("nn")
        ? "no"
        : "en";

  currentLang = initialLang;
  applyLanguage(initialLang);

  const nav = $("#nav");
  const burger = $("#bt");

  const setNav = (open) => {
    if (!nav || !burger) return;
    nav.classList.toggle("open", open);
    burger.setAttribute("aria-expanded", String(open));
  };

  burger?.addEventListener("click", (e) => {
    e.stopPropagation();
    setNav(!nav.classList.contains("open"));
  });

  if (nav) {
    $$("a", nav).forEach((a) =>
      a.addEventListener("click", () => setNav(false)),
    );
  }

  document.addEventListener("click", (e) => {
    if (!nav?.classList.contains("open")) return;
    if (nav.contains(e.target) || burger.contains(e.target)) return;
    setNav(false);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setNav(false);
  });

  $$('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const href = a.getAttribute("href");

      if (href === "#") {
        e.preventDefault();
        return;
      }

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();
      target.scrollIntoView({
        behavior: reduced ? "auto" : "smooth",
        block: "start",
      });
      history.replaceState(null, "", href);
    });
  });

  const links = nav ? $$("a", nav) : [];

  const sectionKey = {
    about: "about",
    skills: "skills",
    languages: "skills",
    drives: "skills",
    projects: "projects",
    contact: "contact",
  };

  const markActive = (id) => {
    const key = sectionKey[id];
    links.forEach((a) => a.classList.toggle("on", a.hash === `#${key}`));
  };

  const spy = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) markActive(entry.target.id);
      });
    },
    { rootMargin: "-45% 0px -50% 0px" },
  );

  $$("main section[id]").forEach((s) => spy.observe(s));

  if (!reduced) {
    const revealTargets = $$(
      ["section h2.g", "section .sub", ".card", ".lace", ".ft"].join(","),
    ).filter((el) => !el.closest(".hc"));

    revealTargets.forEach((el) => {
      el.classList.add("reveal");

      const siblings = el.parentElement
        ? Array.from(el.parentElement.children)
        : [];
      const index = siblings.indexOf(el);
      el.style.setProperty("--d", `${Math.min(index, 5) * 90}ms`);
    });

    const revealIO = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("in");
          obs.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    revealTargets.forEach((el) => revealIO.observe(el));
  }

  const heroBits = [
    $(".hin h1 .a1"),
    $(".hin h1 .a2"),
    $(".hin .chip"),
    ...$$(".hin .btn"),
  ].filter(Boolean);

  if (!reduced) {
    heroBits.forEach((el, i) => {
      el.classList.add("enter");
      el.style.setProperty("--d", `${180 + i * 120}ms`);
    });

    requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        heroBits.forEach((el) => el.classList.add("in"));
      }),
    );
  }

  const header = $("header");

  const progress = document.createElement("div");
  progress.className = "progress";
  document.body.appendChild(progress);

  const layers = $$(
    ".swirl, .cat1, .cat2, .cherry1, .cherry2, .bow1, .bow2, .bow3, .cross",
  ).map((el, i) => ({ el, speed: 0.05 + (i % 5) * 0.012, y: 0 }));

  let vh = window.innerHeight;
  let scrollable = 1;

  const measure = () => {
    vh = window.innerHeight;
    scrollable = Math.max(1, document.documentElement.scrollHeight - vh);

    layers.forEach((layer) => {
      layer.el.style.translate = "0 0";
      const rect = layer.el.getBoundingClientRect();
      layer.y = rect.top + window.scrollY + rect.height / 2;
    });
  };

  const render = () => {
    const y = window.scrollY;

    header?.classList.toggle("scrolled", y > 8);

    progress.style.width = `${Math.min(100, (y / scrollable) * 100)}%`;

    if (reduced) return;

    const mid = y + vh / 2;
    layers.forEach((layer) => {
      const offset = (mid - layer.y) * layer.speed;
      layer.el.style.translate = `0 ${offset.toFixed(2)}px`;
    });
  };

  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      render();
      ticking = false;
    });
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", () => {
    measure();
    render();
  });
  window.addEventListener("load", () => {
    measure();
    render();
  });

  document.fonts?.ready.then(() => {
    measure();
    render();
  });

  measure();
  render();

  if (canHover && !reduced) {
    const pull = 6;

    $$(".btn").forEach((btn) => {
      btn.classList.add("magnet");

      btn.addEventListener("pointermove", (e) => {
        const r = btn.getBoundingClientRect();
        const x = (e.clientX - r.left - r.width / 2) / (r.width / 2);
        const y = (e.clientY - r.top - r.height / 2) / (r.height / 2);
        btn.style.translate = `${(x * pull).toFixed(2)}px ${(y * pull).toFixed(
          2,
        )}px`;
      });

      btn.addEventListener("pointerleave", () => {
        btn.style.translate = "0 0";
      });
    });
  }

  $$("img").forEach((img) => {
    img.decoding = "async";
    if (!img.closest(".hc")) img.loading = "lazy";
  });
})();
