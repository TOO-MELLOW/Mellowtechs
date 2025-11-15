/* ===============================
   MELLOW TECH - SCRIPT.JS
   Handles:
   - Fade‑in scroll animations
   - Mobile nav (optional expansion)
   - Light/Dark theme toggle with localStorage
   - Smooth section scrolling
   =============================== */

/* -----------------------------
   FADE-IN ON SCROLL
   ----------------------------- */
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));

/* -----------------------------
   SMOOTH SCROLLING FOR NAV LINKS
   ----------------------------- */
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (!target) return;
    e.preventDefault();
    window.scrollTo({
      top: target.offsetTop - 60,
      behavior: "smooth",
    });
  });
});

/* -----------------------------
   THEME TOGGLE (LIGHT / DARK)
   ----------------------------- */
const body = document.body;
const themeToggle = document.createElement("button");
themeToggle.innerText = "🌙";
themeToggle.className = "btn small btn-ghost";
themeToggle.style.position = "fixed";
themeToggle.style.right = "18px";
themeToggle.style.bottom = "90px";
themeToggle.style.zIndex = "1200";
document.body.appendChild(themeToggle);

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  themeToggle.innerText = "☀️";
}

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  const isDark = body.classList.contains("dark");
  themeToggle.innerText = isDark ? "☀️" : "🌙";
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

/* -----------------------------
   WHATSAPP AUTO MESSAGE
   ----------------------------- */
const waBtn = document.querySelector(".whatsapp-btn");
if (waBtn) {
  waBtn.addEventListener("click", (e) => {
    // Pre-filled WhatsApp message
    const text = encodeURIComponent("Hello, I'm interested in your services.");
    waBtn.href = `https://wa.me/27700000000?text=${text}`;
  });
}

/* -----------------------------
   CONTACT FORM HANDLING (optional)
   ----------------------------- */
const contactForm = document.querySelector("#contact form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = contactForm.querySelector("input[name='name']").value;
    const email = contactForm.querySelector("input[name='email']").value;
    const msg = contactForm.querySelector("textarea[name='message']").value;

    const waMessage = encodeURIComponent(`Hello, my name is ${name}. Email: ${email}. Message: ${msg}`);

    window.open(`https://wa.me/27700000000?text=${waMessage}`);
  });
}

/* END OF SCRIPT */
