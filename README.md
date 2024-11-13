# svelte-bi

> [Bootstrap SVG Icons](https://github.com/twbs/icons) for Svelte >= 5 components

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

If the Bootstrap icon name is `arrow-90deg-left`, the component name will be `BiArrow90degLeft`. The first letter of each word in the icon name is capitalized, hyphens are removed, and the name starts with `Bi`.

### Import from package

```svelte
<script>
  import { BiAirplaneEngines, BiExclamationLg } from "svelte-bi";
</script>

<BiAirplaneEngines />
<BiExclamationLg />
```

### Import components directly

```svelte
<script>
  import BiAirplaneEngines from "svelte-bi/BiAirplaneEngines.svelte";
  import BiExclamationLg from "svelte-bi/BiAirplaneEngines.svelte";
</script>

<BiAirplaneEngines />
<BiExclamationLg />
```

## Props

### size (optional)

> Type: number | string

> default: 16

```svelte
<script>
  import BiAirplaneEngines from "svelte-bi/BiAirplaneEngines.svelte";
</script>

<BiAirplaneEngines size={43} />
```

### class (optional)

> Type: HTML class attribute

> default: null

```svelte
<script>
  import BiAirplaneEngines from "svelte-bi/BiAirplaneEngines.svelte";
</script>

<BiAirplaneEngines class="text-primary pe-3 ms-2" />
```

### ...rest (optional)

> Type: HTML attributes

```svelte
<script>
  import BiAirplaneEngines from "svelte-bi/BiAirplaneEngines.svelte";
</script>

<BiAirplaneEngines onclick={(e) => console.log(e.target)} data-foo="bar" />
```

## Developing

```bash
# git
git clone https://github.com/onokumus/svelte-bi.git

# github-cli
gh repo clone onokumus/svelte-bi

cd svelte-bi
bun install
bun index.ts
bun dev
```
