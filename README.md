# svelte-bi

> [Bootstrap SVG Icons](https://github.com/twbs/icons) for Svelte >= 5
> components

## Install

```bash
# npm
npm install svelte-bi

# bun
bun add svelte-bi

# deno
deno add npm:svelte-bi

# pnpm
pnpm add svelte-bi

# yarn
yarn add svelte-bi
```

## Usage

### Import from package

#### Component Naming Instructions

When calling the component, follow these steps:

1. Capitalize the First Letter of Each Word:

   - Take the symbol name and ensure that the first letter of every word is capitalized. For example, if the symbol name is `arrow-90deg-left`, it should be transformed to `Arrow90degLeft`.

2. Remove Hyphens:

   - Remove any hyphens (-) from the symbol name. This helps in creating a clean and readable component name.

3. Add Prefix:

   - Add the prefix `Bi` to the beginning of the transformed symbol name. This indicates that the component is part of the Bootstrap icon set.

Putting it all together, if the original symbol name is `arrow-90deg-left`, the final component name will be `BiArrow90degLeft`.

For example:

```js
0-square-fill => Bi0SquareFill
airplane-engines-fill => BiAirplaneEnginesFill
```

```svelte
<script>
  import { Bi0SquareFill, BiAirplaneEnginesFill, BiGithub } from "svelte-bi";
</script>

<Bi0SquareFill />
<BiAirplaneEnginesFill />
```

## Props

### size (optional)

Changes the dimensions of the icon.

> type: number | string, default: 16

```svelte
<script>
  import { BiGithub } from "svelte-bi";
</script>

<BiGithub size="43" />
```

### fill (optional)

Changes the color of the icon.

> type: string, default: currentColor

```svelte
<script>
  import { BiGithub } from "svelte-bi";
</script>

<BiGithub fill="tomato" />
```

### class (optional)

> type: HTML class attribute, default: null

```svelte
<script>
  import { BiGithub } from "svelte-bi";
</script>

<BiGithub class="pe-3 ms-2" />
```

### ...rest (optional)

> type: HTML attributes

```svelte
<script>
  import { BiGithub } from "svelte-bi";
</script>

<BiGithub onclick={(e) => console.log(e.target)} data-foo="bar" />
```

## Develop

> [Deno](https://deno.com/) required

```bash
# git
git clone https://github.com/sachinsancheti1/svelte-bi.git

# github-cli
gh repo clone sachinsancheti1/svelte-bi

cd svelte-bi
npm install
deno run -A main.ts
npm run package
```
