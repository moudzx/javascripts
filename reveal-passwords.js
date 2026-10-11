(() => {
  document.querySelectorAll('input[type="password"], input[data-revealed]').forEach(i => {
    const revealed = i.type === 'text';
    i.type = revealed ? 'password' : 'text';
    i.toggleAttribute('data-revealed', !revealed);
  });
})();
