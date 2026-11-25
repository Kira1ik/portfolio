/* Language switcher: EN / NO / RU / UA. Works independently of the animations. */
(() => {
  const D = {
    en: {
      avail: "Open to freelance work", footCta: "Let's build something together.",
      docTitle: 'Zhanna | Junior Fullstack Developer',
      docDesc: 'Portfolio of Zhanna, a junior fullstack developer and IM1 student at Hamar Katedralskole. Websites, interactive applications and games built with HTML, CSS, JavaScript and Python.',
      brandRole: 'Junior Fullstack Developer', about: 'About', skills: 'Skills', projects: 'Projects', contact: 'Contact',
      heroTitle: 'Junior Fullstack <span>Developer.</span>', explore: 'Explore projects ↗',
      heroAlt: 'Portrait of Zhanna with black hair, a studded choker and a blue jacket',
      aboutAlt: 'Zhanna holding a Canon camera in front of a concrete and timber building',
      aboutTitle: "About me.", aboutP1: "I am an IM1 student at Hamar Katedralskole, studying Information Technology and Media Production. I focus on web development and on using technology to solve everyday problems.",
      aboutP2: "I take a project from the first sketch in Figma to working code, with a focus on clean structure and a clear user experience. My work includes websites, interactive applications, games and prototypes.",
      skillsTitle: 'Tools, skills & technology.', skillsSub: 'The technologies and tools I use to turn ideas into working digital projects.',
      sk1t: 'Web development', sk1d: "Responsive websites with a clean structure, semantic markup and a clear user experience.",
      sk2t: 'Programming', sk2d: "Interactive applications and games, built with sound logic and readable code.",
      sk3t: 'Design & prototyping', sk3d: "Layouts, wireframes and interface prototypes, designed before development begins.",
      sk4t: 'Development tools', sk4d: "Version control and an organised workflow from the first commit to delivery.",
      sk5t: 'Databases', sk5d: "Database design and queries for storing and retrieving data in web applications.",
      uiDesign: 'UI design', wireframes: 'Wireframes', langsTitle: 'Languages', russian: 'Russian', ukrainian: 'Ukrainian', norwegian: 'Norwegian', english: 'English', native: 'Native', intermediate: 'Intermediate',
      driveTitle: "How I work.", d1d: "I plan every project in Figma first, then build it in clean, readable code and document each step along the way. I am looking for real projects where I can deliver something useful and keep growing as a developer.", projTitle: 'Selected projects', projSub: 'A selection of things I have planned, designed and built.', project: 'Project',
      pr1d: "A service concept connecting young programmers with affordable programming help. Features helper profiles, booking and the assistant Kodebot.",
      pr2d: 'A Pygame arcade project: collect aurora particles, avoid falling ice crystals and build your score.',
      pr3d: "A PHP chatbot connected to the OpenAI API, with selectable AI agents that have different roles and system prompts. Includes a typing indicator, error handling and tested temperature settings.",
      pr3login: "Login: <b>katta</b> · Password: <b>Katta123</b>",
      pr4d: 'A school event website presenting a badminton activity, schedule and participation information.',
      open: 'Open',
      concept: "Concept", menu: "Menu",
      ctaTitle: 'Like what you see?',
      ctaText: 'I design and build websites. If you would like to work together, send me an email or a message on Instagram.<br>I create creative, budget-friendly websites and Figma designs tailored to your wishes.<br>I am currently growing my portfolio, so new commissions are offered at friendly introductory rates.',
      connect: "Let's connect", ctaMail: 'Email me', ctaInsta: 'Instagram',
      footTag: 'Junior fullstack developer based in Hamar, Norway. Open to freelance projects, collaborations and internships.',
      hContact: 'Contact', hSocial: 'Social', hNav: 'Navigate', location: 'Hamar, Norway', backTop: 'Back to top ↑',
      copy: '© 2026 Zhanna. Designed and built by Zhanna.'
    },
    no: {
      avail: "Åpen for frilansoppdrag", footCta: "La oss bygge noe sammen.",
      docTitle: 'Zhanna | Junior fullstack-utvikler',
      docDesc: 'Portefølje for Zhanna, junior fullstack-utvikler og IM1-elev ved Hamar katedralskole. Nettsider, interaktive applikasjoner og spill bygget med HTML, CSS, JavaScript og Python.',
      brandRole: 'Junior fullstack-utvikler', about: 'Om meg', skills: 'Ferdigheter', projects: 'Prosjekter', contact: 'Kontakt',
      heroTitle: 'Junior fullstack <span>utvikler.</span>', explore: 'Utforsk prosjekter ↗',
      heroAlt: 'Portrett av Zhanna med svart hår, nagle-choker og blå jakke',
      aboutAlt: 'Zhanna holder et Canon-kamera foran en bygning i betong og tre',
      aboutTitle: "Om meg.", aboutP1: "Jeg er IM1-elev ved Hamar katedralskole, der jeg studerer informasjonsteknologi og mediaproduksjon. Jeg fokuserer på webutvikling og på å bruke teknologi til å løse hverdagslige problemer.",
      aboutP2: "Jeg tar et prosjekt fra første skisse i Figma til fungerende kode, med vekt på ryddig struktur og god brukeropplevelse. Arbeidet mitt omfatter nettsider, interaktive applikasjoner, spill og prototyper.",
      skillsTitle: 'Verktøy, ferdigheter og teknologi.', skillsSub: 'Teknologiene og verktøyene jeg bruker for å gjøre ideer om til fungerende digitale prosjekter.',
      sk1t: 'Webutvikling', sk1d: "Responsive nettsider med ryddig struktur, semantisk markup og god brukeropplevelse.",
      sk2t: 'Programmering', sk2d: "Interaktive applikasjoner og spill, bygget med god logikk og lesbar kode.",
      sk3t: 'Design og prototyping', sk3d: "Layout, wireframes og prototyper av grensesnitt, utformet før utviklingen starter.",
      sk4t: 'Utviklingsverktøy', sk4d: "Versjonskontroll og en ryddig arbeidsflyt fra første commit til levering.",
      sk5t: 'Databaser', sk5d: "Databasedesign og spørringer for å lagre og hente data i webapplikasjoner.",
      uiDesign: 'UI-design', wireframes: 'Wireframes', langsTitle: 'Språk', russian: 'Russisk', ukrainian: 'Ukrainsk', norwegian: 'Norsk', english: 'Engelsk', native: 'Morsmål', intermediate: 'Middels',
      driveTitle: "Slik jobber jeg.", d1d: "Jeg planlegger hvert prosjekt i Figma først, bygger det deretter med ryddig og lesbar kode og dokumenterer hvert steg underveis. Jeg ser etter reelle prosjekter der jeg kan levere noe nyttig og samtidig fortsette å vokse som utvikler.", projTitle: 'Utvalgte prosjekter', projSub: 'Et utvalg av ting jeg har planlagt, designet og bygget.', project: 'Prosjekt',
      pr1d: "Et tjenestekonsept som kobler unge programmerere med rimelig programmeringshjelp. Inneholder hjelperprofiler, booking og assistenten Kodebot.",
      pr2d: 'Et arkadespill i Pygame: samle nordlyspartikler, unngå fallende iskrystaller og bygg opp poengsummen din.',
      pr3d: "En PHP-chatbot koblet til OpenAI API, med valgbare KI-agenter som har ulike roller og systemprompter. Inkluderer skriveindikator, feilhåndtering og testede temperaturinnstillinger.",
      pr3login: "Brukernavn: <b>katta</b> · Passord: <b>Katta123</b>",
      pr4d: 'En nettside for et skolearrangement som presenterer en badmintonaktivitet, timeplan og informasjon om deltakelse.',
      open: 'Åpne',
      concept: "Konsept", menu: "Meny",
      ctaTitle: 'Liker du det du ser?',
      ctaText: 'Jeg designer og bygger nettsider. Hvis du vil samarbeide, send meg en e-post eller en melding på Instagram.<br>Jeg lager kreative, rimelige nettsider og Figma-design tilpasset dine ønsker.<br>Jeg bygger for tiden opp porteføljen min, så nye oppdrag tilbys til vennlige introduksjonspriser.',
      connect: 'Ta kontakt', ctaMail: 'Send e-post', ctaInsta: 'Instagram',
      footTag: 'Junior fullstack-utvikler basert i Hamar, Norge. Åpen for frilansprosjekter, samarbeid og praksisplasser.',
      hContact: 'Kontakt', hSocial: 'Sosiale medier', hNav: 'Navigasjon', location: 'Hamar, Norge', backTop: 'Til toppen ↑',
      copy: '© 2026 Zhanna. Designet og bygget av Zhanna.'
    },
    ru: {
      avail: "Открыта к фриланс-проектам", footCta: "Давайте создадим что-то вместе.",
      docTitle: 'Zhanna | Junior Fullstack-разработчик',
      docDesc: 'Портфолио Zhanna, junior fullstack-разработчика и ученицы IM1 в Hamar Katedralskole. Сайты, интерактивные приложения и игры на HTML, CSS, JavaScript и Python.',
      brandRole: 'Junior Fullstack-разработчик', about: 'Обо мне', skills: 'Навыки', projects: 'Проекты', contact: 'Контакты',
      heroTitle: 'Junior Fullstack <span>разработчик.</span>', explore: 'Смотреть проекты ↗',
      heroAlt: 'Портрет Zhanna: чёрные волосы, чокер с шипами и синяя куртка',
      aboutAlt: 'Zhanna с фотоаппаратом Canon на фоне здания из бетона и дерева',
      aboutTitle: "Обо мне.", aboutP1: "Я учусь в IM1 в Hamar Katedralskole по направлению «Информационные технологии и медиапроизводство». Занимаюсь веб-разработкой и тем, как с помощью технологий решать повседневные задачи.",
      aboutP2: "Я довожу проект от первого наброска в Figma до рабочего кода, уделяя внимание чистой структуре и удобству для пользователя. В моём опыте сайты, интерактивные приложения, игры и прототипы.",
      skillsTitle: 'Инструменты, навыки и технологии.', skillsSub: 'Технологии и инструменты, с помощью которых я превращаю идеи в работающие цифровые проекты.',
      sk1t: 'Веб-разработка', sk1d: "Адаптивные сайты с чистой структурой, семантической вёрсткой и понятным пользовательским опытом.",
      sk2t: 'Программирование', sk2d: "Интерактивные приложения и игры с продуманной логикой и читаемым кодом.",
      sk3t: 'Дизайн и прототипирование', sk3d: "Макеты, вайрфреймы и прототипы интерфейсов, которые создаются до начала разработки.",
      sk4t: 'Инструменты разработки', sk4d: "Контроль версий и организованный процесс работы от первого коммита до сдачи проекта.",
      sk5t: 'Базы данных', sk5d: "Проектирование баз данных и запросы для хранения и получения данных в веб-приложениях.",
      uiDesign: 'UI-дизайн', wireframes: 'Вайрфреймы', langsTitle: 'Языки', russian: 'Русский', ukrainian: 'Украинский', norwegian: 'Норвежский', english: 'Английский', native: 'Родной', intermediate: 'Средний',
      driveTitle: "Как я работаю.", d1d: "Каждый проект я сначала планирую в Figma, затем собираю на чистом, читаемом коде и документирую каждый шаг. Я ищу реальные проекты, где могу сделать что-то полезное и продолжать расти как разработчик.", projTitle: 'Избранные проекты', projSub: 'Подборка того, что я спланировала, спроектировала и создала.', project: 'Проект',
      pr1d: "Концепция сервиса, который связывает молодых программистов с доступной помощью в программировании. Включает профили помощников, бронирование и ассистента Kodebot.",
      pr2d: 'Аркадная игра на Pygame: собирайте частицы северного сияния, избегайте падающих ледяных кристаллов и набирайте очки.',
      pr3d: "Чат-бот на PHP, подключённый к OpenAI API, с выбором ИИ-агентов, у которых разные роли и системные промпты. Есть индикатор набора текста, обработка ошибок и проверенные настройки температуры.",
      pr3login: "Логин: <b>katta</b> · Пароль: <b>Katta123</b>",
      pr4d: 'Сайт школьного мероприятия с информацией о бадминтонной активности, расписании и участии.',
      open: 'Открыть',
      concept: "Концепт", menu: "Меню",
      ctaTitle: 'Понравились мои работы?',
      ctaText: 'Я проектирую и создаю сайты. Если вам интересно сотрудничество, напишите мне на почту или в Instagram.<br>Я делаю креативные сайты и дизайн в Figma по доступным ценам, с учётом ваших пожеланий.<br>Сейчас я наполняю портфолио, поэтому новые заказы беру по приятным вводным ценам.',
      connect: 'Связаться', ctaMail: 'Написать на почту', ctaInsta: 'Instagram',
      footTag: 'Junior fullstack-разработчик из Хамара, Норвегия. Открыта к фриланс-проектам, сотрудничеству и стажировкам.',
      hContact: 'Контакты', hSocial: 'Соцсети', hNav: 'Навигация', location: 'Хамар, Норвегия', backTop: 'Наверх ↑',
      copy: '© 2026 Zhanna. Дизайн и разработка — Zhanna.'
    },
    uk: {
      avail: "Відкрита до фриланс-проєктів", footCta: "Давайте створимо щось разом.",
      docTitle: 'Zhanna | Junior Fullstack-розробник',
      docDesc: 'Портфоліо Zhanna, junior fullstack-розробниці та учениці IM1 у Hamar Katedralskole. Сайти, інтерактивні застосунки та ігри на HTML, CSS, JavaScript і Python.',
      brandRole: 'Junior Fullstack-розробник', about: 'Про мене', skills: 'Навички', projects: 'Проєкти', contact: 'Контакти',
      heroTitle: 'Junior Fullstack <span>розробник.</span>', explore: 'Дивитися проєкти ↗',
      heroAlt: 'Портрет Zhanna: чорне волосся, чокер із шипами та синя куртка',
      aboutAlt: 'Zhanna з фотоапаратом Canon на тлі будівлі з бетону та дерева',
      aboutTitle: "Про мене.", aboutP1: "Я навчаюся в IM1 у Hamar Katedralskole за напрямом «Інформаційні технології та медіавиробництво». Займаюся веброзробкою та тим, як за допомогою технологій розв’язувати повсякденні задачі.",
      aboutP2: "Я доводжу проєкт від першого начерку у Figma до робочого коду, приділяючи увагу чистій структурі та зручності для користувача. У моєму досвіді сайти, інтерактивні застосунки, ігри та прототипи.",
      skillsTitle: 'Інструменти, навички та технології.', skillsSub: 'Технології та інструменти, за допомогою яких я перетворюю ідеї на працюючі цифрові проєкти.',
      sk1t: 'Веб-розробка', sk1d: "Адаптивні сайти з чистою структурою, семантичною версткою та зрозумілим досвідом користувача.",
      sk2t: 'Програмування', sk2d: "Інтерактивні застосунки та ігри з продуманою логікою та читабельним кодом.",
      sk3t: 'Дизайн і прототипування', sk3d: "Макети, вайрфрейми та прототипи інтерфейсів, які створюються до початку розробки.",
      sk4t: 'Інструменти розробки', sk4d: "Контроль версій та організований процес роботи від першого коміту до здачі проєкту.",
      sk5t: 'Бази даних', sk5d: "Проєктування баз даних і запити для зберігання та отримання даних у вебзастосунках.",
      uiDesign: 'UI-дизайн', wireframes: 'Вайрфрейми', langsTitle: 'Мови', russian: 'Російська', ukrainian: 'Українська', norwegian: 'Норвезька', english: 'Англійська', native: 'Рідна', intermediate: 'Середній',
      driveTitle: "Як я працюю.", d1d: "Кожен проєкт я спочатку планую у Figma, потім будую на чистому, читабельному коді й документую кожен крок. Я шукаю реальні проєкти, де можу зробити щось корисне й надалі рости як розробник.", projTitle: 'Вибрані проєкти', projSub: 'Добірка того, що я спланувала, спроєктувала й створила.', project: 'Проєкт',
      pr1d: "Концепція сервісу, що з’єднує молодих програмістів із доступною допомогою в програмуванні. Містить профілі помічників, бронювання та асистента Kodebot.",
      pr2d: 'Аркадна гра на Pygame: збирайте частинки північного сяйва, уникайте крижаних кристалів, що падають, і набирайте очки.',
      pr3d: "Чат-бот на PHP, підключений до OpenAI API, з вибором ШІ-агентів, що мають різні ролі та системні промпти. Має індикатор набору тексту, обробку помилок і перевірені налаштування температури.",
      pr3login: "Логін: <b>katta</b> · Пароль: <b>Katta123</b>",
      pr4d: 'Сайт шкільного заходу з інформацією про бадмінтонну активність, розклад і участь.',
      open: 'Відкрити',
      concept: "Концепт", menu: "Меню",
      ctaTitle: 'Сподобалися мої роботи?',
      ctaText: 'Я проєктую та створюю сайти. Якщо вас цікавить співпраця, напишіть мені на пошту або в Instagram.<br>Я роблю креативні сайти й дизайн у Figma за доступними цінами, з урахуванням ваших побажань.<br>Зараз я наповнюю портфоліо, тому нові замовлення беру за приємними вступними цінами.',
      connect: 'Зв’язатися', ctaMail: 'Написати на пошту', ctaInsta: 'Instagram',
      footTag: 'Junior fullstack-розробник із Гамара, Норвегія. Відкрита до фриланс-проєктів, співпраці та стажувань.',
      hContact: 'Контакти', hSocial: 'Соцмережі', hNav: 'Навігація', location: 'Гамар, Норвегія', backTop: 'Нагору ↑',
      copy: '© 2026 Zhanna. Дизайн і розробка — Zhanna.'
    }
  };
  const HTML_LANG = { en: 'en', no: 'nb', ru: 'ru', uk: 'uk' };
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const btns = [...document.querySelectorAll('[data-lang]')];
  const root = document.documentElement;
  let cur = 'en';

  const apply = (l) => {
    const d = D[l];
    document.querySelectorAll('[data-i18n]').forEach((el) => { const v = d[el.dataset.i18n]; if (v != null) el.textContent = v; });
    document.querySelectorAll('[data-i18n-html]').forEach((el) => { const v = d[el.dataset.i18nHtml]; if (v != null) el.innerHTML = v; });
    document.querySelectorAll('[data-i18n-label]').forEach((el) => { const v = d[el.dataset.i18nLabel]; if (v != null) el.setAttribute('aria-label', v); });
    document.querySelectorAll('[data-i18n-alt]').forEach((el) => { const v = d[el.dataset.i18nAlt]; if (v != null) el.alt = v; });
    document.title = d.docTitle;
    const m = document.querySelector('meta[name="description"]');
    if (m) m.content = d.docDesc;
    root.lang = HTML_LANG[l];
    btns.forEach((b) => {
      const on = b.dataset.lang === l;
      b.classList.toggle('is-on', on);
      on ? b.setAttribute('aria-current', 'true') : b.removeAttribute('aria-current');
    });
    cur = l;
  };

  const setLang = (l) => {
    if (l === cur || !D[l]) return;
    try { localStorage.setItem('lang', l); } catch (e) {}
    if (reduce) { apply(l); return; }
    root.classList.add('swapping');                        // quick fade out, swap text, fade back in
    setTimeout(() => { apply(l); requestAnimationFrame(() => root.classList.remove('swapping')); }, 220);
  };

  btns.forEach((b) => b.addEventListener('click', (e) => { e.preventDefault(); setLang(b.dataset.lang); }));

  let saved = null;
  try { saved = localStorage.getItem('lang'); } catch (e) {}
  if (saved && D[saved] && saved !== 'en') apply(saved);
})();
