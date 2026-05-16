window.addEventListener('scroll', () => {
  document.querySelector('nav').style.background = window.scrollY > 50 ? 'rgba(255,255,255,0.97)' : 'rgba(255,255,255,0.92)';
});

// Mobile hamburger menu toggle
const hamburger = document.querySelector('.nav-hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Close menu when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
  });
});

// Close menu when clicking outside of the nav
document.addEventListener('click', (e) => {
  if (!e.target.closest('nav') && navLinks.classList.contains('active')) {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
  }
});

// Fade-in sections on scroll
const obs = new IntersectionObserver(entries => entries.forEach(e => {
  if (e.isIntersecting) {
    e.target.style.opacity = '1';
    e.target.style.transform = 'translateY(0)';
  }
}), { threshold: 0.1 });

document.querySelectorAll('section').forEach(s => obs.observe(s));

// Contact form: submit via fetch so the user stays on the page
const contactForm = document.querySelector('.contact-form');
const formMsg = document.getElementById('form-msg');

if (contactForm && formMsg) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = 'Envoi en cours...';

    // Reset previous message state
    formMsg.style.display = 'none';
    formMsg.style.color = 'var(--gold)';

    try {
      const response = await fetch(contactForm.action, {
        method: 'POST',
        body: new FormData(contactForm),
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        formMsg.innerHTML = '\u2713 Message envoyé. Merci ! Nous vous recontacterons bientôt.';
        formMsg.style.color = 'var(--gold)';
        formMsg.style.display = 'block';
        contactForm.reset();
      } else {
        const data = await response.json().catch(() => ({}));
        const errMsg = (data.errors && data.errors.map(err => err.message).join(', '))
          || 'Une erreur est survenue. Veuillez réessayer plus tard.';
        formMsg.textContent = '\u2717 ' + errMsg;
        formMsg.style.color = '#c0392b';
        formMsg.style.display = 'block';
      }
    } catch (err) {
      formMsg.textContent = '\u2717 Erreur réseau. Vérifiez votre connexion et réessayez.';
      formMsg.style.color = '#c0392b';
      formMsg.style.display = 'block';
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = originalBtnText;
    }
  });
}