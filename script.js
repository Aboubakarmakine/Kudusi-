// ============================
// KUDUSI — JavaScript
// ============================

// -- Sticky Nav --
const nav = document.getElementById('main-nav');
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobile-nav');
const mobileLinks = mobileNav ? mobileNav.querySelectorAll('a') : [];

// -- Dropdown Menus --
document.querySelectorAll('.has-dropdown').forEach(item => {
  const link = item.querySelector('a');
  link.addEventListener('click', e => {
    e.preventDefault();
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.has-dropdown.open').forEach(o => o.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});
document.addEventListener('click', e => {
  if (!e.target.closest('.has-dropdown')) {
    document.querySelectorAll('.has-dropdown.open').forEach(o => o.classList.remove('open'));
  }
});


window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
  highlightNav();
});

// -- Hamburger --
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileNav.classList.toggle('open');
  document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
});
mobileLinks.forEach(l => l.addEventListener('click', () => {
  hamburger.classList.remove('open');
  mobileNav.classList.remove('open');
  document.body.style.overflow = '';
}));

// -- Active Nav Highlight --
const sections = document.querySelectorAll('section[id]');
function highlightNav() {
  const scrollY = window.scrollY + 100;
  sections.forEach(s => {
    const link = document.querySelector(`.nav-links a[href="#${s.id}"]`);
    if (!link) return;
    const top = s.offsetTop;
    const bot = top + s.offsetHeight;
    link.classList.toggle('active', scrollY >= top && scrollY < bot);
  });
}

// -- Fade-up Observer --
const fadeEls = document.querySelectorAll('.fade-up');
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); fadeObserver.unobserve(e.target); } });
}, { threshold: 0.12 });
fadeEls.forEach(el => fadeObserver.observe(el));

// -- Counter Animation --
function animateCounter(el) {
  const target = el.dataset.target;
  const isPercent = target.includes('%');
  const isPlus = target.includes('+');
  const is247 = target === '24/7';
  if (is247) { el.textContent = '24/7'; return; }
  const num = parseInt(target.replace(/[^0-9]/g, ''));
  const suffix = isPercent ? '%' : isPlus ? '+' : '';
  const duration = 1600;
  const step = Math.ceil(num / (duration / 16));
  let current = 0;
  const timer = setInterval(() => {
    current = Math.min(current + step, num);
    el.textContent = current + suffix;
    if (current >= num) clearInterval(timer);
  }, 16);
}

const counters = document.querySelectorAll('.impact-number[data-target]');
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { animateCounter(e.target); counterObserver.unobserve(e.target); } });
}, { threshold: 0.5 });
counters.forEach(c => counterObserver.observe(c));

// -- Newsletter form --
const form = document.getElementById('newsletter-form');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const input = form.querySelector('input[type="email"]');
    if (input.value) {
      form.innerHTML = '<p style="color:#E8A838;font-family:var(--font-heading);font-weight:700;font-size:18px">🎉 Thank you! We\'ll be in touch soon.</p>';
    }
  });
}
