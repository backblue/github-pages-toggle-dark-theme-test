const darkMode = document.querySelector('#dark-mode');

if (darkMode) {
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
