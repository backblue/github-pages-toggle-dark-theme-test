const darkMode = document.querySelector('input[type="checkbox"]');

if (darkMode) {
  // Markdown task lists render disabled inputs; make this one interactive.
  darkMode.disabled = false;
  const item = darkMode.closest('li');
  const label = document.createElement('label');
  label.append(...item.childNodes);
  item.append(label);

  const browserTheme = window.matchMedia('(prefers-color-scheme: dark)');
  let manualOverride = false;

  const applyTheme = (isDark) => {
    darkMode.checked = isDark;
    document.documentElement.dataset.theme = isDark ? 'dark' : 'light';
  };

  darkMode.addEventListener('change', () => {
    manualOverride = true;
    applyTheme(darkMode.checked);
  });

  browserTheme.addEventListener('change', (event) => {
    if (!manualOverride) applyTheme(event.matches);
  });

  applyTheme(browserTheme.matches);
}
