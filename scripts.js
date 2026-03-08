// ── CURSOR ──
const orb = document.getElementById('cursor-orb');
const dot = document.getElementById('cursor-dot');
let orbX = window.innerWidth / 2, orbY = window.innerHeight / 2;
let mouseX = orbX, mouseY = orbY;

document.addEventListener('mousemove', e => {
  mouseX = e.clientX; mouseY = e.clientY;
  dot.style.left = mouseX + 'px';
  dot.style.top  = mouseY + 'px';
  // hero glow if present
  const glow = document.getElementById('heroGlow');
  if (glow) { glow.style.left = mouseX + 'px'; glow.style.top = mouseY + 'px'; }
});

(function animateOrb() {
  orbX += (mouseX - orbX) * 0.12;
  orbY += (mouseY - orbY) * 0.12;
  orb.style.left = orbX + 'px';
  orb.style.top  = orbY + 'px';
  requestAnimationFrame(animateOrb);
})();

function initCursorTargets() {
  document.querySelectorAll('a, button, .entry-full, .entry-slim, .group-header, .accordion-item').forEach(el => {
    el.addEventListener('mouseenter', () => { orb.style.width = '72px'; orb.style.height = '72px'; });
    el.addEventListener('mouseleave', () => { orb.style.width = '44px'; orb.style.height = '44px'; });
  });
}
document.addEventListener('DOMContentLoaded', initCursorTargets);

// ── SCROLL REVEAL ──
function initScrollReveal(selector) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.06 });
  document.querySelectorAll(selector).forEach(el => observer.observe(el));
}
