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
