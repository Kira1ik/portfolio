const nav = document.getElementById("nav"),
  bt = document.getElementById("bt");
bt.addEventListener("click", () => {
  const o = nav.classList.toggle("open");
  bt.setAttribute("aria-expanded", o);
});
const links = [...nav.querySelectorAll("a")];
links.forEach((a) =>
  a.addEventListener("click", () => nav.classList.remove("open")),
);
const map = {
  about: "about",
  skills: "skills",
  languages: "skills",
  drives: "skills",
  projects: "projects",
  contact: "contact",
};
const io = new IntersectionObserver(
  (es) =>
    es.forEach((e) => {
      if (e.isIntersecting) {
        const k = map[e.target.id];
        links.forEach((a) => a.classList.toggle("on", a.hash === "#" + k));
      }
    }),
  { rootMargin: "-45% 0px -50% 0px" },
);
document.querySelectorAll("main section[id]").forEach((s) => io.observe(s));
