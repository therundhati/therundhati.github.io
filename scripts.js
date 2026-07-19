// ── CURSOR ──
const cross = document.getElementById('cursor-cross');

document.addEventListener('mousemove', e => {
  cross.style.left = e.clientX + 'px';
  cross.style.top  = e.clientY + 'px';
});

function initCursorTargets() {
  document.querySelectorAll('a, button, .entry-full, .entry-slim, .group-header, .accordion-item').forEach(el => {
    el.addEventListener('mouseenter', () => cross.classList.add('hovered'));
    el.addEventListener('mouseleave', () => cross.classList.remove('hovered'));
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
