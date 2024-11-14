import { DOMParser } from "jsr:@b-fuze/deno-dom";
import * as path from "jsr:@std/path";

const BiIconPath = path.join("./node_modules/bootstrap-icons/icons");
const BiIcons = Deno.readDirSync(BiIconPath);

const icons: { [key: string]: string } = {};

for (const bi of BiIcons) {
  const text = await Deno.readTextFile(path.join(BiIconPath, bi.name));
  const doc = new DOMParser().parseFromString(text, "text/html");
  const svg = doc.querySelector("svg")!;
  const svgInner = svg.innerHTML;
  icons[bi.name.replace(".svg", "")] = svgInner;
}
Deno.writeTextFile(
  "./src/lib/bicons.ts",
  `export const bicons = ${JSON.stringify(icons, null, 2)};`,
);
