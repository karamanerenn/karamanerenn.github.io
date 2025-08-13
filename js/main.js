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


