import { DOMParser } from "jsr:@b-fuze/deno-dom";
import * as path from "jsr:@std/path";

// deprecated
// const icons: { [key: string]: string } = {};

// delete src/lib/index.ts if it exists
try {
  await Deno.stat("./src/lib/index.ts");
  await Deno.remove("./src/lib/index.ts");
} catch (err) {
  if (!(err instanceof Deno.errors.NotFound)) {
    throw err;
  }
}

function capitalizeAndRemoveDash(str: string) {
  return str
    .split("-")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join("");
}

const BiIconPath = path.join("./node_modules/bootstrap-icons/icons");
const BiIcons = Deno.readDirSync(BiIconPath);

for (const bi of BiIcons) {
  const text = await Deno.readTextFile(path.join(BiIconPath, bi.name));
  const doc = new DOMParser().parseFromString(text, "text/html");
  const svg = doc.querySelector("svg")!;
  const svgInner = svg.innerHTML;
  const iconName = bi.name.replace(".svg", "");

  // add to icons object
  // deprecated
  // icons[iconName] = svgInner;

  // write to file
  const componentName = capitalizeAndRemoveDash(iconName);
  const exportLine = `export { default as Bi${componentName} } from "./Bi${componentName}.svelte";`;
  const encoder = new TextEncoder();
  const data = encoder.encode(`${exportLine}\n`);

  const svelteTemplate = `<script lang="ts">
    import type { IconProps } from "./types.js";
    let { class: cls, size = 16, fill = "currentColor", ...rest }: IconProps = $props();
</script>
<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} {fill} class={["bi", "bi-${iconName}", cls]} viewBox="0 0 16 16" {...rest}>
    ${svgInner}
</svg>`;

  // create svelte component
  Deno.writeTextFile(`./src/lib/Bi${componentName}.svelte`, svelteTemplate);

  // create export line
  Deno.writeFileSync("./src/lib/index.ts", data, { append: true });
}

// write icons object to file
// deprecated
// Deno.writeTextFile(
//   "./src/lib/bicons.ts",
//   `export const bicons = ${JSON.stringify(icons, null, 2)};`,
// );
