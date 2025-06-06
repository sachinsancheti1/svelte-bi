import type { SvelteHTMLElements } from "svelte/elements";

export interface BiProps {
  size?: string | number;
  fill?: string;
}

export type IconProps =
  & BiProps
  & Omit<SvelteHTMLElements["svg"], "size" | "fill">;
