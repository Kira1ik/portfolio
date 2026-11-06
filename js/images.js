// Локальные изображения портфолио. Файлы лежат в ../images/
const IMG = {
  "crossbones.png": "images/crossbones.png",
  "cherry.png": "images/cherry.png",
  "bow.png": "images/bow.png",
  "about.webp": "images/about.webp",
  "swirl.png": "images/swirl.png",
  "cat.png": "images/cat.png",
  "lace.webp": "images/lace.webp"
};
document.querySelectorAll("img[data-i]").forEach((img) => {
  const path = IMG[img.dataset.i];
  if (path) img.src = path;
});
