(() => {
  document.querySelectorAll('*').forEach(el => {
    const p = getComputedStyle(el).position;
    if ((p === 'fixed' || p === 'sticky') && el.tagName !== 'HTML') el.remove();
  });
  document.documentElement.style.overflow = 'auto';
  document.body.style.overflow = 'auto';
})();
