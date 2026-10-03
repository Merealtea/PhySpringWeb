(() => {
  const button = document.getElementById('copyBib');
  const bib = document.getElementById('bibtex');
  if (!button || !bib) return;
  button.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(bib.textContent);
      const old = button.textContent;
      button.textContent = 'Copied';
      setTimeout(() => { button.textContent = old; }, 1400);
    } catch (err) {
      button.textContent = 'Select and copy';
    }
  });
})();
