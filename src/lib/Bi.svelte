<script lang="ts">
    import { bicons } from "./bicons.js";
    import type { IconProps } from "./index.js";
    let {
        class: klass,
        name,
        font = false,
        size = "16",
        fill = "currentColor",
        ...rest
    }: IconProps = $props();
    let classNames = $state(klass ? `bi bi-${name} ${klass}` : `bi bi-${name}`);

    let svgInner = $state();
    $effect(() => {
        if (!font) {
            if (name) {
                svgInner = bicons[name] || "";
            } else {
                svgInner = "";
            }
        }
    });
</script>

{#if font}
    <i class={classNames} {...rest}></i>
{:else}
    <svg
        xmlns="http://www.w3.org/2000/svg"
        {fill}
        width={size}
        height={size}
        viewBox="0 0 16 16"
        class={classNames}
        {...rest}
    >
        {@html svgInner}
    </svg>
{/if}
