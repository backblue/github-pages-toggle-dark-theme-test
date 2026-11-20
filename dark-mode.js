const darkMode = document.querySelector('#dark-mode');

if (darkMode) {
  const browserTheme = window.matchMedia('(prefers-color-scheme: dark)');
  const storageKey = 'github-pages-toggle-dark-theme-test:theme';
  let manualOverride = false;
  let lastSystemTheme = browserTheme.matches;

  const savePreference = (preference) => {
    try {
      if (preference) {
        localStorage.setItem(storageKey, JSON.stringify(preference));
      } else {
        localStorage.removeItem(storageKey);
      }
    } catch {}
  };

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
      savePreference(null);
    }
    if (!manualOverride) applyTheme(isDark, true);
  };

  darkMode.addEventListener('change', () => {
    manualOverride = true;
    lastSystemTheme = browserTheme.matches;
    applyTheme(darkMode.checked);
    savePreference({
      theme: darkMode.checked ? 'dark' : 'light',
      systemTheme: lastSystemTheme ? 'dark' : 'light'
    });
  });

  browserTheme.addEventListener('change', syncSystemTheme);

  window.addEventListener('focus', syncSystemTheme);
  window.addEventListener('pageshow', syncSystemTheme);
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) syncSystemTheme();
  });

  try {
    const saved = JSON.parse(localStorage.getItem(storageKey));
    const validTheme = saved && (saved.theme === 'dark' || saved.theme === 'light');
    const systemTheme = browserTheme.matches ? 'dark' : 'light';
    if (validTheme && saved.systemTheme === systemTheme) {
      manualOverride = true;
      applyTheme(saved.theme === 'dark');
    } else if (saved) {
      savePreference(null);
    }
  } catch {
    // Ignore unavailable storage or invalid saved values and follow the system.
  }

  syncSystemTheme();
}
