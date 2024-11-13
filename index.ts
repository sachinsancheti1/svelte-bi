import { parse } from "svg-parser";
import fs from "fs";
import path from "path";

const iconsDir = path.join(__dirname, "node_modules/bootstrap-icons/icons");
const icons = fs.readdirSync(iconsDir);

function capitalizeAndRemoveHyphens(str: string) {
  return str
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
}

const svelteComponentTemplate = (classNames: string[], paths: string[]) => {
  const classes = classNames
    .map((className) => {
      return `class:${className}={true}`;
    })
    .join(" ");

  const pathsData = paths
    .map((path) => {
      return `<path d="${path.properties.d}"/>`;
    })
    .join(" ");

  return `<script lang="ts">
    interface Props {
        size?: number | string;
        class?: string;
    }
    let {size=16, class:klass, ...rest}: Props = $props();
</script>
<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" ${classes} class={klass} viewBox="0 0 16 16" {...rest}>
    ${pathsData}
</svg>
`;
};

const writeToIndexTs = (iconNames: string[]) => {
  const imports = iconNames.map((iconName) => {
    const capitalizedIconName = capitalizeAndRemoveHyphens(
      iconName.split(".")[0]
    );
    return `export {default as Bi${capitalizedIconName} } from "./components/Bi${capitalizedIconName}.svelte";`;
  });
  const content = imports.join("\n");
  fs.writeFileSync("src/lib/index.ts", content);
};

const writeToPageSvelte = (iconNames: string[]) => {
  const imports = iconNames.map((iconName) => {
    const capitalizedIconName = capitalizeAndRemoveHyphens(
      iconName.split(".")[0]
    );
    return `import Bi${capitalizedIconName} from "$lib/components/Bi${capitalizedIconName}.svelte";`;
  });
  const components = iconNames.map((iconName) => {
    const capitalizedIconName = capitalizeAndRemoveHyphens(
      iconName.split(".")[0]
    );
    return `<Bi${capitalizedIconName} size="32" />`;
  });
  const content = `<script>
    ${imports.join("\n")}
  </script>
    <h1>Bootstrap Icons for Svelte 5</h1>
    <div>
        ${components.join("\n")}
    </div>
    <style>
        div {
            max-inline-size: 80%;
            margin-inline: auto;
            display: grid;
            grid-template-columns: repeat(auto-fill, 32px);
            gap: 2rem;

            svg {
                border: 1px solid #ccc;
                padding: 0.5rem;
              }
        }
    </style>
    `;
  fs.writeFileSync("src/routes/+page.svelte", content);
};

if (Array.isArray(icons)) {
  writeToIndexTs(icons);
  writeToPageSvelte(icons);
  for (const icon of icons) {
    const iconName = icon.split(".")[0];
    const capitalizedIconName = capitalizeAndRemoveHyphens(iconName);

    const iconFile = fs.readFileSync(path.join(iconsDir, icon), "utf8");
    const parsed = parse(iconFile);
    const propertiesClass = parsed.children[0].properties["class"];
    const classessArray = propertiesClass.split(" ");
    const pathsArray = parsed.children[0].children;
    const iconContent = svelteComponentTemplate(classessArray, pathsArray);
    fs.writeFileSync(
      `src/lib/components/Bi${capitalizedIconName}.svelte`,
      iconContent
    );
  }
}
