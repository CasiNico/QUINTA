// Semplice gestione del dropdown: toggle e chiusura al click esterno
document.addEventListener('DOMContentLoaded', function(){
  const dropdown = document.querySelector('.dropdown');
  const btn = document.getElementById('menuBtn');
  const menu = document.getElementById('dropdownMenu');

  if(!dropdown || !btn || !menu) return;

  function closeMenu(){
    dropdown.classList.remove('open');
    btn.setAttribute('aria-expanded','false');
  }

  function openMenu(){
    dropdown.classList.add('open');
    btn.setAttribute('aria-expanded','true');
  }

  btn.addEventListener('click', function(e){
    e.stopPropagation();
    if(dropdown.classList.contains('open')) closeMenu(); else openMenu();
  });

  // chiudi quando clicchi fuori
  document.addEventListener('click', function(e){
    if(!dropdown.contains(e.target)) closeMenu();
  });

  // supporto tastiera: Esc per chiudere
  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape') closeMenu();
  });
});
