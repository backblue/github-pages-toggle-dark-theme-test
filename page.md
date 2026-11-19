---
layout: null
---

<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Hello, world!</title>

<style>
  :root {
    color-scheme: dark;
    --background: #121212;
    --foreground: #ffffff;
    --code-background: #242424;
  }

  :root[data-theme="light"] {
    color-scheme: light;
    --background: #ffffff;
    --foreground: #111111;
    --code-background: #f2f2f2;
  }

  html, body {
    background: var(--background);
    color: var(--foreground);
  }

  body {
    max-width: 48rem;
    margin: 2rem auto;
    padding: 0 1rem;
    font-family: system-ui, sans-serif;
    line-height: 1.5;
  }

  .task-list-item { list-style: none; }
  label, input[type="checkbox"] { cursor: pointer; }
  pre {
    padding: 1rem;
    overflow-x: auto;
    background: var(--code-background);
    color: var(--foreground);
  }
  pre code { white-space: pre; tab-size: 4; }
</style>

# Hello, world!

Test&#x20;

- [x] Dark mode

\----------

```c
#include <stdio.h>

int main(int argc, char** argv) {
	printf("Hello, world!");
}
```

<script>
  const darkMode = document.querySelector('input[type="checkbox"]');

  if (darkMode) {
    // Markdown task lists render disabled inputs; make this one interactive.
    darkMode.disabled = false;
    const item = darkMode.closest('li');
    const label = document.createElement('label');
    label.append(...item.childNodes);
    item.append(label);

    const updateTheme = () => {
      document.documentElement.dataset.theme = darkMode.checked ? 'dark' : 'light';
    };

    darkMode.addEventListener('change', updateTheme);
    updateTheme();
  }
</script>
