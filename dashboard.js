document.addEventListener('DOMContentLoaded', () => {
  const darkToggle = document.getElementById('darkToggle');
  const body = document.body;
  const modeText = document.getElementById('modeText');

  darkToggle.addEventListener('change', () => {
    body.classList.toggle('dark-mode');
    modeText.textContent = darkToggle.checked ? 'Dark Mode: ON' : 'Dark Mode: OFF';
  });
});
