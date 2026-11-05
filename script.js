// 1. КУРСОР
const cursor = document.getElementById("cursor");
if (cursor) {
  document.body.classList.add("has-custom-cursor");
  cursor.classList.add("active");

  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
  });

  const hoverElements = document.querySelectorAll(
    "a, button, .project-card, .tool-card, .lang-card",
  );
  hoverElements.forEach((el) => {
    el.addEventListener("mouseenter", () => cursor.classList.add("hover"));
    el.addEventListener("mouseleave", () => cursor.classList.remove("hover"));
  });
}

// 2. АНИМАЦИЯ ПРИ СКРОЛЛЕ
const observerOptions = { root: null, rootMargin: "0px", threshold: 0.15 };
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll(".reveal").forEach((el) => {
  observer.observe(el);
});

// 3. ПЕРЕВОДЫ (ОБНОВЛЕНЫ ПОД НОВЫЙ ТЕКСТ)
const translations = {
  en: {
    nav_about: "About me",
    nav_skills: "Skills",
    nav_projects: "Projects",
    nav_contact: "Contact",
    hero_sub: "IM1 · 4 projects",
    hero_title: "Junior<br>Fullstack<br>Developer",
    btn_view: "View projects",
    btn_contact: "Contact",

    about_num: "01 / ABOUT",
    about_title: "A little about <span>me.</span>",
    about_intro:
      "A curious mind, a creative approach and a passion for building things with code.",
    about_big: "I enjoy turning ideas into digital experiences.",
    about_1:
      "I am an IM1 student at Hamar Katedralskole, studying Information Technology and Media Production. I am particularly interested in web development, programming and the way technology can solve everyday problems.",
    about_2:
      "I work with HTML, CSS, JavaScript and Python. I enjoy taking an idea from the first sketch to a working digital product. My experience includes developing websites, interactive applications, games and prototypes.",
    about_3:
      "I also use Figma, GitHub and VS Code in my work. I value clean code, structured documentation and problem-solving. I am always interested in learning new technologies and finding better ways to build things.",

    tools_num: "02 / MY TOOLKIT",
    tools_title: "Tools, skills <span>& technology.</span>",
    tools_desc:
      "The technologies and tools I use to turn ideas into working digital projects.",
    t1_title: "Web development",
    t1_desc:
      "Building responsive websites and interactive interfaces with a focus on structure, functionality and user experience.",
    t2_title: "Programming",
    t2_desc:
      "Writing code, working with logic, solving problems and creating interactive applications and games.",
    t3_label: "AI-ASSISTED WORKFLOW",
    t3_title: "Artificial Intelligence",
    t3_desc:
      "Using AI tools as part of the development process — from brainstorming and research to debugging, code explanations and improving project ideas.",
    t3_tag1: "AI tools",
    t3_tag2: "Prompting",
    t3_tag3: "AI-assisted coding",
    t3_tag4: "Research",
    t4_title: "Design & prototyping",
    t4_desc:
      "Creating layouts, planning interfaces and turning concepts into visual prototypes before development.",
    t4_tag1: "UI design",
    t4_tag2: "Wireframes",
    t5_title: "Development tools",
    t5_desc:
      "Organising projects, managing code and working with development environments.",
    t6_title: "Documentation",
    t6_desc:
      "Writing structured project documentation, keeping track of the development process and explaining technical decisions.",
    t6_tag1: "Documentation",
    t6_tag2: "Testing",

    lang_kick: "// LANGUAGES",
    lang_title: "Languages",
    l_ru: "Russian",
    l_uk: "Ukrainian",
    l_no: "Norwegian",
    l_en: "English",
    l_native: "native",
    l_good: "good",
    l_mid: "intermediate",

    proj_title: "Selected projects",
    scroll_hint: "Scroll sideways →",
    contact_kick: "HAVE A PROJECT IN MIND?",
    contact_title: "LET'S WORK TOGETHER.",
    btn_contact_me: "Contact me",
  },
  no: {
    nav_about: "Om meg",
    nav_skills: "Ferdigheter",
    nav_projects: "Prosjekter",
    nav_contact: "Kontakt",
    hero_sub: "IM1 · 4 prosjekter",
    hero_title: "Junior<br>Fullstack<br>Utvikler",
    btn_view: "Se prosjekter",
    btn_contact: "Kontakt meg",

    about_num: "01 / OM MEG",
    about_title: "Litt om <span>meg.</span>",
    about_intro:
      "Et nysgjerrig sinn, en kreativ tilnærming og en lidenskap for å bygge ting med kode.",
    about_big: "Jeg liker å gjøre ideer om til digitale opplevelser.",
    about_1:
      "Jeg er IM1-elev ved Hamar katedralskole, hvor jeg studerer informasjonsteknologi og medieproduksjon. Jeg er spesielt interessert i webutvikling, programmering og hvordan teknologi kan løse hverdagslige problemer.",
    about_2:
      "Jeg jobber med HTML, CSS, JavaScript og Python. Jeg liker å ta en idé fra første skisse til et fungerende digitalt produkt. Min erfaring inkluderer utvikling av nettsider, interaktive applikasjoner, spill og prototyper.",
    about_3:
      "Jeg bruker også Figma, GitHub og VS Code i arbeidet mitt. Jeg verdsetter ren kode, strukturert dokumentasjon og problemløsning. Jeg er alltid interessert i å lære nye teknologier og finne bedre måter å bygge ting på.",

    tools_num: "02 / MIN VERKTØYKASSE",
    tools_title: "Verktøy, ferdigheter <span>og teknologi.</span>",
    tools_desc:
      "Teknologiene og verktøyene jeg bruker for å gjøre ideer om til fungerende digitale prosjekter.",
    t1_title: "Webutvikling",
    t1_desc:
      "Bygge responsive nettsider og interaktive grensesnitt med fokus på struktur, funksjonalitet og brukeropplevelse.",
    t2_title: "Programmering",
    t2_desc:
      "Skrive kode, jobbe med logikk, løse problemer og lage interaktive applikasjoner og spill.",
    t3_label: "AI-ASSISTERT ARBEIDSFLYT",
    t3_title: "Kunstig intelligens",
    t3_desc:
      "Bruke AI-verktøy som en del av utviklingsprosessen – fra idémyldring og research til feilsøking, kodeforklaringer og forbedring av prosjektideer.",
    t3_tag1: "AI-verktøy",
    t3_tag2: "Prompting",
    t3_tag3: "AI-assistert koding",
    t3_tag4: "Research",
    t4_title: "Design og prototyping",
    t4_desc:
      "Lage layout, planlegge grensesnitt og gjøre konsepter om til visuelle prototyper før utvikling.",
    t4_tag1: "UI-design",
    t4_tag2: "Wireframes",
    t5_title: "Utviklingsverktøy",
    t5_desc:
      "Organisere prosjekter, administrere kode og jobbe med utviklingsmiljøer.",
    t6_title: "Dokumentasjon",
    t6_desc:
      "Skrive strukturert prosjektdokumentasjon, holde oversikt over utviklingsprosessen og forklare tekniske beslutninger.",
    t6_tag1: "Dokumentasjon",
    t6_tag2: "Testing",

    lang_kick: "// SPRÅK",
    lang_title: "Språk",
    l_ru: "Russisk",
    l_uk: "Ukrainsk",
    l_no: "Norsk",
    l_en: "Engelsk",
    l_native: "morsmål",
    l_good: "god",
    l_mid: "middels",

    proj_title: "Utvalgte prosjekter",
    scroll_hint: "Rull sidelengs →",
    contact_kick: "HAR DU ET PROSJEKT I TANKENE?",
    contact_title: "LA OSS JOBBE SAMMEN.",
    btn_contact_me: "Kontakt meg",
  },
};

