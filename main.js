// ЖК LEVEL — main.js

// Nav scroll
var nav = document.getElementById('nav');
var sticky = document.getElementById('stickyCall');
window.addEventListener('scroll', function() {
  var s = window.scrollY > 60;
  nav.classList.toggle('scrolled', s);
  if (sticky) sticky.classList.toggle('show', window.scrollY > 400);
});

// Mobile menu
function toggleMobileMenu() {
  var m = document.getElementById('mobileMenu');
  var b = document.getElementById('navBurger');
  m.classList.toggle('open');
  b.classList.toggle('open');
  document.body.style.overflow = m.classList.contains('open') ? 'hidden' : '';
}
function closeMobileMenu() {
  var m = document.getElementById('mobileMenu');
  var b = document.getElementById('navBurger');
  if (m) m.classList.remove('open');
  if (b) b.classList.remove('open');
  document.body.style.overflow = '';
}
var mm = document.getElementById('mobileMenu');
if (mm) mm.addEventListener('click', function(e) { if (e.target === this) closeMobileMenu(); });


  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  els.forEach(function(el) { obs.observe(el); });
});

// Location tabs
function switchLoc(cat) {
  var all = ['kids','home','family','health'];
  all.forEach(function(c) {
    var el = document.getElementById('loc-' + c);
    if (el) el.style.display = c === cat ? 'grid' : 'none';
  });
  document.querySelectorAll('.lcat').forEach(function(b, i) {
    b.classList.toggle('active', all[i] === cat);
  });
}

// FAQ
function toggleFaq(btn) {
  var item = btn;
  while (item && !item.classList.contains('fq')) {
    item = item.parentElement;
  }
  if (!item) return;
  var open = item.classList.contains('open');
  document.querySelectorAll('.fq.open').forEach(function(f) { f.classList.remove('open'); });
  if (!open) item.classList.add('open');
}
