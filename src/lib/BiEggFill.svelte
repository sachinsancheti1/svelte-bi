<script lang="ts">
    import type { IconProps } from "./index.js";
    let { class: klass, size = 16, fill = "currentColor", ...rest }: Partial<IconProps> = $props();
</script>
<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} {fill} class:bi={true} class:bi-egg-fill={true} class={klass} viewBox="0 0 16 16" {...rest}>
    
  <path d="M14 10a6 6 0 0 1-12 0C2 5.686 5 0 8 0s6 5.686 6 10"></path>

</svg>