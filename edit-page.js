(() => {
  document.designMode = document.designMode === 'on' ? 'off' : 'on';
  console.log(`designMode: ${document.designMode}`);
})();
