const darkMode = document.querySelector('#dark-mode');

if (darkMode) {
  const browserTheme = window.matchMedia('(prefers-color-scheme: dark)');
  let manualOverride = false;
  let lastSystemTheme = browserTheme.matches;

  const applyTheme = (isDark, followSystem = false) => {
    darkMode.checked = isDark;
    if (followSystem) {
      // Let CSS track the system directly, even before a JS change event arrives.
      delete document.documentElement.dataset.theme;
    } else {
      document.documentElement.dataset.theme = isDark ? 'dark' : 'light';
    }
  };

  const syncSystemTheme = () => {
    const isDark = browserTheme.matches;
    // A new system preference takes over from the previous checkbox choice.
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

  if (browserTheme.addEventListener) {
    browserTheme.addEventListener('change', syncSystemTheme);
  } else {
    // Older Safari versions expose the original MediaQueryList listener API.
    browserTheme.addListener(syncSystemTheme);
  }

  window.addEventListener('focus', syncSystemTheme);
  window.addEventListener('pageshow', syncSystemTheme);
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) syncSystemTheme();
  });

  syncSystemTheme();
}
