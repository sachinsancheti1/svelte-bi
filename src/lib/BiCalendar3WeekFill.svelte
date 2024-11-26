<script lang="ts">
    import type { IconProps } from "./index.js";
    let { class: klass, size = 16, fill = "currentColor", ...rest }: Partial<IconProps> = $props();
</script>
<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} {fill} class:bi={true} class:bi-calendar3-week-fill={true} class={klass} viewBox="0 0 16 16" {...rest}>
    
  <path fill-rule="evenodd" d="M2 0a2 2 0 0 0-2 2h16a2 2 0 0 0-2-2zM0 14V3h16v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2m12-8a1 1 0 1 0 2 0 1 1 0 0 0-2 0M5 9a1 1 0 1 0 2 0 1 1 0 0 0-2 0m5-2a1 1 0 1 1 0-2 1 1 0 0 1 0 2M2 9a1 1 0 1 0 2 0 1 1 0 0 0-2 0"></path>

</svg>