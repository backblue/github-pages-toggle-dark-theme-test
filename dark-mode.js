const darkMode = document.querySelector('#dark-mode');

if (darkMode) {
  const browserTheme = window.matchMedia('(prefers-color-scheme: dark)');
  let manualOverride = false;
  let lastSystemTheme = browserTheme.matches;

  const applyTheme = (isDark, followSystem = false) => {
    darkMode.checked = isDark;
    if (followSystem) {
      delete document.documentElement.dataset.theme;
    } else {
      document.documentElement.dataset.theme = isDark ? 'dark' : 'light';
    }
  };

  const syncSystemTheme = () => {
    const isDark = browserTheme.matches;
    if (isDark !== lastSystemTheme) {
      manualOverride = false;
      lastSystemTheme = isDark;
    }
    if (!manualOverride) applyTheme(isDark, true);
  };

  darkMode.addEventListener('change', () => {
    manualOverride = true;
    applyTheme(darkMode.checked);
  });

  browserTheme.addEventListener('change', syncSystemTheme);

  window.addEventListener('focus', syncSystemTheme);
  window.addEventListener('pageshow', syncSystemTheme);
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) syncSystemTheme();
  });

  syncSystemTheme();
}
