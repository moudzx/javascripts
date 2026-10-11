(() => {
  const words = document.body.innerText.trim().split(/\s+/).length;
  console.log(`${words} words, ~${Math.ceil(words / 230)} min read`);
})();
