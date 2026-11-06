
const header = document.querySelector("header");
const nav = document.getElementById("nav");
const burger = document.getElementById("bt");
const langButton = document.querySelector(".pill");
const noMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;


function closeMenu() {
  nav.classList.remove("open");
  burger.setAttribute("aria-expanded", "false");
}

burger.addEventListener("click", function (event) {
  event.stopPropagation();
  nav.classList.toggle("open");
  burger.setAttribute("aria-expanded", nav.classList.contains("open"));
});

// close the menu when I click somewhere else or press Escape
document.addEventListener("click", closeMenu);
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") closeMenu();
});

// ---------- Language (EN / NO) ----------
// The Norwegian text is saved in data-no on each element in the HTML.
// The English text is saved in data-en the first time we change language.

function setLanguage(lang) {
  const texts = document.querySelectorAll("[data-no]");

  for (let i = 0; i < texts.length; i++) {
    const element = texts[i];
    if (!element.dataset.en) {
      element.dataset.en = element.textContent.trim();
    }
    if (lang === "no") {
      element.textContent = element.dataset.no;
    } else {
      element.textContent = element.dataset.en;
    }
  }

  // show which language is active in the button
  if (lang === "no") {
    langButton.innerHTML = 'EN / <b style="color:#d4bfe3">NO</b>';
  } else {
    langButton.innerHTML = '<b style="color:#d4bfe3">EN</b> / NO';
  }

  document.documentElement.lang = lang;
  localStorage.setItem("lang", lang);
}

// use the saved language, or the language of the browser
let language = localStorage.getItem("lang");
if (!language) {
  const browser = navigator.language.toLowerCase();
  if (
    browser.startsWith("no") ||
    browser.startsWith("nb") ||
    browser.startsWith("nn")
  ) {
    language = "no";
  } else {
    language = "en";
  }
}

langButton.style.cursor = "pointer";
langButton.addEventListener("click", function () {
  if (language === "en") {
    language = "no";
  } else {
    language = "en";
  }
  setLanguage(language);

  if (!noMotion) {
    document.body.animate([{ opacity: 1 }, { opacity: 0.7 }, { opacity: 1 }], {
      duration: 300,
    });
  }
});

setLanguage(language);

// ---------- Blocks appear when you scroll ----------

const hidden = document.querySelectorAll("section h2, .sub, .card, .lace, .ft");

if (!noMotion) {
  for (let i = 0; i < hidden.length; i++) {
    hidden[i].style.opacity = "0";
  }
}

function showBlocks() {
  for (let i = 0; i < hidden.length; i++) {
    const block = hidden[i];
    const top = block.getBoundingClientRect().top;

    if (block.style.opacity === "0" && top < window.innerHeight - 40) {
      block.style.opacity = "";
      block.animate(
        [
          { opacity: 0, translate: "0 26px" },
          { opacity: 1, translate: "0 0" },
        ],
        { duration: 800, easing: "ease-out" },
      );
    }
  }
}

// ---------- Header gets a shadow when you scroll ----------

function changeHeader() {
  if (window.scrollY > 8) {
    header.style.background = "rgba(45, 24, 58, 0.92)";
    header.style.boxShadow = "0 14px 34px -14px rgba(0, 0, 0, 0.7)";
  } else {
    header.style.background = "";
    header.style.boxShadow = "";
  }
}

window.addEventListener("scroll", function () {
  showBlocks();
  changeHeader();
});
window.addEventListener("load", showBlocks);
showBlocks();
changeHeader();

// ---------- Start animation on the home page ----------

const heroParts = document.querySelectorAll(
  ".hin h1 span, .hin .chip, .hin .btn",
);

if (!noMotion) {
  for (let i = 0; i < heroParts.length; i++) {
    heroParts[i].animate(
      [
        { opacity: 0, translate: "0 26px" },
        { opacity: 1, translate: "0 0" },
      ],
      {
        duration: 900,
        delay: 180 + i * 120,
        fill: "backwards",
        easing: "ease-out",
      },
    );
  }
}
