window.autoClick = (selector, { interval = 1000, max = 20 } = {}) => {
  let count = 0;
  const id = setInterval(() => {
    const el = document.querySelector(selector);
    if (!el || count >= max) return clearInterval(id);
    el.click();
    count++;
  }, interval);
  return () => clearInterval(id);
};
