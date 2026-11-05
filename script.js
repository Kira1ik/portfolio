// 1. КУРСОР
const cursor = document.getElementById('cursor');
if (cursor) {
    document.body.classList.add('has-custom-cursor');
    cursor.classList.add('active');

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    const hoverElements = document.querySelectorAll('a, button, .project-card, .skill-card, .lang-card');
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });
}

// 2. АНИМАЦИЯ ПРИ СКРОЛЛЕ
const observerOptions = { root: null, rootMargin: '0px', threshold: 0.15 };
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target); 
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => { observer.observe(el); });

// 3. ДАННЫЕ НАВЫКОВ
// ВНИМАНИЕ: Чтобы вставить свою картинку, впиши путь в img: "images/твоя_картинка.png"
// Например: { name: "HTML5", text: "5", img: "images/html.png", bg: "#e34f26", color: "#fff" }
const skillsData = [
    {
        id: "frontend",
        title: { en: "Frontend", no: "Frontend" },
        desc: { en: "Interfaces, structure and responsive pages.", no: "Grensesnitt, struktur og responsive sider." },
        items: [
            { name: "HTML5", text: "5", img: "", bg: "#e34f26", color: "#fff" },
            { name: "CSS3", text: "3", img: "", bg: "#1572b6", color: "#fff" },
            { name: "JavaScript", text: "JS", img: "", bg: "#f7df1e", color: "#111" },
            { name: "TypeScript", text: "TS", img: "", bg: "#3178c6", color: "#fff" },
            { name: "Responsive", text: "↔", img: "", bg: "#5b1822", color: "#f0e6d6" }
        ]
    },
    {
        id: "backend",
        title: { en: "Backend", no: "Backend" },
        desc: { en: "Logic, scripts and data behind the screen.", no: "Logikk, skript og data bak skjermen." },
        items: [
            { name: "Python", text: "Py", img: "", bg: "#3776ab", color: "#ffd43b" },
            { name: "Node.js", text: "N", img: "", bg: "#539e43", color: "#fff" },
            { name: "SQL", text: "SQL", img: "", bg: "#336791", color: "#fff" }
        ]
    },
    {
        id: "tools",
        title: { en: "GitHub & tools", no: "GitHub & verktøy" },
        desc: { en: "Version control and my everyday workspace.", no: "Versjonskontroll og min daglige arbeidsplass." },
        items: [
            { name: "Git", text: "git", img: "", bg: "#f05032", color: "#fff" },
            { name: "GitHub", text: "GH", img: "", bg: "#24292f", color: "#fff" },
            { name: "VS Code", text: "VS", img: "", bg: "#007acc", color: "#fff" },
            { name: "VirtualBox", text: "VB", img: "", bg: "#183a61", color: "#fff" }
        ]
    },
    {
        id: "design",
        title: { en: "Design & docs", no: "Design & dokumentasjon" },
        desc: { en: "Plans, prototypes and clear written documentation.", no: "Planer, prototyper og tydelig skriftlig dokumentasjon." },
        items: [
            { name: "Figma", text: "Fg", img: "", bg: "#a259ff", color: "#fff" },
            { name: "Wireframes", text: "▢", img: "", bg: "#5b1822", color: "#f0e6d6" },
            { name: "Prototyping", text: "▶", img: "", bg: "#5b1822", color: "#f0e6d6" },
            { name: "Documentation", text: "MD", img: "", bg: "#5b1822", color: "#f0e6d6" }
        ]
    }
];

let currentLang = 'en';
let activeSkillIdx = 0;

function renderSkills() {
    const sidebar = document.getElementById('skillsSidebar');
    const grid = document.getElementById('skillsGrid');
    const title = document.getElementById('skillTitle');
    const desc = document.getElementById('skillDesc');
    const kick = document.getElementById('skillKick');
    const count = document.getElementById('skillCount');

    if(!sidebar || !grid) return;

    sidebar.innerHTML = skillsData.map((cat, i) => `
        <div class="skill-tab ${i === activeSkillIdx ? 'active' : ''}" data-idx="${i}">
            <span>0${i + 1} &nbsp; ${cat.title[currentLang]}</span>
            <small>0${cat.items.length}</small>
        </div>
    `).join('');

    document.querySelectorAll('.skill-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            activeSkillIdx = parseInt(tab.dataset.idx);
            renderSkills();
        });
    });

    const activeCat = skillsData[activeSkillIdx];
    kick.textContent = `// SKILLS / ${activeCat.title.en.toUpperCase()}`;
    title.textContent = activeCat.title[currentLang];
    desc.textContent = activeCat.desc[currentLang];
    count.textContent = `0${activeCat.items.length}`;

    // РЕНДЕР КАРТОЧЕК С ПОДДЕРЖКОЙ КАРТИНОК
    grid.innerHTML = activeCat.items.map((item) => {
        // Если есть картинка (img не пустой), показываем ее. Если нет - показываем текст.
        const iconContent = item.img 
            ? `<img src="${item.img}" alt="${item.name}">` 
            : item.text;

        return `
            <div class="skill-card">
                <div class="skill-icon" style="background: ${item.bg}; color: ${item.color};">${iconContent}</div>
                <div class="skill-name">
                    <b>${item.name}</b>
                    <span>SKILL</span>
                </div>
            </div>
        `;
    }).join('');
}

