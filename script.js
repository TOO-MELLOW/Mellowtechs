// Contact form submission
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert("Thanks! We'll get back to you soon.");
  contactForm.reset();
});
