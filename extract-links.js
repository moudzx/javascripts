(() => {
  const rows = [...document.links].map(a => ({ text: a.innerText.trim().slice(0, 80), href: a.href }));
  console.table(rows);
  copy(rows.map(r => r.href).join('\n'));
})();
