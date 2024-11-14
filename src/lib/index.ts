import { bicons } from "./bicons.js";

export type BiIconName = keyof typeof bicons;

export interface IconProps {
    class?: string;
    name: BiIconName;
    font?: boolean;
    size?: string | number;
    fill?: string;
    [key: string]: any;
}
export { default as Bi } from "./Bi.svelte";
