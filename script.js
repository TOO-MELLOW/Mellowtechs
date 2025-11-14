// ------------------------------
// Floating Particle Animation
// ------------------------------

const particleCount = 40;
const bg = document.getElementById("animated-bg");

for (let i = 0; i < particleCount; i++) {
  let p = document.createElement("div");
  p.classList.add("particle");
  bg.appendChild(p);

  let size = Math.random() * 6 + 4;
  let x = Math.random() * 100;
  let delay = Math.random() * 5;
  let duration = Math.random() * 5 + 5;

  p.style.width = size + "px";
  p.style.height = size + "px";
  p.style.left = x + "vw";
  p.style.animationDelay = delay + "s";
  p.style.animationDuration = duration + "s";
}

// ------------------------------
// Hero Text Glow Effect
// ------------------------------

const heroTitle = document.querySelector('.hero-title');
if (heroTitle) {
  setInterval(() => {
    heroTitle.style.textShadow = `0 0 ${Math.random() * 30}px #00ffcc`;
  }, 800);
}

// ------------------------------
// Smooth Scroll Links
// ------------------------------

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
