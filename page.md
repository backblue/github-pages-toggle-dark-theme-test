---
layout: null
permalink: /
---

<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Hello, world!</title>

<link rel="stylesheet" href="{{ '/page.css' | relative_url }}">

# [Hello, world!](https://backblue.github.io/github-pages-toggle-dark-theme-test/)

<p class="theme-toggle"><label><input id="dark-mode" type="checkbox"> Dark mode</label></p>

## Subtitle 2: Hello, world!
- Yap 1
- Yap 2
- Yap 3
  - Yap 4
  - Yap 5
- A link to [google!](https://google.com/)

## Another subtitle!
Code and SVG Example below.

## Source
- [__***This is markdown, click here!***__](https://github.com/backblue/github-pages-toggle-dark-theme-test)


## Examples

```c
#include <stdio.h>

int main(int argc, char** argv) {
	printf("Hello, world!");
}
```

<div class="diagram" role="img" aria-label="MyString constructor diagram showing the stack object and its heap character array">
{% include_relative assets/03-mystring-ctor-1.svg %}
</div>

<script src="{{ '/dark-mode.js' | relative_url }}" defer></script>
