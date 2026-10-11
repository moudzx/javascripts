(() => {
  const id = 'rainbow-page';
  const existing = document.getElementById(id);
  if (existing) {
    existing.remove();
    document.querySelectorAll('[data-rainbow]').forEach(el => {
      el.style.removeProperty('background-color');
      el.style.removeProperty('color');
      el.removeAttribute('data-rainbow');
    });
    return;
  }
  const s = document.createElement('style');
  s.id = id;
  s.textContent = '@keyframes rainbow-spin{to{filter:hue-rotate(360deg)}}html{animation:rainbow-spin 8s linear infinite}';
  document.head.appendChild(s);
  document.querySelectorAll('body, body *').forEach(el => {
    const h = Math.floor(Math.random() * 360);
    el.style.setProperty('background-color', `hsl(${h},90%,60%)`, 'important');
    el.style.setProperty('color', `hsl(${(h + 180) % 360},90%,15%)`, 'important');
    el.setAttribute('data-rainbow', '');
  });
})();
