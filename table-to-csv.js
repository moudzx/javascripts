(() => {
  const tables = [...document.querySelectorAll('table')];
  if (!tables.length) return console.warn('No tables found');
  const esc = v => `"${v.replace(/"/g, '""').trim()}"`;
  tables.forEach((t, i) => {
    const csv = [...t.rows].map(r => [...r.cells].map(c => esc(c.innerText)).join(',')).join('\n');
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv' }));
    a.download = `table-${i + 1}.csv`;
    a.click();
  });
})();
