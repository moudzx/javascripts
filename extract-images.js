(() => {
  const rows = [...document.images].map(i => ({ src: i.currentSrc || i.src, width: i.naturalWidth, height: i.naturalHeight, alt: i.alt }));
  console.table(rows);
  copy(rows.map(r => r.src).join('\n'));
})();