function setLanguage(lang) {
  currentLang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      if (
        translations[lang][key].includes("<br>") ||
        translations[lang][key].includes("<span>")
      ) {
        el.innerHTML = translations[lang][key];
      } else {
        el.textContent = translations[lang][key];
      }
    }
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
}

document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
});

// 4. ПЕРЕТАСКИВАНИЕ ПРОЕКТОВ
const track = document.getElementById("projectsTrack");
if (track) {
  let isDown = false,
    startX,
    scrollLeft;
  track.addEventListener("mousedown", (e) => {
    isDown = true;
    startX = e.pageX - track.offsetLeft;
    scrollLeft = track.scrollLeft;
  });
  track.addEventListener("mouseleave", () => {
    isDown = false;
  });
  track.addEventListener("mouseup", () => {
    isDown = false;
  });
  track.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - track.offsetLeft;
    const walk = (x - startX) * 2;
    track.scrollLeft = scrollLeft - walk;
  });
}

// 5. CV MODAL LOGIC
const cvDialog = document.getElementById("cvDialog");
const openCvBtn = document.getElementById("openCvBtn");
const closeCvBtn = document.getElementById("closeCvBtn");

if (openCvBtn && cvDialog) {
  openCvBtn.addEventListener("click", () => {
    cvDialog.showModal();
  });
  closeCvBtn.addEventListener("click", () => {
    cvDialog.close();
  });
  cvDialog.addEventListener("click", (e) => {
    const dialogDimensions = cvDialog.getBoundingClientRect();
    if (
      e.clientX < dialogDimensions.left ||
      e.clientX > dialogDimensions.right ||
      e.clientY < dialogDimensions.top ||
      e.clientY > dialogDimensions.bottom
    ) {
      cvDialog.close();
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setLanguage("en");
});
