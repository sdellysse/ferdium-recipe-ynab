module.exports = (Ferdium) => {
  Ferdium.injectCSS(path.join(__dirname, "style.css"));
  Ferdium.loop(() => {});
};
