---
layout: null
---

<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Hello, world!</title>

<link rel="stylesheet" href="{{ '/page.css' | relative_url }}">

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
