---
layout: default
title: Hello, world!
permalink: /
---

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
- [__**This is markdown, click here!**__](https://github.com/backblue/github-pages-toggle-dark-theme-test)
- [Second page]({{ '/page2.html' | relative_url }})

## Examples

```c
#include <stdio.h>

int main(int argc, char** argv) {
	printf("Hello, world!");
}
```

{% include diagram.html src="assets/03-mystring-ctor-1.svg" alt="MyString constructor diagram showing the stack object and its heap character array" %}