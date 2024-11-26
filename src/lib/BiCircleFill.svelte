<script lang="ts">
    import type { IconProps } from "./index.js";
    let { class: klass, size = 16, fill = "currentColor", ...rest }: Partial<IconProps> = $props();
</script>
<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} {fill} class:bi={true} class:bi-circle-fill={true} class={klass} viewBox="0 0 16 16" {...rest}>
    
  <circle cx="8" cy="8" r="8"></circle>

</svg>