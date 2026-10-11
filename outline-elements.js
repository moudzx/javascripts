(() => {
  const id = 'outline-all';
  const existing = document.getElementById(id);
  if (existing) return existing.remove();
  const s = document.createElement('style');
  s.id = id;
  s.textContent = '*{outline:1px solid rgba(255,0,100,.5)!important}';
  document.head.appendChild(s);
})();
