(() => {
  const id = 'recolor-page';
  document.getElementById(id)?.remove();
  const hue = Math.floor(Math.random() * 360);
  const s = document.createElement('style');
  s.id = id;
  s.textContent = `body{background:hsl(${hue},40%,12%)!important;color:hsl(${hue},30%,90%)!important}a{color:hsl(${(hue + 180) % 360},80%,70%)!important}*{border-color:hsl(${hue},30%,30%)!important}`;
  document.head.appendChild(s);
})();
