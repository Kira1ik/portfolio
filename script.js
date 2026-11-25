/* Portfolio interactions: mobile menu, active link, soft reveal, button hover. */
(() => {
  const root = document.documentElement;
  const nav = document.querySelector('.nav');
  const toggle = document.querySelector('.nav__toggle');
  const links = [...document.querySelectorAll('.nav__links a')];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine = matchMedia('(hover: hover) and (pointer: fine)').matches;

  /* ---------- mobile menu ---------- */
  const setMenu = (open) => {
    nav.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
  };
  toggle.addEventListener('click', () => setMenu(!nav.classList.contains('open')));
  links.forEach((a) => a.addEventListener('click', () => setMenu(false)));
  document.addEventListener('click', (e) => { if (!nav.contains(e.target)) setMenu(false); });
  addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });
  addEventListener('resize', () => { if (innerWidth > 1100) setMenu(false); });

  /* ---------- active nav link ---------- */
  const secs = links.map((a) => document.querySelector(a.getAttribute('href'))).filter(Boolean);
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      links.forEach((a) => a.classList.toggle('is-active', a.getAttribute('href') === '#' + e.target.id));
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  secs.forEach((s) => spy.observe(s));

  if (reduce) return;                       // no motion: the page stays fully visible and static

  /* ---------- soft reveal on scroll (fade + small lift) ---------- */
  const items = [...document.querySelectorAll('.section h2, .how, .card, .ft__top')];
  items.forEach((el) => el.classList.add('reveal'));
  root.classList.add('js');
  const revealIO = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      // also reveal items that are already above the viewport (e.g. after jumping to #contact)
      if (!e.isIntersecting && e.boundingClientRect.top >= 0) return;
      e.target.classList.add('in');
      revealIO.unobserve(e.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
  items.forEach((el) => revealIO.observe(el));

  /* ---------- button hover: slight pull towards the cursor (mouse only) ---------- */
  if (fine) {
    document.querySelectorAll('.btn').forEach((b) => {
      b.addEventListener('pointermove', (e) => {
        const r = b.getBoundingClientRect();
        b.style.setProperty('--tx', `${(e.clientX - r.left - r.width / 2) * 0.22}px`);
        b.style.setProperty('--ty', `${(e.clientY - r.top - r.height / 2) * 0.3}px`);
      });
      b.addEventListener('pointerleave', () => {
        b.style.setProperty('--tx', '0px');
        b.style.setProperty('--ty', '0px');
      });
    });
  }
})();
