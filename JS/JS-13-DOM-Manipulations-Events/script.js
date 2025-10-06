// Themes Selector
const THEME_KEY = "theme-mode"; // "System" | "Light" | "Dark"
const themeSelect = document.getElementById("theme-select");
const media = window.matchMedia("(prefers-color-scheme: dark)");

const getSavedMode = () => {
  return localStorage.getItem(THEME_KEY) || "System";
};

const setSavedMode = (mode) => {
  localStorage.setItem(THEME_KEY, mode);
};

const applyMode = (mode) => {
  document.body.classList.remove("dark", "light");
};
if (mode === "dark") {
  document.body.classList.add("dark");
}

if (mode === "light") {
  document.body.classList.add("light");
}

const syncUI = (mode) => {
  themeSelect.value = mode;
};

// Initialize
let mode = getSavedMode();
applyMode(mode);
syncUI(mode);

themeSelect.addEventListener("change", (e) => {
  mode = e.target.value;
  applyMode(mode);
  syncUI(mode);
  setSavedMode(mode);
});

// Photo Gallery //
const photos = [
  {
    src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200",
    thumb: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=300",
    alt: "Mountain at sunrise",
    caption: "Alpine Sunrise",
  },
  {
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200",
    thumb: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=300",
    alt: "Ocean wave",
    caption: "Blue Wave",
  },
  {
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200",
    thumb: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=300",
    alt: "Forest path",
    caption: "Forest Path",
  },
  {
    src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200",
    thumb: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=300",
    alt: "Laptop on desk",
    caption: "Workspace",
  },
  {
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200",
    thumb: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=300",
    alt: "City skyline",
    caption: "City Lights",
  },
];
const thumbsEL = document.querySelector("#thumbs");
const mainImage = document.querySelector("#mainImage");
const captionEL = document.querySelector("#caption");
const topBtn = document.querySelector("#top-btn");
const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector("#lightboxImage");
const lightboxCaption = document.querySelector("#lightboxCaption");
const closelightbox = document.querySelector("#closeLightbox");

// Render Thumbnails
const renderThumbnails = (items) => {
  const frag = document.createDocumentFragment();
  items.forEach((p, i) => {
    const li = document.createElement("li");
    li.innerHTML = `<img src="${p.thumb}" alt="${p.alt}" data-index="${i}" tabindex="0" />`;
    frag.appendChild(li);
  });
  thumbsEL.appendChild(frag);
};
