window.autoScroll = (speed = 2) => {
  const id = setInterval(() => window.scrollBy(0, speed), 16);
  return () => clearInterval(id);
};
