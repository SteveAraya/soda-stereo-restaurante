/* ── Navbar scroll ────────────────────────────────────────── */
const navbar = document.getElementById('navbar');
const scrollTopBtn = document.getElementById('scroll-top');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
    scrollTopBtn.classList.add('visible');
  } else {
    navbar.classList.remove('scrolled');
    scrollTopBtn.classList.remove('visible');
  }
});

/* ── Mobile nav ───────────────────────────────────────────── */
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobile-nav');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileNav.classList.toggle('open');
  document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
});
function closeMobileNav() {
  hamburger.classList.remove('open');
  mobileNav.classList.remove('open');
  document.body.style.overflow = '';
}

/* ── Menu tabs ────────────────────────────────────────────── */
function showCategory(id) {
  document.querySelectorAll('.menu-category').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  const cat = document.getElementById('cat-' + id);
  if (cat) cat.classList.add('active');
  const tabs = document.querySelectorAll('.tab-btn');
  const map = ['appetizers','pasta','street','casa','specials','kids','desserts'];
  const idx = map.indexOf(id);
  if (tabs[idx]) tabs[idx].classList.add('active');
  document.getElementById('menu').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* ── Scroll to top ────────────────────────────────────────── */
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ── Fade-in on scroll ────────────────────────────────────── */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.menu-card, .stat-card, .special-item, .contact-info-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(18px)';
  el.style.transition = 'opacity .45s ease, transform .45s ease';
  observer.observe(el);
});
