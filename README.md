# svelte-bi

> [Bootstrap SVG Icons](https://github.com/twbs/icons) for Svelte >= 5
> components

## Install

```bash
# npm
npm install svelte-bi

# pnpm
pnpm add svelte-bi

# yarn
yarn add svelte-bi

# bun
bun add svelte-bi
```

## Usage

### Import from package

```svelte
<script>
  import { Bi } from "svelte-bi";
</script>

<Bi name="github" />
```

### Import components directly

```svelte
<script>
  import Bi from "svelte-bi/Bi.svelte";
</script>

<Bi name="github" />
```

## Props

### name (required)

Icon name. Check the names on the site.
[Bootstrap icons](https://icons.getbootstrap.com/)

> type: string default: null

```svelte
<script>
  import { Bi } from "svelte-bi";
</script>

<Bi name="github" />
```

render to ...

```html
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="16"
  height="16"
  fill="currentColor"
  class="bi bi-github"
  viewBox="0 0 16 16"
>
  <path
    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"
  />
</svg>
```

### font (optional)

The icon is rendered as font.

> type: boolean default false

```svelte
<script>
  import { Bi } from "svelte-bi";
</script>

<Bi name="github" font />
```

> If you want to add it as a font, you must add the bootstrap-icons CSS file.
> For example:

```svelte
// +layout.svelte

<svelte:head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
</svelte:head>
```

render to ...

```html
<i class="bi bi-github"></i>
```

### size (optional)

Changes the dimensions of the icon. This is valid if the icon is loaded as
`svg`. Otherwise, it has no effect.

> type: number | string, default: 16

```svelte
<script>
  import { Bi } from "svelte-bi";
</script>

<Bi name="github" size="43" />
```

### fill (optional)

Changes the color of the icon. This is valid if the icon is loaded as `svg`.
Otherwise, it has no effect.

> type: string, default: currentColor

```svelte
<script>
  import { Bi } from "svelte-bi";
</script>

<Bi name="github" fill="tomato" />
```

### class (optional)

> type: HTML class attribute, default: null

```svelte
<script>
  import { Bi } from "svelte-bi";
</script>

<Bi name="github" class="text-primary pe-3 ms-2" />
```

### ...rest (optional)

> type: HTML attributes

```svelte
<script>
  import { Bi } from "svelte-bi";
</script>

<Bi name="github" onclick={(e) => console.log(e.target)} data-foo="bar" />
```

## Develop

> [Deno](https://deno.com/) required

```bash
# git
git clone https://github.com/onokumus/svelte-bi.git

# github-cli
gh repo clone onokumus/svelte-bi

cd svelte-bi
deno install
deno run main.ts
deno run dev
```
