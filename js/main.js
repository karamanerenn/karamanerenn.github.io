// Footer yılını otomatik yaz
(function(){
  var y = document.getElementById('year');
  if (y) { y.textContent = new Date().getFullYear(); }
})();

// (İsteğe bağlı) Mobil menü — ileride buton ekleyince çalışacak
const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');
if (menuBtn && nav){
  menuBtn.addEventListener('click', () => nav.classList.toggle('open'));
}
// Contact form (Formspree)
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const status = document.getElementById('formStatus');
    status.textContent = 'Sending...';

    try {
      const res = await fetch(form.action, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(form)
      });

      if (res.ok) {
        form.reset();
        status.textContent = 'Thanks! Your message has been sent.';
      } else {
        let msg = 'Oops, something went wrong. Please try again.';
        try {
          const data = await res.json();
          if (data?.errors?.length) msg = data.errors.map(e => e.message).join(', ');
        } catch(_) {}
        status.textContent = msg + ` (status: ${res.status})`;
      }
    } catch (err) {
      status.textContent = 'Network error. Please try again later.';
    }
  });
}
// Header scroll shadow
const header = document.querySelector('.site-header');
if (header){
  const onScroll = () => {
    if (window.scrollY > 8) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  };
  onScroll();
  window.addEventListener('scroll', onScroll, {passive:true});
}


// Footer yılı
document.getElementById('year') && (document.getElementById('year').textContent = new Date().getFullYear());

// Back to Top button: show/hide + smooth scroll
const toTopBtn = document.getElementById('toTopBtn');
if (toTopBtn){
  const toggleTop = () => {
    toTopBtn.style.display = window.scrollY > 300 ? 'inline-flex' : 'none';
  };
  toggleTop();
  window.addEventListener('scroll', toggleTop, { passive: true });

  toTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}










