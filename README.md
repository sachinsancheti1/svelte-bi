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

> When calling the component, capitalize the first letter of every word in the symbol name, add `Bi` in front, and remove the `-`

> For example:

> 0-square-fill => Bi0SquareFill

> airplane-engines-fill => BiAirplaneEnginesFill

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

Changes the color of the icon. This is valid if the icon is loaded as `svg`.
Otherwise, it has no effect.

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
git clone https://github.com/onokumus/svelte-bi.git

# github-cli
gh repo clone onokumus/svelte-bi

cd svelte-bi
deno install
deno task icons
deno run dev
```
