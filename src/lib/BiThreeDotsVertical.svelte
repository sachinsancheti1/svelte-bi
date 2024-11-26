<script lang="ts">
    import type { IconProps } from "./index.js";
    let { class: klass, size = 16, fill = "currentColor", ...rest }: Partial<IconProps> = $props();
</script>
<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} {fill} class:bi={true} class:bi-three-dots-vertical={true} class={klass} viewBox="0 0 16 16" {...rest}>
    
  <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"></path>

</svg>