// 4. ПЕРЕВОДЫ (ВЕРНУЛ ОБЫЧНЫЕ ЯЗЫКИ)
const translations = {
    en: {
        nav_about: "About me", nav_skills: "Skills", nav_projects: "Projects", nav_contact: "Contact",
        hero_sub: "1st year student · 4 projects", 
        hero_title: "Junior<br>Fullstack<br>Developer",
        btn_view: "View projects", btn_contact: "Contact",
        about_kick: "// ABOUT ME", 
        about_title: "A working file, not a brochure.",
        about_big: "I like understanding how things work, and then making them work better.",
        about_1: "I am a 1st-year IT student at Hamar Katedralskole. My focus is fullstack development: building solid logic on the backend and clean interfaces on the frontend.",
        about_2: "I care about documentation, planning and testing as much as the code itself. A project nobody can understand is not finished.",
        about_edu: "Vocational IT programme · Hamar Katedralskole (formerly Brumunddal Ungdomsskole)",
        skills_kick: "// SKILLS", skills_title: "What I build with.", active_set: "ACTIVE SET",
        lang_kick: "// LANGUAGES", lang_title: "Languages",
        l_ru: "Russian", l_uk: "Ukrainian", l_no: "Norwegian", l_en: "English",
        l_native: "native", l_good: "good", l_mid: "intermediate",
        proj_title: "Selected work", scroll_hint: "Scroll sideways →",
        contact_kick: "HAVE A PROJECT IN MIND?", contact_title: "LET'S<br>WORK<br>TOGETHER.", btn_contact_me: "Contact me"
    },
    no: {
        nav_about: "Om meg", nav_skills: "Ferdigheter", nav_projects: "Prosjekter", nav_contact: "Kontakt",
        hero_sub: "1. års elev · 4 prosjekter", 
        hero_title: "Junior<br>Fullstack<br>Utvikler",
        btn_view: "Se prosjekter", btn_contact: "Kontakt",
        about_kick: "// OM MEG", 
        about_title: "En arbeidsfil, ikke en brosjyre.",
        about_big: "Jeg liker å forstå hvordan ting fungerer, og så få dem til å fungere bedre.",
        about_1: "Jeg er en 1. års IT-student ved Hamar katedralskole. Fokuset mitt er fullstack-utvikling: bygge solid logikk på backend og rene grensesnitt på frontend.",
        about_2: "Jeg bryr meg om dokumentasjon, planlegging og testing like mye som selve koden. Et prosjekt ingen forstår, er ikke ferdig.",
        about_edu: "Yrkesfaglig IT-program · Hamar Katedralskole (tidligere Brumunddal Ungdomsskole)",
        skills_kick: "// FERDIGHETER", skills_title: "Dette bygger jeg med.", active_set: "AKTIVT SETT",
        lang_kick: "// SPRÅK", lang_title: "Språk",
        l_ru: "Russisk", l_uk: "Ukrainsk", l_no: "Norsk", l_en: "Engelsk",
        l_native: "morsmål", l_good: "god", l_mid: "middels",
        proj_title: "Utvalgte prosjekter", scroll_hint: "Rull sidelengs →",
        contact_kick: "HAR DU ET PROSJEKT I TANKENE?", contact_title: "LA OSS<br>JOBBE<br>SAMMEN.", btn_contact_me: "Kontakt meg"
    }
};

function setLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            if (translations[lang][key].includes('<br>')) {
                el.innerHTML = translations[lang][key];
            } else {
                el.textContent = translations[lang][key];
            }
        }
    });

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    renderSkills(); 
}

document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
});

// 5. ПЕРЕТАСКИВАНИЕ ПРОЕКТОВ
const track = document.getElementById('projectsTrack');
if (track) {
    let isDown = false, startX, scrollLeft;
    track.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - track.offsetLeft;
        scrollLeft = track.scrollLeft;
    });
    track.addEventListener('mouseleave', () => { isDown = false; });
    track.addEventListener('mouseup', () => { isDown = false; });
    track.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - track.offsetLeft;
        const walk = (x - startX) * 2; 
        track.scrollLeft = scrollLeft - walk;
    });
}

document.addEventListener('DOMContentLoaded', () => {
    setLanguage('en');
});