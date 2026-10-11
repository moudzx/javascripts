(() => {
  const id = 'quick-dark';
  const existing = document.getElementById(id);
  if (existing) return existing.remove();
  const s = document.createElement('style');
  s.id = id;
  s.textContent = 'html{filter:invert(1) hue-rotate(180deg)!important}img,video,picture,canvas,svg{filter:invert(1) hue-rotate(180deg)!important}';
  document.head.appendChild(s);
})();
